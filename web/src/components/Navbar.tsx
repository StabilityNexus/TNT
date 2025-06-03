"use client";

import { useState, useEffect } from "react";
import TNT from "@/components/icons/TNT.svg";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Get Started", href: "#cta" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src={TNT} alt="TNT Logo" className="h-7 w-7" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-amber-300">
            TNT
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          {/* <Button
            onClick={() => scrollToSection("#cta")}
            className="bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white"
          >
            Connect Wallet
          </Button> */}
          <ConnectButton />
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg py-4">
          <nav className="flex flex-col items-center space-y-4 px-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-300 hover:text-white transition-colors duration-200 py-2"
              >
                {link.name}
              </button>
            ))}
            {/* <Button
              onClick={() => scrollToSection("#cta")}
              className="bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white w-full"
            >
              Connect Wallet
            </Button> */}
            <div className="w-full flex justify-center">
              <ConnectButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
