/**
 * A single shared requestAnimationFrame loop.
 *
 * Multiple per-frame animations (parallax, node network) subscribe here
 * instead of each running their own rAF. This keeps one loop for the whole
 * page (the original performance choice) while letting new frame-driven
 * effects be added without touching existing ones (Open/Closed).
 *
 * Each subscriber is `(timestamp) => void`.
 */
export function createTicker() {
  const subscribers = [];
  let rafId = null;

  const frame = (t) => {
    for (const fn of subscribers) fn(t);
    rafId = requestAnimationFrame(frame);
  };

  return {
    add(fn) {
      if (typeof fn === "function") subscribers.push(fn);
    },
    start() {
      if (rafId == null) rafId = requestAnimationFrame(frame);
    },
    stop() {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = null;
    },
  };
}
