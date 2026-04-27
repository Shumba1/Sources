# BP-301 — Phase 3 opening packet: Repair Centre foundation with first repair slug

## Packet metadata
- **Packet ID:** BP-301
- **Phase:** Phase 3
- **Status:** Open
- **Type:** Implementation / local Repair Centre / bounded dynamic-route opening packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-3/review/`

---

## Objective

Open **Phase 3** by making Repair feel like the actual centre of the product, not a placeholder route.

This packet must establish a credible local Repair Centre and the first real dynamic repair path:

`/today/state → /today → /repair → /repair/[slug]`

This is the first Phase 3 packet.  
It is **not** permission to build the full content architecture, the full library, or every deferred detail route family.

---

## Why this packet exists now

Phase 2 has already produced the first credible local-first loop:

`/start → /today/check-in → /today/state → /today`

The canonical phase document defines **Phase 3 — Repair Centre with local content** as:

- repair index
- symptom/category browsing
- repair module template
- checklist/protocol rendering
- reset timeline
- sticky action bar
- linked local products/guides

It also defines the first real proof-of-life milestone as:

`/start → /today/check-in → /today/state → /today → /repair/[slug]`

This packet exists to hit that milestone cleanly.

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `README.md`
3. `docs/README_ACTIVE_SET.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/MASTER_SPEC.md`
6. `docs/marriage_os_implementation_phases.md`
7. `docs/DELIVERY_ARCHITECTURE.md`
8. `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
9. `docs/SYSTEM_DECAY_REPAIR_MODEL.md`
10. `docs/Voice and Tone Bible.md`
11. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
12. `docs/BRAND_AND_VISUAL_SYSTEM.md`
13. `docs/marriage_os_repo_enforcement_checklist.md`
14. `docs/ADR-001-production-architecture-marriage-os.md`
15. `docs/ADR-002-repo-cleanup-follow-up.md`
16. `docs/Implementation Plan.md`
17. `docs/marriage_os_operator_checklist.md`
18. `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` only if the packet changes metadata, indexability, or public-route policy
19. latest accepted Phase 2 packet notes:
    - BP-201 builder/review note
    - BP-202 builder/review note
    - BP-203 builder/review note
20. current live:
    - `src/config/routes.ts`
    - `src/config/page-data.ts`
    - `src/config/theme.ts`
    - `src/app/globals.css`
    - `src/config/seo.ts`
    - `src/app/(app)/today/page.tsx`
    - `src/app/(app)/repair/page.tsx`
    - `src/components/**` relevant shell and pathway components
    - any current local repair-content fixtures or route utilities

If authority conflicts appear, stop and report them.

---

## Packet classification

- **Type:** local Repair Centre implementation / bounded dynamic-route opening
- **Object type:** Repair index, Repair entry cards, Repair module template, protocol content object
- **Destination family:** repair
- **Target surface:** member-shell utility flow and repair module
- **Brand / visual posture:** Repair action surface; member-shell instrument mode; urgent-but-calm; stepwise; blue-led; no marketing-campaign leakage
- **Renderer / component path:** `src/app/(app)/**`, minimal `src/components/**`, minimal `src/config/**`, minimal `src/lib/**`, minimal local content/fixture files
- **Moment of use:** user needs one practical repair path after state/today, usually under strain and with low patience
- **Phase-eligible now:** yes
- **Sequencing authority:** `docs/marriage_os_implementation_phases.md`

---

## Dynamic-route boundary for this packet

### BP-301 may open
- `/repair`
- `/repair/[slug]`

### BP-301 must not open
- `/guides/[slug]`
- `/knowledge/[slug]`

### Why
The Phase 1 defer map listed all three detail-route families under Phase 3, but BP-301 must stay bounded.

This packet exists to make **Repair** real first.  
The canonical phase model then assigns **Perspectives and Knowledge with local content** to **Phase 4** as the centre of that later work.

So for execution discipline:

- `/repair/[slug]` is in scope now
- `guides` detail and `knowledge` detail are **operationally deferred to Phase 4 packets** unless an accepted later packet explicitly widens scope

