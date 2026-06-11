"use client";
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];
    const on = (target, ev, fn, opts) => {
      target.addEventListener(ev, fn, opts);
      cleanups.push(() => target.removeEventListener(ev, fn, opts));
    };

    /* ---- animated headline (split into words, guard double-run) ---- */
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
            } else frag.appendChild(document.createTextNode(part));
          });
          h.replaceChild(frag, n);
        } else if (n.classList && n.classList.contains("grad")) {
          n.classList.add("w");
        }
      });
      let i = 0;
      h.querySelectorAll(".w").forEach((w) => {
        w.style.transitionDelay = 0.15 + i * 0.08 + "s";
        i++;
      });
    }
    document.body.classList.add("loaded");

    /* ---- nav scrolled + progress + scroll cue ---- */
    const hdr = document.getElementById("hdr");
    const prog = document.getElementById("prog");
    const cue = document.getElementById("cue");
    const onScroll = () => {
      if (hdr) hdr.classList.toggle("scrolled", scrollY > 20);
      const doc = document.documentElement;
      if (prog) prog.style.width = (scrollY / (doc.scrollHeight - doc.clientHeight)) * 100 + "%";
      if (cue) cue.style.opacity = scrollY > 120 ? "0" : ".7";
    };
    on(window, "scroll", onScroll);

    /* ---- theme toggle (persisted; initial theme is set pre-paint in layout) ---- */
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
      on(themeBtn, "click", () => {
        const root = document.documentElement;
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      });
    }

    /* ---- mobile menu ---- */
    const menuBtn = document.getElementById("menuBtn");
    const navlinks = document.getElementById("navlinks");
    if (menuBtn && navlinks) {
      const sync = (open) => {
        navlinks.classList.toggle("open", open);
        menuBtn.classList.toggle("open", open);
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      };
      on(menuBtn, "click", () => sync(!navlinks.classList.contains("open")));
      navlinks.querySelectorAll("a").forEach((a) => on(a, "click", () => sync(false)));
    }

    /* ---- reveal on scroll ---- */
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---- count-up ---- */
    const cio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target;
          const end = +el.dataset.count;
          const suf = el.dataset.suffix || "";
          let s = null;
          const step = (t) => {
            if (!s) s = t;
            const p = Math.min((t - s) / 1300, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(ease * end) + suf;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    let rafId = null;

    if (!reduce) {
      /* ---- card tilt + spotlight ---- */
      document.querySelectorAll(".tilt").forEach((card) => {
        const move = (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 7}deg) rotateX(${(0.5 - py) * 7}deg) translateY(-4px)`;
          card.style.setProperty("--mx", px * 100 + "%");
          card.style.setProperty("--my", py * 100 + "%");
        };
        const leave = () => (card.style.transform = "");
        on(card, "mousemove", move);
        on(card, "mouseleave", leave);
      });

      /* ---- magnetic buttons ---- */
      document.querySelectorAll("[data-magnetic]").forEach((b) => {
        const move = (e) => {
          const r = b.getBoundingClientRect();
          b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.35 - 2}px)`;
        };
        const leave = () => (b.style.transform = "");
        on(b, "mousemove", move);
        on(b, "mouseleave", leave);
      });

      /* ---- parallax background + spotlight + node network (one loop) ---- */
      const layers = [...document.querySelectorAll(".bg .layer")];
      const spot = document.getElementById("spot");
      const cv = document.getElementById("net");
      const cx = cv ? cv.getContext("2d") : null;
      let W = 0, H = 0, nodes = [];
      const mouse = { x: -999, y: -999 };
      let mx = 0, my = 0, curX = 0, curY = 0;

      const build = () => {
        const count = Math.min(74, Math.round((W * H) / 15000));
        nodes = Array.from({ length: count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
        }));
      };
      const size = () => {
        if (!cv) return;
        const r = cv.parentElement.getBoundingClientRect();
        W = cv.width = r.width;
        H = cv.height = r.height;
        build();
      };
      on(window, "resize", size);
      on(window, "mousemove", (e) => {
        mx = e.clientX / innerWidth - 0.5;
        my = e.clientY / innerHeight - 0.5;
        if (spot) {
          spot.style.setProperty("--sx", e.clientX + "px");
          spot.style.setProperty("--sy", e.clientY + "px");
        }
        if (cv) {
          const r = cv.getBoundingClientRect();
          mouse.x = e.clientX - r.left;
          mouse.y = e.clientY - r.top;
        }
      });
      on(window, "mouseout", () => {
        mouse.x = mouse.y = -999;
      });
      size();

      const loop = (t) => {
        curX += (mx - curX) * 0.06;
        curY += (my - curY) * 0.06;
        const time = t * 0.001;
        layers.forEach((l, i) => {
          const d = +l.dataset.depth;
          const dr = +l.dataset.drift || 0;
          const px = curX * d * 48 + Math.sin(time * 0.3 + i) * dr;
          const py = curY * d * 48 + Math.cos(time * 0.24 + i) * dr;
          l.style.transform = `translate3d(${px}px,${py}px,0)`;
        });
        if (cx) {
          cx.clearRect(0, 0, W, H);
          const light = document.documentElement.getAttribute("data-theme") === "light";
          /* light mode needs darker, stronger strokes to read on white */
          const lineRGB = light ? "30,110,82" : "19,162,142";
          const lineMax = light ? 0.5 : 0.22;
          const mouseRGB = light ? "89,140,30" : "154,201,60";
          const mouseMax = light ? 0.9 : 0.6;
          for (const n of nodes) {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
          }
          for (let a = 0; a < nodes.length; a++) {
            for (let b = a + 1; b < nodes.length; b++) {
              const p = nodes[a], q = nodes[b];
              const dd = Math.hypot(p.x - q.x, p.y - q.y);
              if (dd < 128) {
                cx.strokeStyle = `rgba(${lineRGB},${(1 - dd / 128) * lineMax})`;
                cx.lineWidth = 1;
                cx.beginPath();
                cx.moveTo(p.x, p.y);
                cx.lineTo(q.x, q.y);
                cx.stroke();
              }
            }
            const p = nodes[a];
            const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (md < 175) {
              cx.strokeStyle = `rgba(${mouseRGB},${(1 - md / 175) * mouseMax})`;
              cx.lineWidth = light ? 1.4 : 1;
              cx.beginPath();
              cx.moveTo(p.x, p.y);
              cx.lineTo(mouse.x, mouse.y);
              cx.stroke();
            }
          }
          for (const n of nodes) {
            cx.fillStyle = light ? "rgba(89,140,30,.85)" : "rgba(19,162,142,.6)";
            cx.beginPath();
            cx.arc(n.x, n.y, 1.7, 0, 7);
            cx.fill();
          }
        }
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    } else {
      /* reduced motion: static node dots */
      const cv = document.getElementById("net");
      if (cv) {
        const cx = cv.getContext("2d");
        const r = cv.parentElement.getBoundingClientRect();
        cv.width = r.width;
        cv.height = r.height;
        cx.fillStyle =
          document.documentElement.getAttribute("data-theme") === "light"
            ? "rgba(89,140,30,.7)"
            : "rgba(19,162,142,.4)";
        for (let i = 0; i < 40; i++) {
          cx.beginPath();
          cx.arc(Math.random() * cv.width, Math.random() * cv.height, 1.7, 0, 7);
          cx.fill();
        }
      }
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
