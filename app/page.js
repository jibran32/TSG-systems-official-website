import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

/**
 * Home page composition — the ordered list of sections. Reorder or remove a
 * line to change the page; each section owns its own markup and content.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Products />
      <Process />
      <Stats />
      <Testimonials />
      <About />
      <CTA />
    </>
  );
}
