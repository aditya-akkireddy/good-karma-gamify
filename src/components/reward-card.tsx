
import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTokens } from "@/contexts/TokenContext";

interface RewardCardProps {
  title: string;
  description: string;
  cost: number;
  imageSrc: string;
  onRedeem: () => void;
}

export function RewardCard({
  title,
  description,
  cost,
  imageSrc,
  onRedeem,
}: RewardCardProps) {
  const { tokens } = useTokens();
  const canAfford = tokens >= cost;

  return (
    <Card className="card-hover border border-border">
      <CardHeader className="pb-2">
        <div className="aspect-video w-full overflow-hidden rounded-md bg-muted mb-2">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-accent">
          <Coins className="h-5 w-5" />
          <span className="font-bold">{cost} tokens</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onRedeem} 
          className="w-full" 
          disabled={!canAfford}
          variant={canAfford ? "default" : "outline"}
        >
          {canAfford ? "Redeem Reward" : `Need ${cost - tokens} more tokens`}
        </Button>
      </CardFooter>
    </Card>
  );
}
