import { listenerBag } from "../dom";
import { toggleTheme } from "../theme";

/**
 * Wires the header theme button to the theme domain. The button only flips
 * state; reading/writing/persisting lives in lib/theme.
 */
export function themeToggle() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return undefined;

  const bag = listenerBag();
  bag.on(btn, "click", toggleTheme);
  return bag.cleanup;
}
