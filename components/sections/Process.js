import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/content/sections";

/** Four-step "how we work" timeline. `heading` is optional for dedicated pages. */
export default function Process({ heading = true }) {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        {heading && <SectionHeading eyebrow={process.eyebrow} title={process.title} />}
        <div className="process reveal">
          {process.steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
