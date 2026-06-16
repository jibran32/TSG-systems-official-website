import { techStack } from "@/content/site";

/**
 * Infinite scrolling tech strip. The set is duplicated so the CSS -50%
 * translate loops seamlessly.
 */
export default function Marquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="strip" aria-hidden="true">
      <div className="track t1">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
