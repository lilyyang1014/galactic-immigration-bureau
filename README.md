# Galactic Immigration Bureau

A React-based single-page application built with Vite. The GIB is a fictional interstellar immigration platform where users can browse destinations across the settled systems, read detailed settlement information, and submit immigration applications.

## Running the project

```bash
npm install
npm run build
npx serve -s dist
```

Then open `http://localhost:3000` in your browser.

For development:
```bash
npm run dev
```

## Pages

- **Home** (`#/`) — Hero section, stats, featured destination carousel, and destination cards
- **Destinations** (`#/destinations`) — Full destination catalog with filter and sort controls
- **Destination Detail** (`#/destinations/:id`) — Individual destination with accordion details and application CTA
- **Apply** (`#/apply`) — Immigration application form with validation
- **Profile** (`#/profile`) — Traveler profile with editable display name and rank
- **About** (`#/about`) — Bureau mission, history timeline, and contact info

## Features

- Hash-based client-side routing with deep linking support
- Adaptive hamburger navigation menu (collapses at 768px)
- Destination filter by climate and risk level, with sort controls
- Accordion component for destination details
- Destination cards with image, stats, and risk badge
- Image carousel for featured destinations (manual navigation only, no auto-advance)
- Complex form interactions — occupation selection reveals conditional fields, medical checkbox reveals detail textarea
- Modal form using the native `<dialog>` element to edit traveler profile name and rank
- Light/dark theme toggle applied globally via CSS custom properties
- Deep linking — all pages are directly accessible via URL hash

## Accessibility

- Skip link for keyboard navigation
- Semantic HTML throughout (`header`, `nav`, `main`, `footer`, `section`, `aside`)
- All images have descriptive alt text
- All form fields have associated labels
- WCAG AA contrast ratios maintained in both light and dark themes
- All controls are keyboard accessible
- No color used as the sole indicator of information
- No auto-advancing content
- All animations wrapped in `prefers-reduced-motion` media query

## Image credits

See `licenses.txt` for full image sources and licenses. All images are from [Unsplash](https://unsplash.com) and used under the Unsplash License.
