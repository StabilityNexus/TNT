import { mainnet, polygon, scrollSepolia, hardhat } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { citreaTestnet } from "@/components/CitreaTestnet";
import { ethereumClassic } from "@/components/EthereumClassic";

const chains = [
  scrollSepolia,
  hardhat,
  polygon,
  mainnet,
  citreaTestnet,
  ethereumClassic,
] as const;

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

export const config = getDefaultConfig({
  appName: "TNT",
  projectId,
  chains,
  ssr: true,
});
