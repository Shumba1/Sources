# SOURCE_MANIFEST.md

## Purpose

This manifest maps key source materials to their current homes so reviewers can see:

- what already existed,
- what has now been restored,
- what governs writing,
- and what remains reference-only.

It exists to stop people asking, “Was this omitted?” without a traceable answer.

---

## 1. Governance / doctrine sources

| Source material | Current home | Status | Notes |
|---|---|---|---|
| Mission, governing belief, family doctrine, human realism, desire doctrine | `docs/MASTER_SPEC.md` | Rehoused | Core doctrine retained |
| Delivery logic, pathways, object schema, promotion gate | `docs/DELIVERY_ARCHITECTURE.md` | Rehoused | Non-canonical planning layer |
| Ratified copy/naming/component/render drift | `docs/DRIFT_REGISTER.md` | Rehoused | Drift decisions authoritative |
| Active-source clarification | `docs/README_ACTIVE_SET.md` | Added | Governance support file |
| System Decay / System Repair operating model | `docs/SYSTEM_DECAY_REPAIR_MODEL.md` | Added | Companion doctrine note |

---

## 2. Writing-standard source

| Source material | Current home | Status | Notes |
|---|---|---|---|
| System-wide writing standard for UI, prompts, tools, articles, emails, scripts, social posts, and notifications | `docs/Voice and Tone Bible.md` | Rehoused / active | Writing-arbitration layer; active and binding |
| Source-to-object reservoir mapping | `docs/SOURCE_RESERVOIR_OBJECT_MAP.md` | Added | Defines how books, master corpus, and phase-1 themes feed object types |

---

## 3. Design / UX sources

| Source material | Current home | Status | Notes |
|---|---|---|---|
| Design tokens, colour/state system, interaction sizing, reading measure, font role rules | `src/config/theme.ts` | Rehoused | Canonical executable theme layer |
| Font loading / fallback chain | `src/design/fonts.ts` | Added | Required to make theme font variables real |
| Page-by-page hierarchy, hero copy, CTA copy, section order, page rules | `src/config/page-data.ts` | Rehoused | Canonical executable page layer |
| Public/internal label split | `src/config/theme.ts` + UI rendering | Rehoused | `guides` → `Perspectives`; softened repair labels |
| Graphics, iconography, directional affordances, imagery boundaries, and motion/media rules | `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` | Added / active | Binding graphics/media/iconography control file |

---


## 3A. Technical SEO and page schema sources

| Source material | Current home | Status | Notes |
|---|---|---|---|
| Technical SEO, indexability, canonical URL, sitemap, robots, and page-schema system | `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` | Added / active | Binding technical SEO and schema control file |
| Route-level indexability truth | `src/config/routes.ts` | Rehoused | Public vs member route boundary |
| Central metadata/indexability/schema policy | `src/config/seo.ts` | Added | Canonical SEO policy map |
| Robots output | `src/app/robots.ts` | Added | Next.js App Router metadata file |
| Sitemap output | `src/app/sitemap.ts` | Added | Next.js App Router metadata file |

---

## 4. Route / component / contract sources

| Source material | Current home | Status | Notes |
|---|---|---|---|
| Route tree, shell split, nav model | `src/config/routes.ts` | Rehoused | Canonical route tree |
| Component inventory and route-to-component map | `src/config/component-registry.ts` | Rehoused | Patched knowledge detail route included |
| Runtime component registry | `src/config/runtime-component-registry.tsx` | Added | Needed for renderer execution |
| UI schemas | `src/schemas/ui.ts` | Added | Missing contract layer restored |
| Domain schemas | `src/schemas/domain.ts` | Added | Missing contract layer restored |

---

## 5. Knowledge-detail architecture sources

| Source material | Current home | Status | Notes |
|---|---|---|---|
| `KnowledgeArticleCard` for list/index/related content | `src/config/component-registry.ts` + `src/config/runtime-component-registry.tsx` | Rehoused | Preserved |
| `ArticleSection` for `/knowledge/[slug]` body rendering | `src/components/domain/knowledge/article-section.tsx` + `src/config/page-data.ts` | Rehoused | Preserved |
| Article-section schema | `src/schemas/domain.ts` | Added | Missing contract restored |
| Async section renderer | `src/lib/render-page-sections.tsx` | Added | Missing plumbing restored |
| Split resolvers (`knowledgeArticles()` vs `articleSections()`) | `src/lib/section-resolvers.ts` | Added | Missing plumbing restored |

---

## 6. Reference-only legacy sources

These remain useful for audit and future extraction, but no longer act as implementation authority:

- `Marriage Project.md`
- `Marriage Project Revised premium UX spec.md`
- `Marriage Project Builder-ready Token file and page-by-page component spec.md`
- `Marriage Project Version One Code Samples.md`
- `Marriage Project Version One PWA.md`
- `Marriage Project Addendum - splitting the knowledge layer into two different component responsibilities.md`

---

## 7. Practical reading rule

If someone asks:

> “Does this file already exist, and where does its logic now live?”

Use this manifest first.

If the question is specifically about search visibility, metadata, sitemap output, or page schema, check `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` and `src/config/seo.ts` next.
