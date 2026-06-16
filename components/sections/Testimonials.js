import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/sections";

/** Client quotes. `heading` is optional for pages with their own PageHeader. */
export default function Testimonials({ heading = true }) {
  return (
    <section className="sec alt" id="clients">
      <div className="wrap">
        {heading && <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />}
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
