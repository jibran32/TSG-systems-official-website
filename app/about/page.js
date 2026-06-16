import PageHeader from "@/components/ui/PageHeader";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { about } from "@/content/sections";

export const metadata = {
  title: "About — TSG Systems",
  description: about.lead,
};

/** /about — who we are, the numbers, and what clients say. */
export default function AboutPage() {
  return (
    <main className="page">
      <PageHeader eyebrow={about.eyebrow} title={about.title} breadcrumb="About" lead={about.lead} />
      <About heading={false} />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  );
}
