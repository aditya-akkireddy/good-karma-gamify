
import { Camera, Coins, Gift } from "lucide-react";

const steps = [
  {
    title: "Log a Good Deed",
    description: "Share your act of kindness with a photo and brief description",
    icon: Camera,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Earn Tokens",
    description: "Get rewarded with tokens based on community verification",
    icon: Coins,
    color: "from-accent to-amber-500",
  },
  {
    title: "Redeem Rewards",
    description: "Exchange your tokens for real rewards from campus partners",
    icon: Gift,
    color: "from-primary to-purple-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient">How It Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-card rounded-xl p-6 card-hover border border-border"
            >
              <div className={`absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                <step.icon className="w-6 h-6" />
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                <p className="text-center text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full -translate-x-1/2 transform">
                  <div className="w-8 h-0.5 bg-border">
                    <div className="absolute right-0 -translate-y-1/2 rotate-45 w-2 h-0.5 bg-border"></div>
                    <div className="absolute right-0 translate-y-1/2 -rotate-45 w-2 h-0.5 bg-border"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
