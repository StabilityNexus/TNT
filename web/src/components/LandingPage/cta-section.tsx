"use client";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight, Shield, Users, Building } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <SectionWrapper id="cta" className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-purple-900/20 to-transparent blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/50 rounded-2xl p-8 md:p-12 shadow-xl shadow-purple-900/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Build Your Trust Network?
              </h2>
              <p className="text-lg text-slate-300">
                Join thousands of organizations and individuals already using
                TNT to establish verifiable trust on the blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/create">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white shadow-lg shadow-purple-700/20 group"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:text-white bg-inherit hover:bg-slate-800"
                >
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-amber-500/20 rounded-full blur-3xl opacity-30" />
              <div className="relative bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-xl p-6 shadow-inner">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Universities</h3>
                      <p className="text-sm text-slate-400">
                        Issue TNTs to certify graduate expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600/30 flex items-center justify-center">
                      <Users className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">DAOs</h3>
                      <p className="text-sm text-slate-400">
                        Distribute TNTs as trust badges to members
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center">
                      <Building className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Businesses</h3>
                      <p className="text-sm text-slate-400">
                        Issue TNTs to loyal customers as endorsements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
