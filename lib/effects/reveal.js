import { REVEAL_THRESHOLD } from "./config";

/**
 * Reveals `.reveal` elements as they scroll into view by adding `.in`,
 * then stops observing each one (a one-shot entrance).
 */
export function revealOnScroll() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: REVEAL_THRESHOLD }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  return () => io.disconnect();
}
