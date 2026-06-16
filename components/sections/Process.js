import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/content/sections";

/** Four-step "how we work" timeline. */
export default function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} />
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
