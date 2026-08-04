# Anchored in the Dream

A mobile-first August 2026 fasting plan for DreamLife Dallas Worship & Arts.

## Live

- Production: https://dreamlifefast.kervmusic.com
- Netlify URL: https://dreamlifefast-kervmusic.netlify.app
- Repo: https://github.com/kerv1/anchored-in-the-dream

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

## Netlify

Build settings are in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects configured

Continuous deploys are linked to the `master` branch on GitHub.

For the custom domain, add a DNS **CNAME** at GoDaddy (`kervmusic.com`):

| Type | Name | Value |
|------|------|-------|
| CNAME | `dreamlifefast` | `dreamlifefast-kervmusic.netlify.app` |

After DNS propagates, Netlify will provision HTTPS automatically.

## Notes

Progress, journal notes, theme, font size, and focus mode are stored in `localStorage` on the device only.
