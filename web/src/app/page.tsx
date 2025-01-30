"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Service_1 from "../images/Service_1.png";
import Service_2 from "../images/Service_2.png";
import Service_3 from "../images/Service_3.png";
import catLight from "../images/Light_cat.png";
import catDark from "../images/Dark_cat.png";
import elemLight from "../images/elem-light.svg";
import elemDark from "../images/elem-dark.svg";
import { useTheme } from "next-themes";
import { faGithub, faDiscord, faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useAccount } from "wagmi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";

const services = [
  { image: Service_1, alt: "Semi-Transferable", description: "Semi-Transferable" },
  { image: Service_2, alt: "Secure against Inflation", description: "Secure against Inflation" },
  { image: Service_3, alt: "Simple to Mint", description: "Simple to Mint" },
];

const supportedChains = [
  { id: "534351", name: "Scroll Sepolia" },
  { id: "5115", name: "Citrea" },
];

const contact_links = [
  { href: "https://github.com/StabilityNexus", icon: faGithub },
  { href: "https://discord.gg/YzDKeEfWtS", icon: faDiscord },
  { href: "https://t.me/StabilityNexus", icon: faTelegram },
  { href: "https://x.com/StabilityNexus", icon: faTwitter },
];

export default function Home() {
  const { resolvedTheme } = useTheme(); // Use resolvedTheme for accurate theme detection
  const [isThemeReady, setIsThemeReady] = useState(false);
  const [catAddress, setCatAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(''); // Track wallet connection state
  const router = useRouter();
  const { address } = useAccount();
  const [selectedChain, setSelectedChain] = useState("");

  const handleUseCAT = () => {
    if (catAddress.trim()) {
      router.push(`/cat/${catAddress}`);
    }
  };

  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    setIsWalletConnected(address as `0x${string}`); // Update wallet connection state when address changes
  }, [address]);

  if (!isThemeReady) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen text-center">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <div>
              {/* Heading for Desktop */}
              <h1 className="hidden md:block text-7xl font-bold mb-8 font-mono text-[#3E3E3E] dark:text-[#00ADB5]">
                Welcome to{" "}
                <span className="text-[#6A0DAD] dark:text-[#FFC947]">
                  TNT
                </span>
              </h1>

              {/* Heading for Mobile */}
              <h1 className="block md:hidden text-3xl font-bold mb-8 font-mono text-[#3E3E3E] dark:text-[#00ADB5]">
                Welcome to{" "}
                <span className="text-[#6A0DAD] dark:text-[#FFC947]">
                  TNT
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl max-w-4xl font-mono text-[#6A0DAD] dark:text-[#00ADB5] dark:font-normal font-semibold">
              Trust Network Tokens (TNTs) <br />
              Non-fungible tokens within a Trust Network.
            </p>
            <div className="flex space-x-4 mt-12">
              {contact_links.map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl md:text-4xl hover:text-[#6A0DAD] transition"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
            {!isWalletConnected ? (
              <div className="mt-4">
                <RainbowKitProvider
                  theme={lightTheme({
                    accentColor: "#FFC947",
                    accentColorForeground: "#000000",
                    borderRadius: "medium",
                    fontStack: "system",
                  })}
                >
                  <ConnectButton />
                </RainbowKitProvider>
              </div>
            ) : (
              <div className="max-w-full mt-4 flex p-8">
                <Button
                  onClick={() => router.push("/create")}
                  className="py-3 bg-[#20253a] rounded-xl w-[90%] text-white font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-500 border-none p-8 mr-4"
                >
                  Create TNT
                </Button>
                <Button onClick={() => setShowPopup(true)}
                  className="py-3 bg-[#20253a] rounded-xl w-[90%] text-white font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-500 border-none p-8">Use TNT</Button>

                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-gradient-to-r from-[#C3F3FB] to-[#87DCEB] dark:from-[#363E62] dark:to-[#161928] p-8 rounded-3xl shadow-2xl w-11/12 max-w-md">
                    <h2 className="text-2xl font-extrabold text-[#3E3E3E] dark:text-white mb-6 transition duration-200">
                      Enter TNT Details
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#3E3E3E] dark:text-white mb-2">
                          TNT Address
                        </label>
                        <Input
                          placeholder="Enter TNT address"
                          value={catAddress}
                          onChange={(e) => setCatAddress(e.target.value)}
                          className="w-full bg-[#C3F3FB] dark:bg-[#363E62] text-[#3E3E3E] dark:text-indigo-200 border border-[#6c6c6c] p-4 rounded-2xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#3E3E3E] dark:text-white mb-2">
                          Network
                        </label>
                        <Select value={selectedChain} onValueChange={setSelectedChain}>
                          <SelectTrigger className="w-full bg-[#C3F3FB] dark:bg-[#363E62] text-[#3E3E3E] dark:text-indigo-200 border border-[#6c6c6c] p-4 rounded-2xl">
                            <SelectValue placeholder="Select network" />
                          </SelectTrigger>
                          <SelectContent>
                            {supportedChains.map((chain) => (
                              <SelectItem
                                key={chain.id}
                                value={chain.id}
                                className="hover:bg-indigo-100 dark:hover:bg-indigo-900"
                              >
                                {chain.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-8">
                      <Button
                        onClick={() => setShowPopup(false)}
                        className="bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition duration-200"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleUseCAT}
                        disabled={!catAddress.trim() || !selectedChain}
                        className={`${
                          !catAddress.trim() || !selectedChain
                            ? "bg-gray-400 dark:bg-gray-600"
                            : "bg-[#20253a] hover:bg-[#3E3E3E] dark:bg-[#FFC947] dark:hover:bg-[#FFC947]"
                        } text-white px-6 py-3 rounded-xl transition duration-200`}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
                
                )}
              </div>
            )}
          </div>
          <div className="flex justify-center mt-12 p-6 dark:hidden">
            <Image
              src={elemLight}
              alt={""}
              width={250}
              height={250}
              className="rounded-md"
            />
          </div>
          <div className="hidden justify-center mt-12 p-6 dark:flex">
            <Image
              src={elemDark}
              alt={""}
              width={250}
              height={250}
              className="rounded-md"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="text-center">
          <h2
            id="Services"
            className="text-3xl md:text-5xl font-bold mb-12 dark:text-[#00ADB5]"
            style={{ fontFamily: "var(--font-bebas-nueue)" }}
          >
            Why TNTs?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ml-24">
            {services.map((service, index) => (
              <a
                href="#"
                key={index}
                className="relative flex flex-col items-center bg-primary rounded-lg shadow-sm md:flex-row md:max-w-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 group"
              >
                {/* Service Image */}
                <Image
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={service.image}
                  alt={service.alt}
                />

                {/* Service Text */}
                <div className="relative flex flex-col justify-between p-4 leading-normal w-full overflow-hidden">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white relative">
                  {/* Description Background Animation */}
                  {/* Description Text with Transition */}
                  <span className="relative z-10 block bg-clip-text text-gray-400 group-hover:text-[#6A0DAD] dark:group-hover:text-[#FFC947] transition-colors duration-500">
                    {service.description}
                  </span>
                </h5>
              </div>

              </a>
            ))}
        </div>

        </section>

        {/* Contact Us Section */}
        <section className="py-64 mx-4 md:mx-12">
          <h2
            id="Contact"
            className="text-3xl md:text-5xl font-bold mb-12 text-center dark:text-[#00ADB5]"
            style={{ fontFamily: "var(--font-bebas-nueue)" }}
          >
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:py-20">
            {/* Contact Info */}
            <div>
              <p className="text-lg md:text-2xl mb-4 font-mono font-semibold dark:text-[#00ADB5]">
                TNT was developed by <br />
                <span className="text-[#6A0DAD] dark:text-[#FFC947]">The Stable Order</span> <br />
                within the <span className="text-[#6A0DAD] dark:text-[#FFC947]">Stability Nexus.</span>
              </p>
              <hr
                className="bg-black dark:bg-white"
                style={{
                  width: "80%",
                  height: "1px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              />
              <p className="text-lg md:text-2xl mb-3 font-mono">
                <span className="text-[#6A0DAD] dark:text-[#FFC947] font-semibold">Contact us</span> through:
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0 ">
                {contact_links.map(({ href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-[#6A0DAD] transition"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex justify-center items-center mt-[-120px] md:mt-0 mx-[45px] md:mx-[0px] ">
              <Image
                src={resolvedTheme === "dark" ? catDark : catLight}
                alt="Clowder Contact"
                className="absolute"
                style={{
                  marginLeft: "120px",
                  width: resolvedTheme === "dark" ? "400px" : "450px",
                }}
                width={450}
                height={450}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
