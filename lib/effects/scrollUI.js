import { listenerBag } from "../dom";
import { SCROLL } from "./config";

/**
 * Scroll-driven chrome: toggles the header's "scrolled" state, advances the
 * top progress bar, and fades the hero scroll cue.
 */
export function scrollUI() {
  const bag = listenerBag();
  const hdr = document.getElementById("hdr");
  const prog = document.getElementById("prog");
  const cue = document.getElementById("cue");

  const onScroll = () => {
    if (hdr) hdr.classList.toggle("scrolled", scrollY > SCROLL.navScrolledAfter);
    const doc = document.documentElement;
    if (prog) prog.style.width = (scrollY / (doc.scrollHeight - doc.clientHeight)) * 100 + "%";
    if (cue) cue.style.opacity = scrollY > SCROLL.cueHiddenAfter ? "0" : SCROLL.cueOpacity;
  };

  bag.on(window, "scroll", onScroll);
  return bag.cleanup;
}
