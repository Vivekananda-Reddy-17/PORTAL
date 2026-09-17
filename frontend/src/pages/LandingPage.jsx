import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TechStack from "../components/TechStack";
import Capabilities from "../components/Capabilities";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-white">
      <Navbar />

      <Hero />

      <Features />

      <TechStack />

      <Capabilities />

      <CTA />

      <Footer />
    </main>
  );
}

export default LandingPage;