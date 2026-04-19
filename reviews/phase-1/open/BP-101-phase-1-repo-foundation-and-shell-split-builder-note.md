# BP-101 builder note — Phase 1 repo foundation and shell split

## Files created
- `src/app/(marketing)/layout.tsx`
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/how-it-works/page.tsx`
- `src/app/(marketing)/start/page.tsx`
- `src/app/(app)/layout.tsx`
- `src/app/(app)/today/page.tsx`
- `src/app/(app)/repair/page.tsx`
- `src/app/(app)/guides/page.tsx`
- `src/app/(app)/knowledge/page.tsx`
- `src/app/(app)/progress/page.tsx`
- `src/components/shell/shell-primitives.tsx`
- `src/components/shell/marketing-shell.tsx`
- `src/components/shell/app-shell.tsx`
- `src/components/shell/member-bottom-nav.tsx`

## Files modified
- `src/app/globals.css`

## Files removed
- `src/app/page.tsx` (homepage moved into marketing route group scaffold)

## Changed-file list with reason
- `src/app/(marketing)/layout.tsx` — defines marketing shell boundary.
- `src/app/(marketing)/page.tsx` — provides `/` scaffold under marketing shell.
- `src/app/(marketing)/how-it-works/page.tsx` — provides `/how-it-works` scaffold.
- `src/app/(marketing)/start/page.tsx` — provides `/start` scaffold.
- `src/app/(app)/layout.tsx` — defines member/app shell boundary.
- `src/app/(app)/today/page.tsx` — provides `/today` scaffold.
- `src/app/(app)/repair/page.tsx` — provides `/repair` scaffold.
- `src/app/(app)/guides/page.tsx` — provides `/guides` scaffold.
- `src/app/(app)/knowledge/page.tsx` — provides `/knowledge` scaffold.
- `src/app/(app)/progress/page.tsx` — provides `/progress` scaffold.
- `src/components/shell/shell-primitives.tsx` — shared shell viewport/main/scaffold primitives.
- `src/components/shell/marketing-shell.tsx` — shared marketing top bar and shell frame.
- `src/components/shell/app-shell.tsx` — shared app top bar + bottom nav frame.
- `src/components/shell/member-bottom-nav.tsx` — canonical member nav wiring from `primaryMemberNav`.
- `src/app/globals.css` — centralized safe-area, viewport, and shell chrome styles.
- `src/app/page.tsx` — removed to avoid duplicate `/` route and keep shell split explicit.

## Shell split choice
Used App Router route groups:
- `src/app/(marketing)/**` for public marketing shell (`/`, `/how-it-works`, `/start`)
- `src/app/(app)/**` for member shell (`/today`, `/repair`, `/guides`, `/knowledge`, `/progress`)

This keeps root layout thin and makes shell ownership visible in file structure.

## Safe-area / viewport note
Safe-area and viewport behavior is now centralized in `src/app/globals.css` using:
- `min-height: 100dvh` on shell viewport
- CSS variables based on `env(safe-area-inset-*)`
- shared shell grid and sticky chrome behavior

No page-level safe-area duct tape was introduced.

## Forbidden-scope confirmation
Confirmed no auth, backend, Supabase, Stripe, billing, AI, or dynamic detail-route implementation added.

## Validation results
- `pnpm lint` → **failed due environment/network constraint** (corepack could not download pinned pnpm tarball; proxy tunnel returned HTTP 403).
- `pnpm build` → **not runnable for same environment reason**, because invoking `pnpm` fails before scripts execute.
