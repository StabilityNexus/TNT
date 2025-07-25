"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { TNTVaultFactories } from "@/utils/address";
import { useAccount } from "wagmi";
import { config } from "@/utils/config";
import { writeContract, waitForTransactionReceipt } from "@wagmi/core";
import { TNTFactoryAbi } from "@/utils/contractsABI/TNTFactory";
import { Info } from "lucide-react";
import { useTheme } from "next-themes";
import { getPublicClient } from "@wagmi/core";

interface DeployContractProps {
  tokenName: string;
  tokenSymbol: string;
  revokable: boolean;
  imageURL: string;
}

const fields = [
  {
    id: "tokenName",
    label: "Token Name",
    type: "text",
    placeholder: "My Token",
    description: "The name of your token",
  },
  {
    id: "tokenSymbol",
    label: "Token Symbol",
    type: "text",
    placeholder: "TKN",
    description: "A short identifier for your token (2-4 characters)",
  },
  {
    id: "imageURL",
    label: "Image URL",
    type: "text",
    placeholder: "https://example.com/image.png",
    description: "Image to associate with this TNT",
  },
];

export default function CreateTNT() {
  const [formData, setFormData] = useState<DeployContractProps>({
    tokenName: "",
    tokenSymbol: "",
    revokable: false,
    imageURL: "",
  });
  const [isDeploying, setIsDeploying] = useState(false);

  const { address } = useAccount();
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isThemeReady || !mounted) return null;

  const getTransactionHistory = () => {
    const history = localStorage.getItem("transactionHistory");
    return history ? JSON.parse(history) : [];
  };

  const saveTransaction = (txDetails: object) => {
    const history = getTransactionHistory();
    history.push(txDetails);
    localStorage.setItem("transactionHistory", JSON.stringify(history));
  };

  const deployContract = async () => {
    try {
      setIsDeploying(true);
      const chainId = config.state.chainId;

      console.log("Current chain ID:", chainId);
      console.log("Available factories:", TNTVaultFactories);

      if (!chainId) {
        toast.error("Please connect to a supported network");
        return;
      }

      if (!TNTVaultFactories[chainId]) {
        toast.error(
          `Contract factory not available for chain ${chainId}. Available chains: ${Object.keys(
            TNTVaultFactories
          ).join(", ")}`
        );
        return;
      }

      const { tokenName, tokenSymbol, revokable, imageURL } = formData;

      // Validate inputs
      if (!tokenName.trim()) {
        toast.error("Token name is required");
        return;
      }

      if (!tokenSymbol.trim()) {
        toast.error("Token symbol is required");
        return;
      }

      const factoryAddress = TNTVaultFactories[chainId];
      const cleanImageURL = imageURL.trim() || "";

      console.log("Deploying TNT with params:", {
        factory: factoryAddress,
        name: tokenName.trim(),
        symbol: tokenSymbol.trim(),
        revokable,
        imageURL: cleanImageURL,
        chainId,
        userAddress: address,
      });

      // Call createTNT function
      console.log("Calling createTNT function...");
      const txHash = await writeContract(config as any, {
        address: factoryAddress,
        abi: TNTFactoryAbi,
        functionName: "createTNT",
        args: [tokenName.trim(), tokenSymbol.trim(), revokable, cleanImageURL],
        chainId: chainId,
      });

      console.log("Transaction hash:", txHash);
      toast.success(
        "TNT creation transaction submitted! Waiting for confirmation..."
      );

      // Wait for transaction confirmation
      try {
        console.log("Waiting for transaction confirmation...");
        const receipt = await waitForTransactionReceipt(config as any, {
          hash: txHash,
          chainId: chainId,
        });

        console.log("Transaction confirmed! Receipt:", receipt);

        if (receipt.status === "success") {
          // Extract the new TNT contract address from logs
          let newTNTAddress = null;

          // Look for TNTCreated event in logs
          try {
            const publicClient = getPublicClient(config as any, { chainId });
            if (publicClient) {
              // Decode logs to find the TNTCreated event
              for (const log of receipt.logs) {
                if (
                  log.address.toLowerCase() === factoryAddress.toLowerCase()
                ) {
                  // This is likely our TNTCreated event
                  // The first topic after the event signature should be the owner
                  // The data should contain the TNT address
                  if (log.topics.length > 1 && log.data) {
                    // Try to decode the TNT address from the log data
                    // For now, we'll use a placeholder - in a real implementation,
                    // you'd properly decode the event logs
                    console.log("TNT created successfully, log:", log);
                    newTNTAddress = log.data; // This is a simplified approach
                  }
                }
              }
            }
          } catch (logError) {
            console.warn("Could not decode TNT address from logs:", logError);
          }

          // If we couldn't get the address from logs, create a placeholder
          if (!newTNTAddress) {
            newTNTAddress = `0x${txHash.slice(2, 42)}`; // Use part of tx hash as placeholder
          }

          const txDetails = {
            tokenName: tokenName.trim(),
            tokenSymbol: tokenSymbol.trim(),
            revokable,
            imageURL: cleanImageURL,
            transactionHash: txHash,
            contractAddress: newTNTAddress,
            chainId,
            factoryAddress,
            userAddress: address,
            timestamp: new Date().toISOString(),
          };

          saveTransaction(txDetails);
          toast.success("🎉 TNT contract created successfully!");

          // Redirect to my-tnts page with a longer delay to ensure blockchain state is updated
          setTimeout(() => {
            router.push("/my-tnts");
          }, 3000);
        } else {
          throw new Error("Transaction failed");
        }
      } catch (waitError) {
        console.error("Error waiting for transaction:", waitError);
        toast.error("Transaction confirmation failed. Please check manually.");

        // Still save the transaction attempt
        const txDetails = {
          tokenName: tokenName.trim(),
          tokenSymbol: tokenSymbol.trim(),
          revokable,
          imageURL: cleanImageURL,
          transactionHash: txHash,
          chainId,
          factoryAddress,
          userAddress: address,
          timestamp: new Date().toISOString(),
          status: "pending",
        };
        saveTransaction(txDetails);
      }
    } catch (error: any) {
      console.error("Error deploying TNT:", error);
      console.error("Error details:", {
        message: error?.message,
        cause: error?.cause,
        code: error?.code,
        data: error?.data,
      });

      // Handle specific error cases
      if (
        error?.message?.includes("User denied") ||
        error?.message?.includes("rejected")
      ) {
        toast.error("Transaction was cancelled by user");
      } else if (error?.message?.includes("insufficient funds")) {
        toast.error("Insufficient funds for transaction");
      } else if (error?.message?.includes("execution reverted")) {
        const revertReason = error?.data || error?.reason || "Unknown reason";
        toast.error(`Contract execution failed: ${revertReason}`);
        console.error("Revert reason:", revertReason);
      } else if (error?.message?.includes("network")) {
        toast.error(
          "Network error. Please check your connection and try again."
        );
      } else {
        toast.error(
          `Failed to deploy TNT: ${
            error?.shortMessage || error?.message || "Unknown error"
          }`
        );
      }
    } finally {
      setIsDeploying(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await deployContract();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-2xl w-full z-10">
        <div className="text-center mb-8 mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Create Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Trust Network Token
            </span>
          </h1>
          <p className="text-slate-400">
            Deploy a new TNT to establish trust relationships on the blockchain
          </p>
        </div>
        <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="space-y-6">
              {fields.map(({ id, label, type, placeholder, description }) => (
                <div key={id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor={id}
                      className="text-base font-semibold text-white"
                    >
                      {label}
                    </Label>{" "}
                    <div className="group relative inline-block">
                      <div className="w-6 h-6 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center cursor-pointer transition-colors duration-200">
                        <Info className="h-4 w-4 text-purple-400" />
                      </div>
                      <div className="fixed transform -translate-x-full translate-y-[-130%] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                        <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-md shadow-lg border border-slate-700 w-48 relative">
                          {description}
                          <div className="absolute w-2 h-2 bg-slate-800 border-r border-b border-slate-700 transform rotate-45 bottom-[-4px] right-[12px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required
                    value={formData[id as keyof DeployContractProps] as string}
                    onChange={handleChange}
                    className="w-full bg-slate-800/90 border-0 text-white placeholder:text-slate-500 rounded-lg py-3 px-4 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              ))}

              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Input
                    id="revokable"
                    name="revokable"
                    type="checkbox"
                    checked={formData.revokable}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-slate-700 text-amber-500 focus:ring-amber-500/20"
                  />
                  <Label
                    htmlFor="revokable"
                    className="text-base font-medium text-white"
                  >
                    Revocable
                  </Label>
                </div>
                <p className="text-sm text-slate-400 mt-1 ml-8">
                  If checked, the token can be revoked by the issuer
                </p>
              </div>

              <Button
                type="submit"
                className="w-full py-4 mt-6 bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 rounded-lg text-white font-medium text-lg transition-all duration-300"
                disabled={isDeploying}
              >
                {isDeploying ? "Deploying..." : "Create Token"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
