"use client";

import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import WalletLockScreen from "@/components/WalletLockScreen";

interface ProtectedRouteProviderProps {
  children: React.ReactNode;
}

export default function ProtectedRouteProvider({
  children,
}: ProtectedRouteProviderProps) {
  const { isConnected } = useAccount();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  // Public routes that don't require wallet connection
  const publicRoutes = ["/"];

  // Check if current route is public
  const isPublicRoute = publicRoutes.includes(pathname);

  useEffect(() => {
    // Add a small delay to prevent flash of loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Show loading state briefly to prevent flash
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
          </div>
          <p className="text-slate-400">Loading TNT...</p>
        </div>
      </div>
    );
  }

  // If the route is public or the user is connected, render the children
  if (isPublicRoute || isConnected) {
    return <>{children}</>;
  }

  // Otherwise, show the wallet lock screen
  return <WalletLockScreen />;
}
