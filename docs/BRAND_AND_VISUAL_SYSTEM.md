# BRAND_AND_VISUAL_SYSTEM.md

## Scope and authority

This document defines the canonical brand and visual system for MarriageOS.

It reconciles the public marketing shell and the private member/app shell into one coherent brand system. It is not a new product strategy document, not a content doctrine file, and not a replacement for the implementation roadmap.

This file governs how the brand looks, feels, and behaves across the brochure site, onboarding funnel, member shell, repair pathways, guides/perspectives, knowledge surfaces, progress surfaces, and commercial surfaces.

Where this document conflicts with older visual notes, this document supersedes them for visual direction. Where this document conflicts with executable code, the conflict is treated as visual-system drift and is resolved through a bounded patch.

## Related canonical files

This document must be read with:

- `docs/MASTER_SPEC.md` — product mission, V1 centre of gravity, and system doctrine
- `docs/Voice and Tone Bible.md` — editorial posture and writing modes
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` — media, icon, diagram, and photography rules
- `docs/DELIVERY_ARCHITECTURE.md` — content delivery model and ratification pathway
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md` — source-to-content object mapping
- `src/config/theme.ts` — executable theme token authority
- `src/app/globals.css` — implemented CSS layer aligned to this system

## Executive summary

MarriageOS is not a romance brand, a therapy brand, a generic relationship blog, or a SaaS productivity dashboard.

It is a calm, premium, emotionally intelligent relationship operating system for people who are still trying, but are tired, defensive, hurt, confused, ashamed, angry, lonely, or running out of capacity.

The brand holds two truths at once:

1. **The public marketing shell attracts attention and creates trust quickly.**
2. **The private member shell lowers emotional temperature and helps the user take the next repair action.**

These two surfaces have different expressive intensity, but they belong to the same brand.

The governing metaphor is:

> **Marketing is the invitation. The member shell is the instrument.**

Marketing is warmer, more narrative, and more emotionally charged. The member shell is quieter, darker, more tool-like, and more intervention-oriented.

Both share the same underlying DNA: calm authority, emotional adulthood, no manipulation, no romance fantasy, no clinical coldness, no influencer gloss, and no generic SaaS optimism.

## The brand idea

### Brand essence

**A calm operating system for repairing connection before damage hardens.**

MarriageOS helps users notice drift, reduce escalation, choose the next useful move, and rebuild trust through structured micro-interventions rather than generic advice or long courses.

### Brand promise

When the relationship feels emotionally overloaded, MarriageOS gives the user a clear next step that reduces damage and makes repair more possible.

### Brand role

MarriageOS acts as:

- a stabiliser during conflict
- a translator during confusion
- a repair guide after emotional rupture
- a private tool for solo-first action
- a structured alternative to late-night relationship-advice spirals

It is not:

- a therapist
- a judge
- a saviour
- a romance coach
- a viral advice account
- a generic education platform
- a replacement for urgent professional help

## Audience state

The user is rarely arriving in a neutral learning state.

They may be arriving:

- after a fight
- in bed late at night
- in the car after an argument
- while emotionally flooded
- while trying not to say something damaging
- when they feel alone in the relationship
- when they are quietly wondering whether the marriage is already too far gone

This means the interface must not ask for high cognitive effort before delivering value.

The brand feels:

- calm but not passive
- direct but not harsh
- warm but not sentimental
- structured but not bureaucratic
- intelligent but not academic
- premium but not decorative
- emotionally literate but not therapeutic cosplay

## Strategic visual principle

The visual system communicates:

> **This is serious enough to trust, calm enough to use, and practical enough to act on tonight.**

Every design decision supports one of four functions:

1. **Lower the user's emotional temperature.**
2. **Make the next action obvious.**
3. **Create trust without over-explaining.**
4. **Avoid visual noise that competes with repair.**

If a visual element does not support one of these functions, it is decorative until proven otherwise.

## One brand, two expression modes

MarriageOS has one brand system with two controlled expression modes.

| Surface | Role | Emotional function | Visual posture |
|---|---|---|---|
| Marketing shell | Invitation | Recognition, trust, curiosity, conversion | Warmer, more narrative, more expressive |
| Member/app shell | Instrument | Stabilisation, decision support, repair action | Darker, quieter, more structured, tool-first |

The difference is intentional. The two shells differ in intensity while sharing:

- core palette foundation
- typography hierarchy
- spacing discipline
- restrained motion
- mature tone
- non-stock imagery rules
- sober iconography
- premium but non-luxury restraint

## Shared design DNA

All MarriageOS surfaces feel:

### Calm

