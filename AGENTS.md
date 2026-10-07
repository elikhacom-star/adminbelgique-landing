# AGENTS.md

## Project overview
Static marketing landing page for "AdminBelgique" (adminbelgique.com). Pure HTML/CSS/JS — no build step, no framework, no backend, no package manager.

## Structure
- `index.html` — main landing page
- `style.css` — all styling
- `script.js` — modal, smooth nav, lead-magnet form (localStorage), scroll animations
- `i18n.js` — FR/NL/EN translations via `data-i18n` attributes
- `cookies.html`, `privacy.html`, `terms.html`, `leadmagnet-bail.html` — secondary pages
- `robots.txt`, `sitemap.xml`, `CNAME` — SEO/hosting config

## Running in the sandbox
- Served by nginx (alpine) via `docker compose -f docker-compose.base44.yml up -d`
- Static files are bind-mounted read-only; edits appear immediately (no rebuild needed)
- Web entry point on host port 3000
- No external credentials or secrets required
- No database, no API, no env vars needed

## Verification
- `curl -s http://localhost:3000/ | grep -o '<title>.*</title>'` should return the page title
- Preview should show the French landing page with nav, hero, features, pricing, FAQ
