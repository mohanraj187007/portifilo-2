# Mohanraj G — Portfolio + TechStore Capstone

Full personal portfolio site plus a **Full-Stack E-Commerce Capstone Project** (`shop.html`) — a production-ready product catalog with client-side routing, cart, search, filters and deployment configs for Vercel, Netlify and Render.

## 📁 Project Structure

```
.
├── index.html              Home page
├── about.html               About
├── skills.html               Skills
├── projects.html              Projects
├── experience.html             Experience
├── certifications.html          Certifications
├── contact.html                  Contact
├── todo.html                      Task Manager app
├── weather.html                    Weather Dashboard (async JS + REST API)
├── shop.html                        ★ TechStore — E-Commerce Capstone
├── shared.css                        Shared design system (galaxy theme)
├── waves.js                           Animated background (canvas)
├── theme.js                            Dark/light mode toggle
├── nav_init.js                          Shared nav active-state + reveal logic
├── vercel.json                          Vercel deployment config
├── netlify.toml                          Netlify deployment config
├── render.yaml                            Render deployment config
└── package.json                            npm metadata / local dev scripts
```

## 🛒 TechStore Capstone — Feature Breakdown

**Modular Frontend Architecture**
- Separated into logical modules within `shop.html`: `PRODUCTS` (data layer), `State` (app state + localStorage persistence), `Router` (client-side routing), render functions (`render`, `renderCard`, `renderCartDrawer`, `openModal`)
- 18 realistic products across 6 categories (laptops, phones, audio, cameras, accessories, wearables)

**Client-Side Routing**
- Uses the browser **History API** (`pushState` / `popstate`) — category filters update the URL hash (`#laptop`, `#phone`, etc.) without full page reloads
- Product modals get their own URL (`#product-5`) so they're shareable and back-button friendly

**Performance Optimizations**
- No images — uses emoji + CSS gradients as placeholders, eliminating image payload entirely (swap in real `<img loading="lazy">` + WebP for production)
- Debounced search (280ms) to avoid re-rendering on every keystroke
- Pagination (12 products/page) instead of rendering all products at once
- Inline critical CSS, single JS file (no framework, no bundler needed)
- `Cache-Control: immutable` headers configured in all three deploy configs for static assets

**Key Functionality**
- Live search across name, category, and description
- Category filter sidebar + price range slider + tag filters (wireless, new, sale, premium, portable, gaming)
- Sort by price, rating, newest, name
- Grid/List view toggle
- Shopping cart with quantity controls, persisted to `localStorage`
- Wishlist (heart icon), persisted to `localStorage`
- Toast notifications for cart/wishlist actions
- Fully responsive (mobile sidebar collapses to a horizontal grid)

## 🚀 Deploy

### Vercel
```bash
npm i -g vercel
vercel --prod
```
Or drag the whole folder into [vercel.com/new](https://vercel.com/new).

### Netlify
Drag-and-drop the project folder (or this zip) onto [app.netlify.com/drop](https://app.netlify.com/drop).
`netlify.toml` is already configured with redirects + caching headers.

### Render
Create a **Static Site** on [render.com](https://render.com), connect your repo, and Render will auto-detect `render.yaml`.

### Local preview
```bash
npx serve .
# or
npx live-server --port=5500
```

## 🧰 Tech Used
History API · localStorage · ES6+ JavaScript (no framework) · CSS custom properties · IntersectionObserver · Canvas 2D (animated background) · Fetch API + async/await (Weather page) · Responsive CSS Grid/Flexbox

---
© 2026 Mohanraj G
