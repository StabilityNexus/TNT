"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { writeContract } from "@wagmi/core";
import { TNTAbi } from "@/contractsABI/TNT";
import toast from "react-hot-toast";
import WalletLockScreen from "@/components/WalletLockScreen";

import { config } from "@/utils/config";

export default function TokenActionsPage() {
  const { address } = useAccount();
  const [mounted, setMounted] = useState(false);

  const [contractAddress, setContractAddress] = useState<`0x${string}`>("0x0");
  const [chainId, setChainId] = useState<number>(0);

  // Form states for each action
  const [issueRecipient, setIssueRecipient] = useState("");
  const [revokeTokenId, setRevokeTokenId] = useState("");
  const [burnTokenId, setBurnTokenId] = useState("");

  const [isIssuing, setIsIssuing] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);
  const [isBurning, setIsBurning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Get contract address and chainId from URL parameters (using either "tnt" or "vault")
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tnt = params.get("tnt") || params.get("vault");
      const chain = params.get("chainId");

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
      setIssueRecipient("");
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
      setRevokeTokenId("");
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
      setBurnTokenId("");
    } catch (error) {
      console.error("Error burning token:", error);
      toast.error("Failed to burn token");
    } finally {
      setIsBurning(false);
    }
  };
  if (!mounted) return null;

  if (!address) {
    return <WalletLockScreen />;
  }

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
            Token{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Actions
            </span>
          </h1>
          <p className="text-slate-400">
            Manage your TNT tokens: Issue, Revoke, or Burn tokens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Issue Token */}
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-900/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Issue Token</h2>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Issue a new token to establish a trust relationship
            </p>
            <form onSubmit={handleIssueToken} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Recipient Address
                </label>
                <input
                  type="text"
                  value={issueRecipient}
                  onChange={(e) => setIssueRecipient(e.target.value)}
                  placeholder="Enter recipient address"
                  className="w-full bg-slate-800/80 border-0 text-white placeholder:text-slate-500 rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isIssuing}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50"
              >
                {isIssuing ? "Issuing..." : "Issue Token"}
              </button>
            </form>
          </div>

          {/* Revoke Token */}
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-900/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-400"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Revoke Token</h2>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Revoke a token to invalidate a trust relationship
            </p>
            <form onSubmit={handleRevokeToken} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Token ID
                </label>
                <input
                  type="number"
                  value={revokeTokenId}
                  onChange={(e) => setRevokeTokenId(e.target.value)}
                  placeholder="Enter token id"
                  className="w-full bg-slate-800/80 border-0 text-white placeholder:text-slate-500 rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-amber-500/30 transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isRevoking}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50"
              >
                {isRevoking ? "Revoking..." : "Revoke Token"}
              </button>
            </form>
          </div>

          {/* Burn Token */}
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-900/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-400"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Burn Token</h2>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Permanently remove a token from circulation
            </p>
            <form onSubmit={handleBurnToken} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Token ID
                </label>
                <input
                  type="number"
                  value={burnTokenId}
                  onChange={(e) => setBurnTokenId(e.target.value)}
                  placeholder="Enter token id"
                  className="w-full bg-slate-800/80 border-0 text-white placeholder:text-slate-500 rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-red-500/30 transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isBurning}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50"
              >
                {isBurning ? "Burning..." : "Burn Token"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
