"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo_light from "../images/elem-light.svg";
import logo_dark from "../images/elem-dark.svg";
import { useTheme } from "next-themes";
import { ModeToggle } from "../components/darkModeToggle";
import Avatar from "./Avatar";
// import { useWallet } from "@/hooks/WalletConnectProvider";
import { Menu, X } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();
  const { resolvedTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  if (!isThemeReady) return null;

  return (
    <header className="p-5 bg-[#9deef7] dark:bg-[#08131e]">
      <div className="mx-auto flex items-center justify-end relative">
        {/* Logo and Text */}
        <div>
          <Link href="/">
            <div className="absolute ml-[-12px] flex items-baseline left-0 top-1/2 transform -translate-y-1/2 mt-2">
              <Image
                src={resolvedTheme === "dark" ? logo_dark : logo_light}
                alt="TNT"
                width={70}
                height={70}
                priority
              />
              <h1
                className="text-4xl text-blue font-bold ml-[10px] pb-2 dark:text-[#BA9901]"
                style={{
                  fontFamily: "var(--font-bebas-nueue)",
                  marginLeft: "-2px",
                }}
              >
                TNT
              </h1>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu and ModeToggle for Small Screens */}
        <div className="flex items-center space-x-4 md:hidden">
          <button className="z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
          <ModeToggle />
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-10 flex items-center justify-center">
            <nav className="bg-white dark:bg-gray-800 p-8 rounded-lg w-4/5 max-w-md shadow-lg relative">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 hover:bg-gray-300 dark:hover:bg-gray-600 text-black dark:text-white font-bold py-2 px-4 rounded"
              >
                <X className="w-8 h-8" />
              </button>
              <ul
                className="flex flex-col space-y-4 text-2xl font-semibold text-center"
                style={{ fontFamily: "var(--font-bebas-nueue)" }}
              >
                {address && (
                  <li>
                    <Link href="/my-cats">
                      <Avatar />
                    </Link>
                  </li>
                )}
                <li>
                  <ConnectButton />
                </li>
                <li>
                  <Link
                    href="/create"
                    className="block py-2 hover:text-[#6A0DAD]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CREATE TNT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#Contact"
                    className="block py-2 hover:text-[#6A0DAD]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT US
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex relative space-x-8 text-2xl font-semibold text-center items-center"
          style={{ fontFamily: "var(--font-bebas-nueue)" }}
        >
          {address && (
            <Link href="/my-cats">
              <Avatar />
            </Link>
          )}
          <Link href="/create" className="hover:text-[#6A0DAD]">
            CREATE TNT
          </Link>
          <Link href="/#Contact" className="hover:text-[#6A0DAD]">
            ABOUT US
          </Link>
          {/* Connect Wallet and Light/Dark Toggle for Desktop */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <ModeToggle />
          </div>
          <div className="text-sm">
            <ConnectButton />
          </div>
        </nav>

        {/* <ConnectButton/> */}
      </div>
    </header>
  );
};

export default Navbar;
