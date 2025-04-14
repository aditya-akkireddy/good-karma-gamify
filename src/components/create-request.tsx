
import { useState } from "react";
import { useTokens } from "@/contexts/TokenContext";
import { ArrowLeft, Package, FileText, Users, MapPin, Clock, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useToast } from "@/hooks/use-toast";
import { ServiceCategory } from "@/pages/GoodDeeds";

interface CreateRequestProps {
  onClose: () => void;
}

export function CreateRequest({ onClose }: CreateRequestProps) {
  const { tokens, isLoggedIn } = useTokens();
  const { toast } = useToast();
  const [requestType, setRequestType] = useState<ServiceCategory>("parcel");
  const [tokenOffer, setTokenOffer] = useState(5);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("normal");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to create a request",
        variant: "destructive",
      });
      return;
    }
    
    if (!title || !description || !location || !timeDate) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (tokens < tokenOffer) {
      toast({
        title: "Insufficient Tokens",
        description: "You don't have enough tokens for this offer",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would save to a database
    toast({
      title: "Request Created",
      description: "Your request has been posted successfully",
    });
    
    onClose();
  };

  const decreaseTokens = () => {
    if (tokenOffer > 1) {
      setTokenOffer(prev => prev - 1);
    }
  };

  const increaseTokens = () => {
    if (tokenOffer < tokens) {
      setTokenOffer(prev => prev + 1);
    }
  };
  
  const getRequestTitle = () => {
    switch(requestType) {
      case "parcel": return "Package Delivery Request";
      case "notes": return "Notes Exchange Request";
      case "study": return "Study Group Request";
      default: return "Service Request";
    }
  };
  
  const getRequestIcon = () => {
    switch(requestType) {
      case "parcel": return <Package className="h-5 w-5" />;
      case "notes": return <FileText className="h-5 w-5" />;
      case "study": return <Users className="h-5 w-5" />;
      default: return null;
    }
  };
  
  const getRequestPlaceholder = () => {
    switch(requestType) {
      case "parcel": return "e.g. Deliver package to Science Building";
      case "notes": return "e.g. Need notes for Biology lecture";
      case "study": return "e.g. Math Final Study Group";
      default: return "Enter request title";
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="bg-muted/30 p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={onClose} className="mr-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-xl md:text-2xl font-bold">New Request</h1>
      </div>
      
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <Tabs 
          defaultValue="parcel" 
          value={requestType}
          onValueChange={(value) => setRequestType(value as ServiceCategory)}
          className="mb-6"
        >
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="parcel" className="flex items-center gap-2">
              <Package className="h-4 w-4" /> Delivery
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Notes
            </TabsTrigger>
            <TabsTrigger value="study" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Study
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            {getRequestIcon()}
            <h2 className="text-lg font-semibold">{getRequestTitle()}</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Request Title</label>
              <Input 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={getRequestPlaceholder()}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <Textarea 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide details about your request..."
                className="min-h-[100px]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Campus location"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium">Time/Date</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="time"
                    value={timeDate}
                    onChange={(e) => setTimeDate(e.target.value)}
                    placeholder="When needed"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Urgency Level</label>
              <ToggleGroup 
                type="single" 
                value={urgencyLevel}
                onValueChange={(value) => {
                  if (value) setUrgencyLevel(value);
                }}
                className="justify-start"
              >
                <ToggleGroupItem value="low" className="rounded-l-md">Low</ToggleGroupItem>
                <ToggleGroupItem value="normal">Normal</ToggleGroupItem>
                <ToggleGroupItem value="high" className="rounded-r-md">High</ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Token Offer</label>
              <div className="flex items-center space-x-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  onClick={decreaseTokens}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="bg-muted rounded-md px-6 py-2 text-center min-w-[100px]">
                  <span className="font-medium">{tokenOffer}</span> tokens
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  onClick={increaseTokens}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
