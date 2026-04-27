# Summary

<!-- What does this PR change? Keep it specific. -->

## Why this change

<!-- Why is this needed now? What problem does it solve? -->

## Targets touched

<!-- Tick all that apply -->
- [ ] Auth
- [ ] Routes / navigation
- [ ] Pricing / store / commerce
- [ ] Content layer
- [ ] Repair
- [ ] Perspectives
- [ ] Knowledge
- [ ] Product pages
- [ ] Theme / page-data / config
- [ ] Brand / visual system
- [ ] Runtime registry / renderers / resolvers
- [ ] Schemas / contracts
- [ ] Database / Supabase
- [ ] Stripe / entitlements
- [ ] Delivery architecture / content pipeline
- [ ] Other: _________

---

# Canonical source checks

- [ ] I started from `docs/README_ACTIVE_SET.md`
- [ ] I checked `docs/MASTER_SPEC.md`
- [ ] I checked `docs/DRIFT_REGISTER.md`
- [ ] If relevant, I checked ADR-001 and ADR-002
- [ ] If relevant, I checked `src/config/routes.ts`, `src/config/theme.ts`, and `src/config/page-data.ts`
- [ ] If writing is touched, I checked `docs/Voice and Tone Bible.md`
- [ ] If brand posture, palette, shell expression, Repair/Guides/Knowledge presentation, or visual hierarchy is touched, I checked `docs/BRAND_AND_VISUAL_SYSTEM.md`
- [ ] If visuals, icons, or media are touched, I checked `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- [ ] If search visibility, metadata, canonical URLs, robots, sitemap, or schema are touched, I checked `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
- [ ] If source-reservoir choices matter, I checked `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
- [ ] If relevant, I checked `src/schemas/*` and render/runtime contracts
- [ ] If relevant, I checked `docs/DELIVERY_ARCHITECTURE.md` and the operator checklist only within their allowed planning/promotion scope

---

# Production architecture checks (ADR-001)

## Auth
- [ ] This PR uses **Supabase Auth only**
- [ ] This PR does **not** add or revive **NextAuth** or any parallel auth flow
- [ ] If this PR touches identity, profiles, purchases, entitlements, or saved items, they all resolve from the same Supabase user identity

## Core stack
- [ ] This PR stays inside the approved production stack: **Next.js + TypeScript + Tailwind + Supabase + Stripe + in-repo content**
- [ ] This PR does **not** introduce a second primary backend, CMS, or auth layer without a new ADR
- [ ] If commerce is touched, it still routes through **Stripe** and entitlement logic rather than ad hoc purchase handling

## Content model
- [ ] Editorial content remains in the repo content layer
- [ ] New content goes into the correct content class: `repair`, `guides`, `knowledge`, or `products`

---

# Repo cleanup enforcement (ADR-002)

## Dead architecture
- [ ] This PR does **not** add `NextAuth`, `[...nextauth]`, or docs/comments implying dual-auth
- [ ] If dead NextAuth residue was encountered, it was removed or clearly marked dead rather than extended
- [ ] This PR does **not** introduce or preserve stale `/upgrade` route logic
- [ ] If monetisation is touched, it uses the live surfaces: `/pricing`, `/store`, product pages, or contextual in-product monetisation
- [ ] This PR does **not** treat older scaffold files as live architecture

## Canonical UX and naming
- [ ] Visible labels are aligned to the canonical UX layer
- [ ] User-facing UI uses **Perspectives** instead of old public `Guides` labels where relevant
- [ ] The UI uses ratified category labels such as **Attraction & Desire**, **Life Pressure**, and **External Pressure**
- [ ] This PR does **not** reintroduce stale CTA copy such as `Check Our State`, `Continue Solo`, or `See My State`

## Knowledge-layer enforcement
- [ ] If `/knowledge/[slug]` is touched, this PR uses **ArticleSection** for article-body rendering
- [ ] This PR does **not** use **KnowledgeArticleCard** as a detail-page body renderer
- [ ] If resolver logic is touched, list/index concerns are separated from detail/body concerns
- [ ] If runtime registry or section rendering is touched, `ArticleSection` is fully wired through the live render path

---


# Voice and writing checks

Use this section whenever the PR changes UI text, prompts, scripts, articles, emails, notifications, or social/post-ready copy.

- [ ] The writing stays calm, plain, direct, and useful
- [ ] The writing does **not** take sides or turn pain into propaganda
- [ ] The writing says what is happening, why it matters, and what to do next where relevant
- [ ] The writing avoids banned register from `docs/Voice and Tone Bible.md`
- [ ] The writing would still help at midnight

---
# Graphics and media checks

Use this section whenever the PR changes icons, direction arrows, empty states, screenshots, mockups, product previews, diagrams, motion, or photography/media choices.

- [ ] The PR follows `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- [ ] The PR follows `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` where search visibility or schema are touched
- [ ] It uses **Lucide** as the primary shipped icon system unless a documented exception exists
- [ ] It does **not** mix icon families in shipped UI without ratified justification
- [ ] Directional affordances follow approved semantics
- [ ] Member-shell visuals remain sparse, tool-first, and nearly photography-free
- [ ] Marketing visuals remain restrained and product-truthful
- [ ] Asset formats/loading follow the approved rules (SVG for icons/diagrams, WebP/AVIF for screenshots/mockups/product previews, no icon fonts)

---
# Delivery and content-gating checks

Use this section when the PR touches delivery planning, fixture content, content promotion, generated content, or content/render coupling.

## Phase and surface gating
- [ ] This PR respects the object's current **Phase Eligibility**
- [ ] This PR does **not** draft or wire AI-only objects before the AI phase
- [ ] If tiered repair content is touched, free-tier and paid-tier logic are authored together and surfaced/wired in the correct phases

## Safety and solo-first
- [ ] If content objects are touched, **Safety Class** is explicitly assigned and respected where relevant
- [ ] `CAUTION`, `SCREEN`, and `EXCLUDE` handling follows the escalation decision tree where relevant
- [ ] This PR preserves **solo-first V1** and does not sneak together-mode assumptions into V1

## Render and anchor checks
- [ ] New or changed content objects are bound to a real UI component or explicitly deferred
- [ ] New or changed content objects are anchored to the correct repair module / entry-point / off-product surface
- [ ] This PR does **not** create floating content with no route, no component, or no phase

---

# Technical SEO and page-schema checks

- [ ] Public/indexable routes remain aligned to `src/config/routes.ts` and `src/config/seo.ts`
- [ ] Member/private routes remain excluded from sitemap output
- [ ] Canonical URLs are singular, absolute, and aligned with sitemap output
- [ ] This PR does **not** use `robots.txt` as a substitute for page-level `noindex` on crawlable exclusions
- [ ] Any structured data added is JSON-LD, truthful to visible content, and limited to approved page types
- [ ] This PR does **not** add public-search schema to private/member routes
- [ ] This PR does **not** rely on FAQPage or HowTo rich-result logic as a project growth assumption

# Product posture checks

- [ ] This PR preserves **Repair as the centre of V1**
- [ ] This PR does **not** turn Knowledge into the real product
- [ ] This PR keeps Perspectives parallel and non-adversarial
- [ ] This PR keeps the tone calm, practical, structured, emotionally adult, and consistent with the Voice & Tone Bible
- [ ] This PR does **not** introduce ideology-coded, coercive, surveillance-oriented, or manipulative behaviour

---

# Evidence

<!-- Link the strongest evidence for this PR -->
- Spec / ADR:
- Config / route / page-data reference:
- Schema / render-contract reference:
- Delivery / content-gating reference:
- Graphics / media reference:
- Test evidence:
- Screenshots / recording:
- Other:

---

# Reviewer focus

<!-- Point reviewers to the highest-risk parts -->
- Please review:
- Please ignore:
- Main risk area:
- Known follow-up work (if any):

---

# Stop conditions

<!-- If any of these are true, this PR is not ready -->
- [ ] A second auth system is introduced or implied
- [ ] `/upgrade` is reintroduced as live route logic
- [ ] Stale public labels or CTA copy are reintroduced
- [ ] Knowledge detail is rendered through the wrong component path
- [ ] Legacy scaffold residue is being treated as architecture
- [ ] This PR conflicts with the canonical route/config/page-data layer
- [ ] This PR conflicts with the schema/contracts layer
- [ ] This PR drafts or wires content outside its allowed phase
- [ ] This PR ignores Safety Class / escalation requirements where relevant
- [ ] This PR introduces writing that violates the Voice & Tone Bible
- [ ] This PR introduces unratified icon/media drift or violates `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- [ ] This PR introduces technical-SEO/schema drift or violates `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
- [ ] This PR introduces a major stack decision without a new ADR

> If any box above is checked, send this PR back.

---

# Builder sign-off

- [ ] I checked this PR against `docs/README_ACTIVE_SET.md`
- [ ] I checked this PR against `docs/Voice and Tone Bible.md` where writing was touched
- [ ] I checked this PR against `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` where visuals/media were touched
- [ ] I checked this PR against `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` where search visibility, metadata, sitemap, robots, canonical, or schema were touched
- [ ] I checked this PR against ADR-001
- [ ] I checked this PR against ADR-002
- [ ] I checked this PR against `docs/MASTER_SPEC.md`
- [ ] I checked this PR against `docs/DRIFT_REGISTER.md`
- [ ] I did not rely on dead scaffold artefacts
- [ ] I did not reintroduce stale route, auth, or UX logic
- [ ] I respected delivery-phase, safety, and solo-first rules where relevant

## Notes from builder

<!-- Optional -->

---

# Reviewer sign-off

- [ ] I checked stack compliance
- [ ] I checked dead-architecture cleanup rules
- [ ] I checked canonical naming / CTA rules
- [ ] I checked voice / tone compliance where writing was touched
- [ ] I checked graphics/media/iconography compliance where visuals were touched
- [ ] I checked the knowledge-detail path if relevant
- [ ] I checked route/config/page-data alignment if relevant
- [ ] I checked schema/contract alignment if relevant
- [ ] I checked delivery gating and Safety Class rules if relevant
- [ ] I found no ADR conflicts, or I have explicitly requested a new ADR

## Review outcome

- [ ] Approve
- [ ] Request changes

## Notes from reviewer

<!-- Optional -->
