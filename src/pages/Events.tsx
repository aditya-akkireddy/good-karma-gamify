
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventCard } from "@/components/event-card";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="text-gradient">Promotional Events</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Discover exciting campus events hosted by student clubs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <EventCard
                clubName="GSoC"
                title="Summer of Codefest'25"
                description="A power-packed day featuring tech sessions, fun quizzes and engaging activities where you'll learn, collaborate and win exciting prizes!"
                details={[
                  {
                    day: "Day 1 - 13th April (9:00 am-12:30 pm)",
                    activities: [
                      "Seminar, Ideathon & Technical Quiz",
                      "Crack GSoC(offline Round): Learn secrets from alumni & experts",
                      "Master GitHub(offline Round): Unlock its power (Get GitHub Education Plan)",
                      "Participate in a Technical Quiz to win exciting prizes",
                      "Ideathon(online Round): Top teams get shortlisted"
                    ]
                  },
                  {
                    day: "Day 2 - 14th April (9:00 am-7:30 pm)",
                    activities: [
                      "Hackathon(Offline Development Round)",
                      "Innovate, build, and compete for glory!",
                      "Refreshments + Dinner",
                      "Trophies, Certificates & Exclusive perks"
                    ]
                  }
                ]}
                venue="Auditorium AB2"
                teamSize="4 to 6 members"
                registrationFee="₹100 per person"
                contactEmail="ad2.sw@vitbhopal.ac.in"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
