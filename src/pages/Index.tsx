
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Leaderboard } from "@/components/leaderboard";
import { Sponsors } from "@/components/sponsors";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

const Index = () => {
  // Set dark mode as default on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Leaderboard />
      <Sponsors />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