No shouting, gimmicks, visual clutter, urgent red unless genuinely safety-related, or excessive animation.

### Adult

No juvenile visual tropes, dating-app energy, guru aesthetics, meme-first layouts, or over-friendly wellness branding.

### Premium

Premium means composure, restraint, proportion, rhythm, legibility, and confidence. It does not mean luxury styling, ornate decoration, or visual excess.

### Intervention-oriented

The product exists to help users act. Visual design privileges the next useful step over exploration for its own sake.

### Emotionally truthful

The visual system makes room for hurt, disappointment, exhaustion, hope, and repair without slipping into melodrama.

## Core palette authority

The executable palette authority is `src/config/theme.ts`.

The approved core palette is:

```ts
base: {
  obsidianNavy: '#0F1724',
  deepSlate: '#1A2433',
  softInk: '#243247',
  warmIvory: '#F7F4EE',
  stoneMist: '#E7E1D6',
}

brand: {
  cognitiveBlue: '#4E7BFF',
  mutedBlue: '#8EABFF',
  paleBlueGlow: '#DCE7FF',
}

state: {
  stable: '#6E9B7D',
  drift: '#C89A3D',
  resentmentBuilding: '#B8772F',
  entrenchedResentment: '#9B5C52',
}

warmAccent: {
  ember: '#D04F1C',
  deepEmber: '#7B1D0A',
  emberGlow: 'rgba(244,120,42,0.16)',
  amberText: 'rgba(248,194,138,0.86)',
}
```

These tokens define the foundation and controlled expression layers of the brand.

## Palette architecture

The palette is organised into five layers.

### 1. Foundation neutrals

Used everywhere.

| Token | Role |
|---|---|
| `obsidianNavy` | deepest shell, app background, serious system foundation |
| `deepSlate` | elevated app surfaces, panels, navigation |
| `softInk` | selected app states, secondary dark cards |
| `warmIvory` | marketing base, high-trust light surfaces, warm contrast |
| `stoneMist` | borders, muted backgrounds, quiet dividers |

These colours carry the brand's seriousness and warmth.

### 2. Brand intelligence blues

Used to communicate structure, clarity, decision support, and guided action.

| Token | Role |
|---|---|
| `cognitiveBlue` | primary structured-action accent |
| `mutedBlue` | soft guidance, hover, highlights |
| `paleBlueGlow` | subtle ambient support, quiet emphasis |

Blue feels intelligent and steady, not SaaS-generic.

### 3. Emotional state colours

Used for relationship condition, repair state, progress patterns, caution, and diagnostic signals.

| Token | Role |
|---|---|
| `stable` | steadiness, resilience, repair taking hold |
| `drift` | distance, early warning, attention needed |
| `resentmentBuilding` | recurring strain, rising heat |
| `entrenchedResentment` | deeper pattern, caution, serious repair context |

These colours are meaning-bearing, not decorative.

### 4. Marketing warmth accent

The warm rust/orange treatment is approved as a **marketing expression accent**, not a universal brand colour.

The warm accent communicates:

- human stakes
- emotional heat
- urgency without alarmism
- warmth without romance fantasy
- attention without gimmickry

It is used for selected public CTAs, marketing emphasis, public-surface accent cards, and restrained campaign depth. It is not the default member/app action colour.

### 5. Safety and warning colours

Safety, escalation, abuse-risk, or urgent professional-help surfaces use restrained existing state colours and clear copy unless a dedicated safety palette is introduced through a governed design patch.

Urgent red is not used for normal relationship strain.

## Marketing shell palette rules

The marketing shell uses:

- `warmIvory` as a light trust base where appropriate
- `obsidianNavy` / `deepSlate` for premium dark campaign panels
- `cognitiveBlue` and `mutedBlue` for structure and guided action
- warm ember/rust accents for CTAs and emotional emphasis
- controlled radial gradients where they add depth without noise

The marketing shell does not use:

- bright romance reds
- candy pinks
- dating-app gradients
- wellness pastel overload
- generic SaaS neon blues
- luxury gold treatments
- aggressive danger red for normal relationship strain

Marketing is expressive while remaining composed.

## Member/app shell palette rules

The member shell uses:

- `obsidianNavy` for the primary environment
- `deepSlate` and `softInk` for elevated cards and selected states
- `mutedBlue` and `paleBlueGlow` for guidance, affordance, and focus
- state colours only where they carry diagnostic meaning
- warm tones sparingly, mostly as caution or emotional heat references

The member shell does not use:

- large rust/orange campaign gradients
- decorative hero photography
- marketing-style persuasion panels
- emotional hype treatments
- loud conversion styling
- visual elements that make the user feel sold to after they have entered the tool