This is a packet-boundary decision, not a contradiction of the route tree.

---

## Brand and visual-system boundary for this packet

BP-301 must obey `docs/BRAND_AND_VISUAL_SYSTEM.md`.

The Repair Centre is not visually equal to Guides/Perspectives or Knowledge. Repair is the V1 action/intervention centre. It must present as a practical, stepwise, behaviour-first surface.

### BP-301 must express Repair as

- urgent-but-calm
- immediate without being alarmist
- stepwise rather than article-like
- action-first rather than explanation-first
- member-shell instrument mode, not marketing invitation mode
- dark, sparse, blue-led, private, and tool-first
- clearly more intervention-oriented than Guides/Perspectives and Knowledge

### BP-301 must not express Repair as

- a generic article library
- a course catalogue
- a knowledge-base index
- a campaign landing page
- a therapy workbook
- a marketing conversion surface
- a warm ember/rust-led public persuasion surface

The warm marketing accent is not the default member/app action colour. Repair primary actions should use the governed member-shell action language unless a bounded caution or emotional-heat cue justifies a restrained exception.

---

## Scope contract

### What BP-301 must do

BP-301 must deliver a credible, bounded Repair Centre:

1. user can move coherently from `/today` into `/repair`
2. `/repair` feels like a real product surface, not a stub
3. user can choose a bounded repair path through clear symptom/category entry points
4. `/repair/[slug]` renders a real local repair module
5. the repair module contains practical structure:
   - what this is for
   - what to do first
   - checklist / protocol
   - reset timeline or equivalent progression cue
   - one bounded caution / anti-pattern element
   - one clear action rail / sticky action bar or equivalent
6. local repair content/fixtures are sufficient for the surface to feel product-real
7. the product clearly centres on Repair after the state/today flow

### What BP-301 must not do

BP-301 must **not** become:

- a full knowledge / perspectives implementation
- a full content-platform build
- a giant content dump
- backend persistence work
- auth work
- entitlement or commerce work
- AI helper work
- multi-family dynamic-route explosion
- generic editorial overbuild

---

## In scope

### 1. Real `/repair` index surface
Implement or upgrade the Repair landing surface so it feels like the actual product centre.

At minimum:
- clear repair framing
- bounded symptom/category entry points
- one dominant next path
- scan-first hierarchy
- solo-first wording
- premium member-shell restraint
- visible continuity from state/today

### 2. First dynamic repair detail route
Implement `/repair/[slug]` as the first true Phase 3 dynamic route.

Hard rule:
- route count must stay bounded
- slug set must stay bounded
- use local content/fixtures only

At minimum:
- a real repair module template
- stable slug mapping
- local data source that is auditable and reviewable
- usable mobile rendering

### 3. Repair module structure
The first repair module(s) must include enough structure to feel like a real tool.

At minimum:
- module title
- short state/problem framing
- “do this first” step
- bounded checklist / protocol steps
- reset timeline or practical sequence cue
- one caution / “do not do this now” element
- one short script or prompt where useful
- sticky action bar or equivalent practical-use anchor

### 4. State → repair continuity
The transition from `/today` into `/repair` must be coherent and fast.

At minimum:
- one clear CTA from today into repair
- no equal-weight route clutter
- the recommended repair path should feel like the natural continuation of the earlier state result

### 5. Local-content posture
Use only local repair content/fixtures in this packet.

Acceptable:
- structured local fixture objects
- small local content modules
- local slug maps
- bounded render helpers
- local protocol/checklist data

Do **not** add:
- database content
- CMS content
- remote content fetch
- AI-generated runtime content
- unbounded MDX architecture unless the implementation genuinely requires a tiny local proof path

---

## Out of scope

- `/guides/[slug]`
- `/knowledge/[slug]`
- full guides index/detail
- full knowledge index/detail
- store/pricing/library work
- auth/account/settings work
- persistence across sessions
- real analytics/progress systems
- backend content sourcing
- broad redesign outside what is needed for Repair coherence

---

## Product realism contract

