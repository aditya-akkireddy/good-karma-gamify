
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RewardCard } from "@/components/reward-card";
import { useToast } from "@/hooks/use-toast";
import { useTokens } from "@/contexts/TokenContext";

const Rewards = () => {
  const { tokens } = useTokens();
  const { toast } = useToast();

  const handleRedeem = (rewardName: string, cost: number) => {
    if (tokens < cost) {
      toast({
        title: "Insufficient tokens",
        description: `You need ${cost - tokens} more tokens to redeem this reward.`,
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would call an API to redeem the reward
    toast({
      title: "Reward Redeemed!",
      description: `You've successfully redeemed ${rewardName}. Check your email for details.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
              <span className="text-gradient">Rewards Marketplace</span>
            </h1>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Exchange your hard-earned tokens for exclusive rewards and discounts
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <RewardCard 
                title="Mayuri Canteen Coupon"
                description="₹100 discount coupon for Mayuri Canteen"
                cost={50}
                imageSrc="/placeholder.svg"
                onRedeem={() => handleRedeem("Mayuri Canteen Coupon", 50)}
              />
              
              <RewardCard 
                title="Library Late Fee Waiver"
                description="One-time waiver for library late return fees"
                cost={75}
                imageSrc="/placeholder.svg"
                onRedeem={() => handleRedeem("Library Late Fee Waiver", 75)}
              />
              
              <RewardCard 
                title="Campus Cafe Coffee"
                description="Free coffee at the Campus Cafe"
                cost={30}
                imageSrc="/placeholder.svg"
                onRedeem={() => handleRedeem("Campus Cafe Coffee", 30)}
              />
              
              <RewardCard 
                title="Study Room Booking"
                description="Priority booking for premium study rooms"
                cost={100}
                imageSrc="/placeholder.svg"
                onRedeem={() => handleRedeem("Study Room Booking", 100)}
              />
              
              <RewardCard 
                title="Printing Credits"
                description="50 pages of free printing at the campus center"
                cost={60}
                imageSrc="/placeholder.svg"
                onRedeem={() => handleRedeem("Printing Credits", 60)}
              />
              
              <RewardCard 
                title="Gym Pass"
                description="One-day pass to the premium campus gym"
                cost={80}
                imageSrc="/placeholder.svg"
                onRedeem={() => handleRedeem("Gym Pass", 80)}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
