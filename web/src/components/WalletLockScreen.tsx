"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

interface WalletLockScreenProps {
  isEmbedded?: boolean;
}

export default function WalletLockScreen({
  isEmbedded = false,
}: WalletLockScreenProps) {
  if (isEmbedded) {
    return (
      <div className="flex flex-col items-center space-y-6 p-8">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-amber-400 opacity-20 blur-xl" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 opacity-70 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>
        <p className="text-lg text-slate-300 text-center">
          Connect your wallet to access this feature.
        </p>
        <ConnectButton />
      </div>
    );
  }

  // Full page version
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-60" />
      </div>{" "}
      <div className="max-w-md w-full z-10">
        <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-amber-400 opacity-20 blur-xl" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 opacity-70 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                Wallet Connection Required
              </span>
            </h2>
            <p className="text-slate-400 text-center">
              Connect your wallet to access this page
            </p>
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}
