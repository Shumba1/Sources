# README_ACTIVE_SET.md

## Purpose

This file tells builders, reviewers, writers, and operators **which files are active**, **which files are canonical**, and **which older materials remain reference-only**.

It exists to make the repo impossible to misread.

---

## 1. Authority order

When sources disagree, use this order:

1. `docs/DRIFT_REGISTER.md` and accepted addenda / ratified drift fixes
2. Executable config and schemas:
   - `src/config/routes.ts`
   - `src/config/theme.ts`
   - `src/config/page-data.ts`
   - `src/schemas/ui.ts`
   - `src/schemas/domain.ts`
3. `docs/MASTER_SPEC.md`
4. Accepted ADRs
5. Active writing-control and planning layers within their allowed scope:
   - `docs/Voice and Tone Bible.md`
   - `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
   - `docs/DELIVERY_ARCHITECTURE.md`
   - `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
6. Older PWA / architecture prose and everything else

If a newer-looking narrative document conflicts with the files above, it **does not win**.

---

## 2. Canonical active set

### Governance
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/ADR-001-production-architecture-marriage-os.md`
- `docs/ADR-002-repo-cleanup-follow-up.md`
- `docs/README_ACTIVE_SET.md`
- `docs/SOURCE_MANIFEST.md`

### Writing, visual, and delivery control
- `docs/Voice and Tone Bible.md` *(system-wide writing standard; active and binding for all shipped writing)*
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` *(system-wide graphics, iconography, media, and motion control file; active and binding for shipped visuals)*
- `docs/DELIVERY_ARCHITECTURE.md` *(planning layer; non-canonical, but active and binding for drafting/promotion control)*
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md` *(source-to-object translation layer; active drafting control file)*
- `docs/marriage_os_operator_checklist.md`
- `docs/marriage_os_repo_enforcement_checklist.md`
- `.github/pull_request_template.md`

### Executable config
- `src/config/routes.ts`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `src/config/component-registry.ts`
- `src/config/runtime-component-registry.tsx`

### Schemas and contracts
- `src/schemas/ui.ts`
- `src/schemas/domain.ts`

### Renderer / resolver plumbing
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`

### Design support
- `src/design/fonts.ts`

### Editorial source of truth
- `content/repair/*`
- `content/guides/*`
- `content/knowledge/*`
- `content/products/*`

---

## 3. Existing files now accounted for

The following files **exist** and remain part of the active implementation layer or accepted source set:

### Already existing executable/canonical files
- `src/config/routes.ts`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `src/config/component-registry.ts`
- `src/components/domain/knowledge/article-section.tsx`

### Added in this restoration pass
- `src/schemas/ui.ts`
- `src/schemas/domain.ts`
- `src/config/runtime-component-registry.tsx`
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`
- `src/design/fonts.ts`
- `docs/README_ACTIVE_SET.md`
- `docs/SOURCE_MANIFEST.md`
- `docs/SYSTEM_DECAY_REPAIR_MODEL.md`
- `docs/Voice and Tone Bible.md`
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`

This means the project no longer depends on memory to know whether the missing design / route / schema / knowledge-detail architecture / writing-arbitration layers exist.

---

## 4. Reference-only feeder materials

The following remain useful for audit, refinement, and unresolved drift review, but are **not implementation authority** once the canonical files above exist:

- `Marriage Project.md`
- `Marriage Project Revised premium UX spec.md`
- `Marriage Project Builder-ready Token file and page-by-page component spec.md`
- `Marriage Project Version One Code Samples.md`
- `Marriage Project Version One PWA.md`
- `Marriage Project Addendum - splitting the knowledge layer into two different component responsibilities.md`

Use them to:
- trace rationale
- recover omitted logic
- inspect unresolved drift
- extend the product safely

Do **not** implement directly from them when an active canonical file exists.

---

## 5. Practical reading order

If you are implementing or reviewing:

1. `docs/README_ACTIVE_SET.md`
2. `docs/MASTER_SPEC.md`
3. `docs/DRIFT_REGISTER.md`
4. `docs/ADR-001-production-architecture-marriage-os.md`
5. `docs/ADR-002-repo-cleanup-follow-up.md`
6. `docs/Voice and Tone Bible.md`
7. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
8. `src/config/routes.ts`
9. `src/config/theme.ts`
10. `src/config/page-data.ts`
11. `docs/DELIVERY_ARCHITECTURE.md` and `docs/SOURCE_RESERVOIR_OBJECT_MAP.md` only when delivery/drafting logic is relevant

---

## 6. Why this file exists

This file answers the practical question:

> “What files should a builder or writer actually trust right now?”

If that answer cannot be given in under 30 seconds, the repo is still too easy to misread.
