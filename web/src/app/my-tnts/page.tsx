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
}

export default function MyTNTsPage() {
  const [ownedTNTs, setOwnedTNTs] = useState<TNTDetails[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { address } = useAccount();

  const fetchTNTsFromAllChains = async () => {
    try {
      setIsLoading(true);
      setError(null);
      let allTNTs: TNTDetails[] = [];

      const chainPromises = Object.entries(TNTVaultFactories).map(
        ([chainId, factoryAddress]) =>
          fetchTNTsForChain(chainId, factoryAddress)
      );

      const results = await Promise.all(chainPromises);
      allTNTs = results.flat().filter((tnt): tnt is TNTDetails => tnt !== null);

      setOwnedTNTs(allTNTs);
    } catch (error) {
      console.error("Error fetching TNTs:", error);
      setError("Failed to fetch TNTs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTNTsForChain = async (
    chainId: string,
    factoryAddress: string
  ): Promise<TNTDetails[]> => {
    try {
      const publicClient = getPublicClient(config as any, {
        chainId: parseInt(chainId),
      });

      if (!publicClient || !address) {
        console.error(`No public client available for chain ${chainId}`);
        return [];
      }

      console.log("Chain:", chainId);
      console.log("Factory Address:", factoryAddress);

      // Call the correct function on the factory to get deployed TNT addresses
      const tntAddresses = (await publicClient.readContract({
        address: factoryAddress as `0x${string}`,
        abi: TNTFactoryAbi,
        functionName: "getDeployedTNTs",
        args: [address as `0x${string}`],
      })) as `0x${string}`[];

      console.log("TNT Addresses:", tntAddresses);

      const provider = await detectEthereumProvider();
      if (!provider) {
        throw new Error("Ethereum provider not found");
      }

      const web3 = new Web3(provider as unknown as Web3["givenProvider"]);

      const tntPromises = tntAddresses.map(async (tntAddress) => {
        try {
          // Fetch token details using standard ERC721 functions
          const [tokenName, tokenSymbol] = await Promise.all([
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
          ]);

          console.log("Name:", tokenName, "Symbol:", tokenSymbol);

          return {
            chainId,
            address: tntAddress,
            tokenName: tokenName || "",
            tokenSymbol: tokenSymbol || "",
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
    } catch (error) {
      console.error(`Error fetching TNTs for chain ${chainId}:`, error);
      return [];
    }
  };

  useEffect(() => {
    if (address) {
      fetchTNTsFromAllChains();
    }
  }, [address]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Trust Network Tokens
            </span>
          </h1>
          <p className="text-slate-400">
            Manage and monitor your Trust Network Tokens across different chains
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 max-w-xl mx-auto">
            <p className="text-red-400">{error}</p>
          </div>
        ) : ownedTNTs?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {ownedTNTs.map((tnt) => (
              <div
                key={`${tnt.chainId}-${tnt.address}`}
                className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-900/10 transition-all duration-300 relative"
              >
                {" "}
                <p className="text-xs text-slate-500 mb-4">
                  Chain ID {tnt.chainId}
                </p>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">
                      {tnt.tokenName || tnt.address}
                    </h3>
                    <Link
                      href={`/t?vault=${tnt.address}&chainId=${tnt.chainId}`}
                      className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                    >
                      View Details
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
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-sm text-slate-400">
                    Symbol:{" "}
                    <span className="text-amber-400">{tnt.tokenSymbol}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-amber-400 opacity-20 blur-xl" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 opacity-70" />
            </div>{" "}
            <p className="text-lg text-slate-300">
              You don&apos;t own any{" "}
              <span className="text-amber-400 font-semibold">TNTs</span> yet.
            </p>
            <p className="text-slate-400 mt-2">
              Start exploring and mint your first one!
            </p>
            <Link
              href="/create"
              className="inline-flex items-center justify-center px-6 py-3 mt-6 bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 rounded-lg text-white font-medium text-lg transition-all duration-300"
            >
              Create Token
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
