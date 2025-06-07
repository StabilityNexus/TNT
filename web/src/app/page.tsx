import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/LandingPage/hero-section";
import { HowItWorksSection } from "@/components/LandingPage/how-it-works-section";
import { FeaturesSection } from "@/components/LandingPage/features-section";
import { CtaSection } from "@/components/LandingPage/cta-section";
import { Footer } from "@/components/Footer";
import { ScrollAnimationProvider } from "@/components/scroll-animation-provider";

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <main className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white overflow-hidden">
        <Navbar />
        <HeroSection />
        <div>
          <HowItWorksSection />
          <FeaturesSection />
          <CtaSection />
          <Footer />
        </div>
      </main>
    </ScrollAnimationProvider>
  );
}
