import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/content/sections";

/**
 * Services grid — three-then-two responsive cards with hover tilt/spotlight.
 * `heading` can be turned off when the page already supplies a PageHeader, so
 * the same section works on the home page and on the dedicated /services screen.
 */
export default function Services({ heading = true }) {
  return (
    <section className="sec sec-net" id="services">
      <canvas className="sec-net-canvas" data-net aria-hidden="true" />
      <div className="wrap">
        {heading && <SectionHeading eyebrow={services.eyebrow} title={services.title} lead={services.lead} />}
        <div className="cards">
          {services.items.map((s) => (
            <article className={`card tilt reveal ${s.delay}`} key={s.num}>
              <div className="spot" />
              <div className="num">{s.num}</div>
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
