"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Share2, Settings } from "lucide-react";

const steps = [
  {
    title: "Create",
    description:
      "Create your own Trust Network Token standard with custom parameters, trust levels, and metadata.",
    icon: <CheckCircle className="h-12 w-12 text-purple-400" />,
    bg: "#2F1246",
  },
  {
    title: "Issue",
    description:
      "Issue TNTs to individuals or organizations to establish verifiable trust relationships on the blockchain.",
    icon: <Share2 className="h-12 w-12 text-amber-400" />,
    bg: "#3C1E0C",
  },
  {
    title: "Manage",
    description:
      "Manage, update, or revoke tokens as trust relationships evolve over time with complete control.",
    icon: <Settings className="h-12 w-12 text-blue-400" />,
    bg: "#132046",
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            TNT provides a simple yet powerful framework for establishing trust
            relationships on the blockchain in just three easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-slate-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-700/10 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: step.bg }}
            >
              <CardHeader className="pb-2">
                <div className="mb-5">{step.icon}</div>
                <CardTitle className="text-2xl font-bold text-white">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block mx-auto p-px bg-gradient-to-r from-transparent via-slate-500 to-transparent w-24" />
          <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto">
            TNTs form the foundation of a decentralized trust ecosystem,
            enabling communities, institutions, and individuals to establish
            verifiable credibility.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
