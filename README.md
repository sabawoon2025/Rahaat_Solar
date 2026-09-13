# Rahat Solar Company Website | د راحت سولر شرکت ویب پاڼه

A production-ready, multilingual (Pashto / Dari / English) corporate website for
Rahat Solar Company, built with React + Vite + Bootstrap 5, per the project SRS.
Static site — no backend, database, or admin panel.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Where to edit things (no need to hunt through components)

| What you want to change              | File |
|---------------------------------------|------|
| Phone numbers, WhatsApp number, email, addresses, social links | `src/data/company.js` |
| Product categories & descriptions     | `src/data/products.js` |
| Services                              | `src/data/services.js` |
| Projects (portfolio)                  | `src/data/projects.js` |
| Team placeholders                     | `src/data/team.js` |
| Province list (quote form dropdown)   | `src/data/provinces.js` |
| All Pashto text                       | `src/data/translations/ps.js` |
| All Dari text                         | `src/data/translations/fa.js` |
| All English text                      | `src/data/translations/en.js` |
| Logo (currently a text/icon mark)     | `src/components/layout/Header.jsx` — swap in `logo.png` from `src/assets` |
| Real photos (hero, products, projects, team, office) | Replace the `ImagePlaceholder` usages in `src/pages/*.jsx` with `<img>` tags pointing at files placed under `src/assets/images/...` |
| Facebook / TikTok URLs                | `src/data/company.js` → `social.facebookUrl` / `social.tiktokUrl` (leave empty until verified) |
| Map embeds                            | `src/data/company.js` → `maps.headOffice.embedUrl` / `maps.kandahar.embedUrl` |
| Domain (sitemap/robots/canonical)     | `src/data/company.js` (`domain`), `public/sitemap.xml`, `public/robots.txt` |

## What's implemented

- **6 pages**: Home, About, Products, Services, Projects, Contact (+ a 404 fallback, not counted as a 7th main page)
- **3 languages**: Pashto (RTL), Dari (RTL), English (LTR) — switch in the header, persisted to `localStorage`, `<html lang>`/`dir` set at document level
- **6 product categories**, **5 services** — exactly per spec, no prices, no invented brands/specs
- **Quote form**: exactly 3 fields (Name, Province, Need Type) → opens a pre-filled WhatsApp message to the configured number; nothing is stored
- Floating WhatsApp button, clickable `tel:`/`mailto:` links
- Placeholder imagery for hero/products/projects/team/office (no real photos supplied yet)
- Per-page, per-language SEO (title, meta description, Open Graph, canonical) + JSON-LD Organization/LocalBusiness structured data (no invented ratings/hours/coordinates)
- `sitemap.xml` and `robots.txt` for the intended domain `rahatsolar.com`
- Fully responsive (Bootstrap 5 grid/breakpoints), accessible (semantic HTML, ARIA, keyboard nav, focus states, `prefers-reduced-motion` respected)

## Known placeholders (owner still needs to supply)

- Real logo file
- Real photos: hero, products, projects, team, office exteriors
- Real project data (names, capacities, locations, dates)
- Verified Facebook and TikTok URLs
- Map coordinates/embed URLs for both locations
