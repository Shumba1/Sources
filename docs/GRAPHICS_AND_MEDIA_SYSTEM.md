# GRAPHICS_AND_MEDIA_SYSTEM.md

## Status

**Canonical graphics, media, and iconography system for MarriageOS**  
This document defines the visual asset rules that sit between the brand/visual system, page composition, and shipped UI.

It should be read alongside:

- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/Voice and Tone Bible.md`
- `docs/BRAND_AND_VISUAL_SYSTEM.md`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `src/config/routes.ts`

This document does **not** override canon.  
It is the media, icon, diagram, and asset companion to `docs/BRAND_AND_VISUAL_SYSTEM.md`.

---

## Purpose

The project already defines:

- product posture
- colour and type direction
- route composition
- card and shell behaviour
- content voice and tone
- PWA layout and accessibility constraints

This document governs:

- icon family choice
- icon usage rules
- directional affordance rules
- illustration and diagram rules
- product imagery rules
- photography/media boundaries
- asset formats and file placement
- how all of the above stay inside the canonical MarriageOS brand and visual system

---

## Core visual doctrine

Marriage OS should feel like:

- calm
- private
- competent
- structured
- emotionally adult
- quietly premium

It should **not** feel like:

- a therapy worksheet brand
- a couples influencer page
- a gender-war account
- an admin dashboard with marriage copy pasted onto it
- a sentimental lifestyle brand full of smiling stock couples

Graphics and media exist to support:

- fast recognition
- lower cognitive load
- better scanability
- practical next-action clarity
- trust

They do **not** exist to make the interface feel busy, cute, or “content-rich.”

---

## Graphics system in one sentence

**Use one restrained icon family, sparse explanatory diagrams, minimal photography, tool-first product previews, and almost no decorative media inside the member shell.**

---

## Where graphics live in the repo

### Canon and composition
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `src/config/routes.ts`

### Public web app assets
- `public/icons/`
- `public/images/marketing/`
- `public/images/products/`
- `public/images/placeholders/`

### Recommended additions
If the repo needs clearer separation later, add:
- `public/images/illustrations/`
- `public/images/diagrams/`
- `public/images/empty-states/`

### Implementation touchpoints
Preferred implementation surface:
- `src/components/ui/icon.tsx`
- `src/config/icon-map.ts`
- `src/components/marketing/*`
- `src/components/ui/*`
- `src/components/domain/*`

If `src/components/ui/icon.tsx` and `src/config/icon-map.ts` do not exist yet, they should be added rather than scattering raw icon imports across the app.

---

## The graphic layers

### 1. Iconography
Used for:
- navigation
- actions
- disclosure
- state support
- empty states
- category support
- product metadata support

### 2. Directional affordances
Used for:
- drill-in
- back
- expand/collapse
- external-link exit
- next-step orientation
- sequence/progression

### 3. Explanatory diagrams
Used for:
- loops
- sequences
- state shifts
- simple comparisons
- one-screen conceptual explanation

### 4. Product media
Used for:
- template previews
- workbook previews
- planner previews
- tool/content covers
- member-library thumbnails

### 5. Marketing media
Used for:
- device mockups
- restrained screenshots
- trust strips
- public-facing hero support

### 6. Decorative imagery
Allowed sparingly on marketing.
Nearly absent in the member shell.

---

## Primary icon system decision

## Decision

**Use Lucide as the primary product icon system.**

This applies to:
- app shell
- navigation
- controls
- cards
- empty states
- product metadata
- micro-diagrams when an icon-first system is needed

Do **not** mix icon families in shipped UI unless there is a documented exception.

---

## Why Lucide wins for this project

Lucide fits this product best because it is:

- calm and legible
- outline-first
- scalable in SVG
- easy to theme with `currentColor`
- broad enough without becoming stylistically noisy
- viable in React/PWA implementation
- tree-shakable for performance-sensitive surfaces

More importantly, it matches the product’s visual character:
- practical, not ornamental
- modern, not trendy
- precise, not cute
- neutral enough not to drag the UI toward platform imitation

---

## Why not make another icon family primary?

### Heroicons
Excellent, but too limited as the one universal family for this product.
It is strongest inside Tailwind-flavoured product UI, but the set is much smaller and more visibly “Tailwind ecosystem” branded than Marriage OS needs.

### Phosphor
Powerful and flexible, but more stylistically expressive than this product wants as its primary visual language.
Better for more personality-forward apps or presentation systems.

### Material Symbols
Technically strong, but too close to Google / platform-system iconography and too font-oriented for the visual identity this project is trying to build.

### Tabler
Broad and useful, but drifts more readily toward dashboard/admin-product flavour than the calm premium relationship-operating-system feel we want.

---

## Non-mixing rule

Inside shipped product UI, use:

- **Lucide only** for general iconography

Allowed exceptions:
- browser/PWA install icons in `public/icons/`
- payment or platform logos when legally required
- social/brand marks when explicitly needed
- one-off illustrative artwork that is clearly not product UI iconography

Do **not** mix:
- Lucide nav icons
- Heroicons buttons
- Material Symbols settings icons
- Tabler empty states

That creates visual drift immediately.

---

## Icon usage rules

## Style
- outline icons by default
- no fill icons in the member shell unless a very specific state treatment requires one
- rounded linework is preferred over aggressive geometric sharpness
- icons should feel quiet, not branded

## Colour
- icons inherit `currentColor`
- no icon should rely on colour alone to communicate meaning
- state icons must always be paired with label text
- category icons should use subdued colour treatment, not hero-colour treatment

## Stroke
- default stroke intent: visually around the Lucide standard range
- do not over-thicken icons to make them “louder”
- small icons must be tested at actual rendered size on dark surfaces

## Size system
Use this scale unless a component has its own explicit rule:

- `16px` — inline metadata, compact support marks, dense tables
- `18px` — chips, pill controls, small row actions
- `20px` — top bar actions, list-row icons, tab support icons
- `24px` — primary buttons, hero support icons, product metadata emphasis
- `32px–40px` — empty states, diagram anchors, feature blocks
- `48px+` — only for restrained marketing illustration or major empty-state emphasis

## Spacing
- icon + label spacing should feel deliberate, not cramped
- do not pin icons hard against text
- do not let icon clusters become visual noise

## Accessibility
- decorative icons: `aria-hidden="true"`
- icon-only buttons: must have accessible labels
- state/status icons: must not be the only signal
- disabled states must remain readable and distinguishable

---

## Directional affordance system

This is where most products become sloppy.
Marriage OS should be strict here.

### Use `chevron-right`
For:
- drill-in rows
- list-to-detail navigation
- knowledge/perspectives/store item entry

Meaning:
- “there is a deeper screen behind this”

### Use `chevron-left`
For:
- in-app back navigation
- not for browser-history guessing
- only when the route model genuinely supports back movement

### Use `chevron-down` / `chevron-up`
For:
- disclosure
- accordion state
- expandable content
- not for “download” or “move” meanings

### Use `arrow-right`
For:
- next-step orientation in marketing
- explanatory sequences
- CTA emphasis when the action is genuinely forward-moving

Do not use it everywhere.
The member shell should prefer calmer affordances than always shouting “go.”

### Use `arrow-up-right`
For:
- external link / leaving the current system
- opening an outbound destination
- never for internal navigation

### Use `arrow-left-right`
For:
- swap
- compare
- mutuality
- balance
- bidirectional movement

Do not use it as a generic “relationship” symbol.

### Use `corner-down-right` or equivalent path arrow
For:
- linked practical branch
- “this leads here next”
- sequence handoff in diagrams

### Never use decorative arrows as ornament
No floating arrows in hero art.
No gratuitous arrow stacks.
No “growth” arrow clichés.
No motivational-infographic arrow clutter.

---

## State and category graphics

## Relationship states
Use:
- label
- state colour accent
- optional subtle support icon

Do **not** turn states into mascot graphics.

Preferred system:
- coloured dot / rail / badge
- clear text label
- optional understated icon only where it genuinely helps scanability

The state should feel like a classification, not a warning siren.

## Repair categories
Category icons are optional.
If used, they should support recognition, not become the main visual identity.

The icon should always sit below:
- the category name
- the public label
- the practical use case

The category is not “sold” by the icon.

## Safety
Safety graphics should be the simplest in the system:
- shield
- slash
- warning boundary
- home/family marker where needed

Never use soft sentimental art for safety screens.

---

## Media policy by surface

## Member shell (`/today`, `/repair`, `/guides`, `/knowledge`, `/progress`, `/library`)
Use:
- icons
- cards
- chips
- badges
- diagrams only when explanatory
- product thumbnails only when directly relevant

Avoid:
- decorative photography
- hero illustrations
- large lifestyle art
- emotional stock imagery
- anything that competes with the next action

Rule:
**The member shell is a tool surface, not a campaign surface.**

## Marketing/public routes (`/`, `/how-it-works`, `/start`, `/pricing`, `/store`, `/safety`)
Use:
- restrained device mockups
- sparse screenshots
- trust strips
- simple feature/support illustrations
- product previews
- occasional quiet editorial/photo treatment only if it increases trust without turning the site sentimental

Avoid:
- smiling stock-couple cliches
- wedding imagery
- romance fantasy imagery
- glossy ad-style people photography
- “sad woman by window” manipulation visuals

Rule:
**Marketing should still feel like product truth, not performance-marketing theatre.**

## Knowledge and Perspectives detail pages
Use:
- almost no decorative media
- diagrams only when they simplify understanding
- no banner art that delays the pattern explanation
- no illustration heavier than the practical branch CTA

## Product detail pages
Use:
- asset previews
- worksheet spreads
- planner/sheet previews
- neutral mockups
- small supporting icons

Avoid:
- fake book-cover theatre
- giant 3D mockup stacks
- ad-like lifestyle imagery pretending to be product proof

Rule:
**Show the tool, not the dream.**

---

## Illustration and diagram rules

## Allowed diagram types
- loop diagrams
- sequence diagrams
- ladder/continuum
- compare/contrast cards
- one-screen conceptual maps
- subtle flow arrows
- progress rails

## Forbidden diagram styles
- dense mind maps
- pseudo-academic system charts
- hand-drawn whimsy
- infographic clutter
- ten-colour relationship wheels
- anything that looks like a conference slide deck

## Diagram style
- SVG first
- two-tone or three-tone maximum
- use theme colours, mostly neutrals plus one accent
- labels in UI sans
- no miniature paragraph blocks inside diagrams
- diagrams must survive small screens

## Diagram use rule
If the idea can be explained faster as:
- one card
- one checklist
- one short section
then do not create a diagram.

---

## Product image system

## Product cards
Each product should have:
- one clean thumbnail
- one recognisable product type
- one stable visual treatment

### Script packs
Show:
- compact preview cards
- snippet lines
- copy-ready format feel

### Workbooks / audits
Show:
- page spread
- table/checklist/worksheet cues
- neutral shadow and framing

### Planners / calendars
Show:
- page structure
- blocks / trackers / time structure
- not decorative lifestyle overlays

### Programs / resets
Show:
- sequence / day cards / track structure
- not cinematic promotional art

## Product visual rule
A product image should make the asset feel:
- usable
- structured
- specific

Not:
- magical
- luxurious for its own sake
- self-help-coursey

---

## Photography policy

Photography is optional and restricted.

### Allowed
- rare public-surface editorial images
- quiet device-in-hand or desk-context shots
- abstract environment photography if very restrained

### Not allowed
- kissing couples
- wedding photos
- posed romance
- melodramatic sadness
- influencer intimacy shots
- gender-stereotype imagery
- surveillance/secret-phone imagery

If a photo would make the project feel less credible to a tired person at midnight, it should not be used.

---

## Empty-state and placeholder media

Use:
- icon + label + one-line explanation
- small diagram or symbolic illustration only if it clarifies the missing state
- product-neutral placeholder cards

Avoid:
- mascot art
- humour graphics
- emotional exaggeration

The goal is:
- calm orientation
- not entertainment

---

## Motion and animated graphics

Keep motion restrained.

### Allowed
- disclosure chevron rotation
- low-key hover/focus state
- sheet/drawer motion
- subtle skeleton loading
- progress-line reveal if genuinely useful

### Avoid
- bouncing nav icons
- pulsing CTAs
- animated decorative arrows
- parallax hero art
- emotional motion theatre

### Motion rule
If motion increases anxiety, noise, or perceived marketing pressure, cut it.

Always respect reduced motion.

---

## Asset formats

## Use SVG for
- icons
- diagrams
- simple illustrations
- logos/marks where appropriate

## Use WebP or AVIF for
- screenshots
- mockups
- product previews
- marketing images

## Use PNG only for
- install icons
- maskable icons
- assets that require raster transparency and do not compress well enough elsewhere

## Do not use
- icon fonts
- PDF exports as runtime UI assets
- giant raster hero images where a cleaner SVG or screenshot would do

---

## Performance and PWA rules

All visual assets must respect the PWA reality:

- dynamic viewport
- variable DPR
- small-screen scan behaviour
- installability
- touch-first interaction
- speed as trust

That means:
- import icons per use, not by giant bundle
- prefer inline SVG for UI icons
- use responsive images where raster is necessary
- provide 2x/3x density where needed
- do not load decorative media into the member shell unless it earns its cost
- keep the first screenful of critical routes visually light enough to remain fast

---

## Implementation rules

## Central icon wrapper
Create or maintain:
- `src/components/ui/icon.tsx`

This wrapper should control:
- size tokens
- stroke behaviour
- accessibility defaults
- color inheritance
- class conventions

Do not hand-roll icon rendering differently across features.

## Central icon map
Create or maintain:
- `src/config/icon-map.ts`

This should map stable semantic roles to actual Lucide icons, for example:
- nav
- state support
- category support
- product type
- safety/support
- empty states

This prevents icon drift when builders choose icons ad hoc.

## No raw icon imports in page composition files
`page-data.ts` should not become an icon grab bag.
Keep icon choice behind a stable mapping layer.

---

## Suggested path structure

### Existing
- `public/icons/`
- `public/images/marketing/`
- `public/images/products/`
- `public/images/placeholders/`

### Recommended additions
- `public/images/illustrations/`
- `public/images/diagrams/`
- `src/components/ui/icon.tsx`
- `src/config/icon-map.ts`

---

## Do / do not

### Do
- use one icon family
- use icons to support action clarity
- keep product imagery tool-first
- keep the member shell nearly photography-free
- use diagrams only when they reduce reading burden
- make every visual feel deliberate

### Do not
- decorate the member shell
- use arrows as generic decoration
- use stock romance imagery
- mix icon families
- turn product previews into fake book covers
- let visuals outrun trust
- let graphics become louder than the next move

---

## Launch standard

Before any new visual asset ships, ask:

1. Does this reduce cognitive load or just add texture?
2. Does it help the next decision become clearer?
3. Does it fit the calm, premium, emotionally adult system?
4. Would it still feel credible at midnight to a tired user?
5. Is it fast enough and accessible enough for a PWA?

If not, it does not ship.

---

## Final system choice

### Primary icon family
**Lucide**

### Product-shell graphic posture
**Sparse, tool-first, icon-led, nearly photography-free**

### Marketing-shell media posture
**Restrained, device- and proof-led, with very light illustration support**

### Overall rule
**Graphics must support trust, clarity, and next-step usefulness — never compete with them.**
