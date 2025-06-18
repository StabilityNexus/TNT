"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { writeContract } from "@wagmi/core";
import { TNTAbi } from "@/contractsABI/TNT";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { config } from "@/utils/config";

export default function TokenActionsPage() {
  const { address } = useAccount();

  const [contractAddress, setContractAddress] = useState<`0x${string}`>("0x0");
  const [chainId, setChainId] = useState<number>(0);

  // Form states for each action
  const [issueRecipient, setIssueRecipient] = useState("");
  const [revokeTokenId, setRevokeTokenId] = useState("");
  const [burnTokenId, setBurnTokenId] = useState("");

  const [isIssuing, setIsIssuing] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);
  const [isBurning, setIsBurning] = useState(false);

  // Get contract address and chainId from URL parameters (using either "tnt" or "vault")
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tnt = params.get('tnt') || params.get('vault');
      const chain = params.get('chainId');

      if (tnt && chain) {
        setContractAddress(tnt as `0x${string}`);
        setChainId(Number(chain));
      }
    }
  }, []);

  const handleIssueToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }
    try {
      setIsIssuing(true);
      const tx = await writeContract(config as any, {
        address: contractAddress,
        abi: TNTAbi,
        functionName: "issueToken",
        args: [issueRecipient],
        chainId: chainId,
      });
      toast.success("Token issued successfully!");
      console.log("Issue token tx:", tx);
    } catch (error) {
      console.error("Error issuing token:", error);
      toast.error("Failed to issue token");
    } finally {
      setIsIssuing(false);
    }
  };

  const handleRevokeToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }
    try {
      setIsRevoking(true);
      const tokenId = Number(revokeTokenId);
      const tx = await writeContract(config as any, {
        address: contractAddress,
        abi: TNTAbi,
        functionName: "revokeToken",
        args: [tokenId],
        chainId: chainId,
      });
      toast.success("Token revoked successfully!");
      console.log("Revoke token tx:", tx);
    } catch (error) {
      console.error("Error revoking token:", error);
      toast.error("Failed to revoke token");
    } finally {
      setIsRevoking(false);
    }
  };

  const handleBurnToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }
    try {
      setIsBurning(true);
      const tokenId = Number(burnTokenId);
      const tx = await writeContract(config as any, {
        address: contractAddress,
        abi: TNTAbi,
        functionName: "burnToken",
        args: [tokenId],
        chainId: chainId,
      });
      toast.success("Token burned successfully!");
      console.log("Burn token tx:", tx);
    } catch (error) {
      console.error("Error burning token:", error);
      toast.error("Failed to burn token");
    } finally {
      setIsBurning(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Token Actions
      </h1>
      <p className="text-center mb-4">
        Manage your TNT tokens: Issue, Revoke, or Burn tokens.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Issue Token */}
        <div className="bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Issue Token</h2>
          <form onSubmit={handleIssueToken} className="space-y-4">
            <label className="block">
              <span className="font-semibold">Recipient Address</span>
              <input
                type="text"
                value={issueRecipient}
                onChange={(e) => setIssueRecipient(e.target.value)}
                placeholder="0x..."
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </label>
            <button
              type="submit"
              disabled={isIssuing}
              className="w-full py-2 px-4 bg-green-400 text-white rounded hover:bg-green-700 transition"
            >
              {isIssuing ? "Issuing..." : "Issue Token"}
            </button>
          </form>
        </div>

        {/* Revoke Token */}
        <div className="bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Revoke Token</h2>
          <form onSubmit={handleRevokeToken} className="space-y-4">
            <label className="block">
              <span className="font-semibold">Token ID</span>
              <input
                type="number"
                value={revokeTokenId}
                onChange={(e) => setRevokeTokenId(e.target.value)}
                placeholder="Token ID"
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </label>
            <button
              type="submit"
              disabled={isRevoking}
              className="w-full py-2 px-4 bg-yellow-300 text-white rounded hover:bg-yellow-700 transition"
            >
              {isRevoking ? "Revoking..." : "Revoke Token"}
            </button>
          </form>
        </div>

        {/* Burn Token */}
        <div className="bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Burn Token</h2>
          <form onSubmit={handleBurnToken} className="space-y-4">
            <label className="block">
              <span className="font-semibold">Token ID</span>
              <input
                type="number"
                value={burnTokenId}
                onChange={(e) => setBurnTokenId(e.target.value)}
                placeholder="Token ID"
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </label>
            <button
              type="submit"
              disabled={isBurning}
              className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              {isBurning ? "Burning..." : "Burn Token"}
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