The Repair Centre must feel designed for a user who:

- is strained, defensive, ashamed, lonely, angry, or exhausted
- wants one credible repair path, not a lecture
- is using the product alone
- will disengage if the surface feels academic, bloated, or therapy-workbook-like

The Repair Centre must therefore:
- reduce ambiguity fast
- present one practical entry path
- feel calm and decisive
- avoid generic article energy
- avoid equal-weight card soup
- preserve the premium member-shell tone
- make Repair obviously the centre of the product
- visually distinguish Repair from Guides/Perspectives and Knowledge
- keep marketing warmth and campaign intensity out of the member-shell repair flow
- make the first action visible before explanation becomes heavy

---

## Source-reservoir rule for this packet

Repair content for BP-301 must follow the source-reservoir mapping discipline:

- backbone logic should come from durable repair/doctrine material
- emotionally real phrasing may be informed by the master corpus
- online chatter must not become the backbone logic
- if new content-object categories start appearing, stop and report drift

If this packet cannot stay inside the existing object map, stop and report it.

---

## UX / quality contract

The packet must satisfy all of the following:

1. `/repair` feels intentional, not placeholder
2. `/repair/[slug]` feels like a real module, not a long article
3. one dominant CTA exists at each step
4. scan-first hierarchy is preserved
5. the member shell stays premium, restrained, and tool-like
6. actionable things clearly look actionable
7. the user reaches a believable repair action fast
8. the state → repair pathway feels coherent and inevitable
9. Repair presents as an action/intervention surface, not a guide or reference article
10. member-shell visual posture remains dark, sparse, blue-led, private, and tool-first
11. no marketing-only ember/rust CTA treatment or campaign panel styling leaks into Repair

---

## Preferred implementation posture

This packet should prefer:

- bounded slug count over route sprawl
- practical protocol structure over explanatory essaying
- simple auditable local data over premature content systems
- continuity from today/state over standalone module cleverness
- one strong module pattern over many half-real ones

Avoid:
- giant category trees
- pseudo-profound repair copy
- placeholder prose disguised as product
- “AI coach” language
- six different repair paths competing at once
- making guides/knowledge detail work “while here”

---

## Allowed files

Builder may touch only the minimum file set required for this packet.

Likely allowed areas:

- `src/app/(app)/repair/page.tsx`
- `src/app/(app)/repair/[slug]/page.tsx`
- `src/app/(app)/today/page.tsx` only if needed for state → repair continuity
- minimal supporting components for:
  - repair entry cards
  - repair module shell/template
  - checklist/protocol rendering
  - sticky action bar
  - caution/anti-pattern card
  - quick script / practical support card
- minimal local utility/module files for slug mapping and repair data
- minimal local content/fixture files for bounded repair modules
- `src/config/page-data.ts`
- `src/config/routes.ts`
- `src/config/theme.ts` only if a Repair-specific existing token is required and already sanctioned by the brand system
- `src/app/globals.css` only where genuinely needed for Repair coherence and aligned to `docs/BRAND_AND_VISUAL_SYSTEM.md`

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- auth files
- database or Supabase files
- Stripe / commerce files
- guides detail files
- knowledge detail files
- unrelated route families
- Phase 1 / Phase 2 governance docs
- public marketing pages unless absolutely required for route continuity
- AI route handlers or prompts

---

## Acceptance criteria

BP-301 passes only if all of the following are true:

