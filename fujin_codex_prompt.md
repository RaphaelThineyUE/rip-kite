# Codex Master Prompt: Fujin Kiteboard Harness Website (React + TS + Vite + Tailwind) + Node TS API

You are Codex. Generate a production-ready, modern, chic, stylish multi-page marketing site for the **Fujin Kiteboard Harness**.
Vibe: **“Built by US Space Force engineers” + playful surfer energy**. Premium, minimal, confident.
No backend database. Static content + a small Node.js TypeScript API (local dev + optional deploy elsewhere) used for form submit + analytics-ish logging.

## Tech constraints
- Frontend: **React 18+, TypeScript, Vite**
- Styling: **Tailwind CSS** (no CSS frameworks besides Tailwind)
- Routing: use **react-router** (BrowserRouter) but ensure **GitHub Pages compatibility**:
  - Use `HashRouter` by default OR implement a GH Pages friendly 404 redirect strategy. Prefer **HashRouter** for simplicity.
  - Respect Vite `base` path from env: `VITE_BASE_PATH` (default `/`) and ensure assets resolve under GitHub Pages.
- Animations: subtle (Framer Motion allowed). Avoid heavy scroll-jank.
- Images: use the provided stills in `/public/assets/` (paths listed below). Prefer `<img>` for simplicity.
- Icons: lucide-react allowed.
- No code generation that depends on paid services.

## Brand / visual direction
Use this extracted palette (from the product still):
- Midnight: **#11141D**
- Charcoal: **#36343A**
- Slate: **#75797E**
- Steel: **#929292**
- Cloud: **#E3E5E5**
- Fujin Orange (accent): **#CB5C24**

Rules:
- Dark UI with tasteful light sections. Orange is a *sparingly used* accent for CTAs, highlights, and small UI “energy”.
- Typography: modern sans (system stack or Inter if you include it via google-fonts import).
- Layout: lots of whitespace, big photography, crisp spec blocks, confident headings.
- Add a “technical but fun” microcopy tone. Not cringe. Not corporate.

## Site map (multi-page)
Create these routes/pages:
1. `/` Home (hero, value prop, key features, social proof, CTA)
2. `/technology` (engineering story, materials, strength/weight, load paths, comfort)
3. `/specs` (table-style specs, sizing guidance, what’s in the box)
4. `/compare` (comparison vs typical harnesses: comfort, weight, durability, adjustability, load distribution)
5. `/faq` (accordion)
6. `/contact` (contact form)
7. `/press-kit` (download links + media thumbnails)

Global:
- Sticky top nav with subtle transparency on scroll.
- Footer with socials placeholders, email, tiny legal.
- “Buy Now” button always visible (top-right). It is a placeholder link and should open a modal or go to `/contact` with “Sales” selected.

## Content requirements (write the copy)
Write real, persuasive marketing copy. Avoid vague hype.
Include:
- A one-liner hero headline + subheadline.
- 6 feature bullets with benefits (not just features).
- 3 “proof” blocks: “Designed by kiteboarders”, “Space Force engineering mindset”, “Matched weight & strength”.
- A short founder/engineer note (1 paragraph).
- Technical narrative that sounds legit but does not claim military endorsement.

## Components
Build reusable components:
- `Navbar`, `Footer`
- `Hero` (supports image background + overlay gradient)
- `FeatureGrid`
- `SpecTable`
- `CompareTable`
- `TestimonialCards` (use placeholders)
- `FAQAccordion`
- `CTASection`
- `Modal` for “Buy Now”
- `ContactForm` with validation + success state

## API (Node.js + TypeScript)
Create a small API server (Express or Fastify, your choice) in TypeScript with:
- `POST /api/contact` accepts { name, email, topic, message }.
  - Validate input server-side.
  - Simulate sending by logging to console + storing in-memory array.
  - Return { ok: true }.
- `POST /api/track` accepts { event, page, ts } and logs it (in-memory ok).
- Enable CORS for local dev.
- Provide a `README` describing how to run frontend + API together locally.

Frontend should call the API:
- Contact form submits to `/api/contact`.
- Simple page view event on route change to `/api/track`.

## GitHub Pages deployment notes
- Provide a `README` step-by-step:
  - Build via `vite build`
  - Deploy `/dist` to GitHub Pages
  - Set `VITE_BASE_PATH` and router strategy (HashRouter preferred)
- Ensure the app works on refresh.

## Assets to include (copy into repo)
Assume these files exist and wire them into the design:
- `/public/assets/hero_full.png`
- `/public/assets/hero_center.png`
- `/public/assets/buckle_close.png`
- `/public/assets/orange_accent.png`
- `/public/assets/strap_texture.png`
- `/public/assets/palette.png` (optional page section showing palette)

Use `hero_center.png` or `hero_full.png` as the Home hero imagery.
Use `buckle_close.png` and `strap_texture.png` in Technology/Specs.

## Quality bar
- Clean folder structure.
- Type-safe props.
- Mobile-first responsive.
- Lighthouse-friendly.
- Basic accessibility (semantic headings, focus states, aria for accordions/modals).
- No placeholder “lorem ipsum”. Use realistic copy.

## Deliverables
Generate:
1) Frontend project files (Vite + React TS + Tailwind).
2) Backend API project files (Node TS).
3) A top-level README with setup + GitHub Pages deploy instructions.
Do not omit any required pages/routes.
