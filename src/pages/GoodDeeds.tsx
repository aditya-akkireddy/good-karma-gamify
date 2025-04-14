
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceRequests } from "@/components/service-requests";
import { ServiceCategories } from "@/components/service-categories";
import { CreateRequest } from "@/components/create-request";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export type ServiceCategory = "parcel" | "notes" | "study" | "all";

const GoodDeeds = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [showCreateRequest, setShowCreateRequest] = useState(false);
  
  if (showCreateRequest) {
    return <CreateRequest onClose={() => setShowCreateRequest(false)} />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="text-gradient">Good Deeds</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                  Help out your fellow students and earn tokens for your kindness
                </p>
              </div>
              <Button 
                onClick={() => setShowCreateRequest(true)}
                className="mt-4 md:mt-0 bg-primary hover:bg-primary/90"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Request
              </Button>
            </div>
            
            <ServiceCategories 
              activeCategory={activeCategory} 
              onSelectCategory={setActiveCategory} 
            />
            
            <ServiceRequests category={activeCategory} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoodDeeds;
