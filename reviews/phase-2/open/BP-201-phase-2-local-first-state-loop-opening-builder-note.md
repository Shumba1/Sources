# BP-201 builder note — Phase 2 local-first state loop opening

## Scope confirmation
- Packet executed: `BP-201` (note: prior shorthand `BP-112` is treated as `BP-201` per governor annotation).
- Current sequencing authority used: `docs/marriage_os_implementation_phases.md`.
- Task moved from `tasks/phase-2/open/` to `tasks/phase-2/review/`.

## Files created
- `src/lib/check-in-state.ts`
- `reviews/phase-2/open/BP-201-phase-2-local-first-state-loop-opening-builder-note.md`

## Files modified
- `src/app/(app)/today/state/page.tsx`
- `src/app/(app)/today/page.tsx`

## Files moved
- `tasks/phase-2/open/BP-201-phase-2-local-first-state-loop-opening.md` → `tasks/phase-2/review/BP-201-phase-2-local-first-state-loop-opening.md`

## Changed-file list with one-line reason
- `src/lib/check-in-state.ts`: introduced bounded, auditable deterministic classifier and local fixture map used across state loop surfaces.
- `src/app/(app)/today/state/page.tsx`: wired deterministic classifier module, added quick-script card, and passed resolved state into `/today` via query state.
- `src/app/(app)/today/page.tsx`: made Today consume state result from query and render coherent next move, anti-escalation, and quick-script cards from shared fixtures.
- `tasks/phase-2/review/BP-201-phase-2-local-first-state-loop-opening.md`: task state transition to review lane.
- `reviews/phase-2/open/BP-201-phase-2-local-first-state-loop-opening-builder-note.md`: required builder handoff artifact.

## Deterministic mapping rationale
Classifier remains local-only and rule-based:
- Escalation to `activatedAndFragile` when heat is high and either connection is low or capacity is overwhelmed.
- Escalation to `heatedButReachable` on moderate/high warning signals.
- Otherwise resolves `steady`.

This mapping keeps Phase 2 bounded while making outcome logic explicit and reviewable in one shared utility module.

## Loop rationale
- `/today/check-in` submits bounded check-in values as query params.
- `/today/state` resolves state deterministically and provides one dominant next move plus anti-escalation cue and quick-script support.
- `/today` consumes resolved state and continues with coherent state-aware guidance.

## Route notes
### `/today/check-in`
Existing bounded radio-grid check-in flow retained as the loop entry point and left intentionally low-friction.

### `/today/state`
Now uses shared deterministic classifier utility and includes explicit quick-script support in addition to state summary and anti-escalation framing.

### `/today`
Now reads resolved state from query and uses the same fixture source for current state, next best move, make-it-worse, and quick-script continuity.

## Validation results
- `pnpm lint` — pass
- `pnpm build` — fail in this environment due to Google Fonts fetch errors (`Fraunces`, `Inter`, `JetBrains Mono`) during Next.js build

## Forbidden-scope confirmation
Explicitly confirmed: no Supabase, database writes, auth, Stripe/commerce, AI route handlers, or other forbidden-scope systems were introduced.
