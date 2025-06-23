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
import { writeContract } from "@wagmi/core";
import { TNTFactoryAbi } from "@/contractsABI/TNTFactory";
import { Info } from "lucide-react";
import { useTheme } from "next-themes";
import WalletLockScreen from "@/components/WalletLockScreen";

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
      if (!TNTVaultFactories[chainId]) {
        toast.error("Contract factory instance not available");
        return;
      }

      const { tokenName, tokenSymbol, revokable, imageURL } = formData;
      const tx = await writeContract(config as any, {
        address: TNTVaultFactories[chainId],
        abi: TNTFactoryAbi,
        functionName: "createTNT",
        args: [tokenName, tokenSymbol, revokable, imageURL],
      });

      const txDetails = {
        tokenName,
        tokenSymbol,
        revokable,
        transactionHash: tx,
        timestamp: new Date().toISOString(),
      };

      saveTransaction(txDetails);
      toast.success("TNT contract deployed successfully!");
      router.push("/my-tnts");
    } catch (error) {
      console.error("Error deploying TNT:", error);
      toast.error("Failed to deploy TNT contract");
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

  if (!address) {
    return <WalletLockScreen />;
  }
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
