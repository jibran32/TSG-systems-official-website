import { COUNT_UP } from "./config";

/**
 * Animates `[data-count]` numbers from 0 to their target (with optional
 * `data-suffix`) the first time each enters view, using an ease-out curve.
 */
export function countUp() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);

        const el = e.target;
        const end = +el.dataset.count;
        const suffix = el.dataset.suffix || "";
        let start = null;

        const step = (t) => {
          if (!start) start = t;
          const p = Math.min((t - start) / COUNT_UP.durationMs, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(ease * end) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }),
    { threshold: COUNT_UP.threshold }
  );

  document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));
  return () => io.disconnect();
}
