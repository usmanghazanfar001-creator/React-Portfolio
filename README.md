# Usman Ghazanfar — Portfolio (React + Vite)

A bold, agency-style portfolio site built with React and Vite.

## Design

- **Display type:** Anton (huge, uppercase, poster-style headlines)
- **Body/UI type:** Plus Jakarta Sans
- **Mono/labels:** JetBrains Mono (used for eyebrows, tags, spec sheets — a nod to
  the "engineer" side of the brief)
- **Palette:** near-black ink background, electric blue + highlighter yellow accents,
  alternating dark/light sections for rhythm
- **Signature element:** the scrolling ticker under the hero, the rotated "open to
  work" stamp, and the mono spec-sheet card — a running visual motif that blends
  marketing-billboard energy with an engineer's spec sheet

## Project structure

```
src/
  components/   → Navbar, Marquee, Hero, About, Skills, Experience, Projects,
                  Education, Footer
  hooks/        → useFadeIn.js (scroll fade-in animation)
  assets/       → images used in the app (profile photo)
  index.css     → design tokens + all site styling
  App.jsx       → assembles all the section components
  main.jsx      → React entry point
public/
  favicon.png
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the printed local URL (usually http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
```

Outputs a production-ready build to `dist/`, deployable to Netlify, Vercel,
GitHub Pages, or any static host.

## Editing content

All text content (skills, projects, experience, education) lives in simple arrays
at the top of each component file in `src/components/`, so you can update your
info without touching markup or CSS.
