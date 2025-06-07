"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { TNTVaultFactories } from "@/utils/address";
import { useAccount } from "wagmi";
import { config } from "@/utils/config";
import { writeContract } from "@wagmi/core";
import { TNTFactoryAbi } from "@/contractsABI/TNTFactory";
import { Info } from "lucide-react";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";

interface DeployContractProps {
  tokenName: string;
  tokenSymbol: string;
  revokable: boolean;
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
];

export default function CreateTNT() {
  const [formData, setFormData] = useState<DeployContractProps>({
    tokenName: "",
    tokenSymbol: "",
    revokable: false,
  });
  const [isDeploying, setIsDeploying] = useState(false);

  const { address } = useAccount();
  const router = useRouter();

  const { resolvedTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  if (!isThemeReady) return null;

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

      const { tokenName, tokenSymbol, revokable } = formData;

      const tx = await writeContract(config as any, {
        address: TNTVaultFactories[chainId],
        abi: TNTFactoryAbi,
        functionName: "createTNT",
        args: [tokenName, tokenSymbol, revokable],
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

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative">
      <div className="max-w-3xl w-full flex bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-l-3xl shadow-[#09090b] shadow-2xl">
        <div className="p-8">
          <div className="mb-10">
            <p className="text-3xl mt-5 text-[#3E3E3E] dark:text-white transition duration-200 pr-8">
              Create Your{" "}
              <span className="text-[#6A0DAD] font-semibold dark:font-normal dark:text-[#FFC947] font-mono">
                Trust Network Token
              </span>{" "}
            </p>
          </div>
          {!address ? (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg text-white hover:text-[#FFC947] transition duration-200">
                Connect your wallet to get started.
              </p>
              <div className="flex justify-center">
                <RainbowKitProvider
                  theme={lightTheme({
                    accentColor: "#FFC947",
                    accentColorForeground: "#000000",
                    borderRadius: "large",
                  })}
                >
                  <ConnectButton />
                </RainbowKitProvider>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="text-indigo-200 font-medium flex flex-wrap gap-12"
            >
              {fields.map(({ id, label, type, placeholder, description }) => (
                <div key={id} className="space-y-3 w-[45%]">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor={id}
                      className="block text-sm font-semibold text-[#3E3E3E] dark:text-white hover:text-white transition duration-200"
                    >
                      {label}
                    </Label>
                    <div className="group relative">
                      <Info className="h-5 w-5 text-indigo-400 cursor-pointer hover:text-white transition duration-200" />
                      <span className="absolute left-1/2 -top-7 -translate-x-1/2 px-2 py-1 rounded bg-black text-xs text-white opacity-0 group-hover:opacity-100">
                        {description}
                      </span>
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
                    className="w-full bg-[#C3F3FB] dark:bg-[#363E62] text-[#3E3E3E] border border-[#6c6c6c] dark:text-indigo-200 p-6 rounded-2xl"
                  />
                </div>
              ))}
              <div className="w-full">
                <Label
                  htmlFor="revokable"
                  className="block text-sm font-semibold text-[#3E3E3E] dark:text-white hover:text-white transition duration-200"
                >
                  Revokable
                </Label>
                <Input
                  id="revokable"
                  name="revokable"
                  type="checkbox"
                  checked={formData.revokable}
                  onChange={handleChange}
                  className="w-6 h-6"
                />
                <p className="text-xs text-[#3E3E3E] dark:text-indigo-200 mt-1">
                  If checked, the token will be revokable.
                </p>
              </div>
              <Button
                type="submit"
                className="py-3 bg-[#20253a] rounded-xl w-[90%] text-white font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-500 border-none p-8"
                disabled={isDeploying}
              >
                {isDeploying ? "Deploying..." : "Deploy TNT Contract"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
