# BP-110 Builder Note — Phase 1 pass-gate alignment and accepted variance

## Files created
- `reviews/phase-1/open/BP-110-phase-1-pass-gate-alignment-and-accepted-variance-builder-note.md`

## Files modified
- `docs/marriage_os_implementation_phases.md`
- `docs/Implementation Plan.md`
- `docs/DRIFT_REGISTER.md`
- `docs/README_ACTIVE_SET.md`

## Files moved
- `tasks/phase-1/open/BP-110-phase-1-pass-gate-alignment-and-accepted-variance.md` → `tasks/phase-1/review/BP-110-phase-1-pass-gate-alignment-and-accepted-variance.md`

## Changed-file list with one-line reason
- `docs/marriage_os_implementation_phases.md`: narrowed Phase 1 closure blockers to the ratified baseline and added explicit defer-map sections for Phase 3, Phase 4, and Phase 4/5 route families.
- `docs/Implementation Plan.md`: aligned Phase 1 verification and go-gate text with the same baseline and defer map; removed “all configured routes render” as a Phase 1 closure requirement.
- `docs/DRIFT_REGISTER.md`: added D-036 to ratify the accepted variance and make future closure reviews use the aligned gate.
- `docs/README_ACTIVE_SET.md`: added a Phase 1 gate interpretation section so active-set entry guidance no longer points reviewers to over-literal route-blocking.
- `tasks/phase-1/review/BP-110-phase-1-pass-gate-alignment-and-accepted-variance.md`: moved packet to `review` to reflect builder-complete state.

## Summary of new Phase 1 gate wording
Phase 1 closure is now explicitly judged against a required baseline route set:
`/`, `/how-it-works`, `/start`, `/today`, `/today/check-in`, `/today/state`, `/repair`, `/guides`, `/knowledge`, `/progress`.

This keeps `/today/check-in` and `/today/state` as explicit true blockers while removing later-phase families as Phase 1 blockers.

## Summary of defer map
- **Phase 3 deferred detail routes:** `/repair/[slug]`, `/guides/[slug]`, `/knowledge/[slug]`
- **Phase 4 deferred commercial/public-readiness routes:** `/store`, `/pricing`, `/library`, `/safety`
- **Phase 4/5 deferred auth/account routes:** `/login`, `/sign-up`, `/account`, `/settings`

## Accepted variance note
D-036 now ratifies that `src/config/routes.ts` remains a valid forward route map, but its later-phase families are not Phase 1 closure blockers. Phase 1 closure must use the aligned baseline and defer map.

## BP-109 NO-GO incorporation note
BP-109 blocker logic was incorporated by preserving `/today/check-in` and `/today/state` as required Phase 1 closure blockers while reclassifying dynamic detail, commercial/public-readiness, and auth/account families as deferred by phase.

## Product-code touch confirmation
Confirmed: this patch is docs/governance only. No product runtime code was changed.
