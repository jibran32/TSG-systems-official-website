export default function CTA() {
  return (
    <section className="sec" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band reveal">
          <div className="cta-inner">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s build</span>
            <h2 style={{ marginTop: 16 }}>Have something to build or automate?</h2>
            <p className="lead">
              Tell us what you&apos;re trying to do. We&apos;ll come back with a clear plan and an
              honest timeline — usually within a day.
            </p>
            <div className="hero-cta">
              {/* EDIT: email */}
              <a href="mailto:hello@tsgsystems.com" className="btn btn-primary" data-magnetic>
                hello@tsgsystems.com
              </a>
              {/* EDIT: phone */}
              <a href="tel:+920000000000" className="btn">Book a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
