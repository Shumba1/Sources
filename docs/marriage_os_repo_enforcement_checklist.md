# Marriage OS — Repo Enforcement Checklist
**Source:** Active canonical set, ADR-001, ADR-002, MASTER_SPEC, DRIFT_REGISTER, executable config, and DELIVERY_ARCHITECTURE where relevant.  
**Use this in PR review.**  
If any answer is “No”, the PR is not ready.

---

## 0. Canonical source check

- [ ] Did the builder work from `docs/README_ACTIVE_SET.md` first?
- [ ] Did the builder check `docs/MASTER_SPEC.md` and `docs/DRIFT_REGISTER.md` before implementation?
- [ ] If this PR touches routes, labels, or UX, was it checked against `src/config/routes.ts`, `src/config/theme.ts`, and `src/config/page-data.ts`?
- [ ] If this PR touches contracts or render paths, was it checked against `src/schemas/*` and runtime/component registry files?
- [ ] If this PR depends on a planning-layer document, is that use consistent with its non-canonical scope?

---


## 0.5. Voice and tone enforcement

- [ ] If this PR changes copy, prompts, scripts, UI text, articles, emails, notifications, or social copy, was it checked against `docs/Voice and Tone Bible.md`?
- [ ] Does the changed writing stay calm, plain, direct, and useful?
- [ ] Does it avoid side-taking, ideology bait, therapy-speak drift, and manipulative/coercive framing?
- [ ] Does it say what is happening, why it matters, and what to do next where relevant?

## 0.75. Graphics and media enforcement

- [ ] If this PR touches icons, arrows/chevrons, diagrams, screenshots, mockups, product previews, illustrations, motion, or photography, was it checked against `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`?
- [ ] If this PR touches search visibility, metadata, canonical URLs, robots, sitemap output, or structured data, was it checked against `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`?
- [ ] Does this PR use **Lucide** as the primary shipped icon system unless a documented exception exists?
- [ ] Does this PR avoid mixing icon families in shipped UI without ratified justification?
- [ ] Do directional affordances follow the approved semantics (`chevron-right` drill-in, `chevron-left` in-app back, `chevron-down/up` disclosure, `arrow-up-right` outbound, etc.)?
- [ ] If member-shell visuals are touched, does the PR keep the member shell sparse, tool-first, and nearly photography-free?
- [ ] If marketing visuals are touched, do they stay restrained, product-truthful, and free of stock-couple / romance-fantasy drift?
- [ ] Do asset formats and loading choices follow the approved rules (SVG for icons/diagrams, WebP/AVIF for screenshots/mockups/product previews, no icon fonts)?

---

## 1. Production stack enforcement

### Auth
- [ ] Does this PR use **Supabase Auth only**?
- [ ] Does this PR avoid adding or reviving **NextAuth** or any parallel auth flow?
- [ ] If the PR touches identity, profiles, purchases, entitlements, or saved items, do they all resolve from the same Supabase user identity?

### Core stack
- [ ] Does this PR remain inside the approved production stack: **Next.js + TypeScript + Tailwind + Supabase + Stripe + in-repo content**?
- [ ] Does this PR avoid introducing a second primary backend, CMS, or auth layer without a new ADR?
- [ ] If commerce is touched, does it still route through **Stripe** and entitlement logic rather than ad hoc purchase handling?

### Content model
- [ ] Does this PR keep editorial content in the repo content layer rather than quietly moving it into database-managed CMS logic?
- [ ] If content is added, is it going into the correct content class: `repair`, `guides`, `knowledge`, or `products`?

---

## 2. Dead architecture enforcement

### NextAuth
- [ ] Does this PR avoid adding `NextAuth`, `[...nextauth]`, or docs/comments implying dual-auth?
- [ ] If the repo still contains any dead NextAuth residue, does this PR remove it or clearly mark it dead instead of extending it?

### `/upgrade`
- [ ] Does this PR avoid introducing or preserving stale `/upgrade` route logic?
- [ ] If monetisation is touched, does it use the live surfaces: `/pricing`, `/store`, product pages, or contextual in-product monetisation?

### Old route / scaffold residue
- [ ] Does this PR avoid treating older scaffold files as live architecture?
- [ ] If a legacy artefact conflicts with the canonical layer or ADRs, does this PR remove it or stop depending on it?

---

## 3. Canonical UX and naming enforcement

### Public labels
- [ ] Are visible labels aligned to the canonical UX layer?
- [ ] Does the PR use **Perspectives** instead of old public `Guides` labels where user-facing?
- [ ] Does the PR use the ratified category labels such as **Attraction & Desire**, **Life Pressure**, and **External Pressure** in the UI?

### CTA copy
- [ ] Does the PR avoid stale CTA copy such as `Check Our State`, `Continue Solo`, or `See My State`?
- [ ] If new CTA copy is introduced, is it message-matched, specific, and consistent with the premium UX layer?

### Theme and page-data
- [ ] If this PR changes visual behaviour, typography, state colours, reading measure, or CTA hierarchy, does it align with `src/config/theme.ts`?
- [ ] If this PR changes page structure, hero copy, page intent, or route-level section composition, does it align with `src/config/page-data.ts`?

---

## 4. Knowledge-layer enforcement

