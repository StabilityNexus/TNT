"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAccount } from "wagmi";
import { TNTVaultFactories } from "@/utils/address";
import { config } from "@/utils/config";
import { getPublicClient } from "@wagmi/core";
import { TNTFactoryAbi } from "@/utils/contractsABI/TNTFactory";
import { TNTAbi } from "@/utils/contractsABI/TNT";
import { TNTCacheManager } from "@/utils/indexedDB";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TNTDetails {
  chainId: string;
  address: `0x${string}`;
  tokenName: string;
  tokenSymbol: string;
  imageURL: string;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  itemsPerPage: number;
}

export default function MyTNTsPage() {
  const [ownedTNTs, setOwnedTNTs] = useState<TNTDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 0,
    totalCount: 0,
    itemsPerPage: 6,
  });
  const { address } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [cacheManager] = useState(() => new TNTCacheManager());

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchTotalCount = useCallback(async (): Promise<number> => {
    try {
      let totalCount = 0;

      const chainPromises = Object.entries(TNTVaultFactories).map(
        async ([chainId, factoryAddress]) => {
          try {
            const publicClient = getPublicClient(config as any, {
              chainId: parseInt(chainId),
            });

            if (!publicClient || !address) {
              return 0;
            }

            const count = (await publicClient.readContract({
              address: factoryAddress as `0x${string}`,
              abi: TNTFactoryAbi,
              functionName: "getDeployedTNTCount",
              args: [address as `0x${string}`],
            })) as bigint;

            return Number(count);
          } catch (error) {
            console.error(`Error fetching count for chain ${chainId}:`, error);
            return 0;
          }
        }
      );

      const results = await Promise.all(chainPromises);
      totalCount = results.reduce((sum, count) => sum + count, 0);

      return totalCount;
    } catch (error) {
      console.error("Error fetching total count:", error);
      return 0;
    }
  }, [address]);

  const fetchPaginatedTNTs = useCallback(
    async (page: number, forceRefresh: boolean = false) => {
      try {
        setIsLoading(true);
        setError(null);

        if (!address) return;

        // Try to get cached data first (unless force refresh)
        if (!forceRefresh) {
          const cachedResult = await cacheManager.getCachedTNTsPaginated(
            address,
            "owned",
            page,
            pagination.itemsPerPage
          );

          if (cachedResult) {
            setOwnedTNTs(cachedResult.data);
            setPagination((prev) => ({
              ...prev,
              currentPage: cachedResult.currentPage,
              totalPages: cachedResult.totalPages,
              totalCount: cachedResult.totalCount,
            }));
            setIsLoading(false);
            return;
          }
        } else {
          // Force refresh - invalidate cache first
          await cacheManager.invalidateCache(address, "owned");
        }

        // If no cache or force refresh, fetch from blockchain
        const totalCount = await fetchTotalCount();
        const totalPages = Math.ceil(totalCount / pagination.itemsPerPage);

        setPagination((prev) => ({
          ...prev,
          currentPage: page,
          totalPages,
          totalCount,
        }));

        if (totalCount === 0) {
          setOwnedTNTs([]);
          return;
        }

        // Fetch all TNTs for caching
        let allTNTs: TNTDetails[] = [];

        for (const [chainId, factoryAddress] of Object.entries(
          TNTVaultFactories
        )) {
          try {
            const publicClient = getPublicClient(config as any, {
              chainId: parseInt(chainId),
            });

            if (!publicClient || !address) {
              continue;
            }

            const chainCount = (await publicClient.readContract({
              address: factoryAddress as `0x${string}`,
              abi: TNTFactoryAbi,
              functionName: "getDeployedTNTCount",
              args: [address as `0x${string}`],
            })) as bigint;

            const chainCountNum = Number(chainCount);

            if (chainCountNum > 0) {
              const tntAddresses = (await publicClient.readContract({
                address: factoryAddress as `0x${string}`,
                abi: TNTFactoryAbi,
                functionName: "getPageDeployedTNTs",
                args: [
                  address as `0x${string}`,
                  BigInt(0),
                  BigInt(chainCountNum),
                ],
              })) as `0x${string}`[];

              const chainTNTs = await fetchTNTDetailsForAddresses(
                tntAddresses,
                chainId,
                publicClient
              );

              allTNTs = allTNTs.concat(chainTNTs);
            }
          } catch (error) {
            console.error(`Error fetching TNTs for chain ${chainId}:`, error);
          }
        }

        // Cache all TNTs
        if (allTNTs.length > 0) {
          try {
            await cacheManager.cacheTNTs(allTNTs, address, "owned");
          } catch (cacheError) {
            console.warn(
              "Failed to cache TNTs, but continuing with display:",
              cacheError
            );
            // Continue even if caching fails
          }
        }

        // Apply pagination to display
        const startIndex = (page - 1) * pagination.itemsPerPage;
        const endIndex = Math.min(
          startIndex + pagination.itemsPerPage,
          allTNTs.length
        );
        const paginatedTNTs = allTNTs.slice(startIndex, endIndex);

        setOwnedTNTs(paginatedTNTs);
      } catch (error) {
        console.error("Error fetching paginated TNTs:", error);
        setError("Failed to fetch TNTs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    },
    [address, pagination.itemsPerPage, fetchTotalCount, cacheManager]
  );

  const fetchTNTDetailsForAddresses = async (
    tntAddresses: `0x${string}`[],
    chainId: string,
    publicClient: any
  ): Promise<TNTDetails[]> => {
    const tntPromises = tntAddresses.map(async (tntAddress) => {
      try {
        const [tokenName, tokenSymbol, imageURL] = await Promise.all([
          publicClient.readContract({
            address: tntAddress,
            abi: TNTAbi,
            functionName: "name",
          }) as Promise<string>,
          publicClient.readContract({
            address: tntAddress,
            abi: TNTAbi,
            functionName: "symbol",
          }) as Promise<string>,
          publicClient
            .readContract({
              address: tntAddress,
              abi: TNTAbi,
              functionName: "imageURL",
            })
            .catch(() => "") as Promise<string>, // Handle missing imageURL field gracefully
        ]);

        return {
          chainId,
          address: tntAddress,
          tokenName,
          tokenSymbol,
          imageURL,
        };
      } catch (error) {
        console.error(
          `Error fetching TNT ${tntAddress} on chain ${chainId}:`,
          error
        );
        return null;
      }
    });

    const results = await Promise.all(tntPromises);
    return results.filter((tnt): tnt is TNTDetails => tnt !== null);
  };

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= pagination.totalPages) {
        fetchPaginatedTNTs(page);
      }
    },
    [pagination.totalPages, fetchPaginatedTNTs]
  );

  const generatePageNumbers = useCallback(() => {
    const pages = [];
    const { currentPage, totalPages } = pagination;

    // Always show first page
    if (totalPages > 0) {
      pages.push(1);
    }

    // Add ellipsis and current page area
    if (currentPage > 3) {
      pages.push("...");
    }

    // Add pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    // Add ellipsis and last page
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  }, [pagination]);

  useEffect(() => {
    if (address) {
      fetchPaginatedTNTs(1);
    }
  }, [address, fetchPaginatedTNTs]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto py-24 px-4 sm:px-6 z-10 relative max-w-7xl">
        <div className="text-center mb-8 mt-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Trust Network Tokens
            </span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Manage and monitor your Trust Network Tokens across different
            blockchain networks
          </p>
        </div>

        {/* Pagination Info */}
        {!isLoading && !error && pagination.totalCount > 0 && (
          <div className="flex justify-between items-center mb-5 px-2">
            <p className="text-sm text-slate-400">
              <span className="hidden sm:inline">Showing </span>
              {(pagination.currentPage - 1) * pagination.itemsPerPage +
                1} to{" "}
              {Math.min(
                pagination.currentPage * pagination.itemsPerPage,
                pagination.totalCount
              )}{" "}
              of {pagination.totalCount} TNTs
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchPaginatedTNTs(pagination.currentPage, true)}
                className="text-sm text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                title="Refresh to check for new TNTs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
                Refresh
              </button>

              <Link
                href="/create"
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Create New TNT
              </Link>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4 py-20">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
            </div>
            <p className="text-slate-400">Loading your TNTs...</p>
          </div>
        ) : error ? (
          <Card className="bg-slate-900/70 backdrop-blur-sm border border-red-500/30 max-w-xl mx-auto overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <p className="text-red-400 mb-4">{error}</p>
                <Button
                  onClick={() =>
                    fetchPaginatedTNTs(pagination.currentPage, true)
                  }
                  className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white border-none"
                >
                  Retry
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : ownedTNTs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1 sm:px-0">
              {ownedTNTs.map((tnt) => (
                <Card
                  key={`${tnt.chainId}-${tnt.address}`}
                  className="group bg-gradient-to-b from-slate-800/60 to-slate-900/90 backdrop-blur-sm border border-slate-700/30 rounded-lg overflow-hidden shadow-md hover:shadow-purple-900/10 hover:border-amber-500/20 transition-all duration-300"
                >
                  {tnt.imageURL ? (
                    <div className="relative w-full h-40 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80 z-10" />
                      <Image
                        src={tnt.imageURL}
                        alt={`${tnt.tokenName} preview`}
                        width={400}
                        height={180}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fall back to a gradient background
                          const target = e.currentTarget;
                          target.src =
                            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180' viewBox='0 0 400 180'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23805ad5;stop-opacity:0.5' /%3E%3Cstop offset='100%25' style='stop-color:%23f6ad55;stop-opacity:0.5' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='180' fill='url(%23grad)' /%3E%3C/svg%3E";
                          target.classList.add("object-cover");
                        }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-purple-900/30 via-slate-800/50 to-amber-900/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl opacity-50">🎭</span>
                      </div>
                    </div>
                  )}

                  <CardHeader className="p-4 pt-3 pb-1">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded-full">
                            Chain {tnt.chainId}
                          </span>
                          <div className="h-5 px-2 rounded-full bg-purple-500/20 flex items-center">
                            <span className="text-xs font-medium text-purple-300">
                              {tnt.tokenSymbol}
                            </span>
                          </div>
                        </div>
                        <Link
                          href={`/c?vault=${tnt.address}&chainId=${tnt.chainId}`}
                          className="hover:underline block mt-1.5"
                        >
                          <CardTitle className="text-base font-bold text-white line-clamp-1 pl-2 tracking-tight">
                            {tnt.tokenName ||
                              tnt.address.substring(0, 8) + "..."}
                          </CardTitle>
                        </Link>
                      </div>
                      <Link
                        href={`/t?vault=${tnt.address}&chainId=${tnt.chainId}`}
                        className="text-amber-400 hover:text-amber-300 text-xs font-medium flex items-center gap-1 transition-colors duration-200"
                      >
                        View
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </Link>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 pt-0 pb-3"></CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
                {/* Previous Button */}
                <Button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  variant="outline"
                  className={`border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700 hover:text-white ${
                    pagination.currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  Prev
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1.5">
                  {generatePageNumbers().map((page, index) => (
                    <Button
                      key={index}
                      onClick={() =>
                        typeof page === "number" ? handlePageChange(page) : null
                      }
                      disabled={page === "..."}
                      variant={
                        typeof page === "number" &&
                        page === pagination.currentPage
                          ? "default"
                          : "outline"
                      }
                      className={
                        typeof page === "number" &&
                        page === pagination.currentPage
                          ? "bg-amber-500 hover:bg-amber-600 text-white border-none"
                          : page === "..."
                          ? "cursor-default bg-transparent border-slate-700 text-slate-500"
                          : "border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700 hover:text-white"
                      }
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                {/* Next Button */}
                <Button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  variant="outline"
                  className={`border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700 hover:text-white ${
                    pagination.currentPage === pagination.totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 ml-1"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Button>
              </div>
            )}
          </>
        ) : (
          <Card className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/30 max-w-xl mx-auto overflow-hidden shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-4 py-8">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  No TNTs Found
                </h3>
                <p className="text-slate-400 mb-6 max-w-sm">
                  You haven't created any Trust Network Tokens yet. Create your
                  first TNT to get started.
                </p>
                <Link href="/create">
                  <Button className="w-full md:w-auto py-4 bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white border-none font-medium">
                    Create Your First TNT
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
