# AGENTS.md — AdminBelgique Landing Page

## Project overview
Static HTML/CSS/JS marketing landing page for "AdminBelgique" (French, Belgian PME admin automation tool). No build step, no backend, no package manager. Pages: `index.html`, `acquisition.html`, `avis.html`, `cookies.html`, `leadmagnet-bail.html`, `privacy.html`, `terms.html`. Assets: `style.css`, `script.js`, `nav.js`, `i18n.js`, `logo.png`, `og-image.png`, `twitter-card.png`.

## Running in the Base44 sandbox
- Served by `nginx:alpine` via `docker-compose.base44.yml` on host port 3000.
- The repo root is bind-mounted read-only into `/usr/share/nginx/html`.
- A custom `nginx.conf` (also bind-mounted) sets `user root;` because the sandbox repo directory has `drwx------` permissions — nginx's default non-root worker cannot traverse it. Do not remove this override.
- Edits to HTML/CSS/JS are reflected on browser refresh (nginx serves files directly from the bind mount; no live-reload server needed).

## No external credentials
The lead-magnet form (`script.js`) uses a `mailto:` fallback when `FORM_ENDPOINT` is empty. No secrets are required to run the site.

## Healthcheck
`wget --spider http://localhost:80/` — verifies nginx is serving.
