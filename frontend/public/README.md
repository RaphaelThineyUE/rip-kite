# Public Assets

This directory contains static assets served directly by Vite. Files here are copied as-is during the build process.

## Directory Structure

- **images/** - Product images, logos, hero backgrounds, icons
- **videos/** - Product videos, demos, testimonials
- **documents/** - PDFs, whitepapers, media kits

## Usage

Reference public assets in your React components using absolute paths:

```tsx
// In components or pages
<img src="/images/hero-banner.jpg" alt="Hero" />
<video src="/videos/demo.mp4" controls />
<a href="/documents/press-kit.pdf">Download Press Kit</a>
```

## Notes

- All files in this directory are publicly accessible
- Vite will serve them at the root path (`/`) regardless of file location in public/
- During production build, these files are copied to `dist/` with the same structure
- Keep file sizes optimized to improve site performance
