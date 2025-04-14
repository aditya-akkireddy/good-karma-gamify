
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Earning Good Karma?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Join DeedItUp today and turn your good deeds into real rewards. It only takes a minute to sign up!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#join" 
            className="bg-white text-primary font-medium px-6 py-3 rounded-lg 
                    hover:bg-opacity-90 transition-all duration-300 
                    flex items-center justify-center gap-2"
          >
            Create Account <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#learn-more" 
            className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-lg 
                    hover:bg-white/10 transition-all duration-300
                    flex items-center justify-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
