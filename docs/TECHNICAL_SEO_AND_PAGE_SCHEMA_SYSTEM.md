# TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md

## Purpose

This document governs technical SEO, indexability, metadata, sitemap policy, robots policy, and page schema for Marriage OS.

It exists to keep search-facing implementation aligned with:
- the canonical route tree
- the current PWA shell split
- the V1 product centre
- the boundary between public marketing surfaces and private/member app surfaces

It is a **binding support-control document within its allowed scope**.
It does **not** override doctrine, route authority, or page hierarchy.
It translates those into controlled SEO and schema behaviour.

---

## Scope and authority

### This document governs
- which routes are indexable
- which routes are `noindex`
- which URLs appear in sitemap output
- canonical URL policy
- robots policy
- Open Graph / social metadata posture
- JSON-LD / schema policy by page type
- technical SEO implementation paths in Next.js App Router

### This document does not govern
- core doctrine
- route naming
- UI copy hierarchy
- graphics or iconography
- source-reservoir logic

Those remain governed by:
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `src/config/routes.ts`
- `src/config/page-data.ts`
- `docs/BRAND_AND_VISUAL_SYSTEM.md`
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
- `docs/Voice and Tone Bible.md`

---

## Repository paths

### Binding control file
- `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`

### Executable SEO implementation files
- `src/config/seo.ts`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### Upstream implementation authorities
- `src/config/routes.ts`
- `src/config/page-data.ts`
- `src/config/theme.ts`
- `docs/BRAND_AND_VISUAL_SYSTEM.md`

### Optional supporting implementation files
- `src/lib/seo/` *(if the repo later splits helpers for metadata or JSON-LD generation)*

---

## Core rule

**Marriage OS should only expose public marketing and commerce surfaces to search in current V1.**

The member shell is not the search surface.
The member shell is the product.

That means:
- public marketing pages can be indexed when they are canonical and useful
- utility funnel pages may be publicly reachable but still `noindex`
- authenticated/member app routes are private and must not be treated as search inventory

---

## SEO authority model

### `src/config/routes.ts`
Owns:
- route existence
- shell type
- access type
- route-level `indexable` truth

### `src/config/page-data.ts`
Owns:
- display title
- intent
- page hierarchy
- route-level copy intent

### `src/config/seo.ts`
Owns:
- per-route metadata policy
- title template class
- description policy
- canonical path mapping
- robots policy
- sitemap inclusion/exclusion
- schema profile mapping

### `src/app/robots.ts`
Owns:
- emitted robots rules
- sitemap reference

### `src/app/sitemap.ts`
Owns:
- emitted sitemap URL set
- last modified values if available
- dynamic route inclusion once catalog/content sources are live

---

## Indexability matrix — current V1

| Route / page type | Access | Search status | Sitemap | Canonical | Schema policy |
|---|---|---|---|---|---|
| `/` | public | index | include | yes | `Organization` + `WebSite` |
| `/how-it-works` | public | index | include | yes | `WebPage` |
| `/store` | public | index | include | yes | `CollectionPage` |
| `/store/[category]` | public | index | include | yes | `CollectionPage` + `BreadcrumbList` |
| `/store/[category]/[slug]` | public | index | include | yes | `Product` + `Offer` + `BreadcrumbList` |
| `/pricing` | public | index | include | yes | `WebPage` |
| `/safety` | public | index | include | yes | `WebPage` |
| `/start` | public utility funnel | `noindex,follow` | exclude | yes | none |
| `/login` | public auth | `noindex,nofollow` | exclude | yes | none |
| `/sign-up` | public auth | `noindex,nofollow` | exclude | yes | none |
| `/today` and child routes | member | private / noindex | exclude | no public canonical target | none |
| `/repair` and child routes | member | private / noindex | exclude | no public canonical target | none |
| `/guides` and child routes | member | private / noindex | exclude | no public canonical target | none |
| `/knowledge` and child routes | member | private / noindex | exclude | no public canonical target | none |
| `/progress` | member | private / noindex | exclude | no public canonical target | none |
| `/library` | member | private / noindex | exclude | no public canonical target | none |
| `/account` | member | private / noindex | exclude | no public canonical target | none |
| `/settings` | member | private / noindex | exclude | no public canonical target | none |

### Important consequence
Current V1 **does not** expose member-shell Knowledge or Perspectives pages as public article inventory.
If the project later creates public/indexable article routes, this matrix must be revised explicitly.

