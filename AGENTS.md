# AGENTS.md

## Project Overview
AdminBelgique — a static marketing landing page (HTML/CSS/JS, no build step, no backend).

## Stack
- Pure static files: `index.html`, `style.css`, `script.js`, `i18n.js`
- Additional pages: `cookies.html`, `privacy.html`, `terms.html`, `leadmagnet-bail.html`
- SEO files: `robots.txt`, `sitemap.xml`, `CNAME` (custom domain: adminbelgique.com)

## Running in Base44
- Served by nginx (alpine) via `docker-compose.base44.yml` on host port 3000.
- Custom `nginx.conf` runs the worker as `root` so it can read the bind-mounted source even when the sandbox directory has restrictive (700) permissions.
- Source is bind-mounted read-only — edits to HTML/CSS/JS appear immediately on reload (no rebuild needed).
- No external credentials or secrets required.

## Verify it works
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return 200.
- The page title should contain "AdminBelgique".
