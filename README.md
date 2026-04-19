# Marriage OS

Marriage OS is a **mobile-first, repair-first relationship operating system** for couples with remaining goodwill.

It is built to help users:

- detect drift early
- interrupt escalation quickly
- open the right repair protocol
- protect desire, respect, and teamwork over time
- track whether the bond is improving

The product is **not** generic relationship advice, therapy homework, ideology content, sex tracking, coercion logic, or surveillance software.

## Production baseline

Marriage OS production architecture is:

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- config-driven UI architecture
- Supabase Auth
- Supabase Postgres with Row Level Security
- Stripe for commerce
- in-repo content / MDX-style content model
- PWA-style web delivery with app-shell behaviour

See `docs/ADR-001-production-architecture-marriage-os.md` for the accepted production architecture decision.

## Canonical authority order

Use this order whenever files disagree:

1. `docs/DRIFT_REGISTER.md` and other ratified drift fixes / accepted addenda
2. executable config and schemas:
   - `src/config/routes.ts`
   - `src/config/page-data.ts`
   - `src/config/theme.ts`
   - `src/schemas/*`
3. `docs/MASTER_SPEC.md`
4. accepted ADRs
5. active feeder/reference docs only within their allowed-use limits

If a planning or narrative file conflicts with the canonical layer above, the canonical layer wins immediately.

## Active canonical set

### Governance
- `docs/README_ACTIVE_SET.md`
- `docs/SOURCE_MANIFEST.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/ADR-001-production-architecture-marriage-os.md`
- `docs/ADR-002-repo-cleanup-follow-up.md`
- `docs/Voice and Tone Bible.md`
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`

### Executable config
- `src/config/routes.ts`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `src/config/component-registry.ts`
- `src/config/runtime-component-registry.tsx`

### Schemas and render contracts
- `src/schemas/ui.ts`
- `src/schemas/domain.ts`
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`

### Content and product layer
- `content/repair/*`
- `content/guides/*`
- `content/knowledge/*`
- `content/products/*`
- `src/components/domain/knowledge/article-section.tsx`

### Planning and promotion-control
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/marriage_os_operator_checklist.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/Implementation Plan.md`
- `docs/SYSTEM_DECAY_REPAIR_MODEL.md`

## Builder start order

If you are new to the repo, read in this order:

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
11. `src/schemas/ui.ts`
12. `src/schemas/domain.ts`
13. `docs/DELIVERY_ARCHITECTURE.md` and `docs/SOURCE_RESERVOIR_OBJECT_MAP.md` only for delivery and source-role logic, not implementation truth

## Product shape

### Public / marketing surfaces
- `/`
- `/how-it-works`
- `/start`
- `/pricing`
- `/store`
- `/safety`

### Member / app surfaces
- `/today`
- `/today/check-in`
- `/today/state`
- `/repair`
- `/repair/[slug]`
- `/guides`
- `/guides/[slug]`
- `/knowledge`
- `/knowledge/[slug]`
- `/progress`
- `/library`
- `/account`
- `/settings`

### Product centre
**Repair** is the centre of V1.

Knowledge is a supporting repository, not the centre.
Perspectives are parallel, not adversarial.
Commerce must feel like an extension of Repair, not a detached store.

## Delivery and content rules

Content creation, shipped visual assembly, and search-facing route/schema behaviour are controlled by `docs/DELIVERY_ARCHITECTURE.md`, `docs/Voice and Tone Bible.md`, `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`, `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`, `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`, and the operator/review checklists.

Non-negotiables:
- generate by **moment of use** first, not topic first
- choose the correct **voice mode** (`hurt` / `blaming` / `act`) before drafting
- keep source reservoirs explicit: backbone, reinforcement, and language are not the same job
- use the approved graphics/media/iconography system for shipped icons, arrows, imagery, and motion
- respect **solo-first V1**
- use structured **Safety Class** assignment
- bind content objects to a renderable UI component
- bind content objects to the correct implementation phase
- do not draft late-phase or AI-only objects early
- do not let Knowledge expand into the real product

## Repo hygiene rules

Dead architecture is drift fuel.

Do not:
- add or revive `NextAuth`
- reintroduce `/upgrade` as a live monetisation route
- restore stale labels like `Guides` in public UX where `Perspectives` is ratified
- use `KnowledgeArticleCard` as a body renderer for `/knowledge/[slug]`

Use:
- Supabase Auth only
- `/pricing`, `/store`, and contextual monetisation surfaces
- `ArticleSection` for knowledge detail body rendering

## Pull requests and review

PRs should be checked against:
- `docs/ADR-001-production-architecture-marriage-os.md`
- `docs/ADR-002-repo-cleanup-follow-up.md`
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` where visuals, icons, or media are touched
- `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` where search visibility, metadata, sitemap, robots, canonical URLs, or schema markup are touched
- `docs/DELIVERY_ARCHITECTURE.md` where delivery/promotion rules are relevant

Use:
- `docs/marriage_os_repo_enforcement_checklist.md`
- `.github/pull_request_template.md`

## Important note on older materials

Older narrative docs, raw source files, and builder notes can still be useful, but they are **not automatically canonical**.
If they conflict with the active canonical set, they lose.

When in doubt, check `docs/SOURCE_MANIFEST.md`.