---

## Metadata system rules

### 1. Use Next.js Metadata API as the default path
Use:
- static metadata where route content is fixed
- `generateMetadata()` where metadata depends on route params or product/catalog content

### 2. Keep metadata generation central
Do not handcraft per-page metadata ad hoc in individual route files if a central `src/config/seo.ts` mapping can supply it.

### 3. One canonical URL per public indexable page
Every public indexable page must have:
- one absolute canonical URL
- the same canonical represented in metadata and sitemap output
- no competing canonical signals

### 4. `noindex` policy
Use `noindex` on:
- utility funnel pages not intended as search landing pages
- auth pages
- any crawlable page that should stay out of search

### 5. Member privacy rule
Do not rely on search directives alone for privacy.
Member routes should be protected by access control first.
If a member route can still render crawlable HTML, add `noindex` as a secondary protection.

### 6. Open Graph / social metadata
Use richer OG/social metadata on:
- home
- how-it-works
- store
- product detail
- pricing
- safety

Keep member/private routes minimal and non-promotional.
Do not treat the member shell like share-targeted marketing inventory.

---

## Robots policy

### Primary rule
Do **not** use `robots.txt` as the primary mechanism for blocking indexation on crawlable pages.

### Why
If a crawler is blocked from visiting a page, it cannot reliably see a page-level `noindex` directive.

### Marriage OS robots posture
- allow public crawlable surfaces by default
- publish the sitemap location
- only disallow truly technical/private paths if the repo later introduces them and there is no need for page-level `noindex` to be read there
- do not blanket-disallow member routes if page-level noindex or access-control behaviour is part of the intended exclusion strategy

### Current recommended `robots.ts` posture
- `Allow: /`
- sitemap reference present
- no decorative or unsupported rules

---

## Sitemap policy

### Include only
- canonical public indexable URLs
- live store category pages
- live product detail pages
- stable marketing pages

### Exclude
- `noindex` pages
- auth pages
- member/private routes
- preview, draft, utility, or temporary pages
- query-parameter/filter states

### Current canonical sitemap set
At minimum:
- `/`
- `/how-it-works`
- `/store`
- `/pricing`
- `/safety`
- live `/store/[category]` pages
- live `/store/[category]/[slug]` pages

### Source of truth
Sitemap inclusion should be derived from the route/indexability matrix in `src/config/seo.ts`, not assembled manually from memory.

---

## Canonical URL policy

### Rules
1. Every public indexable page gets one canonical URL.
2. Canonicals must use the preferred production origin.
3. Canonicals must agree with sitemap URLs.
4. Do not use robots rules for canonicalization.
5. Do not set canonicals to private/member routes.
6. Do not canonicalize multiple distinct experiences into one page unless they are true duplicates.
7. Filter, sort, tracking, and utility parameters do not become canonical URLs.

### URL style
- keep URLs readable and human-intelligible
- use hyphen-separated slugs
- use audience language, not internal jargon

---

## Structured data / JSON-LD policy

### Default format
Use **JSON-LD**.

### Rendering rule
Render JSON-LD in page/layout output with safe serialization.
Use a typed helper or `schema-dts` where practical.

### Validation rule
Validate with:
- Google Rich Results Test for Google-supported rich result types
- Schema Markup Validator for generic schema correctness

### Global rules
- only add schema that matches visible main content
- do not add structured data to pages hidden from users or blocked from search
- do not add schema merely because a type exists
- do not assume structured data guarantees a rich result
- do not mark up private/member surfaces as public search inventory

---

## Page schema matrix — current V1

### Home (`/`)
Use:
- `Organization`
- `WebSite`

Purpose:
- establish site/entity identity
- support organizational understanding and brand disambiguation

### How It Works (`/how-it-works`)
Use:
- `WebPage`

Purpose:
- informational marketing page
- no special rich-result dependency

### Store index (`/store`)
Use:
- `CollectionPage`

Purpose:
- top-level collection of tools/products

### Store category (`/store/[category]`)
Use:
- `CollectionPage`
- `BreadcrumbList`

Purpose:
- collection page with explicit navigational context

### Product detail (`/store/[category]/[slug]`)
Use:
- `Product`
- `Offer`
- `BreadcrumbList`

Only when the page visibly includes the needed product/offer facts.
Do not add product schema to placeholder pages or vague sales pages.

