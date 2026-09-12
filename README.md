# The Marvel Pools — React frontend

A Vite + React rebuild of the single-file HTML template, split into
one component per section so it's easy to edit and extend.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Folder structure

```
marvel-pools/
├─ index.html               # Vite entry HTML (GTM slot lives here)
├─ vite.config.js
├─ package.json
└─ src/
   ├─ main.jsx               # React root
   ├─ App.jsx                # Assembles all sections in order
   ├─ index.css              # Design tokens (colors, fonts) + shared classes
   ├─ components/
   │  ├─ Header.jsx / .css        # Nav bar + mobile menu
   │  ├─ Hero.jsx   / .css        # Hero with sea-texture background + ripple rings
   │  ├─ WaveDivider.jsx          # Reusable wave-shaped section divider
   │  ├─ About.jsx  / .css        # About copy + pool graphic panel
   │  ├─ StatsStrip.jsx / .css    # Animated count-up stats (used inside About)
   │  ├─ Services.jsx / .css      # Horizontal-scroll service cards
   │  ├─ TrustMarquee.jsx / .css  # Scrolling materials/partners strip
   │  ├─ Contact.jsx / .css       # Enquiry form (controlled React state)
   │  ├─ Footer.jsx / .css
   │  └─ WhatsAppFab.jsx / .css   # Floating WhatsApp button
   ├─ data/
   │  ├─ services.js         # Service card content
   │  ├─ stats.js             # Stat values/labels
   │  └─ partners.js          # Marquee items
   └─ hooks/
      └─ useCountUp.js        # IntersectionObserver-driven count-up animation
```

## Things to plug in before launch

- **Google Tag Manager**: replace `GTM-XXXXXXX` in `index.html` (two places)
  with your real container ID.
- **Contact form**: `Contact.jsx`'s `handleSubmit` currently just logs to the
  console. Wire it to a backend endpoint or a form service (Formspree, etc.).
- **Real address / phone / email**: update in `Contact.jsx` and `Footer.jsx`.
- **Partner/material names**: `data/partners.js` has placeholder names —
  swap in your real suppliers.
- **Photography**: `About.jsx`'s `.pool-graphic` is a CSS/SVG placeholder.
  Swap it for a real `<img>` once you have project photos, and consider
  adding a `Gallery.jsx` component backed by real images.

## Theme

Colors and fonts are defined once as CSS custom properties in
`src/index.css` (`--ink`, `--deep`, `--sea`, `--sea-light`, `--foam`,
`--sand`, plus `Fraunces` for display type and `Work Sans` for body text).
Change them there and every component picks it up automatically.
