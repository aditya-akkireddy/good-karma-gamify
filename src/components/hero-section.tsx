
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const oneLiners = [
  "Return. Earn. Redeem.",
  "Kindness just became currency.",
  "Your campus runs on karma.",
  "Lost & found has never been this rewarding."
];

export function HeroSection() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % oneLiners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] dark:from-purple-900 dark:via-dark dark:to-gray-900 -z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-secondary">
            Turn Good Deeds
          </span>
          <br />
          Into Real Rewards
        </h1>

        {/* Animated one-liner */}
        <p className="text-xl md:text-2xl text-white/80 text-center max-w-xl mb-8 h-8 animate-fade-in">
          {oneLiners[currentLineIndex]}
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl mb-12 animate-fade-in">
          Earn tokens for helping peers. Redeem for campus perks!
        </p>

        {/* Animated coin */}
        <div className="relative w-32 h-32 mb-12">
          <div className="absolute inset-0 bg-accent rounded-full opacity-20 animate-ping-slow"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
            <div className="text-4xl">🪙</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center animate-scale-up">
          <Link to="/good-deeds" className="btn-primary">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
