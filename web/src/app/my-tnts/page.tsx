"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { TNTVaultFactories } from "@/utils/address";
import { config } from "@/utils/config";
import { getPublicClient } from "@wagmi/core";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { TNTFactoryAbi } from "@/contractsABI/TNTFactory";
import { TNTAbi } from "@/contractsABI/TNT";

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

  const fetchTotalCount = async (): Promise<number> => {
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
  };

  const fetchPaginatedTNTs = async (page: number) => {
    try {
      setIsLoading(true);
      setError(null);

      const totalCount = await fetchTotalCount();
      const totalPages = Math.ceil(totalCount / pagination.itemsPerPage);

      setPagination(prev => ({
        ...prev,
        currentPage: page,
        totalPages,
        totalCount,
      }));

      if (totalCount === 0) {
        setOwnedTNTs([]);
        return;
      }

      const startIndex = (page - 1) * pagination.itemsPerPage;
      const endIndex = Math.min(startIndex + pagination.itemsPerPage, totalCount);

      let allTNTs: TNTDetails[] = [];
      let currentIndex = 0;
      let remainingItems = endIndex - startIndex;

      for (const [chainId, factoryAddress] of Object.entries(TNTVaultFactories)) {
        if (remainingItems <= 0) break;

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

          if (currentIndex + chainCountNum <= startIndex) {
            // Skip this entire chain
            currentIndex += chainCountNum;
            continue;
          }

          // Calculate start and end indices for this chain
          const chainStartIndex = Math.max(0, startIndex - currentIndex);
          const chainEndIndex = Math.min(
            chainCountNum,
            chainStartIndex + remainingItems
          );

          if (chainStartIndex < chainCountNum) {
            const tntAddresses = (await publicClient.readContract({
              address: factoryAddress as `0x${string}`,
              abi: TNTFactoryAbi,
              functionName: "getPageDeployedTNTs",
              args: [
                address as `0x${string}`,
                BigInt(chainStartIndex),
                BigInt(chainEndIndex),
              ],
            })) as `0x${string}`[];

            const chainTNTs = await fetchTNTDetailsForAddresses(
              tntAddresses,
              chainId,
              publicClient
            );

            allTNTs = allTNTs.concat(chainTNTs);
            remainingItems -= chainTNTs.length;
          }

          currentIndex += chainCountNum;
        } catch (error) {
          console.error(`Error fetching TNTs for chain ${chainId}:`, error);
        }
      }

      setOwnedTNTs(allTNTs);
    } catch (error) {
      console.error("Error fetching paginated TNTs:", error);
      setError("Failed to fetch TNTs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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
          publicClient.readContract({
            address: tntAddress,
            abi: TNTAbi,
            functionName: "imageURL",
          }) as Promise<string>,
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

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchPaginatedTNTs(page);
    }
  };

  const generatePageNumbers = () => {
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
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
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
  };

  useEffect(() => {
    if (address) {
      fetchPaginatedTNTs(1);
    }
  }, [address]);

  return (
    <div className="w-full">
      <div className="container mx-auto py-8 mt-9 justify-center text-center">
        <h1 className="text-4xl font-extrabold text-[#6A0DAD] dark:text-[#FFC947] mb-6">
          My TNTs
        </h1>
        
        {/* Pagination Info */}
        {!isLoading && !error && pagination.totalCount > 0 && (
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to{" "}
            {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalCount)} of{" "}
            {pagination.totalCount} TNTs
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6A0DAD] dark:border-[#FFC947]"></div>
            <p className="ml-4 text-lg">Loading your TNTs...</p>
          </div>
        ) : error ? (
          <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <p>{error}</p>
            <button
              onClick={() => fetchPaginatedTNTs(pagination.currentPage)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : ownedTNTs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {ownedTNTs.map((tnt) => (
                <div
                  key={`${tnt.chainId}-${tnt.address}`}
                  className="bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {tnt.imageURL && (
                    <img
                      src={tnt.imageURL}
                      alt={`${tnt.tokenName} preview`}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      loading="lazy"
                    />
                  )}
                  <h3 className="text-xl font-extrabold text-[#3E3E3E] dark:text-white transition duration-200">
                    <Link
                      href={`/c?vault=${tnt.address}&chainId=${tnt.chainId}`}
                      className="hover:underline"
                    >
                      {tnt.tokenName || tnt.address}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#3E3E3E] dark:text-indigo-200 mt-2">
                    Symbol:{" "}
                    <span className="font-semibold">{tnt.tokenSymbol}</span>
                  </p>
                  <p className="text-sm text-[#3E3E3E] dark:text-indigo-200">
                    Chain ID: <span className="font-semibold">{tnt.chainId}</span>
                  </p>
                  <Link
                    href={`/t?vault=${tnt.address}&chainId=${tnt.chainId}`}
                    className="inline-block mt-4 text-[#6A0DAD] dark:text-[#FFC947] font-semibold hover:underline transition duration-200"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    pagination.currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                      : 'bg-[#6A0DAD] text-white hover:bg-[#5A0B9D] dark:bg-[#FFC947] dark:text-black dark:hover:bg-[#FFB627]'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {generatePageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                    disabled={page === "..."}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                      page === pagination.currentPage
                        ? 'bg-[#6A0DAD] text-white dark:bg-[#FFC947] dark:text-black'
                        : page === "..."
                        ? 'text-gray-400 cursor-default'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    pagination.currentPage === pagination.totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                      : 'bg-[#6A0DAD] text-white hover:bg-[#5A0B9D] dark:bg-[#FFC947] dark:text-black dark:hover:bg-[#FFB627]'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎭</div>
            <p className="text-lg font-semibold text-gray-600 dark:text-indigo-300">
              You don't own any{" "}
              <span className="text-[#6A0DAD] dark:text-[#FFC947]">TNTs</span>{" "}
              yet.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Start exploring and mint your first one!
            </p>
            <Link
              href="/create"
              className="inline-block mt-4 px-6 py-3 bg-[#6A0DAD] text-white rounded-lg font-semibold hover:bg-[#5A0B9D] dark:bg-[#FFC947] dark:text-black dark:hover:bg-[#FFB627] transition-all duration-200"
            >
              Create Your First TNT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}