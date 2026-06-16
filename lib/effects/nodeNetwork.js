import { listenerBag } from "../dom";
import { isLight } from "../theme";
import { NETWORK } from "./config";

/**
 * The "constellation": drifting nodes joined by proximity lines, with extra
 * lines drawn toward the cursor. Colours are resolved per-theme each frame so
 * it stays legible on both white and dark backgrounds. Sizes itself to the
 * canvas's parent, so the same effect powers the global backdrop and any
 * section that drops in a `[data-net]` canvas.
 *
 * @param {HTMLCanvasElement} canvas  the target canvas to draw into.
 * @param {{ animated?: boolean }} options
 *   animated=true  → returns { frame, cleanup }; register `frame` with the ticker.
 *   animated=false → draws a single static field (reduced motion) and returns { cleanup }.
 */
export function nodeNetwork(canvas, { animated = true } = {}) {
  if (!canvas) return { cleanup: () => {} };
  const ctx = canvas.getContext("2d");

  // --- reduced-motion: one static dot field, no loop, no listeners ---
  if (!animated) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.fillStyle = isLight() ? NETWORK.light.staticFill : NETWORK.dark.staticFill;
    for (let i = 0; i < NETWORK.staticDotCount; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, NETWORK.nodeRadius, 0, 7);
      ctx.fill();
    }
    return { cleanup: () => {} };
  }

  const bag = listenerBag();
  let W = 0,
    H = 0,
    nodes = [];
  const mouse = { x: -999, y: -999 };

  const build = () => {
    const count = Math.min(NETWORK.maxNodes, Math.round((W * H) / NETWORK.areaPerNode));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * NETWORK.speed,
      vy: (Math.random() - 0.5) * NETWORK.speed,
    }));
  };

  const size = () => {
    const r = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = r.width;
    H = canvas.height = r.height;
    build();
  };

  bag.on(window, "resize", size);
  bag.on(window, "mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  bag.on(window, "mouseout", () => {
    mouse.x = mouse.y = -999;
  });
  size();

  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    const c = isLight() ? NETWORK.light : NETWORK.dark;

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    }

    for (let a = 0; a < nodes.length; a++) {
      for (let b = a + 1; b < nodes.length; b++) {
        const p = nodes[a],
          q = nodes[b];
        const dd = Math.hypot(p.x - q.x, p.y - q.y);
        if (dd < NETWORK.linkDistance) {
          ctx.strokeStyle = `rgba(${c.lineRGB},${(1 - dd / NETWORK.linkDistance) * c.lineMax})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
      const p = nodes[a];
      const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (md < NETWORK.mouseDistance) {
        ctx.strokeStyle = `rgba(${c.mouseRGB},${(1 - md / NETWORK.mouseDistance) * c.mouseMax})`;
        ctx.lineWidth = c.mouseWidth;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    for (const n of nodes) {
      ctx.fillStyle = c.nodeFill;
      ctx.beginPath();
      ctx.arc(n.x, n.y, NETWORK.nodeRadius, 0, 7);
      ctx.fill();
    }
  };

  return { frame, cleanup: bag.cleanup };
}
