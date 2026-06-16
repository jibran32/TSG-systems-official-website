import PageHeader from "@/components/ui/PageHeader";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import { services } from "@/content/sections";

export const metadata = {
  title: "Services — TSG Systems",
  description: services.lead,
};

/** /services — the five things we do, on their own screen. */
export default function ServicesPage() {
  return (
    <main className="page">
      <PageHeader eyebrow={services.eyebrow} title={services.title} lead={services.lead} />
      <Services heading={false} />
      <CTA />
    </main>
  );
}
