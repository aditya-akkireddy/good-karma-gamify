
export function Sponsors() {
  const sponsors = [
    { name: "Campus Café", logo: "☕" },
    { name: "Student Union", logo: "🏛️" },
    { name: "Local Bookstore", logo: "📚" },
    { name: "Community Center", logo: "🏢" },
    { name: "City Library", logo: "🏫" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
          Our Campus Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col items-center transition-all duration-300 opacity-70 hover:opacity-100 group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {sponsor.logo}
              </div>
              <span className="text-sm font-medium">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
