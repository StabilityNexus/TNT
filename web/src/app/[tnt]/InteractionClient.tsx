"use client";

import React, { useEffect, useState } from "react";
import { Info, RefreshCcw, Copy } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getPublicClient } from "@wagmi/core";
import { config } from "@/utils/config";
import { useSearchParams } from "next/navigation";
import { TNTAbi } from "@/contractsABI/TNT";
import toast from "react-hot-toast";
import Link from "next/link";

interface TokenDetailsState {
  tokenName: string;
  tokenSymbol: string;
  revokable: boolean;
  transactionHash: string;
  timestamp: string;
}

export default function InteractionClient() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [tokenAddress, setTokenAddress] = useState<`0x${string}`>("0x0");
  const [chainId, setChainId] = useState<number>(0);

  const [tokenDetails, setTokenDetails] = useState<TokenDetailsState>({
    tokenName: "",
    tokenSymbol: "",
    revokable: false,
    transactionHash: "",
    timestamp: "",
  });

  // Get token contract address and chainId from URL parameters
  useEffect(() => {
    const vault = searchParams.get("vault");
    const chain = searchParams.get("chainId");

    if (vault && chain) {
      setTokenAddress(vault as `0x${string}`);
      setChainId(Number(chain));
    }
  }, [searchParams]);

  const getTokenDetails = async () => {
    if (!tokenAddress || !chainId) {
      setError("Invalid token address or chain ID");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const publicClient = getPublicClient(config as any, { chainId });
      if (!publicClient) {
        throw new Error(`No public client available for chain ${chainId}`);
      }

      // Fetch only available functions: name, symbol, and revokable
      const [name, symbol, revokable] = await Promise.all([
        publicClient.readContract({
          address: tokenAddress,
          abi: TNTAbi,
          functionName: "name",
        }) as Promise<string>,
        publicClient.readContract({
          address: tokenAddress,
          abi: TNTAbi,
          functionName: "symbol",
        }) as Promise<string>,
        publicClient.readContract({
          address: tokenAddress,
          abi: TNTAbi,
          functionName: "revokable",
        }) as Promise<boolean>,
      ]);

      setTokenDetails({
        tokenName: name,
        tokenSymbol: symbol,
        revokable: revokable,
        transactionHash: tokenAddress,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error fetching token details:", error);
      setError("Failed to fetch token details");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (tokenAddress && chainId) {
      getTokenDetails();
    }
  }, [tokenAddress, chainId]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy");
    }
  };
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
          </div>
          <div className="text-xl text-white">Loading token details...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 max-w-xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
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
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </div>
          <div className="text-xl text-red-400 mb-2">Error</div>
          <div className="text-slate-300">{error}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-60" />
      </div>

      <div className="max-w-4xl w-full z-10">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Token{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Information
            </span>
          </h1>
          <p className="text-slate-400">
            View details about this Trust Network Token
          </p>
        </div>

        <Card className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-2 shadow-xl">
          <CardHeader className="flex items-center justify-between pb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Info className="h-5 w-5 text-amber-400" />
              </div>
              <CardTitle className="text-xl font-bold text-white">
                Token Details
              </CardTitle>
            </div>
            {/* <button
              onClick={getTokenDetails}
              className="flex items-center space-x-1 text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200"
            >
              <RefreshCcw className="h-5 w-5" />
              <span>Refresh</span>
            </button> */}
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-4 shadow-md hover:shadow-purple-900/10 transition-all duration-300">
                  <div className="text-sm text-slate-400 font-medium">
                    Token Name
                  </div>
                  <div className="text-lg font-semibold text-white mt-1">
                    {tokenDetails.tokenName}
                  </div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-4 shadow-md hover:shadow-purple-900/10 transition-all duration-300">
                  <div className="text-sm text-slate-400 font-medium">
                    Token Symbol
                  </div>
                  <div className="text-lg font-semibold text-white mt-1">
                    {tokenDetails.tokenSymbol}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-4 shadow-md hover:shadow-purple-900/10 transition-all duration-300">
                  <div className="text-sm text-slate-400 font-medium">
                    Revokable
                  </div>
                  <div className="text-lg font-semibold text-white mt-1">
                    <span
                      className={
                        tokenDetails.revokable
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    >
                      {tokenDetails.revokable ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-4 shadow-md hover:shadow-purple-900/10 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-400 font-medium">
                        Contract Address
                      </div>
                      <div className="text-sm font-mono text-slate-300 break-all mt-1">
                        {tokenDetails.transactionHash}
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(tokenDetails.transactionHash)
                      }
                      className="ml-2 text-amber-400 hover:text-amber-300 transition-colors duration-200"
                      title="Copy Contract Address"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right text-xs text-slate-500">
              Last updated: {new Date(tokenDetails.timestamp).toLocaleString()}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href={`/token-actions?vault=${tokenAddress}&chainId=${chainId}`}
              >
                <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 rounded-xl text-white font-medium transition-all duration-300">
                  Manage Token Actions
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
