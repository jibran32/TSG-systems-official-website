import SectionHeading from "@/components/ui/SectionHeading";
import { team } from "@/content/sections";

/**
 * Team grid — branded initial avatars, role, short bio, and skill tags. Data
 * lives in content/sections; add a `photo` field later to swap the avatar for
 * a real image without touching this markup.
 */
export default function Team({ heading = true }) {
  return (
    <section className="sec" id="team">
      <div className="wrap">
        {heading && <SectionHeading eyebrow={team.eyebrow} title={team.title} lead={team.lead} />}
        <div className="team">
          {team.members.map((m, i) => (
            <article className={`member reveal ${i ? `d${i}` : ""}`.trim()} key={m.name + m.role}>
              <span className="av" aria-hidden="true">{m.initials}</span>
              <b className="m-name">{m.name}</b>
              <span className="m-role">{m.role}</span>
              <p className="m-bio">{m.bio}</p>
              <ul className="m-tags">
                {m.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
