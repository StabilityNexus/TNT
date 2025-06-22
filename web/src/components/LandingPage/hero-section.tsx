"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import Image from "next/image";
import TNT from "@/components/icons/TNT.svg";
import Link from "next/link";
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for initial animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper
      id="hero"
      className={`min-h-screen pt-14 pb-12 px-4 flex items-center relative overflow-hidden`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl" />
      </div>

      <div
        className={`max-w-7xl mx-auto w-full z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-900/40 border border-purple-700/50 backdrop-blur-sm">
                <span className="text-sm font-medium text-purple-300">
                  The Future of Trust
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Decentralized Trust</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400">
                  Network Tokens
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto lg:mx-0">
              Issue and revoke ERC721 tokens that represent trust relationships
              between individuals and organizations on the blockchain.
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/create" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white shadow-lg shadow-purple-700/20"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                onClick={() => scrollToSection("#how-it-works")}
                size="lg"
                variant="outline"
                className="w-full md:w-auto border-slate-700 bg-inherit text-white hover:text-white hover:bg-slate-800"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] hidden lg:block lg:h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-40 h-40 md:w-56 md:h-56 animate-slow-spin">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-amber-400 opacity-20 blur-xl" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 opacity-70" />
                  <div className="absolute inset-8 rounded-full bg-black" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={TNT}
                      alt="TNT Logo"
                      width={80}
                      height={80}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[30%] right-[20%] w-16 h-16 rounded-full bg-purple-500/20 animate-pulse" />
              <div className="absolute bottom-[25%] left-[30%] w-12 h-12 rounded-full bg-amber-500/20 animate-pulse delay-300" />
              <div className="absolute top-[70%] right-[30%] w-10 h-10 rounded-full bg-blue-500/20 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
