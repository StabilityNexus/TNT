"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Globe, Zap, Lock, Clock, Network } from "lucide-react";

const features = [
  {
    title: "Decentralized Trust",
    description:
      "Establish verifiable trust relationships that are stored permanently on the blockchain.",
    icon: <Network className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Revocable Tokens",
    description:
      "Unlike traditional NFTs, TNTs can be revoked if trust relationships change over time.",
    icon: <Shield className="h-10 w-10 text-amber-400" />,
  },
  {
    title: "Global Accessibility",
    description:
      "Access your trust network from anywhere in the world, without intermediaries.",
    icon: <Globe className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Lightning Fast",
    description:
      "Issue and manage tokens with near-instant transaction confirmation times.",
    icon: <Zap className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Enhanced Security",
    description:
      "Benefit from blockchain security that makes trust relationships tamper-proof.",
    icon: <Lock className="h-10 w-10 text-amber-400" />,
  },
  {
    title: "Historical Record",
    description:
      "Maintain a complete history of all trust relationships for accountability.",
    icon: <Clock className="h-10 w-10 text-blue-400" />,
  },
];

export function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="py-20 px-4 relative bg-black/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-800/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            TNT provides a comprehensive set of features designed to make trust
            relationships on the blockchain simple, secure, and powerful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-700/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-slate-800/70">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-300 ">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
