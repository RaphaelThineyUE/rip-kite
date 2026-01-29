# Setup Guide

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### Running

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
# Runs on http://localhost:3001
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
# Runs on http://localhost:5173
```

### Testing

- Open http://localhost:5173
- Try the contact form
- Open DevTools Network tab to see API calls

## Production Build

```bash
# Frontend
cd frontend
npm run build
# Output: dist/

# Backend
cd backend
npm run build
# Output: dist/
```

## Deployment Options

### GitHub Pages (Recommended for Frontend Only)

1. Build frontend: `cd frontend && npm run build`
2. Push to GitHub
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main / root
5. Your site: https://raphaelthineyue.github.io/rip-kite/

### Full Stack Deployment

Use Vercel, Netlify, or traditional server to run both frontend and backend.

## Environment Variables

Frontend: None required (API proxied from http://localhost:3001)
Backend: PORT (default 3001)

---

Complete. Ready to deploy!
