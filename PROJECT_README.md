# 📚 Fujin Project - Start Here

## What's This?

Complete, production-ready Fujin Kiteboard Harness website built with React 18, TypeScript, Vite, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install --prefix frontend && npm install --prefix backend

# Terminal 1: Start backend
cd backend && npm run dev

# Terminal 2: Start frontend  
cd frontend && npm run dev

# Open http://localhost:5173
```

## What's Included

✅ 7 full-featured pages (Home, Technology, Specs, Compare, FAQ, Contact, PressKit)
✅ 10 reusable React components with TypeScript
✅ Express.js API backend with contact form + tracking
✅ Tailwind CSS with custom brand colors
✅ Framer Motion animations
✅ GitHub Pages ready

## File Structure

```
frontend/
├── src/
│   ├── components/     # 10 reusable components
│   ├── pages/         # 7 pages
│   ├── App.tsx        # Routing
│   └── main.tsx       # Entry point
├── vite.config.ts     # Build config
├── tailwind.config.ts # Design system
└── package.json

backend/
├── src/
│   └── index.ts       # Express server
├── tsconfig.json
└── package.json
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home with features and proof |
| `/technology` | Engineering story |
| `/specs` | Detailed specifications |
| `/compare` | Comparison vs competitors |
| `/faq` | 10 FAQs |
| `/contact` | Contact form |
| `/press-kit` | Media resources |

## API Endpoints

```
POST /api/contact      # Submit contact form
POST /api/track        # Track page views
GET  /api/health       # Health check
GET  /api/admin/contacts # Last 10 submissions
GET  /api/admin/events # Last 50 events
```

## Build

```bash
cd frontend && npm run build
cd backend && npm run build
```

## Deploy to GitHub Pages

1. Go to your repo settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` / `/ (root)`
4. Your site will be at: `https://yourusername.github.io/rip-kite/`

## Technologies

- React 18, TypeScript, Vite
- Tailwind CSS, Framer Motion
- Node.js, Express
- GitHub Pages (static hosting)

## Design System

- **Colors**: Midnight, Charcoal, Slate, Steel, Cloud, Fujin Orange
- **Responsive**: Mobile-first, breakpoints at 768px and 1024px
- **Components**: All fully type-safe with proper interfaces

---

Built with ❤️ for the sport we love.
