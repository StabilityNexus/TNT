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
              functionName: "tokenImageURL",
            }) as Promise<string>,
          ]);

          console.log("Name:", tokenName, "Symbol:", tokenSymbol);

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
    <div className="w-full">
      <div className="container mx-auto py-8 mt-9 justify-center text-center">
        <h1 className="text-4xl font-extrabold text-[#6A0DAD] dark:text-[#FFC947] mb-6">
          My TNTs
        </h1>
        {isLoading ? (
          <p>Loading your TNTs...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : ownedTNTs?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ownedTNTs.map((tnt) => (
              <div
                key={`${tnt.chainId}-${tnt.address}`}
                className="bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {tnt.imageURL && (
                  <img
                    src={tnt.imageURL}
                    alt={`${tnt.tokenName} preview`}
                    className="w-full h-48 object-cover rounded-xl mb-4"
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
        ) : (
          <p className="text-lg font-semibold text-gray-600 dark:text-indigo-300 mt-4">
            You don't own any{" "}
            <span className="text-[#6A0DAD] dark:text-[#FFC947]">TNTs</span>{" "}
            yet. Start exploring and mint your first one!
          </p>
        )}
      </div>
    </div>
  );
}
