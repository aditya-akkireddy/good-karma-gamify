
import { Target, Heart, Star } from "lucide-react";

export function MissionSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card rounded-xl p-8 border border-border mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Target className="h-12 w-12 text-primary" />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A token-based platform that incentivizes students to help peers with parcel pickups, 
              study sessions, and last-minute note sharing through a reward systems which can be 
              redeemed in multiple ways for example canteen coupons, subscriptions, etc.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-secondary-dark" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Building Community</h4>
                  <p className="text-sm text-muted-foreground">Connecting students through acts of kindness and mutual support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Recognizing Helpers</h4>
                  <p className="text-sm text-muted-foreground">Rewarding those who go out of their way to assist fellow students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-card rounded-xl p-8 border border-border mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🤝</span>
            </div>
            <h4 className="font-semibold mb-2">Community First</h4>
            <p className="text-sm text-muted-foreground">We believe in the power of collaborative campus communities</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-secondary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <h4 className="font-semibold mb-2">Efficiency</h4>
            <p className="text-sm text-muted-foreground">Streamlining help requests for quick and timely assistance</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-accent/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="font-semibold mb-2">Win-Win Solutions</h4>
            <p className="text-sm text-muted-foreground">Creating value for both helpers and those who need assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
