import HeroContent from "./HeroContent";
import Dashboard from "./dashboard/Dashboard";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Background */}

      <div className="absolute inset-0">
        {/* warm light */}

        <div className="absolute -left-40 top-32 h-[600px] w-[600px] rounded-full bg-orange-500/8 blur-[180px]" />

        {/* subtle amber */}

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[200px]" />

        {/* dark overlay */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, var(--background) 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-[1700px] grid-cols-1 items-center gap-24 px-8 pb-16 pt-28 lg:grid-cols-2 lg:px-16">
        <HeroContent />

        <Dashboard />
      </div>
    </section>
  );
}

export default Hero;
