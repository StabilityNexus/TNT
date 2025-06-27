"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Info, RefreshCcw, Copy, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
  imageURL: string;
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
    imageURL: "",
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

  const getTokenDetails = useCallback(async () => {
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

      // Fetch token details
      const [name, symbol, revokable, imageURL] = await Promise.all([
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
        publicClient
          .readContract({
            address: tokenAddress,
            abi: TNTAbi,
            functionName: "imageURL",
          })
          .catch(() => "") as Promise<string>,
      ]);

      setTokenDetails({
        tokenName: name,
        tokenSymbol: symbol,
        revokable: revokable,
        imageURL: imageURL,
        transactionHash: tokenAddress,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error fetching token details:", error);
      setError("Failed to fetch token details");
    } finally {
      setIsLoading(false);
    }
  }, [tokenAddress, chainId]);

  useEffect(() => {
    if (tokenAddress && chainId) {
      getTokenDetails();
    }
  }, [tokenAddress, chainId, getTokenDetails]);

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
      <div className="min-h-screen relative bg-black text-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto py-24 px-4 sm:px-6 z-10 relative max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 py-20">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
            </div>
            <p className="text-slate-400">Loading token details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen relative bg-black text-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto py-24 px-4 sm:px-6 z-10 relative max-w-7xl">
          <Card className="bg-[#0B101D] backdrop-blur-sm border border-red-500/30 max-w-xl mx-auto overflow-hidden">
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
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <p className="text-red-400 mb-4">{error}</p>
                <Button
                  onClick={getTokenDetails}
                  className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white border-none"
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto py-24 px-4 sm:px-6 z-10 relative max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            Token{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Details
            </span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            View comprehensive information about your Trust Network Token
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="bg-[#0B101D] backdrop-blur-sm border border-slate-700/30 rounded-xl overflow-hidden shadow-2xl">
          <CardHeader className="border-b border-slate-700/30 bg-slate-800/40">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-amber-500/20 flex items-center justify-center">
                  <Info className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-white">
                    {tokenDetails.tokenName || "Token Information"}
                  </CardTitle>
                  <p className="text-slate-400 text-sm">
                    Symbol: {tokenDetails.tokenSymbol}
                  </p>
                </div>
              </div>
              <Button
                onClick={getTokenDetails}
                variant="outline"
                className="border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600 hover:text-white"
              >
                <RefreshCcw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Main Content Layout */}
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Side - Image Section */}
              <div className="lg:col-span-2 relative">
                {tokenDetails.imageURL ? (
                  <div className="relative h-80 lg:h-full min-h-[400px] bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 overflow-hidden">
                    <div className="absolute inset-4 bg-gradient-to-br from-purple-500/5 to-amber-500/5 rounded-2xl border border-slate-700/20" />
                    <div className="relative h-full flex items-center justify-center p-8">
                      <div className="relative w-full max-w-sm aspect-square">
                        <Image
                          src={tokenDetails.imageURL}
                          alt={`${tokenDetails.tokenName} image`}
                          fill
                          className="object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.src =
                              "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23805ad5;stop-opacity:0.4' /%3E%3Cstop offset='100%25' style='stop-color:%23f6ad55;stop-opacity:0.4' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)' rx='20' /%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' fill='white' font-size='80' opacity='0.6'%3E🎭%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-80 lg:h-full min-h-[400px] bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-3xl flex items-center justify-center border border-slate-700/30">
                        <span className="text-6xl opacity-40">🎭</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        No Image Available
                      </h3>
                      <p className="text-slate-400 text-sm">
                        This token doesn't have an associated image
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Information Panel */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Token Header */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                        {tokenDetails.tokenName || "Token Name"}
                      </h2>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-lg font-semibold text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20">
                          {tokenDetails.tokenSymbol || "SYM"}
                        </span>
                        <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700/40">
                          <span
                            className={`w-3 h-3 rounded-full ${
                              tokenDetails.revokable
                                ? "bg-green-400 shadow-lg shadow-green-400/30"
                                : "bg-red-400 shadow-lg shadow-red-400/30"
                            }`}
                          ></span>
                          <span className="text-sm font-medium text-slate-200">
                            {tokenDetails.revokable
                              ? "Revokable"
                              : "Non-Revokable"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right bg-slate-800/40 px-4 py-3 rounded-xl border border-slate-700/30">
                      <div className="text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider">
                        Chain ID
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {chainId}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Token Properties Grid */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-amber-400"></span>
                    Token Properties
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-slate-800/40 to-slate-800/60 p-5 rounded-xl border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300 group">
                      <div className="text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                        Name
                      </div>
                      <div className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                        {tokenDetails.tokenName || "Not available"}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800/40 to-slate-800/60 p-5 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 group">
                      <div className="text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                        Symbol
                      </div>
                      <div className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">
                        {tokenDetails.tokenSymbol || "Not available"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contract Address */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                    Contract Details
                  </h3>
                  <div className="bg-gradient-to-r from-slate-800/30 via-slate-800/50 to-slate-800/30 p-6 rounded-xl border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">
                          Contract Address
                        </div>
                        <div className="text-sm font-mono text-white break-all leading-relaxed bg-black/30 p-4 rounded-lg border border-slate-700/30 hover:bg-black/40 transition-colors">
                          {tokenDetails.transactionHash}
                        </div>
                      </div>
                      <Button
                        onClick={() =>
                          copyToClipboard(tokenDetails.transactionHash)
                        }
                        variant="ghost"
                        size="sm"
                        className="mt-8 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 shrink-0 transition-all duration-200 border border-cyan-400/20 hover:border-cyan-400/40"
                        title="Copy Contract Address"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mb-6">
                  <Link
                    href={`/token-actions?vault=${tokenAddress}&chainId=${chainId}`}
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-amber-500 hover:from-purple-700 hover:via-purple-800 hover:to-amber-600 text-white border-none font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                      <ExternalLink className="h-5 w-5 mr-3" />
                      Manage Token Actions
                    </Button>
                  </Link>
                </div>

                {/* Last Updated */}
                <div className="text-center">
                  <p className="text-xs text-slate-500 bg-slate-800/20 inline-block px-4 py-2 rounded-full border border-slate-700/20">
                    Last updated:{" "}
                    {new Date(tokenDetails.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
