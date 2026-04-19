# ADR-002 — Repo Cleanup Follow-up: Remove Dead Architecture and Stale Product Logic

- **Status:** Accepted
- **Date:** 2026-04-12
- **Owners:** Product / Architecture
- **Depends on:** ADR-001 — Production Architecture for Marriage OS
- **Scope:** Immediate cleanup of stale scaffold artefacts and superseded product logic

---

## 1. Decision

The team will immediately remove, deprecate, or mark dead any repo artefact that conflicts with the accepted production architecture and canonical UX/content layer.

This cleanup starts with:

1. **NextAuth scaffold artefacts**
2. **Stale `/upgrade` route logic**
3. **Old public labels and CTA copy**
4. **Old knowledge-detail component mapping**
5. **Any legacy route or config implication that conflicts with the canonical layer**

This is not optional polish.
It is architecture hygiene needed to stop drift.

---

## 2. Why this ADR exists

Older files in the project still imply implementation choices that are no longer live decisions.

The most dangerous examples are:

- a `NextAuth` scaffold route in the older repo tree
- `/upgrade` as a route in the older PWA screen spec
- legacy public labels such as `Guides`, `Repair Desire`, and `Threats To The System`
- the old knowledge-detail mapping that still uses `KnowledgeArticleCard` where the accepted fix requires `ArticleSection`

If these are left in place, builders will keep treating dead scaffold residue as live architecture.

---

## 3. Remove or mark dead immediately

## 3.1 NextAuth scaffold artefacts

### Decision
Any `NextAuth` scaffold is dead architecture.

### Action
Remove or clearly mark dead:
- `src/app/(marketing)/api/auth/[...nextauth]/route.ts`
- any imports, env assumptions, helper files, or comments that imply NextAuth is active
- any documentation that treats NextAuth as part of the stack

### Why
ADR-001 already locks **Supabase Auth** as the sole auth system.
Keeping `NextAuth` in the tree invites split-brain auth and builder confusion.

### Rule
If a file references both:
- Supabase Auth as identity source
- and `NextAuth` routes/scaffold

the `NextAuth` side is to be treated as dead and removed.

---

## 3.2 `/upgrade` route logic

### Decision
`/upgrade` is not part of canonical V1 route logic.

### Action
Remove or mark dead:
- any `Upgrade` route scaffold
- any route config entries for `/upgrade`
- any nav items or menu items pointing to `/upgrade`
- any “upgrade journey” assumptions that treat `/upgrade` as the monetisation destination

### Replace with
Use:
- `/pricing`
- `/store`
- store detail pages
- contextual product/program surfaces inside Repair, Knowledge, Today, and Library

### Why
Older PWA material explicitly used `/upgrade`, but the repo tree and later route/config direction move monetisation through `/pricing` and `/store` instead.

---

## 3.3 Old public labels

### Decision
Old public UX labels that were superseded by the premium UX layer must not remain live in route config, page data, or visible UI copy.

### Action
Replace or mark dead any public UI using these stale labels:

- `Guides` → `Perspectives`
- `His Guide` → `His Perspective`
- `Her Guide` → `Her Perspective`
- `Read Both` → `Read Both Perspectives`
- `Repair Desire` → `Attraction & Desire`
- `Overload & Life Phase` → `Life Pressure`
- `Threats To The System` → `External Pressure`

### Rule
Infrastructure slugs may remain stable where already chosen, but visible labels must follow the canonical copy layer.

---

## 3.4 Old CTA copy

### Decision
Generic or stale CTA copy from the older PWA pass must not remain as live product copy.

### Action
Replace or mark dead these examples where they still appear:

- `Check Our State` → `Check the Relationship State`
- `Continue Solo` → `Start the Solo Check-In`
- `See My State` → `See the Current State`
- `Do This First` → `Open the First Repair Step`
- `Why This Is Happening` → `See Why This State Appears`

### Why
The revised premium UX spec explicitly supersedes these with clearer, message-matched CTA language.

---

## 3.5 Knowledge detail rendering mismatch

### Decision
The accepted addendum wins:
`/knowledge/[slug]` must use `ArticleSection` for article body rendering.

### Action
Remove or mark dead any older mapping that still treats knowledge detail as:
- `KnowledgeArticleCard` only
- card-style article body rendering
- resolver logic where `knowledgeArticles()` is doing both index-card and detail-body jobs

### Replace with
- `KnowledgeArticleCard` for index/list/featured/related use
- `ArticleSection` for detail-page body sections
- `knowledgeArticles()` for list/index only
- `articleSections()` for detail-page body only

### Why
This is an accepted architecture fix, not optional cleanup.

---

## 4. Immediate cleanup checklist

The team should do the following now:

### Auth
- [ ] remove `NextAuth` route scaffold
- [ ] remove stale auth comments or docs implying dual-auth
- [ ] confirm Supabase Auth is the only identity rail

### Monetisation routes
- [ ] remove `/upgrade` route assumptions
- [ ] confirm `/pricing` and `/store` are the monetisation surfaces
- [ ] remove nav/menu references to `/upgrade`

### UX labels and CTA copy
- [ ] replace stale public labels
- [ ] replace stale CTA copy in page config, mocks, and seeds
- [ ] confirm visible labels match canonical page-data

### Knowledge architecture
- [ ] remove old `/knowledge/[slug]` component mapping
- [ ] wire `ArticleSection` as the detail-page body renderer
- [ ] split list vs detail resolvers cleanly

---

## 5. Mark as dead if immediate deletion is not possible

If a stale artefact cannot be removed immediately, it must be clearly marked as dead.

### Required dead-code marker
Use a blunt comment/header such as:

```ts
/**
 * DEAD ARCHITECTURE
 * Superseded by ADR-001 / ADR-002.
 * Do not implement or extend.
 * Scheduled for removal.
 */
```

This is acceptable only as a temporary measure.
Dead architecture must not survive indefinitely.

---

## 6. What not to treat as cleanup

This ADR is not authorising random refactors.
Do not widen this into aesthetic churn.

It is specifically about removing or neutralising artefacts that:
- contradict the accepted production stack
- contradict the canonical UX layer
- contradict the accepted knowledge rendering fix
- encourage builders to implement dead ideas

---

## 7. Open items that are NOT cleanup targets here

Do not treat these as part of this ADR unless they directly conflict with the accepted architecture:

- hosting provider choice
- analytics provider
- email provider
- queue/job tooling
- observability tooling
- optional future CMS decisions

Those remain separate decisions.

---

## 8. Enforcement rule

If an old scaffold artefact conflicts with:
- ADR-001
- the canonical route/config layer
- the premium UX copy layer
- the accepted knowledge addendum

the old artefact loses.

No debate.
No “keep it for optionality.”
No “we might need it later.”

Dead architecture is drift fuel.

---

## 9. Short version for builders

Remove or mark dead immediately:

- any `NextAuth` scaffold
- any `/upgrade` route logic
- stale public labels like `Guides`
- stale CTA copy like `Check Our State`
- old knowledge-detail mappings that do not use `ArticleSection`

Keep:

- Supabase Auth
- `/pricing`
- `/store`
- canonical page-data labels
- accepted knowledge detail architecture

That is the cleanup line.
