# TSG Systems — Website

A Next.js (App Router) marketing site for TSG Systems: custom software, automations, and Odoo development. Single-page, animated, fully responsive.

## Requirements

- **Node.js 18.18+** (Node 20 LTS recommended) — check with `node -v`
- npm (comes with Node)

## Run it locally

From the project folder, in a terminal (or VS Code's built-in terminal: `Terminal → New Terminal`):

```bash
npm install      # first time only — downloads dependencies
npm run dev      # starts the dev server
```

Then open **http://localhost:3000** in your browser. Saving any file auto-refreshes the page.

## Build for production

```bash
npm run build    # creates an optimized production build
npm start        # serves the production build on http://localhost:3000
```

## Project structure

```
tsg-systems/
├── app/
│   ├── layout.js        # fonts (next/font), <head> metadata, wraps every page
│   ├── page.js          # the home page — composes the sections in order
│   └── globals.css       # ALL styling lives here (colors, layout, animations)
├── components/
│   ├── Background.js     # parallax glow layers, grid, spotlight, scroll bar
│   ├── Nav.js            # top navigation + logo
│   ├── Hero.js           # headline, info card, node-network canvas
│   ├── Marquee.js        # scrolling tech strip
│   ├── Services.js       # the 3 service cards   ← edit text here
│   ├── Products.js       # product cards         ← EDIT placeholders
│   ├── Process.js        # how-we-work steps
│   ├── Stats.js          # animated counters     ← EDIT numbers
│   ├── Testimonials.js   # client quotes         ← EDIT / remove
│   ├── About.js          # why-us + code panel
│   ├── CTA.js            # contact band          ← EDIT email / phone
│   ├── Footer.js         # footer links
│   └── Effects.js        # all the interactive animation logic ("use client")
├── package.json
├── next.config.mjs
└── jsconfig.json         # enables the "@/..." import shortcut
```

## How to customize

Search the project for `EDIT:` (in VS Code: `Ctrl+Shift+F`) to find every spot that needs your real content:

- **Products** → `components/Products.js` (the `PRODUCTS` array)
- **Stats** → `components/Stats.js` (the `STATS` array — only keep numbers you can back up)
- **Testimonials** → `components/Testimonials.js` (replace with real quotes, or delete the `<Testimonials />` line in `app/page.js`)
- **Contact email / phone** → `components/CTA.js` and `components/Footer.js`

### Change the brand color / theme

Open `app/globals.css` — the palette is at the very top in `:root`:

```css
--accent: #FF9D42;   /* main brand color — change this to rebrand */
--accent-2: #FFC46B;
--cool: #5BA3FF;
--violet: #9B7DFF;
```

### Reorder or remove sections

Edit `app/page.js` — it's just a list of the section components. Delete a line to remove that section, or drag it to reorder.

## Deploy (free)

The easiest path is **Vercel** (made by the Next.js team):

1. Push this folder to a GitHub repo.
2. Go to vercel.com, "Add New Project", import the repo.
3. It auto-detects Next.js — just click Deploy.

Netlify and Cloudflare Pages also work the same way.

## Notes

- Fonts load via `next/font` (Space Grotesk, IBM Plex Sans, IBM Plex Mono) — bundled at build time, no external requests at runtime.
- All animations respect the OS "reduce motion" accessibility setting.
- This started as a single HTML file; it's now a real component-based project you can grow (add a blog, a contact form, more pages) without rewrites.
