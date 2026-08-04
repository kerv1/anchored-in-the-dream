# Anchored in the Dream

A mobile-first August 2026 fasting plan for DreamLife Dallas Worship & Arts.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Netlify deployment

1. Push this repository to GitHub (or connect the folder in the Netlify UI).
2. Create a new Netlify site from the repo.
3. Build settings are already in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. SPA redirects are configured so client routes work.

## Notes

Progress, journal notes, theme, font size, and focus mode are stored in `localStorage` on the device only.
