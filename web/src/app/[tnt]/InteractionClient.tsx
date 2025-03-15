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
      <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-xl text-gray-900 dark:text-white">
          Loading token details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-xl text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full pt-14 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-4xl mx-auto mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg">
        <CardHeader className="flex items-center justify-between pb-2">
          <div className="flex items-center space-x-2">
            <Info className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
              Token Information
            </CardTitle>
          </div>
          <button
            onClick={getTokenDetails}
            className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            <RefreshCcw className="h-5 w-5" />
            <span>Refresh</span>
          </button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Token Name
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tokenDetails.tokenName}
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Token Symbol
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tokenDetails.tokenSymbol}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Revokable
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tokenDetails.revokable ? "Yes" : "No"}
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Contract Address
                    </div>
                    <div className="text-sm font-mono text-gray-800 dark:text-white break-all">
                      {tokenDetails.transactionHash}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(tokenDetails.transactionHash)
                    }
                    className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                    title="Copy Contract Address"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-right text-xs text-gray-500 dark:text-gray-400">
            Last updated: {new Date(tokenDetails.timestamp).toLocaleString()}
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href={`/token-actions?vault=${tokenAddress}&chainId=${chainId}`}
            >
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Manage Token Actions
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