The member shell is a private operating surface. It feels like the user has left the campaign and entered the instrument.

## Bridging rule between shells

Marketing and member surfaces feel different in energy but identical in underlying judgement.

The transition should feel like this:

> “The public site understood me. The private tool is now helping me act.”

It should not feel like:

> “I clicked from a campaign site into a different product.”

The bridge is maintained through:

- shared navy/ivory foundation
- consistent typography hierarchy
- consistent button geometry
- consistent icon family
- consistent spacing rhythm
- consistent restraint
- consistent language around repair, drift, damage, and next steps

## Repair, Guides/Perspectives, and Knowledge hierarchy

Repair, Guides/Perspectives, and Knowledge are not visually equal product surfaces.

They serve different cognitive states and must present differently.

| Surface | Role in V1 | User state | Visual posture | Primary design job |
|---|---|---|---|---|
| Repair | Centre of V1 | activated, strained, uncertain, needing action | urgent-but-calm, stepwise, intervention-first | move the user into one useful repair behaviour |
| Guides / Perspectives | Meaning layer | reflective, pattern-seeking, less immediately activated | editorial but controlled | help the user understand patterns without replacing action |
| Knowledge | Reference layer | searching, clarifying, learning terminology or models | structured, searchable, quiet | explain concepts without becoming the product centre |

### Repair presentation

Repair presents as an action surface.

It should feel:

- immediate
- stabilising
- stepwise
- practical
- emotionally contained
- clearly routed

Repair uses:

- strong next-action hierarchy
- intervention cards
- scripts
- state-aware cues
- time-bound steps
- caution and safety gating where needed
- minimal visual distraction

Repair does not present as an article library, course catalogue, or knowledge base.

The user should never have to read their way into usefulness before being offered a repair action.

### Guides / Perspectives presentation

Guides/Perspectives present as a controlled meaning layer.

They should feel:

- editorial but not literary
- reflective but not passive
- insight-led but not essay-heavy
- secondary to Repair
- emotionally resonant without becoming dramatic

Guides/Perspectives help users see the pattern underneath the conflict. They can use more breathing room than Repair and may carry a slightly more editorial rhythm, but they must still connect back to repair behaviour.

### Knowledge presentation

Knowledge presents as structured reference.

It should feel:

- clear
- searchable
- modular
- calm
- low-drama
- secondary to Repair

Knowledge explains concepts, models, definitions, and frameworks. It should reduce confusion, not become a competing content centre.

Knowledge pages should favour article sections, definitions, examples, diagrams, and concise conceptual explanations over emotional persuasion.

## Typography system

The current typography strategy is approved.

### Marketing typography

Marketing may use serif selectively for emotionally resonant hero statements and high-level positioning.

Serif is allowed on:

- homepage hero
- pricing/store hero
- how-it-works hero
- selected editorial-style public sections

Serif is not used on:

- buttons
- app titles
- forms
- repair modules
- state cards
- progress UI
- dense instructional content

Marketing hero text feels considered and editorial, not literary for its own sake.

### Member/app typography

The member shell is sans-first.

It feels:

- clear
- legible
- calm
- modern
- tool-like
- emotionally neutral enough for stressed users

Display typography is not used to create drama inside the member shell. The user already has enough drama.

### Mono typography

Monospace is reserved for:

- timestamps
- debug panels
- payload details
- internal/system-like metadata where appropriate

It does not become a decorative product motif.

## Layout and spacing principles

MarriageOS feels spacious but not empty.

### Marketing layout

Marketing layouts use:

- larger hero areas
- stronger visual rhythm
- persuasive section sequencing
- contrast between recognition, mechanism, trust, and action
- restrained editorial composition

Marketing layouts preserve:

- one dominant CTA per screenful
- clear reading path
- fast comprehension
- no wall-of-text hero blocks
- no generic conversion clutter

### Member/app layout

Member surfaces prioritise:

- immediate next action
- compact decision surfaces
- card-based scanning
- low cognitive load
- minimal scrolling before usefulness
- visible re-entry paths

The member shell does not feel like a blog, a course platform, a CRM dashboard, or a therapy portal.

It feels like a private repair cockpit.

## Component posture

### Buttons

Buttons are message-matched to the user's state.

Avoid generic labels such as:

- Continue
- Learn More
- Submit
- Next

Prefer action-specific labels such as:

- Start the Solo Check-In
- Open the First Repair Step
- Run the Step
- Lower the Temperature
- Save the Script

