
import { useState } from "react";
import { Package, FileText, Users, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCategory } from "@/pages/GoodDeeds";
import { useTokens } from "@/contexts/TokenContext";
import { useToast } from "@/hooks/use-toast";

interface ServiceRequest {
  id: string;
  type: "parcel" | "notes" | "study";
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  tokenReward: number;
  requester: string;
}

// Mock data for service requests
const mockRequests: ServiceRequest[] = [
  {
    id: "1",
    type: "parcel",
    title: "Pick up package from reception",
    description: "Need someone to collect my Amazon package from the campus reception and bring it to Hostel Block 1.",
    location: "Campus Reception → Hostel Block 1",
    date: "Apr 15, 2025",
    time: "3:00 PM - 5:00 PM",
    tokenReward: 20,
    requester: "Harsh"
  },
  {
    id: "2",
    type: "notes",
    title: "CS301 Lecture Notes",
    description: "Missed today's Algorithm Design lecture. Need someone to share their notes for today's class.",
    location: "Online Delivery",
    date: "Apr 15, 2025",
    time: "By 8:00 PM",
    tokenReward: 15,
    requester: "Priya"
  },
  {
    id: "3",
    type: "study",
    title: "Math Final Exam Study Group",
    description: "Looking for 3-4 people to join a study group for the upcoming Calculus final. I can explain integration techniques well.",
    location: "Library Study Room 4",
    date: "Apr 18, 2025",
    time: "6:00 PM - 8:00 PM",
    tokenReward: 25,
    requester: "Akshaya"
  },
  {
    id: "4",
    type: "parcel",
    title: "Collect textbook from bookstore",
    description: "Need the Economics 101 textbook picked up from the campus bookstore and delivered to my dorm.",
    location: "Campus Bookstore → Dorm B-12",
    date: "Apr 16, 2025",
    time: "12:00 PM - 2:00 PM",
    tokenReward: 18,
    requester: "Tanish"
  },
  {
    id: "5",
    type: "notes",
    title: "Biology Lab Notes",
    description: "Need photos of all the lab notes from today's session. I had to leave early for a doctor's appointment.",
    location: "Online Delivery",
    date: "Apr 15, 2025",
    time: "By 10:00 PM",
    tokenReward: 15,
    requester: "Mahesh"
  },
  {
    id: "6",
    type: "study",
    title: "Programming Project Help",
    description: "Working on the final project for Java class. Looking for someone to help debug my code and explain concepts.",
    location: "Computer Lab 3",
    date: "Apr 17, 2025",
    time: "4:00 PM - 6:00 PM",
    tokenReward: 30,
    requester: "Prajwal"
  }
];

export function ServiceRequests({ category }: { category: ServiceCategory }) {
  const { addTokens, isLoggedIn } = useTokens();
  const { toast } = useToast();
  const [acceptedRequests, setAcceptedRequests] = useState<string[]>([]);
  
  // Filter requests by category if not "all"
  const filteredRequests = category === "all" 
    ? mockRequests 
    : mockRequests.filter(request => request.type === category);

  const handleAccept = (request: ServiceRequest) => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to accept service requests",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would call an API to accept the request
    setAcceptedRequests(prev => [...prev, request.id]);
    toast({
      title: "Request Accepted!",
      description: `You'll earn ${request.tokenReward} tokens when completed.`,
    });
    
    // Simulate completing the request (in a real app this would be another step)
    setTimeout(() => {
      addTokens(request.tokenReward);
      toast({
        title: "Deed Completed!",
        description: `You've earned ${request.tokenReward} tokens for your good deed.`,
      });
    }, 3000);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "parcel": return <Package className="h-5 w-5 text-primary" />;
      case "notes": return <FileText className="h-5 w-5 text-secondary-dark" />;
      case "study": return <Users className="h-5 w-5 text-accent" />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRequests.length > 0 ? (
        filteredRequests.map((request) => (
          <Card key={request.id} className="card-hover border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                {getIcon(request.type)}
                <div className="text-xs font-medium px-2 py-1 rounded-full bg-muted">
                  {request.type === "parcel" && "Parcel Delivery"}
                  {request.type === "notes" && "Note Exchange"}
                  {request.type === "study" && "Study Group"}
                </div>
              </div>
              <CardTitle>{request.title}</CardTitle>
              <CardDescription>{request.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{request.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{request.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{request.time}</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="token-display">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                    <span className="font-medium">{request.tokenReward} tokens</span>
                  </div>
                  <span className="text-muted-foreground text-xs">Requested by {request.requester}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleAccept(request)} 
                className="w-full"
                disabled={acceptedRequests.includes(request.id)}
                variant={acceptedRequests.includes(request.id) ? "outline" : "default"}
              >
                {acceptedRequests.includes(request.id) ? "Accepted" : "Accept Request"}
                {!acceptedRequests.includes(request.id) && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground text-center mb-4">No requests found in this category.</p>
          <Button variant="outline" onClick={() => {}}>Create a Request</Button>
        </div>
      )}
    </div>
  );
}
