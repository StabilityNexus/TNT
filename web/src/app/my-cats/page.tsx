"use client";

import { useCallback, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useAccount } from "wagmi";
import { ClowderVaultFactories } from "@/utils/address";
import { config } from "@/utils/config";
import { getPublicClient } from "@wagmi/core";
import { CAT_FACTORY_ABI } from "@/contractsABI/CatFactoryABI";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import CONTRIBUTION_ACCOUNTING_TOKEN_ABI from "@/contractsABI/ContributionAccountingTokenABI";

interface CatDetails {
  chainId: string;
  address: `0x${string}`;
  tokenName: string;
  tokenSymbol: string;
}

export default function MyCATsPage() {
  const [ownedCATs, setOwnedCATs] = useState<CatDetails[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { address } = useAccount();

  const fetchCATsFromAllChains = async () => {
    try {
      setIsLoading(true);
      setError(null);
      let allCATs: CatDetails[] = [];

      const chainPromises = Object.entries(ClowderVaultFactories).map(
        ([chainId, factoryAddress]) =>
          fetchCATsForChain(chainId, factoryAddress)
      );

      const results = await Promise.all(chainPromises);
      allCATs = results.flat().filter((cat): cat is CatDetails => cat !== null);

      setOwnedCATs(allCATs);
    } catch (error) {
      console.error("Error fetching CATs:", error);
      setError("Failed to fetch CATs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCATsForChain = async (
    chainId: string,
    factoryAddress: string
  ): Promise<CatDetails[]> => {
    try {
      const publicClient = getPublicClient(config as any, {
        chainId: parseInt(chainId),
      });

      if (!publicClient || !address) {
        console.error(`No public client available for chain ${chainId}`);
        return [];
      }

      console.log(chainId);
      console.log(factoryAddress);

      const catAddresses = (await publicClient.readContract({
        address: factoryAddress as `0x${string}`,
        abi: CAT_FACTORY_ABI,
        functionName: "getVaultAddresses",
        args: [address as `0x${string}`],
      })) as `0x${string}`[];

      console.log(catAddresses)

      const provider = await detectEthereumProvider();
      if (!provider) {
        throw new Error("Ethereum provider not found");
      }

      const web3 = new Web3(provider as unknown as Web3["givenProvider"]);

      const catPromises = catAddresses.map(async (catAddress) => {
        try {
          const [tokenName, tokenSymbol] = await Promise.all([
            publicClient.readContract({
              address: catAddress,
              abi: CONTRIBUTION_ACCOUNTING_TOKEN_ABI,
              functionName: "tokenName",
            }) as Promise<string>,
            publicClient.readContract({
              address: catAddress,
              abi: CONTRIBUTION_ACCOUNTING_TOKEN_ABI,
              functionName: "tokenSymbol",
            }) as Promise<string>,
          ]);

          console.log(tokenName, tokenSymbol)

          return {
            chainId,
            address: catAddress,
            tokenName: tokenName || "",
            tokenSymbol: tokenSymbol || "",
          };
        } catch (error) {
          console.error(
            `Error fetching CAT ${catAddress} on chain ${chainId}:`,
            error
          );
          return null;
        }
      });

      const results = await Promise.all(catPromises);
      return results.filter((cat): cat is CatDetails => cat !== null);
    } catch (error) {
      console.error(`Error fetching CATs for chain ${chainId}:`, error);
      return [];
    }
  };

  useEffect(() => {
    if (address) {
      fetchCATsFromAllChains();
    }
  }, [address]);

  return (
    <Layout>
      <div className="w-full">
        <div className="container mx-auto py-8 mt-9 justify-center text-center">
        <h1 className="text-4xl font-extrabold text-[#6A0DAD] dark:text-[#FFC947] mb-6">
          My TNTs
        </h1>
          {isLoading ? (
            <p>Loading your CATs...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : ownedCATs?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ownedCATs.map((cat) => (
                <div
                  key={`${cat.chainId}-${cat.address}`}
                  className="bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-extrabold text-[#3E3E3E] dark:text-white transition duration-200">
                    <Link
                      href={`/c?vault=${cat.address}&chainId=${cat.chainId}`}
                      className="hover:underline"
                    >
                      {cat.tokenName || cat.address}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#3E3E3E] dark:text-indigo-200 mt-2">
                    Symbol: <span className="font-semibold">{cat.tokenSymbol}</span>
                  </p>
                  <p className="text-sm text-[#3E3E3E] dark:text-indigo-200">
                    Chain ID: <span className="font-semibold">{cat.chainId}</span>
                  </p>
                  <Link
                    href={`/c?vault=${cat.address}&chainId=${cat.chainId}`}
                    className="inline-block mt-4 text-[#6A0DAD] dark:text-[#FFC947] font-semibold hover:underline transition duration-200"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg font-semibold text-gray-600 dark:text-indigo-300 mt-4">
            You don't own any <span className="text-[#6A0DAD] dark:text-[#FFC947]">TNTs</span> yet. Start exploring and mint your first one!
          </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
