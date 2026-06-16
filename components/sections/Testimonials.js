import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/sections";

/** Client quotes. Remove from app/page.js if you have none yet. */
export default function Testimonials() {
  return (
    <section className="sec alt" id="clients">
      <div className="wrap">
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <div className="quote-wrap">
          {testimonials.quotes.map((q) => (
            <blockquote className={`quote reveal ${q.delay}`} key={q.initials}>
              <span className="mk">“</span>
              <p>{q.text}</p>
              <div className="who">
                <span className="av">{q.initials}</span>
                <div>
                  <b>{q.name}</b>
                  <small>{q.role}</small>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