### Pricing (`/pricing`)
Use:
- `WebPage`

Do not force `Product` schema here unless the page itself becomes a true product-offer page with complete offer data.

### Safety (`/safety`)
Use:
- `WebPage`

### Utility/auth routes (`/start`, `/login`, `/sign-up`)
Use:
- none

These are not target search landing pages.

### Member routes (`/today`, `/repair`, `/guides`, `/knowledge`, `/progress`, `/library`, `/account`, `/settings`)
Use:
- none in current V1

Do not attach public search schema to private/member routes.

### Future public knowledge/article surfaces
If the project later creates public/indexable article routes outside the private member shell, then:
- `Article` may be used on those public article pages
- `BreadcrumbList` may be used where nested public hierarchy exists

That is a future-only allowance, not a current-V1 instruction.

---

## FAQ / HowTo posture

### FAQPage
Do **not** treat FAQ structured data as a core SEO strategy for Marriage OS.

If FAQ content is later added for user help, it can still exist as normal content, but FAQ rich results are not the planning assumption for this project.

### HowTo
Do **not** treat `HowTo` schema as a core search strategy.
The product is repair-first, mobile-first, and private-app centric; HowTo rich-result assumptions do not justify complexity here.

### Practical consequence
Do not build SEO expectations around FAQ or HowTo rich results.
Use them only if a future route clearly warrants them and the value is validated independently of SERP embellishment.

---

## Product schema rules

### Use Product/Offer only when all are true
- the page is public and indexable
- the page is a real product detail surface
- the product has a stable canonical URL
- visible on-page content matches the structured data
- offer details are present or derivable from the product page truth

### Do not use Product schema for
- generic pricing comparison pages
- vague upgrade pages
- placeholder tools
- member-only library items
- pages that are primarily explanatory rather than purchasable

### Reviews and ratings
Do not add `Review` or `AggregateRating` unless the project has a clean, defensible, first-party review system that meets Google’s guidelines.

No invented stars.
No decorative rating markup.

---

## Breadcrumb policy

Use `BreadcrumbList` on nested public pages where it helps both users and crawlers understand the page within the site hierarchy.

Current V1 approved use:
- `/store/[category]`
- `/store/[category]/[slug]`

Not required on:
- `/`
- flat marketing pages like `/pricing` or `/safety`

---

## Technical implementation rules for Next.js App Router

### Metadata
- use `metadata` or `generateMetadata()` in App Router
- keep route-specific SEO data centralized in `src/config/seo.ts`
- derive route metadata from route ids, not duplicated string literals scattered across pages

### `robots.ts`
Use App Router metadata-file conventions for `robots.ts`.
This file should emit the canonical robots rules and sitemap pointer.

### `sitemap.ts`
Use App Router metadata-file conventions for `sitemap.ts`.
This file should emit the canonical public URL set.

### JSON-LD rendering
Render JSON-LD in the page/layout tree using safe serialization.
Do not sprinkle ad hoc inline schema blobs around the codebase.

### OG images
Use Next.js metadata/OG-image conventions for public marketing and product pages.
Do not produce share-optimized OG variants for private/member routes.

---

## Validation and release checklist

Before shipping technical SEO work, confirm:

- route indexability matches `src/config/routes.ts` and `src/config/seo.ts`
- noindex routes are excluded from sitemap output
- canonical URLs are absolute and consistent
- robots output includes sitemap and no broken disallow logic
- structured data matches visible content
- private/member routes do not expose public search schema
- product pages validate in Rich Results Test where product schema is used
- generic schema validates in Schema Markup Validator
- metadata is present for public pages and minimal/restrained for private pages

---

## Non-goals / anti-drift rules

Do not:
- add schema everywhere “just in case”
- rely on `robots.txt` to solve privacy or noindex problems on crawlable pages
- put private member routes into sitemap output
- mark up private knowledge/member content as public `Article`
- use FAQPage or HowTo as growth theatre
- create canonical loops or contradictory canonical signals
- treat login/signup/start as search assets

---

## Bottom line

- public marketing and commerce routes are the search surface
- member routes are the product surface
- `routes.ts` owns access/indexability truth
- `seo.ts` owns metadata/canonical/schema policy
- `robots.ts` and `sitemap.ts` emit crawler-facing files
- structured data is selective, truthful, and route-specific
- search discoverability must not break product privacy or create route drift
