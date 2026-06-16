import { listenerBag } from "../dom";

/**
 * Moves the radial spotlight overlay to follow the cursor by writing
 * `--sx/--sy` on the #spot element. Motion-only.
 */
export function spotlight() {
  const spot = document.getElementById("spot");
  if (!spot) return undefined;

  const bag = listenerBag();
  bag.on(window, "mousemove", (e) => {
    spot.style.setProperty("--sx", e.clientX + "px");
    spot.style.setProperty("--sy", e.clientY + "px");
  });
  return bag.cleanup;
}
