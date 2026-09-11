<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules

### Server components by default

Every component under `src/` is a server component. Only add `"use client"` to a file
that needs React state, an effect, a browser API, or an event handler such as `onClick`.

When a page needs interactivity, keep `"use client"` in the smallest leaf component
rather than marking a whole section or page.

### Text lives in the message files

All visible text lives in `messages/sk.json`. Components read it with `useTranslations`,
or `getTranslations` in async functions. Never write visible text in a component.

Settings that are the same in every language, such as links, the email address, and the
launch date, live in `src/content/site.ts`.

### Colors come from the theme

Tailwind v4 has no `tailwind.config.js`. Colors are CSS variables in `:root` in
`src/app/globals.css`, mapped to Tailwind in `@theme inline`. Use the theme classes
(`bg-brand`, `text-accent`, `text-muted`) instead of hex values. To add a color, add the
variable in `:root` and a matching `--color-*` line in `@theme inline`.

### Keep hosting free

The site must cost nothing extra on Vercel.

- Keep `images.unoptimized: true` in `next.config.ts`. Vercel serves images as they are,
  so shrink an image before adding it to `public/images/`.
- Keep pages static. Do not read `cookies()`, `headers()`, or `searchParams` in a page or
  layout. After changing routing, config, or data loading, run `npm run build` and check
  that the page is still marked `●` or `○`, not `ƒ`.
- Ask before adding anything Vercel bills per request: more logic in `src/proxy.ts`, API
  routes, Web Analytics, Speed Insights, generated OG images, or cron jobs.

### Before you finish

Run `npm run format`, then `npm run typecheck`. Both must pass before the work is done.
