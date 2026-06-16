import PageHeader from "@/components/ui/PageHeader";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import { process } from "@/content/sections";

export const metadata = {
  title: "Process — TSG Systems",
  description: "How we work: a clear path from idea to running software — discover, design, build, and support.",
};

/** /process — how we work, step by step. */
export default function ProcessPage() {
  return (
    <main className="page">
      <PageHeader
        eyebrow={process.eyebrow}
        title={process.title}
        breadcrumb="Process"
        lead="A clear path from idea to running software — no surprises, and you see progress every week."
      />
      <Process heading={false} />
      <CTA />
    </main>
  );
}
