import PageHeader from "@/components/ui/PageHeader";
import Contact from "@/components/sections/Contact";
import { contact } from "@/content/sections";

export const metadata = {
  title: "Contact — TSG Systems",
  description: contact.lead,
};

/** /contact — channels + a backend-free message form. */
export default function ContactPage() {
  return (
    <main className="page">
      <PageHeader eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />
      <Contact />
    </main>
  );
}