Marketing primary CTAs may use the warm accent. Member primary CTAs generally use the structured blue/action system unless a specific repair context justifies otherwise.

### Cards

Cards are not decorative containers. Each card has a job.

Common jobs:

- identify state
- explain risk
- offer next move
- hold a script
- show progress
- distinguish repair lane
- summarise an intervention

Marketing cards may be more expressive. Member cards are quieter and more functional.

### Chips and badges

Chips and badges carry meaning.

Allowed uses:

- state labels
- estimated time
- repair category
- intensity level
- safety class
- module type

Decorative badge clutter is avoided.

### Icons

Use the approved icon family and keep icons sparse.

Icons:

- clarify function
- support scanning
- inherit current colour
- remain line-based unless a specific state treatment requires otherwise

Icons do not:

- decorate every heading
- imitate therapy/wellness clichés
- use cartoon emotional faces
- compete with copy

## Imagery and media rules

The graphics and media posture is governed in detail by `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`.

This document confirms the high-level brand rule:

> **Marketing may use restrained, truthful imagery. The member shell remains nearly photography-free.**

### Marketing imagery

Allowed:

- restrained human scenes
- calm interiors
- threshold/arrival moments
- quiet aftermath or transition scenes
- product-truthful visuals
- abstract diagrams where they clarify the system

Not allowed:

- glossy stock couples
- performative romance
- wedding imagery
- influencer lifestyle imagery
- therapy-session clichés
- nightlife/dating-app imagery
- smiling-perfect-family fantasy

### Member shell imagery

The member shell relies on:

- typography
- cards
- icons
- diagrams
- state indicators
- progress affordances

Photography is rare. If used, it earns its place by reducing comprehension burden or supporting a specific intervention.

## Motion and interaction

Motion is restrained and functional.

Allowed motion:

- subtle hover response
- soft focus transition
- small elevation change
- panel reveal
- reduced-motion-safe progress feedback

Disallowed motion:

- dopamine loops
- bouncing CTAs
- excessive parallax
- confetti
- gamified celebration that trivialises repair
- dramatic animated emotional states

Motion helps the user feel oriented, not stimulated.

## Neuro-marketing principles

The brand uses behavioural design without manipulating vulnerable users.

### Approved principles

#### Recognition before explanation

Users quickly feel:

> “This understands the situation I am in.”

This is especially important on marketing and onboarding surfaces.

#### One next action

Stress reduces planning capacity. The interface presents one dominant action at a time where possible.

#### Reduce choice load

Emotionally flooded users are not asked to choose between many equally weighted options.

#### State labelling reduces ambiguity

Clear labels such as drift, heated but reachable, activated and fragile, or resentment building help users orient themselves.

#### Specificity creates trust

Specific next steps, scripts, time estimates, and behavioural prompts are more credible than broad advice.

### Prohibited principles

Do not use:

- shame as a conversion driver
- fear escalation to force purchase
- countdown urgency for emotionally vulnerable users
- manipulative scarcity
- blame-based targeting
- gender-war framing
- dark patterns around safety or distress

The product can be commercially effective without exploiting the user's lowest moment.

## Brand anti-patterns

MarriageOS must never look or sound like:

### A generic SaaS dashboard

Symptoms:

- cold blue-on-white admin feel
- meaningless metrics everywhere
- productivity software layout clichés
- sterile cards with no emotional intelligence

### A therapy clone

Symptoms:

- soft pastel wellness identity
- abstract blobs
- overuse of “safe space” visual tropes
- clinical or counselling-office imagery

### A romance/lifestyle brand

Symptoms:

- candlelit couples
- perfect smiling partners
- luxury intimacy aesthetic
- wedding/anniversary visual language

### A viral relationship advice brand

Symptoms:

- outrage hooks
- gender-war contrast
- aggressive red/black thumbnails
- meme-like visual hierarchy
- overdramatic typography

### A course platform

Symptoms:

- module-library-first design
- progress for its own sake
- education before intervention
- excessive lesson framing

## Surface-by-surface guidance

### Homepage

Role: recognition, trust, invitation.

Should feel:

- emotionally intelligent
- premium
- clear
- composed
- serious without being bleak

Primary job:

- get the user into the solo check-in or first repair pathway

### Start / onboarding

Role: transition from public recognition to private action.

Should feel:

- calm
- short
- private
- low-friction

Primary job:

- help the user identify state and enter the correct pathway

### Today

Role: immediate next best move.

Should feel:

- stabilising
- current
- practical
- grounded

Primary job:

- show one next useful action

### Repair

Role: intervention library and repair routing.

Should feel:

