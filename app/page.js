import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Highlights from "@/components/sections/Highlights";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

/**
 * Home — a lean landing screen. The hero sets the tone, the marquee and stats
 * give proof, and the highlights grid is the doorway into each dedicated page
 * (Services, Products, Process, About, Team, Contact). Deep content lives on
 * those screens so nothing here turns into an endless scroll.
 */
export default function Home() {
  return (
    <main className="page">
      <Hero />
      <Marquee />
      <Highlights />
      <Stats />
      <CTA />
    </main>
  );
}
