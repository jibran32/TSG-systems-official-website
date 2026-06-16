import { site } from "@/content/site";
import { cta } from "@/content/sections";

/** Closing contact band. Email/phone come from content/site. */
export default function CTA() {
  return (
    <section className="sec" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band reveal">
          <div className="cta-inner">
            <span className="eyebrow" style={{ justifyContent: "center" }}>{cta.eyebrow}</span>
            <h2 style={{ marginTop: 16 }}>{cta.title}</h2>
            <p className="lead">{cta.lead}</p>
            <div className="hero-cta">
              <a href={`mailto:${site.email}`} className="btn btn-primary" data-magnetic>
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="btn">Book a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
