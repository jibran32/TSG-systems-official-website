import { listenerBag } from "../dom";
import { MAGNET } from "./config";

/**
 * "Magnetic" pull toward the cursor for `[data-magnetic]` buttons.
 * Motion-only (skipped under prefers-reduced-motion by the orchestrator).
 */
export function magneticButtons() {
  const bag = listenerBag();

  document.querySelectorAll("[data-magnetic]").forEach((b) => {
    const move = (e) => {
      const r = b.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * MAGNET.strengthX;
      const dy = (e.clientY - r.top - r.height / 2) * MAGNET.strengthY + MAGNET.offsetY;
      b.style.transform = `translate(${dx}px,${dy}px)`;
    };
    const leave = () => (b.style.transform = "");
    bag.on(b, "mousemove", move);
    bag.on(b, "mouseleave", leave);
  });

  return bag.cleanup;
}
