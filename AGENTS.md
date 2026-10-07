# AGENTS.md

## Project Overview
AdminBelgique — a static marketing landing page (HTML/CSS/JS, no build step, no backend).

## Stack
- Pure static files: `index.html`, `style.css`, `script.js`, `i18n.js`
- Additional pages: `cookies.html`, `privacy.html`, `terms.html`, `leadmagnet-bail.html`, `acquisition.html` (page d'opportunité d'acquisition, vendue via Afternic)
- SEO files: `robots.txt`, `sitemap.xml`, `CNAME` (custom domain: adminbelgique.com)

## Running in Base44
- Served by nginx (alpine) via `docker-compose.base44.yml` on host port 3000.
- Custom `nginx.conf` runs the worker as `root` so it can read the bind-mounted source even when the sandbox directory has restrictive (700) permissions.
- `nginx.conf` uses `try_files $uri $uri.html $uri/ =404`, so a page can be opened without its extension (e.g. `/acquisition` serves `acquisition.html`). Changing `nginx.conf` requires restarting the `web` service.
- GitHub Pages has no such rewrite: on the public hosting only `/acquisition.html` resolves.
- Source is bind-mounted read-only — edits to HTML/CSS/JS appear immediately on reload (no rebuild needed).
- No external credentials or secrets required.

## Verify it works
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return 200.
- The page title should contain "AdminBelgique".
