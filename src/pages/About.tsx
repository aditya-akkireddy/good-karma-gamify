
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HowItWorks } from "@/components/how-it-works";
import { MissionSection } from "@/components/mission-section";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
              <span className="text-gradient">About DeedItUp</span>
            </h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Learn more about our platform and how we're building a helpful campus community
            </p>
            
            <MissionSection />
          </div>
        </section>
        
        <HowItWorks />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="text-gradient">Our Team</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 mb-4 flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
                <h3 className="text-xl font-semibold mb-1">Aditya Akkireddy</h3>
                <p className="text-muted-foreground text-center mb-2">Team Leader</p>
                <a 
                  href="https://www.linkedin.com/in/aditya-akkireddy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-secondary/20 mb-4 flex items-center justify-center text-4xl">
                  👩‍🎓
                </div>
                <h3 className="text-xl font-semibold mb-1">Akshaya S</h3>
                <p className="text-muted-foreground text-center mb-2">Member</p>
                <a 
                  href="https://www.linkedin.com/in/akshaya-s-522499230/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-accent/20 mb-4 flex items-center justify-center text-4xl">
                  🧑‍🚀
                </div>
                <h3 className="text-xl font-semibold mb-1">Nidhin Sam</h3>
                <p className="text-muted-foreground text-center mb-2">Member</p>
                <a 
                  href="https://www.linkedin.com/in/nidhin-sam-81343a2b4/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 mb-4 flex items-center justify-center text-4xl">
                  👨‍🔬
                </div>
                <h3 className="text-xl font-semibold mb-1">Deekshith Mahadev AS</h3>
                <p className="text-muted-foreground text-center mb-2">Member</p>
                <a 
                  href="https://www.linkedin.com/in/deekshith-mahadev-a-s-01b800281/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
