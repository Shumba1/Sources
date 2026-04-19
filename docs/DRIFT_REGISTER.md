# DRIFT_REGISTER.md

**Status:** Canonical drift log  
**Purpose:** Record every resolved or open spec conflict so builders do not guess.

| ID | Topic | Conflicting sources | Decision | Winner | Status | Implement in |
|---|---|---|---|---|---|---|
| D-001 | Product centre | Mission doctrine vs general knowledge-library framing | Repair is the centre of V1. Knowledge is a repository, not the centre. | Mission doctrine + premium UX | Accepted | `MASTER_SPEC.md`, `page-data.ts` |
| D-002 | Guides label | Route tree uses `guides`; premium UX uses `Perspectives` | Keep internal key and route id as `guides`; ship UI label as `Perspectives`. | Both, split by layer | Accepted | `theme.ts`, `page-data.ts` |
| D-003 | Repair category naming | Older schemas/slugs vs premium UX public labels | Preserve infra slugs; change display labels only. | Premium UX for display, code samples for slugs | Accepted | `theme.ts`, UI components |
| D-004 | Homepage CTA | `Check Our State` vs `Check the Relationship State` | Use revised premium CTA copy. | Premium UX | Accepted | `page-data.ts` |
| D-005 | Start CTA | `Continue Solo` vs `Start the Solo Check-In` | Use revised premium CTA copy. | Premium UX | Accepted | `page-data.ts` |
| D-006 | Check-in hero | `How are things today?` vs `How does the relationship feel today?` | Use revised premium copy. | Premium UX | Accepted | `page-data.ts` |
| D-007 | State result CTA | `Do This First` vs `Open the First Repair Step` | Use revised premium CTA copy. | Premium UX | Accepted | `page-data.ts` |
| D-008 | Today hero | `Today’s next move` vs `Today’s next best move` | Use revised premium copy. | Premium UX | Accepted | `page-data.ts` |
| D-009 | Knowledge detail renderer | Old route/component map lacks article-body renderer; addendum introduces `ArticleSection` | Adopt addendum. `KnowledgeArticleCard` is for list/index; `ArticleSection` is for detail body. | Knowledge-layer addendum | Accepted | `page-data.ts`, component registry |
| D-010 | Upgrade route | Older PWA includes `/upgrade`; route tree and premium spec use `/pricing` and `/store` | Remove `/upgrade` from canonical V1. | Route tree + premium page spec | Accepted | `MASTER_SPEC.md`, `page-data.ts` |
| D-011 | Safety cards | Older safety screen included privacy/minimal-data cards; newer premium spec uses four stricter cards | Use four-card premium safety set. Privacy belongs elsewhere. | Premium page spec | Accepted | `page-data.ts` |
| D-012 | Guides tab label in nav | Primary nav item is `guides` in code samples, but public naming prefers `Perspectives` | Keep nav ID `guides`, public label `Perspectives`. | Layered decision | Accepted | `theme.ts`, UI nav rendering |
| D-013 | Knowledge article ending | Older layouts imply generic detail; addendum requires summary + article sections + use-now CTA + related products | Use addendum layout in canonical page spec. | Knowledge-layer addendum | Accepted | `page-data.ts` |
| D-014 | Design tokens source | Narrative premium tokens vs consolidated `theme.ts` pair | Use consolidated `theme.ts` as executable theme truth. | Consolidated builder spec | Accepted | `theme.ts` |
| D-015 | Store posture | Risk of detached ecommerce feel vs system-native commerce | Store must feel like an extension of Repair, not a separate commerce site. | Premium page spec | Accepted | `page-data.ts` |
| D-016 | Internal vs public naming of categories | `repair-desire` / `threats-to-system` too mechanical for public UX | Keep slugs, soften public labels. | Split by layer | Accepted | `theme.ts`, UI rendering |
| D-017 | Solo vs coupled V1 | Some prose allows `Use Together`; architecture says solo-first | Solo-first V1. Together mode remains disabled/coming later. | PWA + premium page spec | Accepted | `MASTER_SPEC.md`, `page-data.ts` |
| D-018 | Operational font usage | Some earlier notes lacked explicit font enforcement | Sans-only on control surfaces; serif only for selective marketing hero/display use. | Builder token spec | Accepted | `theme.ts` |
| D-019 | Progress metrics | Older PWA mentions family atmosphere trend; later premium spec adds recovery speed | Keep recovery speed in canonical progress overview; family-atmosphere effects may remain in content/metrics logic but not as a top-level canonical card requirement. | Premium page spec | Accepted | `page-data.ts` |
| D-020 | Open question: account/settings exposure in public IA docs | Route tree includes `/account` and `/settings`, but premium page spec does not detail them | Keep routes in executable tree; defer detailed screen spec until member-account pass. | Route tree | Deferred | later canonical page extension |

| D-021 | Open question: commerce surface labels | `DELIVERY_ARCHITECTURE.md` commerce-surface planning vs unresolved public commerce naming | Confirm final public label set for commerce surfaces. Until ratified, use conservative internal canonical keys in planning. | Pending ratification | Open | `DRIFT_REGISTER.md`, `page-data.ts`, delivery planning docs |
| D-022 | Open question: MOS core vs paid toolkit boundary | `DELIVERY_ARCHITECTURE.md` commercial-role model vs unresolved commerce packaging boundary | Confirm exact boundary between Core MOS and paid toolkit layer. Until ratified, use `provisional-paid` in planning rather than confirmed `paid`. | Pending ratification | Open | `DRIFT_REGISTER.md`, pricing/store copy, delivery planning docs |
| D-023 | Open question: premium support posture | Deferred premium/human-support ideas in delivery planning vs V1 implementation scope | Confirm whether premium / human-support tier exists in V1 at all. If not, defer explicitly to post-V1. | Pending ratification | Open | `DRIFT_REGISTER.md`, pricing/store posture, delivery planning docs |
| D-024 | Open question: pathway naming / surface naming / nav implication | `DELIVERY_ARCHITECTURE.md` pathway and surface labels vs canonical route/nav structure | Confirm whether any pathway, surface naming, or navigation implication in delivery planning requires new routes or further drift logging. | Pending ratification | Open | `DRIFT_REGISTER.md`, `routes.ts`, `page-data.ts`, delivery planning docs |
| D-025 | Open question: flagship pathway build order | Priority pathway ordering in delivery planning vs build sequencing docs | Confirm exact first flagship pathway build order. Until ratified, treat `After the fight` as the default first pathway. | Pending ratification | Open | `DRIFT_REGISTER.md`, delivery planning docs, operator planning |
| D-026 | Open question: phase numbering / content phase-gate authority | `marriage_os_implementation_phases.md` numbering vs `Implementation Plan.md` numbering | Resolve phase-numbering difference and declare which document is authoritative for content-operator phase gating. Until ratified, use `marriage_os_implementation_phases.md` as the content-gate reference. | Pending ratification | Open | `DRIFT_REGISTER.md`, `marriage_os_implementation_phases.md`, `Implementation Plan.md`, operator checklist |

## Usage rule
If a builder encounters a new conflict, they must:
1. log it here,
2. mark it `Open`,
3. avoid implementing from personal judgement,
4. wait for ratification.

If a conflict is not recorded here, it is not resolved.