1. `/repair` works as a credible Repair Centre surface
2. `/repair/[slug]` renders a believable local repair module
3. the first dynamic repair slug works cleanly
4. the flow from state/today into repair is coherent and fast
5. Repair is obviously the centre of the experience
6. local repair content/fixtures are sufficient for product realism
7. no guides/knowledge detail routes were opened in this packet
8. no backend/auth/commerce/AI creep was introduced
9. the patch remains bounded enough to review as a Phase 3 opening packet
10. `pnpm lint` passes
11. `pnpm build` passes
12. Repair follows `docs/BRAND_AND_VISUAL_SYSTEM.md`
13. Repair remains visually and structurally more action-oriented than Guides/Perspectives and Knowledge
14. no marketing-shell warmth, campaign intensity, or public persuasion styling has leaked into the member repair flow

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- slug set implemented
- note on `/repair`
- note on `/repair/[slug]`
- note on state → repair continuity
- note on content-object posture
- explicit confirmation that `guides` and `knowledge` detail routes were not opened
- explicit confirmation that no forbidden-scope systems were introduced
- explicit confirmation that `docs/BRAND_AND_VISUAL_SYSTEM.md` was consulted
- explicit confirmation that Repair presents as an action/intervention surface, not as Guides/Perspectives or Knowledge
- explicit confirmation that marketing-only warm accent/campaign styling did not leak into the member repair flow

If validation fails, record the exact failure.

---

## Builder instructions

1. Start from the current live shell and accepted Phase 2 loop, not from early stubs.
2. Keep the route family bounded.
3. Keep the repair module practical, not essay-driven.
4. Keep slug count restrained.
5. Preserve strong CTA hierarchy.
6. Do not smuggle in guides/knowledge detail implementation.
7. Preserve the member-shell instrument mode defined in `docs/BRAND_AND_VISUAL_SYSTEM.md`.
8. Keep Repair visually action-first and structurally distinct from Guides/Perspectives and Knowledge.
9. Stop if the packet begins drifting into content-platform architecture or later-phase systems.

---

## Reviewer focus

Reviewer must check:

- whether Repair now clearly feels like the centre
- whether `/repair/[slug]` works as a real dynamic repair module
- whether the state → repair move is fast and believable
- whether the packet stayed bounded to Repair
- whether the route/detail work remained disciplined
- whether lint/build pass
- whether the Repair surface complies with `docs/BRAND_AND_VISUAL_SYSTEM.md`
- whether Repair presents as action/intervention rather than Guides/Perspectives meaning content or Knowledge reference content
- whether marketing-shell warmth/campaign styling has been kept out of the member repair flow

The Content / Structure Operator must confirm:
- the Repair module is practical, not preachy
- the content-object shape matches the moment of use
- the source-reservoir logic was respected
- the packet did not silently become a generic article system

The Human Governor must confirm:
- this is the right depth for opening Phase 3
- the app now has a credible local Repair Centre
- Phase 4 work has not been pulled forward irresponsibly

---

## Required outputs

### Primary output
A bounded Phase 3 opening patch implementing the Repair Centre foundation and first repair slug.

### Builder handoff note
Create:

`reviews/phase-3/open/BP-301-phase-3-repair-centre-foundation-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- slug rationale
- repair-centre rationale
- state → repair continuity rationale
- explicit confirmation that `guides` and `knowledge` detail routes were deferred
- explicit confirmation that no forbidden-scope systems were touched
- brand and visual-system compliance note
- explicit confirmation that Repair remains visually and structurally distinct from Guides/Perspectives and Knowledge

---

## Initial task state

Place this file at:

`tasks/phase-3/open/BP-301-phase-3-repair-centre-foundation.md`

Builder-complete work must move to:

`tasks/phase-3/review/`

Only accepted work ends in:

`tasks/phase-3/done/`

---

## Stop conditions

Stop and report immediately if:

- the slug set cannot be kept bounded
- the repair module cannot feel real without opening broader content architecture
- the packet begins drifting into guides/knowledge detail work
- the patch begins drifting into backend/auth/database/commerce/AI work
- the patch stops being a clean Phase 3 opening packet
- Repair starts presenting like a guide, article library, knowledge base, or public marketing campaign surface
- member-shell visual posture begins inheriting marketing-only warm accent/campaign styling

---

## Success definition

Success is not “there are more content files.”

Success is:

- Repair clearly becomes the centre of the product
- `/repair` works
- `/repair/[slug]` works
- the user can move from state/today into one believable repair path
- the packet stays bounded
- validation passes
- Phase 3 is genuinely underway without dragging Phase 4 forward
- Repair is visually and structurally confirmed as the action/intervention centre, not a guides/knowledge surface