- organised
- serious
- action-oriented
- non-overwhelming

Primary job:

- route the user to the right repair module quickly

### Repair detail

Role: guided micro-intervention.

Should feel:

- private
- stepwise
- emotionally safe
- precise

Primary job:

- get the user through one behaviourally useful repair step

### Guides / Perspectives

Role: deeper meaning and perspective.

Should feel:

- editorial but controlled
- less urgent than Repair
- insight-led but not essay-heavy
- reflective without becoming passive

Primary job:

- help users understand patterns without replacing action

### Knowledge

Role: structured reference.

Should feel:

- clear
- searchable later
- modular
- secondary to Repair
- quieter than Guides/Perspectives

Primary job:

- explain concepts and models without becoming the product centre

### Progress

Role: reflection and signal.

Should feel:

- quiet
- trustworthy
- non-gamified

Primary job:

- help users see patterns, not chase points

### Store / commercial surfaces

Role: offer useful tools and templates without breaking trust.

Should feel:

- system-native
- practical
- restrained
- not ecommerce-detached

Primary job:

- sell tools that extend repair outcomes

The store feels like a continuation of the system, not a separate shop bolted onto a sensitive product.

## Implementation rules

### 1. Tokenise recurring decisions

Recurring colour, shadow, gradient, and typography treatments belong in the governed token system.

If a value appears across multiple surfaces, it is either:

- added to `src/config/theme.ts`, or
- documented as a one-off implementation exception

### 2. `theme.ts` is the executable visual authority

`src/config/theme.ts` contains the canonical design tokens.

`globals.css` implements those tokens rather than operating as an ungoverned parallel palette.

### 3. Hard-coded CSS colours are exceptions

Hard-coded colours in `globals.css` are acceptable only where they are one-off implementation details or unsupported by the token layer. Repeated hard-coded colours are visual-system drift.

### 4. Marketing accent is governed

The warm rust/orange accent is a marketing-only warmth accent and controlled CTA/emphasis layer.

It is not the default app action colour.

### 5. Member shell does not inherit campaign intensity

Marketing may persuade. The member shell stabilises.

Campaign gradients, warm hero panels, and emotionally charged CTA treatments do not enter the member shell unless specifically approved for a bounded intervention surface.

### 6. State colours are semantic

Relationship-state colours are not general decoration.

A state colour always answers:

> “What condition or signal is this colour communicating?”

### 7. Accessibility is brand integrity

Legibility, contrast, focus states, touch target size, and reduced-motion support are core brand behaviours.

A relationship repair product that is hard to read under stress has failed visually even if it looks premium.

## Design QA checklist

Before accepting a visual change, reviewers ask:

1. Does this feel like MarriageOS, not generic SaaS, therapy, romance, or influencer advice?
2. Is the surface clearly either invitation or instrument?
3. Are marketing and member treatments different for a reason?
4. Does the design lower emotional temperature where required?
5. Is there one dominant next action?
6. Are colours coming from the canonical system or a documented exception?
7. Are warm accents limited to the approved marketing expression layer unless justified?
8. Are state colours semantic rather than decorative?
9. Is the member shell still calm, private, sparse, and tool-first?
10. Would this design still feel credible to a tired user at 11:47 pm after a fight?

## Drift handling

Visual drift exists when:

- a new recurring colour is added outside `theme.ts`
- marketing and member shells begin to feel like unrelated products
- app surfaces inherit campaign styling
- marketing surfaces use romance/lifestyle clichés
- member surfaces become too dashboard-like
- imagery violates the media system
- commercial surfaces feel detached from Repair
- typography rules are breached
- hard-coded CSS becomes a second design system

The drift resolution path is:

1. log the issue in `docs/DRIFT_REGISTER.md`
2. classify whether it is doctrine, token, component, or implementation drift
3. resolve through a bounded patch
4. update `theme.ts`, CSS, and documentation together where required

## Current implementation standard

The current standard is:

1. The warm marketing accent is retained and restricted to public/marketing expression.
2. `theme.ts` contains the core palette and warm accent family.
3. `globals.css` exposes corresponding CSS variables and uses them for recurring shell and marketing treatments.
4. The member shell remains dark, sparse, blue-led, private, and tool-first.
5. Repair remains visually and structurally more action-oriented than Guides/Perspectives and Knowledge.
6. Guides/Perspectives remain the meaning layer.
7. Knowledge remains the structured reference layer.

## Final principle

MarriageOS should never look like it is selling hope cheaply.

It should look like it understands emotional damage, respects the user's intelligence, and can help them take one cleaner step when the relationship feels hard.

That is the visual standard.
