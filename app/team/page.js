import PageHeader from "@/components/ui/PageHeader";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import { team } from "@/content/sections";

export const metadata = {
  title: "Team — TSG Systems",
  description: team.lead,
};

/** /team — the senior people who design, build, and hand over your software. */
export default function TeamPage() {
  return (
    <main className="page">
      <PageHeader eyebrow={team.eyebrow} title={team.title} lead={team.lead} />
      <Team heading={false} />
      <CTA />
    </main>
  );
}