- [ ] If `/knowledge/[slug]` is touched, does the PR use **ArticleSection** for article-body rendering?
- [ ] Does the PR avoid using **KnowledgeArticleCard** as a detail-page body renderer?
- [ ] If resolver logic is touched, are list/index concerns separated from detail/body concerns?
- [ ] If runtime registry or section rendering is touched, is `ArticleSection` wired through the actual runtime/render path, not just declared in page data?
- [ ] Does Knowledge still behave like a supporting repository rather than taking over the product centre?

---

## 5. Delivery architecture and content gating enforcement

Use this section only when the PR touches drafting logic, content generation, fixtures, delivery planning, or content promotion.

### Phase and surface gating
- [ ] If content objects are added or changed, do they respect the current implementation phase and the object's `Phase Eligibility`?
- [ ] Does the PR avoid drafting or wiring AI-only objects before the AI phase?
- [ ] If a repair module object is touched, is free-tier vs paid-tier logic authored together and wired according to the correct phase?

### Safety and solo-first
- [ ] If content objects are added or changed, is **Safety Class** explicitly assigned and respected?
- [ ] Do `CAUTION`, `SCREEN`, and `EXCLUDE` objects obey the escalation decision tree and safety-card logic?
- [ ] Does the PR preserve **solo-first V1** and avoid introducing together-mode assumptions into V1 flows?

### Rendering and anchoring
- [ ] Is each new or changed content object bound to a real UI component or correctly deferred?
- [ ] Is each new or changed content object anchored to the right repair module / entry-point / off-product surface?
- [ ] Does the PR avoid creating floating content with no route, no component, or no phase?

---

## 6. Technical SEO and page-schema enforcement

- [ ] If this PR touches route visibility, are public/indexable routes still aligned to `src/config/routes.ts` and `src/config/seo.ts`?
- [ ] Does this PR keep member/app routes private and out of sitemap output?
- [ ] If this PR adds or changes metadata, are canonical URLs absolute, singular, and aligned with sitemap output?
- [ ] Does this PR avoid using `robots.txt` as a substitute for `noindex` on crawlable pages?
- [ ] If this PR adds structured data, is it JSON-LD, truthful to visible content, and limited to approved page types?
- [ ] Does this PR avoid adding public-search schema to private/member surfaces?
- [ ] Does this PR avoid relying on FAQPage or HowTo rich-result logic as a growth tactic?

## 6. Product posture enforcement

- [ ] Does the PR preserve **Repair as the centre of V1**?
- [ ] Does the PR avoid turning Knowledge into the real product?
- [ ] Does the PR keep Perspectives parallel and non-adversarial?
- [ ] Does the PR keep the tone calm, practical, structured, emotionally adult, and consistent with the Voice & Tone Bible?
- [ ] Does the PR avoid ideology-coded, coercive, surveillance-oriented, manipulative, or martyrdom-romanticising behaviour?

---

## 7. PR review stop conditions

**Stop the PR immediately if any of the following are true:**
- [ ] A second auth system is introduced or implied
- [ ] `/upgrade` is reintroduced as live route logic
- [ ] Stale public labels or CTA copy are reintroduced
- [ ] Knowledge detail is rendered through the wrong component path
- [ ] Legacy scaffold residue is being treated as architecture
- [ ] The PR conflicts with the canonical route/config/page-data layer
- [ ] The PR conflicts with the schema/contracts layer
- [ ] The PR drafts or wires content outside its allowed phase
- [ ] The PR ignores Safety Class / escalation requirements where relevant
- [ ] The PR introduces writing that violates the Voice & Tone Bible
- [ ] The PR introduces a major stack decision without a new ADR

If any box above is checked, the PR should be sent back.

---

## 8. Reviewer sign-off

### Builder confirms
- [ ] I checked this PR against `docs/README_ACTIVE_SET.md`
- [ ] I checked this PR against `docs/Voice and Tone Bible.md` where writing was touched
- [ ] I checked this PR against `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` where visuals/media were touched
- [ ] I checked this PR against `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` where search visibility, metadata, robots, sitemap, canonical, or schema were touched
- [ ] I checked this PR against ADR-001 and ADR-002
- [ ] I checked this PR against `docs/MASTER_SPEC.md` and `docs/DRIFT_REGISTER.md`
- [ ] I did not rely on dead scaffold artefacts
- [ ] I did not reintroduce stale route, auth, or UX logic
- [ ] I respected delivery-phase, safety, and solo-first rules where relevant

### Reviewer confirms
- [ ] I checked stack compliance
- [ ] I checked dead-architecture cleanup rules
- [ ] I checked canonical naming / CTA rules
- [ ] I checked voice / tone compliance where writing was touched
- [ ] I checked graphics/media/iconography compliance where visuals were touched
- [ ] I checked the knowledge-detail path if relevant
- [ ] I checked route/config/page-data alignment if relevant
- [ ] I checked schema/contract alignment if relevant
- [ ] I checked delivery gating and Safety Class rules if relevant
- [ ] I found no ADR or canonical-layer conflicts, or I have explicitly requested a new ADR

---

## 9. Short version

**No NextAuth. No `/upgrade`. No stale labels. No stale CTAs. No card-based knowledge detail rendering. No treating scaffold residue as live architecture. No phase-breaking content work. No ignored safety gating.**

If a PR breaks one of those, it is not ready.
