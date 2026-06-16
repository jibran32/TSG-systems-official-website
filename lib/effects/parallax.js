import { listenerBag } from "../dom";
import { PARALLAX } from "./config";

/**
 * Depth parallax for the fixed background layers. Tracks the normalised
 * pointer position, eases toward it, and offsets each `.bg .layer` by its
 * `data-depth` plus a gentle time-based drift.
 *
 * Returns `{ frame, cleanup }`: register `frame` with the shared ticker.
 */
export function parallax() {
  const layers = [...document.querySelectorAll(".bg .layer")];
  const bag = listenerBag();

  let mx = 0,
    my = 0,
    curX = 0,
    curY = 0;

  bag.on(window, "mousemove", (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });

  const frame = (t) => {
    curX += (mx - curX) * PARALLAX.ease;
    curY += (my - curY) * PARALLAX.ease;
    const time = t * 0.001;
    layers.forEach((l, i) => {
      const d = +l.dataset.depth;
      const dr = +l.dataset.drift || 0;
      const px = curX * d * PARALLAX.depthScale + Math.sin(time * PARALLAX.driftFreqX + i) * dr;
      const py = curY * d * PARALLAX.depthScale + Math.cos(time * PARALLAX.driftFreqY + i) * dr;
      l.style.transform = `translate3d(${px}px,${py}px,0)`;
    });
  };

  return { frame, cleanup: bag.cleanup };
}
