import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { highlights } from "@/content/sections";

/**
 * Home-page quick navigation: a grid of link cards, one per screen. Keeps the
 * landing page light while still being a doorway into every section.
 */
export default function Highlights() {
  return (
    <section className="sec" id="explore">
      <div className="wrap">
        <SectionHeading eyebrow={highlights.eyebrow} title={highlights.title} lead={highlights.lead} />
        <div className="nav-cards">
          {highlights.items.map((item, i) => (
            <Link className={`nav-card reveal ${i % 3 ? `d${i % 3}` : ""}`.trim()} href={item.href} key={item.href + item.title}>
              <span className="ic">{item.icon}</span>
              <b>{item.title}</b>
              <p>{item.body}</p>
              <span className="go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
