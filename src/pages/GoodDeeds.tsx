
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceRequests } from "@/components/service-requests";
import { ServiceCategories } from "@/components/service-categories";
import { useState } from "react";

export type ServiceCategory = "parcel" | "notes" | "study" | "all";

const GoodDeeds = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
              <span className="text-gradient">Good Deeds</span>
            </h1>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Help out your fellow students and earn tokens for your kindness
            </p>
            
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
