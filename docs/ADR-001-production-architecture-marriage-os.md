# ADR-001 — Production Architecture for Marriage OS

- **Status:** Accepted
- **Date:** 2026-04-12
- **Owners:** Product / Architecture
- **Scope:** Production stack, auth, content, commerce, deployment posture
- **Supersedes:** Any older scaffold implication that conflicts with this record

---

## 1. Decision

Marriage OS production architecture is:

- **Next.js App Router**
- **TypeScript**
- **React**
- **Tailwind CSS**
- **Config-driven UI architecture**
- **Supabase Auth**
- **Supabase Postgres with Row Level Security**
- **Stripe** for commerce
- **In-repo content / MDX-style content model**
- **PWA-style web delivery** with app shell behaviour

This is the production baseline.

---

## 2. Why this ADR exists

Older scaffold artefacts and earlier planning files contain implementation hints that can be mistaken for live architectural decisions.

The most dangerous example is authentication:
- some older scaffold structure implies a `NextAuth` route
- the approved data model clearly assumes **Supabase Auth owns `auth.users`**

If this is left ambiguous, builders will create a split-brain auth system.

This ADR exists to stop that.

---

## 3. Production stack — approved

### Frontend
Approved:
- Next.js
- TypeScript
- React
- Tailwind CSS

Working shape:
- app router route groups
- marketing shell + member/app shell
- config-driven route/page layer
- component registry / runtime registry pattern

### Product shell
Approved:
- mobile-first website with app-shell behaviour
- installable PWA posture
- manifest, icons, safe-area handling, `100dvh` shell assumptions

### Data and auth
Approved:
- Supabase Auth as the only identity source
- Supabase Postgres as primary application database
- Row Level Security
- profile / check-in / saved-item / purchase / entitlement / progress view model

### Content model
Approved:
- repo content is the editorial source of truth
- content stored in-git under:
  - `content/repair/*`
  - `content/guides/*`
  - `content/knowledge/*`
  - `content/products/*`

### Commerce
Approved:
- Stripe for checkout and purchase records
- entitlements derived from purchase state

---

## 4. Explicit auth decision

### Accepted
**Supabase Auth is the sole production authentication system.**

### Rejected
**NextAuth is not part of the production architecture.**

### Instruction
Any older scaffold artefact that implies `NextAuth`, `[...nextauth]`, or a parallel auth stack is to be treated as:
- non-canonical
- deprecated
- not for implementation

### Why
Marriage OS already assumes:
- `auth.users` is owned by Supabase Auth
- profile creation is tied to Supabase user creation
- downstream ownership and entitlements attach to the Supabase user id

Adding NextAuth would:
- duplicate identity concerns
- complicate session management
- create unnecessary mapping work
- increase failure surface area
- confuse builders about the source of truth

---

## 5. Architectural principles behind the decision

### 5.1 Keep the stack narrow
Marriage OS does not need a sprawling polyglot stack.
It needs a clean production system that supports:
- fast check-ins
- repair flows
- perspective content
- knowledge content
- commerce
- progress tracking

### 5.2 Keep auth single-source
Identity, profile ownership, purchases, entitlements, and saved items should all resolve from one primary user identity system.

### 5.3 Keep content in-repo
Marriage OS content is structured product content, not newsroom content.
The repo content model is better aligned to:
- repair modules
- guides / perspectives
- knowledge articles
- product pages
- source-to-dossier editorial workflow

### 5.4 Keep commerce native
Stripe is the production commerce rail, but it must remain subordinate to product utility.
The product is not an e-commerce site with relationship branding.
It is a repair-first system with paid tools attached.

### 5.5 Keep delivery web-first
Marriage OS is a website with an app shell, not a native app.
The production target is a PWA-style web experience.

---

## 6. What this means in practice

### Builders must assume
- frontend routes live in Next.js app router
- member surfaces render inside app shell patterns
- state and repair logic sit in feature/domain layers
- Supabase owns auth and core relational data
- Stripe owns payment processing
- editorial content comes from repo content, not database CMS records

### Builders must not assume
- a second auth layer
- a separate headless CMS as primary content authority
- an “upgrade” route if pricing/store already cover the production flow
- that old scaffold files are automatically canonical

---

## 7. Deprecated artefacts

The following are explicitly **not live architecture decisions** unless re-ratified in a later ADR:

- any `NextAuth` scaffold
- any `[...nextauth]` route stub
- any auth pattern that competes with Supabase Auth
- any older route logic that conflicts with the canonical route/config layer
- any legacy screen or page label that conflicts with the canonical UX layer

Deprecated means:
- do not implement
- do not preserve “just in case”
- do not cite as current architecture

If discovered in the repo:
- remove it
- or mark it dead code pending removal

---

## 8. Open decisions — not yet ratified

These are **not** settled by this ADR:

- hosting provider
- analytics provider
- email provider
- queue / job runner
- search implementation
- media/object storage beyond public assets
- observability stack
- feature flags / experimentation tooling

These may be added later through separate ADRs.

### Current recommendation, not yet ratified
If a hosting default is needed today, **Vercel** is the sensible deployment target for the current repo shape.
But this is a recommendation, not a locked decision under this ADR.

---

## 9. Consequences

### Positive
- simpler mental model for builders
- no auth ambiguity
- lower integration complexity
- easier handoff between frontend, backend, and content work
- cleaner alignment with the existing database assumptions
- better compatibility with the route/config-driven architecture already chosen

### Negative / trade-offs
- less optionality for teams who prefer abstracted auth
- content ops remain repo-centric rather than CMS-centric
- future changes to hosting or analytics still need explicit ADRs

These trade-offs are acceptable.

---

## 10. Rejected alternatives

### Alternative A — Support both Supabase Auth and NextAuth
Rejected.

Reason:
- unnecessary complexity
- split identity model
- high confusion risk
- no strong product reason

### Alternative B — Move editorial content into the database
Rejected for V1.

Reason:
- weak fit for structured, governed product content
- more CMS/admin overhead
- less alignment with the source → extract → dossier → final content workflow

### Alternative C — Treat older scaffold routes as “provisionally live”
Rejected.

Reason:
- this is how drift returns
- scaffold residue is not architecture

---

## 11. Implementation instruction

The team should now do the following:

1. Remove or mark any `NextAuth` scaffold as dead architecture
2. Treat Supabase Auth as the only identity rail
3. Continue implementation on:
   - Next.js
   - TypeScript
   - Tailwind
   - Supabase
   - Stripe
   - repo content
4. Keep unresolved ops decisions out of the critical path unless needed
5. Require a new ADR before introducing:
   - alternate auth
   - CMS replacement
   - new primary backend
   - non-web primary client

---

## 12. Enforcement rule

If any future file, prompt, scaffold, or builder proposal conflicts with this ADR:

- this ADR wins
- unless a later ADR explicitly supersedes it

That is the rule.

---

## 13. Short version for builders

**Production stack = Next.js + TypeScript + Tailwind + config-driven React app + Supabase Auth/Postgres/RLS + Stripe + in-repo content, shipped as a mobile-first PWA-style web app.**

**NextAuth is not live architecture. Ignore it.**
