import { listenerBag } from "../dom";
import { createTicker } from "./ticker";
import { animateHeadline } from "./headline";
import { scrollUI } from "./scrollUI";
import { themeToggle } from "./themeToggle";
import { mobileMenu } from "./mobileMenu";
import { revealOnScroll } from "./reveal";
import { countUp } from "./countUp";
import { cardTilt } from "./tilt";
import { magneticButtons } from "./magnetic";
import { spotlight } from "./spotlight";
import { parallax } from "./parallax";
import { nodeNetwork } from "./nodeNetwork";

/**
 * Composition root for all client-side effects.
 *
 * Each effect is a self-contained unit exposing a uniform contract — either
 * `() => cleanup` or `{ frame, cleanup }` for frame-driven ones. This module
 * just wires them together: always-on effects first, then motion-only effects
 * (skipped under prefers-reduced-motion). Adding or removing an effect means
 * one line here and a file in this folder — no existing module changes.
 *
 * @returns {() => void} teardown for everything that was started.
 */
export function initEffects() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bag = listenerBag();

  // Always-on (cheap, accessibility-safe).
  animateHeadline();
  bag.add(scrollUI());
  bag.add(themeToggle());
  bag.add(mobileMenu());
  bag.add(revealOnScroll());
  bag.add(countUp());

  // Every canvas tagged [data-net] gets its own constellation — the global
  // backdrop plus any section that opts in (e.g. the services section).
  const netCanvases = [...document.querySelectorAll("canvas[data-net]")];

  if (reduce) {
    // Static constellation only; no pointer-driven motion.
    netCanvases.forEach((c) => bag.add(nodeNetwork(c, { animated: false }).cleanup));
  } else {
    bag.add(cardTilt());
    bag.add(magneticButtons());
    bag.add(spotlight());

    const ticker = createTicker();
    const layers = parallax();
    ticker.add(layers.frame);
    netCanvases.forEach((c) => {
      const net = nodeNetwork(c, { animated: true });
      ticker.add(net.frame);
      bag.add(net.cleanup);
    });
    ticker.start();

    bag.add(layers.cleanup);
    bag.add(ticker.stop);
  }

  return bag.cleanup;
}
