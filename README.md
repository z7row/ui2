# Welcome To My WebSite

A modern, animated personal landing page built with Next.js 16, React 19, Tailwind CSS v4, and Motion. The page opens with a full-screen animated background, reveals the hero copy letter-by-letter, and shows a "Thank You" overlay when the user taps the "Get Started" button.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + `tw-animate-css` |
| Animation | Motion 12 (`motion/react`) |
| UI Primitives | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Fonts | Bebas Neue, Dynalight, Minecraft (self-hosted) |
| Linting | ESLint 9 + `eslint-config-next` |

## Features

- Full-screen animated background that expands from 0vh to 100vh on load.
- Letter-by-letter pull-up animation for both the title and subtitle.
- Animated "Get Started" pill button with a gradient background.
- Full-screen "Thank You" overlay with smooth enter/exit via `AnimatePresence`.
- Responsive layout (mobile-first, with desktop tweaks).
- Self-hosted custom fonts via `next/font/local` for zero layout shift.
- shadcn/ui `Button` component ready for reuse.

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm (the only supported package manager)

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
ui2/
├── app/
│   ├── globals.css        # Tailwind v4 imports + design tokens
│   ├── layout.tsx         # Root layout and metadata
│   └── page.tsx           # Main landing page (Home component)
├── components/
│   ├── motion/
│   │   └── lettersUp.tsx  # LettersPullUp animation component
│   └── ui/
│       └── button.tsx     # shadcn/ui button with variants
├── lib/
│   └── utils.ts           # cn() class name helper
├── public/
│   └── fonts/
│       ├── bebas_neue/    # Bebas Neue (OFL)
│       ├── Dynalight/     # Dynalight (OFL)
│       └── minecraft/     # Minecraft font
├── components.json        # shadcn/ui config
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Components

### `Home` (`app/page.tsx`)

The single page of the app. It composes:

- a full-screen background layer
- a hero block with two `LettersPullUp` animations
- a "Get Started" button that toggles the overlay
- an `AnimatePresence` overlay with a "back" button and a "Thank You" heading

State is local (`useState`) and the component is a Client Component (`"use client"`).

### `LettersPullUp` (`components/motion/lettersUp.tsx`)

Splits a string into characters and animates each one with a staggered `y`/`opacity` transition. Uses `useInView` so the animation only runs when the element enters the viewport.

Props:

- `text` – the string to animate
- `delayontext` – per-character delay (default `0.01`)
- `delaybe` – base delay before the sequence starts (default `0`)
- `className` – extra classes for each character
- `style` – inline style applied to each character

### `Button` (`components/ui/button.tsx`)

shadcn/ui button built with `class-variance-authority` and Radix `Slot`.

- Variants: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`
- Sizes: `default`, `xs`, `sm`, `lg`, `xl`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

## Design Tokens

Theme tokens live in `app/globals.css` as CSS custom properties (in `oklch`) and are exposed to Tailwind through `@theme inline`. The landing page also uses an inline `colors` object with hex values (dark background, amber/gold accents) for the hero, button, and overlay.

## Fonts

All fonts are self-hosted under `public/fonts/` and loaded with `next/font/local`.

| Alias | File | Usage |
|-------|------|-------|
| `pixlefont` | `public/fonts/bebas_neue/BebasNeue-Regular.ttf` | Hero title and button label |
| `font2` | `public/fonts/Dynalight/Dynalight-Regular.ttf` | Hero subtitle |
| — | `public/fonts/minecraft/Minecraft.ttf` | Bundled but not yet used |

Bebas Neue and Dynalight are licensed under the SIL Open Font License (OFL). See the `OFL.txt` files in their folders.

## Notes

- The `Button` component is available but `page.tsx` currently uses a plain `<button>` for the overlay close action.
- The `minecraft` font is bundled but not used yet.
- The page sets `"use client"` because it uses `useState`, `motion`, and `AnimatePresence`.

## License

Fonts are under the SIL Open Font License. The application code is private.
