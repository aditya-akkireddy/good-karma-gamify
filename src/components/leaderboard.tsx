
import { Crown, Medal, Trophy } from "lucide-react";
import { useState } from "react";
import { useTokens } from "@/contexts/TokenContext";

// Mock leaders data
const initialLeaders = [
  { name: "Alex", tokens: 150, avatar: "👑" },
  { name: "Priya", tokens: 120, avatar: "🚀" },
  { name: "Jordan", tokens: 95, avatar: "🔥" },
  { name: "Taylor", tokens: 82, avatar: "⭐" },
  { name: "Morgan", tokens: 78, avatar: "💫" },
];

export function Leaderboard() {
  const [leaders] = useState(initialLeaders);
  const { tokens, isLoggedIn } = useTokens();

  return (
    <section id="leaderboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Leaderboard</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Our top karma collectors making a difference in the community
        </p>

        {/* User's tokens display when logged in */}
        {isLoggedIn && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
            <span className="font-medium">Your Tokens</span>
            <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1">
              <Coins className="w-4 h-4" />
              <span className="font-medium">{tokens}</span>
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          {leaders.map((leader, index) => {
            // Determine what icon to show based on position
            let Icon = null;
            if (index === 0) Icon = Trophy;
            else if (index === 1) Icon = Medal;
            else if (index === 2) Icon = Crown;

            return (
              <div 
                key={index}
                className={`flex items-center justify-between p-4 mb-3 rounded-xl bg-card border border-border card-hover ${
                  index === 0 ? "bg-gradient-to-r from-accent/10 to-transparent border-accent/20" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-lg bg-muted rounded-full">
                    {index < 3 ? (
                      <Icon className={`w-5 h-5 ${index === 0 ? "text-accent" : "text-primary"}`} />
                    ) : (
                      <span className="text-muted-foreground font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{leader.avatar}</span>
                    <span className="font-medium">{leader.name}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1">
                    <Coins className="w-4 h-4" />
                    <span className="font-medium">{leader.tokens}</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-center mt-8">
            <button className="bg-primary/10 hover:bg-primary/20 text-foreground border border-primary/10 px-4 py-2 rounded-lg transition-colors">
              View Complete Leaderboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coins({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}
