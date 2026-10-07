# AGENTS.md

## Project overview

Static HTML/CSS/JS landing page for **AdminBelgique** (no build system, no framework, no backend).
Files served directly: `index.html`, `style.css`, `script.js`, `i18n.js`, plus standalone pages
(`cookies.html`, `privacy.html`, `terms.html`, `leadmagnet-bail.html`) and SEO files (`sitemap.xml`, `robots.txt`).

## Running in the Base44 sandbox

- Served by `nginx:alpine` via `docker-compose.base44.yml` on host port 3000.
- The repo root is bind-mounted read-only into the container at `/usr/share/nginx/html`.
- A custom `nginx.base44.conf` is mounted to `/etc/nginx/nginx.conf`. It sets `user root;`
  so nginx can read the source directory even when the sandbox mounts it with restrictive
  `700` permissions (root bypasses the permission check). Do not remove `user root;` or the
  container will return 403 Forbidden after a fresh sandbox creation.
- Edits to static files are reflected immediately on page refresh (no rebuild needed).
  Call `reload_preview` after changes that should not require a manual refresh.

## Healthcheck

- Probes `http://127.0.0.1:80/` (not `localhost`, which resolves to IPv6 `::1` where nginx
  does not listen).

## Verification

- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return `200`.
- All static assets (`style.css`, `script.js`, `i18n.js`, standalone pages) return `200`.

## Notes

- The `CNAME` file (`adminbelgique.com`) is a GitHub Pages artifact and is not used by the
  sandbox nginx setup.
