import { listenerBag } from "../dom";
import { TILT } from "./config";

/**
 * 3D pointer tilt for `.tilt` cards, plus the `--mx/--my` custom properties
 * that position each card's hover spotlight. Motion-only (skipped under
 * prefers-reduced-motion by the orchestrator).
 */
export function cardTilt() {
  const bag = listenerBag();

  document.querySelectorAll(".tilt").forEach((card) => {
    const move = (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.transform = `perspective(${TILT.perspective}px) rotateY(${(px - 0.5) * TILT.maxRotateDeg}deg) rotateX(${(0.5 - py) * TILT.maxRotateDeg}deg) translateY(${TILT.lift}px)`;
      card.style.setProperty("--mx", px * 100 + "%");
      card.style.setProperty("--my", py * 100 + "%");
    };
    const leave = () => (card.style.transform = "");
    bag.on(card, "mousemove", move);
    bag.on(card, "mouseleave", leave);
  });

  return bag.cleanup;
}
