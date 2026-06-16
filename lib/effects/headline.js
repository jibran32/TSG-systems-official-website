import { HEADLINE } from "./config";

/**
 * Splits the hero headline into per-word <span>s and assigns staggered
 * transition delays so they rise in sequence once `body.loaded` is set.
 * Guards against running twice (the dataset flag) for hot-reload safety.
 */
export function animateHeadline() {
  const h = document.getElementById("headline");

  if (h && !h.dataset.split) {
    h.dataset.split = "1";
    [...h.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (part.trim()) {
            const s = document.createElement("span");
            s.className = "w";
            s.textContent = part;
            frag.appendChild(s);
          } else {
            frag.appendChild(document.createTextNode(part));
          }
        });
        h.replaceChild(frag, n);
      } else if (n.classList && n.classList.contains("grad")) {
        n.classList.add("w");
      }
    });
    let i = 0;
    h.querySelectorAll(".w").forEach((w) => {
      w.style.transitionDelay = HEADLINE.baseDelay + i * HEADLINE.stagger + "s";
      i++;
    });
  }

  document.body.classList.add("loaded");
}
