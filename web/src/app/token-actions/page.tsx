"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { writeContract } from "@wagmi/core";
import { TNTAbi } from "@/utils/contractsABI/TNT";
import toast from "react-hot-toast";
import WalletLockScreen from "@/components/WalletLockScreen";
import { TNTRoleManager, TokenPermissions, UserRole } from "@/utils/roleManager";
import { config } from "@/utils/config";
import { getPublicClient } from "@wagmi/core";

interface RecipientInfo {
  address: `0x${string}`;
  tokenIds: number[];
  issuers: `0x${string}`[];
  activeTokenIds: number[];
  hasActiveTokens: boolean;
}

interface RecipientsPagination {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  itemsPerPage: number;
}

export default function TokenActionsPage() {
  const { address } = useAccount();
  const [mounted, setMounted] = useState(false);

  const [contractAddress, setContractAddress] = useState<`0x${string}`>("0x0");
  const [chainId, setChainId] = useState<number>(0);
  const [isTokenRevokable, setIsTokenRevokable] = useState<boolean>(true); // Default to true to show revoke initially
  const [permissions, setPermissions] = useState<TokenPermissions>({
    canIssue: false,
    canRevoke: false,
    canBurn: false,
    canGrantRoles: false,
  });
  const [userRoles, setUserRoles] = useState<UserRole>({
    hasAdminRole: false,
    hasMinterRole: false,
    hasRevokerRole: false,
    isRecipient: false,
  });
  const [isLoadingPermissions, setIsLoadingPermissions] = useState(true);

  // Form states for each action
  const [issueRecipient, setIssueRecipient] = useState("");
  const [revokeTokenId, setRevokeTokenId] = useState("");
  const [burnTokenId, setBurnTokenId] = useState("");
  const [grantRoleAddress, setGrantRoleAddress] = useState("");
  const [selectedRole, setSelectedRole] = useState<"minter" | "revoker">("minter");

  const [isIssuing, setIsIssuing] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);
  const [isBurning, setIsBurning] = useState(false);
  const [isGrantingRole, setIsGrantingRole] = useState(false);

  // Recipients section state
  const [recipients, setRecipients] = useState<RecipientInfo[]>([]);
  const [isLoadingRecipients, setIsLoadingRecipients] = useState(false);
  const [recipientsPagination, setRecipientsPagination] = useState<RecipientsPagination>({
    currentPage: 1,
    totalPages: 0,
    totalCount: 0,
    itemsPerPage: 10,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get contract address and chainId from URL parameters
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

  // Load user permissions and token info when contract address and user address are available
  useEffect(() => {
    const loadPermissions = async () => {
      if (!contractAddress || !chainId || !address) return;
      
      setIsLoadingPermissions(true);
      try {
        const roleManager = new TNTRoleManager(contractAddress, chainId, address);
        const [perms, roles, tokenInfo] = await Promise.all([
          roleManager.getTokenPermissions(),
          roleManager.getUserRoles(),
          roleManager.getTokenInfo(),
        ]);
        setPermissions(perms);
        setUserRoles(roles);
        setIsTokenRevokable(tokenInfo.revokable);
      } catch (error) {
        console.error("Error loading permissions:", error);
      } finally {
        setIsLoadingPermissions(false);
      }
    };

    loadPermissions();
  }, [contractAddress, chainId, address]);

  const handleIssueToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }
    if (!permissions.canIssue) {
      toast.error("You don't have permission to issue tokens");
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
    if (!permissions.canRevoke) {
      toast.error("You don't have permission to revoke tokens or token is not revokable");
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
    if (!permissions.canBurn) {
      toast.error("You don't have permission to burn tokens");
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

  const handleGrantRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }
    if (!permissions.canGrantRoles) {
      toast.error("You don't have permission to grant roles");
      return;
    }
    try {
      setIsGrantingRole(true);
      const functionName = selectedRole === "minter" ? "grantMinterRole" : "grantRevokerRole";
      const tx = await writeContract(config as any, {
        address: contractAddress,
        abi: TNTAbi,
        functionName: functionName,
        args: [grantRoleAddress],
        chainId: chainId,
      });
      toast.success(`${selectedRole === "minter" ? "Minter" : "Revoker"} role granted successfully!`);
      console.log("Grant role tx:", tx);
      setGrantRoleAddress("");
    } catch (error) {
      console.error("Error granting role:", error);
      toast.error("Failed to grant role");
    } finally {
      setIsGrantingRole(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  const fetchRecipients = async (page: number) => {
    if (!contractAddress || !chainId) return;

    try {
      setIsLoadingRecipients(true);
      const publicClient = getPublicClient(config as any, { chainId });
      if (!publicClient) return;

      // Get total participants count
      const totalCount = await publicClient.readContract({
        address: contractAddress,
        abi: TNTAbi,
        functionName: "getAllParticipantsCount",
      }) as bigint;

      const count = Number(totalCount);
      const totalPages = Math.ceil(count / recipientsPagination.itemsPerPage);
      
      if (count === 0) {
        setRecipients([]);
        setRecipientsPagination(prev => ({
          ...prev,
          currentPage: page,
          totalPages: 0,
          totalCount: 0,
        }));
        return;
      }

      // Calculate start and end indices for pagination
      const startIndex = (page - 1) * recipientsPagination.itemsPerPage;
      const endIndex = Math.min(startIndex + recipientsPagination.itemsPerPage, count);

      // Get recipients for current page
      const recipientAddresses = await publicClient.readContract({
        address: contractAddress,
        abi: TNTAbi,
        functionName: "getRecipients",
        args: [BigInt(startIndex), BigInt(endIndex)],
      }) as `0x${string}`[];

      // Get token details for each recipient
      const recipientInfoPromises = recipientAddresses.map(async (recipientAddress) => {
        try {
          const [allTokensData, activeTokensData] = await Promise.all([
            publicClient.readContract({
              address: contractAddress,
              abi: TNTAbi,
              functionName: "getAllIssuedTokens",
              args: [recipientAddress],
            }) as Promise<[bigint[], `0x${string}`[]]>,
            publicClient.readContract({
              address: contractAddress,
              abi: TNTAbi,
              functionName: "getActiveTokens",
              args: [recipientAddress],
            }) as Promise<[bigint[], `0x${string}`[]]>,
          ]);

          const [allTokenIds, allIssuers] = allTokensData;
          const [activeTokenIds] = activeTokensData;

          // Convert to numbers for easier comparison
          const activeTokenNumbers = activeTokenIds.map(id => Number(id));

          return {
            address: recipientAddress,
            tokenIds: allTokenIds.map(id => Number(id)),
            issuers: allIssuers,
            activeTokenIds: activeTokenNumbers,
            hasActiveTokens: activeTokenIds.length > 0,
          };
        } catch (error) {
          console.error(`Error fetching tokens for ${recipientAddress}:`, error);
          return {
            address: recipientAddress,
            tokenIds: [],
            issuers: [],
            activeTokenIds: [],
            hasActiveTokens: false,
          };
        }
      });

      const recipientInfos = await Promise.all(recipientInfoPromises);
      
      setRecipients(recipientInfos);
      setRecipientsPagination(prev => ({
        ...prev,
        currentPage: page,
        totalPages,
        totalCount: count,
      }));

    } catch (error) {
      console.error("Error fetching recipients:", error);
      toast.error("Failed to fetch recipients");
    } finally {
      setIsLoadingRecipients(false);
    }
  };

  // Load recipients when component mounts or contract info changes
  useEffect(() => {
    if (contractAddress && chainId && !isLoadingPermissions) {
      fetchRecipients(1);
    }
  }, [contractAddress, chainId, isLoadingPermissions]);

  const handleRecipientsPageChange = (page: number) => {
    if (page >= 1 && page <= recipientsPagination.totalPages) {
      fetchRecipients(page);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  if (!mounted) return null;

  if (!address) {
    return <WalletLockScreen />;
  }

  if (isLoadingPermissions) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
          </div>
          <p className="text-slate-400">Loading permissions...</p>
        </div>
      </div>
    );
  }

  // Check if user has any permissions at all
  const hasAnyPermission = permissions.canIssue || permissions.canRevoke || permissions.canBurn || permissions.canGrantRoles;

  if (!hasAnyPermission) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-md w-full z-10 text-center">
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/20 rounded-full flex items-center justify-center">
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
                <path d="M12 1v6m0 6v6" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">No Token Actions Available</h2>
            <p className="text-slate-400 mb-4">
              You don't have permission to perform any token actions. Contact the token administrator to get the appropriate roles.
            </p>
            <div className="text-sm text-slate-500 bg-slate-800/50 p-3 rounded-lg">
              <p className="font-medium mb-2">Your current status:</p>
              <ul className="space-y-1 text-left">
                <li>• Admin: {userRoles.hasAdminRole ? "✅" : "❌"}</li>
                <li>• Minter: {userRoles.hasMinterRole ? "✅" : "❌"}</li>
                <li>• Revoker: {userRoles.hasRevokerRole ? "✅" : "❌"}</li>
                <li>• Token Holder: {userRoles.isRecipient ? "✅" : "❌"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate number of visible boxes to determine grid layout
  const visibleBoxes = [
    true, // Issue token - always visible
    isTokenRevokable, // Revoke token - only if revokable
    true, // Burn token - always visible  
    true, // Grant role - always visible
  ].filter(Boolean).length;

  // Determine grid layout based on number of visible boxes
  const getGridLayout = () => {
    switch (visibleBoxes) {
      case 3:
        return "grid-cols-1 md:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 relative bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Token{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Actions
            </span>
          </h1>
          <p className="text-slate-400">
            Manage your TNT tokens based on your permissions
          </p>
          
          {/* User Role Badge */}
          <div className="flex justify-center mt-4">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/40">
              <span className="text-sm text-slate-300">Your roles:</span>
              {userRoles.hasAdminRole && (
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Admin</span>
              )}
              {userRoles.hasMinterRole && (
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">Minter</span>
              )}
              {userRoles.hasRevokerRole && (
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">Revoker</span>
              )}
              {userRoles.isRecipient && (
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Holder</span>
              )}
            </div>
          </div>
        </div>

        <div className={`grid ${getGridLayout()} gap-6 max-w-none`}>
          {/* Issue Token - Always show */}
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
                  disabled={!permissions.canIssue}
                />
              </div>
              <button
                type="submit"
                disabled={isIssuing || !permissions.canIssue}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isIssuing ? "Issuing..." : !permissions.canIssue ? "No Permission" : "Issue Token"}
              </button>
            </form>
          </div>

          {/* Revoke Token - Only show if token is revokable */}
          {isTokenRevokable && (
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
                    disabled={!permissions.canRevoke}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isRevoking || !permissions.canRevoke}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRevoking ? "Revoking..." : !permissions.canRevoke ? "No Permission" : "Revoke Token"}
                </button>
              </form>
            </div>
          )}

          {/* Burn Token */}
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-900/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
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
                  disabled={!permissions.canBurn}
                />
              </div>
              <button
                type="submit"
                disabled={isBurning || !permissions.canBurn}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isBurning ? "Burning..." : !permissions.canBurn ? "No Permission" : "Burn Token"}
              </button>
            </form>
          </div>

          {/* Grant Role */}
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-900/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
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
                  className="text-purple-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Grant Role</h2>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Grant minter or revoker role to another user
            </p>
            <form onSubmit={handleGrantRole} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  User Address
                </label>
                <input
                  type="text"
                  value={grantRoleAddress}
                  onChange={(e) => setGrantRoleAddress(e.target.value)}
                  placeholder="Enter user address"
                  className="w-full bg-slate-800/80 border-0 text-white placeholder:text-slate-500 rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200"
                  required
                  disabled={!permissions.canGrantRoles}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Role Type
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as "minter" | "revoker")}
                  disabled={!permissions.canGrantRoles}
                  className="w-full bg-slate-800/80 border-0 text-white rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="minter" className="bg-slate-800 text-white">Minter Role</option>
                  <option value="revoker" className="bg-slate-800 text-white">Revoker Role</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isGrantingRole || !permissions.canGrantRoles}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGrantingRole ? "Granting..." : !permissions.canGrantRoles ? "No Permission" : "Grant Role"}
              </button>
            </form>
          </div>
        </div>

        {/* Recipients Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              TNT{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                Recipients
              </span>
            </h2>
            <p className="text-slate-400">
              All users who have received tokens from this TNT contract
            </p>
          </div>

          {isLoadingRecipients ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-12">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
              </div>
              <p className="text-slate-400">Loading recipients...</p>
            </div>
          ) : recipients.length > 0 ? (
            <>
              {/* Pagination Info */}
              <div className="flex justify-between items-center mb-6 px-2">
                <p className="text-sm text-slate-400">
                  Showing {(recipientsPagination.currentPage - 1) * recipientsPagination.itemsPerPage + 1} to{" "}
                  {Math.min(recipientsPagination.currentPage * recipientsPagination.itemsPerPage, recipientsPagination.totalCount)}{" "}
                  of {recipientsPagination.totalCount} recipients
                </p>
              </div>

              {/* Recipients Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {recipients.map((recipient, index) => (
                  <div
                    key={`${recipient.address}-${index}`}
                    className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4 hover:shadow-purple-900/10 transition-all duration-300"
                  >
                    {/* Address with copy button */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${recipient.hasActiveTokens ? 'bg-emerald-500' : 'bg-slate-500'}`}></div>
                        <span className="text-white font-mono text-sm">
                          {formatAddress(recipient.address)}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(recipient.address)}
                        className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 rounded-md transition-all duration-200"
                        title="Copy address"
                      >
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
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </button>
                    </div>

                    {/* Status */}
                    <div className="mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        recipient.hasActiveTokens 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : 'bg-slate-500/20 text-slate-400'
                      }`}>
                        {recipient.hasActiveTokens ? 'Active Tokens' : 'No Active Tokens'}
                      </span>
                    </div>

                    {/* Token Details */}
                    <div className="space-y-2">
                      <div className="text-xs text-slate-400">
                        <span className="font-medium">Total Tokens:</span> {recipient.tokenIds.length}
                        {recipient.hasActiveTokens && (
                          <span className="ml-2 text-emerald-400">
                            ({recipient.activeTokenIds.length} active)
                          </span>
                        )}
                      </div>
                      
                      {recipient.tokenIds.length > 0 && (
                        <div className="space-y-1">
                          <div className="text-xs text-slate-400 font-medium">Token IDs & Issuers:</div>
                          <div className="max-h-24 overflow-y-auto space-y-1">
                            {recipient.tokenIds.slice(0, 5).map((tokenId, idx) => {
                              const isActive = recipient.activeTokenIds.includes(tokenId);
                              const issuerAddress = recipient.issuers[idx] || '0x0';
                              
                              return (
                                <div key={tokenId} className={`text-xs rounded p-2 border ${
                                  isActive 
                                    ? 'bg-emerald-500/10 border-emerald-500/30' 
                                    : 'bg-slate-800/50 border-slate-700/50'
                                }`}>
                                  <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center space-x-2">
                                      <span className={`font-medium ${
                                        isActive ? 'text-emerald-400' : 'text-amber-400'
                                      }`}>
                                        #{tokenId}
                                      </span>
                                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                        isActive 
                                          ? 'bg-emerald-500/20 text-emerald-300' 
                                          : 'bg-slate-500/20 text-slate-400'
                                      }`}>
                                        {isActive ? 'Active' : 'Inactive'}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-slate-300 font-mono text-[10px]">
                                      Issuer: {formatAddress(issuerAddress)}
                                    </span>
                                    <button
                                      onClick={() => copyToClipboard(issuerAddress)}
                                      className="p-1 text-slate-500 hover:text-amber-400 hover:bg-slate-700/50 rounded transition-all duration-200"
                                      title="Copy issuer address"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                            {recipient.tokenIds.length > 5 && (
                              <div className="text-xs text-slate-500 text-center py-1">
                                +{recipient.tokenIds.length - 5} more tokens
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {recipientsPagination.totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleRecipientsPageChange(recipientsPagination.currentPage - 1)}
                    disabled={recipientsPagination.currentPage === 1}
                    className="px-3 py-2 text-sm bg-slate-800/50 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, recipientsPagination.totalPages) }, (_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => handleRecipientsPageChange(page)}
                          className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                            page === recipientsPagination.currentPage
                              ? 'bg-amber-500 text-white'
                              : 'bg-slate-800/50 text-white hover:bg-slate-700'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handleRecipientsPageChange(recipientsPagination.currentPage + 1)}
                    disabled={recipientsPagination.currentPage === recipientsPagination.totalPages}
                    className="px-3 py-2 text-sm bg-slate-800/50 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-500/20 rounded-full flex items-center justify-center">
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
                  className="text-slate-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">No Recipients Yet</h3>
              <p className="text-slate-400">No tokens have been issued from this TNT contract yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
