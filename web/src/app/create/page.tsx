"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClowderVaultFactories } from "@/utils/address";
import { useAccount } from "wagmi";
import { config } from "@/utils/config";
import { writeContract } from "@wagmi/core";
import { CAT_FACTORY_ABI } from "@/contractsABI/CatFactoryABI";
import logo_light from "../../images/elem-dark.svg";
import logo_dark from "../../images/elem-light.svg";
import Image from "next/image";
import { Info } from "lucide-react";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";

interface DeployContractProps {
  tokenName: string;
  tokenSymbol: string;
  maxSupply: string;
  thresholdSupply: string;
  maxExpansionRate: string;
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
    id: "maxSupply",
    label: "Maximum Supply",
    type: "number",
    placeholder: "1000000",
    description: "The maximum number of tokens that can exist",
  },
  {
    id: "thresholdSupply",
    label: "Threshold Supply",
    type: "number",
    placeholder: "500000",
    description: "The supply threshold that triggers expansion",
  },
  {
    id: "maxExpansionRate",
    label: "Maximum Expansion Rate",
    type: "number",
    placeholder: "5",
    description: "Maximum percentage the supply can expand (1-100)",
  },
];

export default function CreateCAT() {
  const [formData, setFormData] = useState<DeployContractProps>({
    tokenName: "",
    tokenSymbol: "",
    maxSupply: "",
    thresholdSupply: "",
    maxExpansionRate: "",
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
      if (!ClowderVaultFactories[chainId]) {
        toast.error("Contract factory instance not available");
        return;
      }

      const {
        maxSupply,
        thresholdSupply,
        maxExpansionRate,
        tokenName,
        tokenSymbol,
      } = formData;

      const tx = await writeContract(config as any, {
        address: ClowderVaultFactories[chainId],
        abi: CAT_FACTORY_ABI,
        functionName: "createCAT",
        args: [
          parseInt(maxSupply),
          parseInt(thresholdSupply),
          maxExpansionRate.toString(),
          tokenName,
          tokenSymbol,
        ],
      });

      const txDetails = {
        tokenName,
        tokenSymbol,
        maxSupply,
        thresholdSupply,
        maxExpansionRate,
        transactionHash: tx,
        timestamp: new Date().toISOString(),
      };

      saveTransaction(txDetails);
      toast.success("CAT contract deployed successfully!");
      router.push("/my-cats");
    } catch (error) {
      console.error("Error deploying CAT:", error);
      toast.error("Failed to deploy CAT contract");
    } finally {
      setIsDeploying(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await deployContract();
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 relative">
        <div className="max-w-3xl w-full flex bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] rounded-l-3xl shadow-[#09090b] shadow-2xl">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-xl font-extrabold text-[#3E3E3E] dark:text-white transition duration-200">
                Create Your CAT
              </h1>
              <p className="text-3xl mt-20 text-[#3E3E3E] dark:text-white transition duration-200 pr-8">
                Deploy your <span className="text-[#6A0DAD] font-semibold dark:font-normal dark:text-[#FFC947] font-mono">Contribution Accounting Token</span> seamlessly
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
                {fields.map(({ id, label, type, placeholder, description }, index) => (
                  <div key={id} className={`space-y-3 ${index > 0 ? "w-[40%]" : "w-[90%]"}`}>
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
                      value={formData[id as keyof DeployContractProps]}
                      onChange={handleChange}
                      className="w-full bg-[#C3F3FB] dark:bg-[#363E62] text-[#3E3E3E] border border-[#6c6c6c] dark:text-indigo-200 p-6 rounded-2xl"
                    />
                  </div>
                ))}
                <Button
                  type="submit"
                  className="py-3 bg-[#20253a] rounded-xl w-[90%] text-white font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-500 border-none p-8"
                  disabled={isDeploying}
                >
                  {isDeploying ? "Deploying..." : "Deploy CAT"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
