# DELIVERY_ARCHITECTURE.md

**Status:** Planning and promotion-control document
**Authority level:** Non-canonical planning layer
**Version:** 3.2 — Final post peer review, patched
**Supersedes:** DELIVERY_ARCHITECTURE.md v3.1

---

## Scope note

This file exists to make delivery choices explicit **before** drafting, promotion,
and build work begin.

It is a **pre-canonical planning instrument** for mapping:

- audience state
- moment of use
- desired outcome
- best format
- primary surface
- secondary surfaces
- free / paid / core product role
- phase eligibility
- safety classification
- escalation and support requirements

Its job is to reduce waste, prevent format drift, and stop teams from generating
large volumes of content that do not match the product's actual use moments.

### This file is allowed to do

- define the delivery matrix for existing canonical content families
- define format rules for content objects
- map pathways from attention → activation → operation
- clarify commercial role by surface
- support canonical promotion decisions
- help sequence drafting and implementation work

### This file is **not** allowed to do

- create new product doctrine
- override `docs/MASTER_SPEC.md`
- override `docs/DRIFT_REGISTER.md`
- override executable canonical config
- silently rename canonical content families
- settle unresolved spec conflicts by preference
- invent new routes, tabs, labels, or product posture as if already ratified
- act as executable implementation truth

### Canonical authority order

**Use this exact order whenever authority questions arise. If canonical governance changes upstream, the upstream source wins immediately.**

Per `MASTER_SPEC.md §6`:

1. Accepted addenda and ratified drift fixes (`docs/DRIFT_REGISTER.md`)
2. Executable config (`src/config/routes.ts`, `src/config/page-data.ts`,
   `src/config/theme.ts`, `src/schemas/*`)
3. `docs/MASTER_SPEC.md`
4. Revised premium UX narrative docs
5. Older PWA and architecture prose
6. This file and all other non-canonical planning layers

**If anything here conflicts with items 1–5, items 1–5 win immediately.**

### Drift rule

If this file implies any change to:

- product doctrine
- public/internal naming
- route structure
- tab/category structure
- store posture
- solo vs together mode
- canonical content families
- implementation assumptions already governed elsewhere

that change must be logged in `docs/DRIFT_REGISTER.md` as **Open** and must not
be treated as resolved here.

### Working constraint

This file may shape **presentation, sequencing, packaging, and promotion**.

It may **not** rewrite canon.

### Practical reading rule

Read this file as:

> "How should existing system truths be delivered?"

Do **not** read it as:

> "What is the new truth of the system?"

**Warning:** If a decision here changes doctrine rather than delivery, it does
not belong here.

---

# 1. Purpose of Delivery Architecture

MarriageOS is not built as a generic educational library.

It is built to help people in live relational moments:

- after a fight
- during drift
- inside loneliness
- when resentment is building
- when attention is fractured
- when desire has gone quiet
- when one person does not know what to say next

This file translates that reality into delivery logic.

## Delivery Architecture answers five practical questions

1. **Who is this for right now?**
2. **What moment are they in?**
3. **What is the smallest useful thing we can give them?**
4. **What is the best format for that moment?**
5. **Where should that object live commercially, inside the product, and in
   which implementation phase?**

---

# 2. Delivery Architecture principles

## 2.1 Moment beats topic

We do not generate by topic first.

We generate by **moment of use** first.

Bad starting question:

> "What should our desire section say?"

Better starting question:

> "What does a user need at 10:47 p.m. after the third 'not tonight' this week?"

## 2.2 Utility beats elegance

A beautifully written object that does not help a real user in a real moment
is a miss.

## 2.3 Crisis beats curriculum

When a user is distressed, the first job is not education.

The first job is:

- lower temperature
- reduce damage
- restore clarity
- create the next usable move

## 2.4 Format is part of the intervention

The same idea may succeed as:

- a one-screen intervention
- a short script
- a checklist
- a guided check-in
- a short audio
- a full guide
- a paid tool

and fail as a long explainer.

## 2.5 Free and paid tiers are authored together — wired separately by phase

Free and paid tiers of the same repair module are defined as a single content
object at authoring time. The operator declares both tiers — what is included
in the free first step and what is gated in the paid tier — in one drafting pass.

The content is authored in one phase. The paid-tier access gate is wired in a
later phase when commerce infrastructure exists.

**This means:**
- Content operators do not wait for Phase 5 to define paid content.
- Engineers do not wire the free/paid gate until Phase 5 has its commerce UI.
- These are parallel tracks, not sequential ones.

**Rule:** The `phase_eligibility` field for any tiered content object reflects
the earliest phase where the **free tier** is surfaced. The paid tier
implementation phase is recorded in the `tier_wiring_phase` note field, not the
`phase_eligibility` field.

For non-tiered paid product objects, `phase_eligibility` reflects the earliest
live commerce surface, even if preparatory drafting begins earlier.

## 2.6 Repair stays central

Repair remains the centre of V1.

Knowledge supports.
Guides personalise.
Products operationalise.

## 2.7 Attention is off-product but on-strategy

The Attention layer (hook posts, social scripts, carousels) lives outside the
`100dvh` PWA shell. It is not processed through the operator pipeline that
governs repair modules, knowledge articles, or product content.

It is included in delivery architecture because delivery architecture governs
content objects across all surfaces including acquisition.

**Attention objects must be tagged `surface: off-product` in the working matrix
and must not be submitted to the 6-stage operator pipeline.**

---

# 3. Canonical content families and public presentation

## Internal canonical families

- `content/repair/*`
- `content/knowledge/*`
- `content/products/*`
- `content/guides/*`

## Public-facing presentation labels

> NOTE: Public labels may differ from internal canonical keys where already
> ratified.

Per `DRIFT_REGISTER.md`:

- `repair` → Repair
- `knowledge` → Knowledge
- `products` → Tools / Products / Shop surface as ratified
- `guides` → Perspectives (public-facing label where applicable)

## Rule

Do not create duplicate editorial families in delivery planning.

---

# 4. The delivery stack

Every strong idea should be able to sit somewhere inside this stack.

## 4.1 Attention (off-product)

**Surface scope: off-product — social, email, organic reach**

Purpose:
- stop the scroll
- name the pain
- attract the right audience
- create recognition

Typical outputs:
- hook post
- carousel
- short email
- short audio clip
- one-screen insight
- quote card
- social script

**Operator rule:** Do not run attention objects through the 6-stage pipeline.
These are produced through a lighter editorial process and reviewed against
house voice and safety boundaries only.

## 4.2 Activation

**Surface scope: public-facing pages, free assets, email sequences**

Purpose:
- give immediate relief
- earn trust
- move from recognition to action

Typical outputs:
- one-page checklist
- self-check
- mini script
- protected-window prompt
- intimacy agreement excerpt
- short guide excerpt
- micro exercise

## 4.3 Operation

**Surface scope: PWA shell — repair modules, today dashboard, check-in,
guided flows**

Purpose:
- live inside the system
- change behaviour repeatedly
- help users act inside real relational moments

Typical outputs:
- in-product intervention
- script generator
- dashboard card
- guided check-in
- crisis kit
- AI rewrite flow (Phase 9 of `Implementation Phases` — see §16.5 phase mapping note)
- reset step
- progress marker

## 4.4 Monetisation

**Surface scope: store, product detail, pricing, library**

Purpose:
- package implementation
- deepen support
- improve outcomes and confidence
- create retained value

Typical outputs:
- full guide
- toolkit bundle
- reset programme
- MOS subscription
- premium review / support (deferred — see Open Questions §17, D-023)

---

# 5. Audience-state model

This project is not segmented primarily by demographics.

It is segmented first by **state**.

## 5.1 Core state families

### A. Hurt states
- lonely next to you
- feeling invisible
- unwanted
- shut down
- exhausted
- carrying too much
- bitter but still hoping

### B. Blame / confusion states
- "why is this such a big deal?"
- "we are fine except for sex"
- "they always attack / withdraw / shut down"
- "the phone is not the problem"
- "I do so much and still get nothing back"

### C. Action states
- after the fight
- before bringing something up
- during repeated rejection
- after a shutdown
- during phone drift
- when resentment is building
- when we need a reset

## 5.2 State metadata required for each content object

Every object must identify:

- primary state served
- secondary state served
- emotional temperature (`low` / `elevated` / `acute`)
- urgency (`immediate` / `same-day` / `preventative` / `longer-horizon`)
- whether the user is likely regulated or dysregulated
- whether the object is solo-safe
- whether the object assumes mutual goodwill
- **safety class** (see §5.3 below)

## 5.3 Safety classification — required structured field

Every content object must carry one of these four safety classes.
This is a **controlled enum**. It is not free-text.

| Safety class | Definition | Required action |
|---|---|---|
| `SAFE` | User shows goodwill; no escalation signals; content appropriate | Deliver normally |
| `CAUTION` | Elevated distress; dysregulated; high-temperature moment | Use shortest format; prepend de-escalation note; include "make it worse" card |
| `SCREEN` | Ambiguous signals suggesting possible context outside product scope | Surface safety card before content; offer escalation path |
| `EXCLUDE` | Active abuse, coercion, surveillance intent, or no-goodwill indicators | Do not deliver repair content; redirect to safety resources only |

**Rule:** Any object classified `EXCLUDE` must never deliver repair, desire, or
reconnection content. It must surface the canonical safety card set defined in
`MASTER_SPEC.md §8.7` and stop.

**Escalation decision tree:**


Does the user's context signal a safety concern?
  │
  ├── No clear signals
  │     └── Assign SAFE or CAUTION based on emotional temperature
  │
  ├── Ambiguous signals
  │     (isolation language, fear, one-sided control framing)
  │     └── SCREEN
  │           └── Surface safety card
  │               Offer: "This tool is not for every situation"
  │
  └── Active harm signals
        (abuse, coercion, surveillance)
        └── EXCLUDE
              └── Deliver safety card only
                  Do not route to repair content


**Operator rule:** If a dossier for a content object cannot cleanly assign a
safety class, the target is not ready for generation. Stop and redesign the
target framing.

**Pipeline enforcement:**

The LLM Dossier Builder (Stage 3 of the operator pipeline) must explicitly
declare the assigned Safety Class in its structured output.

The LLM Verifier (Stage 5) must explicitly audit the final content object to
confirm it obeys the escalation decision tree for the assigned class:

- `CAUTION` objects must include a "make it worse" card
- `SCREEN` objects must begin with the safety card
- `EXCLUDE` objects must contain no repair guidance whatsoever

Failure to validate safety class results in a **pipeline halt**. The piece is
returned to Dossier Builder for redesign.

---

# 6. Moment-of-use taxonomy

## 6.1 Core moment buckets

### Immediate
Used inside or just after the event
- after a fight
- during shutdown
- after a bad bid miss
- after rejection
- at bedtime drift
- during resentment spike

### Same-day
Used while the issue is still hot but not exploding
- later that night
- next morning
- during commute
- before re-entering the room
- after cooling down

### Preventative
Used before crisis
- weekly check-in
- monthly calibration
- routine protected window
- attention agreements
- intimacy baseline protection

### Longer-horizon
Used to redesign the system
- desire repair pathway
- life-phase guide
- long-marriage refresh
- structured reset
- MOS onboarding

## 6.2 Delivery rule

Immediate moments require:
- shortest useful format
- lowest cognitive load
- strongest emotional containment

Longer-horizon moments can tolerate:
- guides
- structured exercises
- dashboards
- programmes
- product bundles

---

# 7. Format library

## 7.1 Format-to-component binding rule

Every format must be mappable to a ratified V1 UI component.

If a format requires a UI component not yet in
`src/config/component-registry.ts`, it must be marked
`phase_eligibility: V2` and must not be drafted for V1.

**This is not a restriction on the format taxonomy.** The format taxonomy
documents all formats the system will ever use. Phase eligibility controls
when each format is available.

## 7.1.1 Solo-first format constraint

All V1 formats must be authored for a **single, solo user** executing the
intervention independently.

"Together mode" is explicitly disabled for V1 per `DRIFT_REGISTER.md` D-017.

Any content object that requires synchronous partner participation, shared
device interaction, or simultaneous paired execution violates V1 canon and
**must be failed by the Verifier**.

If a format concept is better suited to together mode, tag it
`phase_eligibility: V2-together` and do not draft it for V1.

## 7.2 Micro formats

### Safety Interstitial / Redirect
- 20 to 50 words
- Used exclusively for `SCREEN` and `EXCLUDE` safety classes
- Must preserve the canonical safety card set and policy meaning from
  `MASTER_SPEC.md §8.7` and ratified drift
- Use verbatim UI copy only where that copy is already fixed in executable config
  or ratified page data
- Must precede any other content where safety class is `SCREEN`
- Must replace all content where safety class is `EXCLUDE`
- **V1 component:** `Card` styled as a warning/redirect interstitial
  (`variant="safety"`) or dedicated `SafetyWarningCard` once registered

### One-screen intervention
- 20 to 90 words
- Single job only
- Used in acute moments
- **V1 component:** `StateSummaryCard` / `NextBestMoveCard` / `MakeItWorseCard`

### Mini script
- 1 to 5 lines
- Copyable
- One emotional situation only
- **V1 component:** `QuickScriptCard`

### Checklist
- Scan-first
- No explanation-heavy paragraphs
- Best for activation and troubleshooting
- **V1 component:** `ChecklistCard`
- **Earliest V1 surface:** Phase-3 Repair Centre

### Short audio
- Under 3 minutes by default
- Calming, orienting, or instructive
- Good for distressed users who do not want to read
- **V1 component:** not yet ratified — `phase_eligibility: V2`

## 7.3 Medium formats

### Short guide
- 400 to 1200 words
- One problem, one framework, one move
- Can be free or core
- **V1 component:** `ArticleSection` (knowledge) / repair module template
  (repair)

### Guided check-in
- Structured prompt flow
- Usually paired with product state logic
- High operational value
- **V1 component:** `CheckInGrid` + state engine
- **Solo-first constraint applies:** do not author as a shared simultaneous flow

### Crisis kit
- Bundled micro objects for one acute state
- Should feel like a grab-and-use package
- **V1 component:** composed from `ChecklistCard` + `QuickScriptCard` +
  `MakeItWorseCard` — no standalone crisis-kit container required for V1

## 7.4 Long formats

### Full guide
- Structured, durable, referable
- Best for life phases or perspective lanes
- **V1 component:** `GuideSectionCard` / `ArticleSection`

### Reset programme
- Multi-step sequence
- Must include tracking, support, or implementation scaffolding
- Not just reading
- **V1 component:** `ResetTimeline`
- **Earliest V1 surface:** Phase-3 Repair Centre; paid access gating wired in Phase-5 where applicable

### Subscription surface
- Recurring interventions
- Dashboard
- AI assistance (deferred until AI phase — see §16.5)
- Check-ins
- System maintenance
- **V1 component:** Today dashboard + Progress dashboard

## 7.5 Format advisory status

The "weak formats" listed per content family (§12) are:

- **Advisory for planners:** a planner should prefer stronger formats
- **Mandatory flags for verifiers:** if a final output uses a weak format for
  its content family, the verifier must flag this as structural drift risk,
  not a style preference, and the object must be reworked unless a documented
  exception exists

---

# 8. Content object schema

Every deliverable must be defined as a content object before drafting.

## 8.1 Required fields

| Field | Notes |
|---|---|
| **Object ID** | Unique identifier, e.g. OBJ-001 |
| **Working title** | |
| **One-sentence promise** | What the user gets |
| **Canonical family** | `repair` / `knowledge` / `products` / `guides` |
| **Primary audience state** | From §5.1 state families |
| **Moment of use** | `immediate` / `same-day` / `preventative` / `longer-horizon` |
| **Desired outcome** | |
| **Format** | From §7 format library |
| **Target UI component** | Must match a ratified component, or mark `V2` |
| **Primary surface** | |
| **Secondary surfaces** | |
| **Tone mode** | `hurt` / `blame_confusion` / `action` |
| **Safety class** | `SAFE` / `CAUTION` / `SCREEN` / `EXCLUDE` |
| **Solo-safe** | `yes` / `no` — must be `yes` for all V1 objects |
| **Commercial role** | `free` / `paid` / `core` / `provisional-paid` / `deferred` |
| **Tier note** | For tiered objects: declare free-tier boundary and paid-tier boundary |
| **Tier wiring phase** | Phase when paid-access gate is wired (may differ from `phase_eligibility`) |
| **Phase eligibility** | Phase-2 through Phase-9 per §16.5 — reflects earliest free-tier surface |
| **Canonical repair-module anchor** | The repair module name this object supports (from MASTER_SPEC §11.2), or `entry-point` for diagnostic UI components like `CheckInGrid`, or `none` for off-product objects |
| **Source basis** | |
| **Ratification status** | `Draft` / `Ratified` / `Provisional` |
| **Do not use if** | |
| **Escalate if** | |
| **Success metric** | |
| **Kill / rework threshold** | Metric value or signal that triggers retirement or rework |

### Canonical repair-module anchor: schema note

This field accepts three value types:

1. **A named repair module** from `MASTER_SPEC.md §11.2` — e.g.,
   `Mental Load / Manager Mode`. This means the object is authored to
   support that module and will be routed from users in states that
   resolve to it.

2. **`entry-point`** — for diagnostic UI objects (specifically `CheckInGrid`
   and its associated screens) that *produce* the state classification rather
   than being routed to by it. These sit before the state engine, not after it.

3. **`none`** — for off-product objects (attention layer) that do not route
   through the product's state logic.

> Note: The exact canonical state/substate enum will be defined in
> `features/check-in/state-engine.ts` once Phase 2 (local state system) is
> built. Until that enum is ratified, this field uses repair module names as
> the closest stable anchor. When `state-engine.ts` is ratified, this field
> may be extended to also carry the state ID alongside the module anchor.

## 8.2 Optional fields

- CTA
- lifecycle stage
- cross-sell role
- retention role
- support escalation trigger

## 8.3 AI-assisted object flag

If an object requires AI generation at runtime (message rewriter, conflict
coach, check-in summary), it must carry:

- `ai_required: true`
- `phase_eligibility: Phase-9` (per `Implementation Phases`) — see §16.5 sequencing note
- `fallback_behaviour` (what the product displays if the AI call fails)

**No object with `ai_required: true` may be drafted or wired to a product
surface before the AI utilities phase pass gate is achieved.**

---

# 9. Commercial role model

## 9.1 Free

Job:
- attention
- trust
- recognition
- first relief

Good free objects:
- hook posts
- micro insights
- one-page self-checks
- short scripts
- excerpted mini-guides

## 9.2 Paid low-to-mid ticket

**Status: assignments provisional until D-022 is resolved.**

Objects may be marked `commercial_role: provisional-paid` in the working
matrix. They must not be treated as confirmed `paid` until D-022 is closed.

Good low-to-mid ticket objects:
- reset packs
- toolkits
- full guides
- bundled script packs

## 9.3 Core MOS

Job:
- recurring operational support
- state-aware intervention
- repeated behaviour shaping
- system maintenance

Good MOS objects:
- guided check-ins
- dashboard cards
- AI rewrite (AI phase only)
- crisis kits
- resets
- state logic flows

## 9.4 Premium / high-ticket

**Status: Open — see `docs/DRIFT_REGISTER.md` D-023**

This tier is not yet ratified for V1 planning. Do not assign
`commercial_role: premium` to any V1 content object.

If a content object naturally escalates here, assign
`commercial_role: deferred` and log it.

## 9.5 Free / paid decision rules

### Make it free if:
- it helps users name the problem
- it builds trust quickly
- it works as a first relief object
- it can travel well for growth

### Make it paid (provisional) if:
- it saves time
- it packages implementation
- it reduces confusion materially
- it has repeatable practical value
- it is worth keeping and revisiting

### Make it core MOS if:
- it is best used repeatedly
- it benefits from state awareness
- it needs interaction, tracking, or iteration
- it becomes more valuable through continuity

### Escalate to deferred if:
- it requires human judgment beyond system templates
- it requires support infrastructure not yet built
- it is genuinely premium but the tier is not yet ratified (D-023)

---

# 10. Pathway architecture

We do not build sections only. We build **pathways**.

A pathway is:

- one user problem
- across multiple surfaces
- across free, activation, operation, and monetisation
- with a clear next step
- **anchored to a ratified canonical repair module**

## 10.1 Pathway template

### Pathway name
[Working title]

### User situation
[Describe the actual lived moment]

### Emotional state
[Hurt / confusion / reactive / shut down / exhausted / etc.]

### Primary canonical family
[repair / knowledge / products / guides]

### Canonical repair-module anchor (required)
[Module name from `MASTER_SPEC.md §11.2`]
**If this field is blank, the pathway is not ready for content production.**

### Required object stack
- one attention object (off-product; lighter editorial process)
- one activation object
- one core MOS object
- one monetisable support object (provisional until D-022 resolved)

### Free / paid boundary note
[Declare which step is the free tier and which is the paid tier;
 state when the paid gate will be wired]

### Success condition
[What becomes better if this pathway works?]

### Metrics with kill threshold
[Activation rate, retention, completion, relief, re-use, conversion]
[Kill threshold: if X falls below Y after Z days, object enters review]

---

# 11. Priority pathways

## 11.1 Flagship pathways for first build wave

### Pathway 1 — After the fight
**Canonical repair-module anchor:** `Pressure Loop` / `Resentment Building`
**Why first:** acute, common, high-need, strong source coverage
**Phase eligibility:** content objects Phase-2 and above

Objects required:
- social hook (off-product; attention)
- "what to say after a rupture" free asset (activation)
- MOS repair flow (operation, Phase-2 fixtures / Phase-3 full module)
- conflict scripts pack (provisional-paid, Phase-5)
- follow-up guided check-in (core MOS, Phase-2)

### Pathway 2 — Phone as the third
**Canonical repair-module anchor:** `Autonomy Deficit`
**Why first:** modern, highly legible, strong source coverage, growth-friendly
**Phase eligibility:** content objects Phase-2 and above

Objects required:
- attention hook (off-product)
- protected window guide (activation)
- attention agreement template (activation)
- MOS distraction reset flow (operation, Phase-2 / Phase-3)
- premium household reset kit (provisional-paid, Phase-5)

### Pathway 3 — Repeated "not tonight"
**Canonical repair-module anchor:** `One-Sided Initiation` / `Desire Maintenance`
**Why first:** pain-dense, monetisable, central to desire protection
**Phase eligibility:** content objects Phase-2 and above

Objects required:
- public-safe hook (off-product)
- low-conflict intimacy agreement (activation)
- counter-offer template (activation)
- MOS desire-state check (operation, Phase-2 / Phase-3)
- Durable Desire product layer (provisional-paid, Phase-5)

### Pathway 4 — Resentment / manager mode
**Canonical repair-module anchor:** `Mental Load / Manager Mode` /
`Resentment Building`
**Why first:** common, upstream of desire collapse, strong operational value
**Phase eligibility:** content objects Phase-2 and above

Objects required:
- recognition post (off-product)
- resentment audit (activation)
- workload / care rebalancing tool (activation)
- MOS pressure-reduction intervention (operation, Phase-2 / Phase-3)
- longer reset or guide (provisional-paid, Phase-5)

### Pathway 5 — We feel like roommates
**Canonical repair-module anchor:** `Quiet Drift` / `Desire Maintenance`
**Why first:** broad market fit, highly recognisable, bridges families
**Phase eligibility:** content objects Phase-2 and above

Objects required:
- drift hook (off-product)
- self-check (activation)
- guide excerpt (activation, Phase-4)
- MOS reconnection plan (operation, Phase-2 / Phase-3)
- paid reset programme (provisional-paid, Phase-5)

## 11.2 Secondary pathways (Phase-4 and later)

- postpartum connection protection (`Touched Out / Postpartum`)
- menopause intimacy redesign (`Desire Maintenance`)
- long-marriage aliveness (`Stay & Rebuild`)
- shutdown / silence dynamics (`Quiet Drift` / `Entrenched Resentment`)
- one-sided initiation / petition loop (`One-Sided Initiation`)

---

# 12. Canonical family planning sections

## 12.1 Repair planning

### Main delivery jobs
- reduce damage
- restore access
- repair specific ruptures
- give scripts and next moves

### Best formats
- scripts (`QuickScriptCard`)
- checklists (`ChecklistCard`)
- guided flows (`CheckInGrid` + state engine)
- crisis kits (composed from micro components)
- one-screen interventions (`StateSummaryCard` / `NextBestMoveCard`)
- short audio (V2)

### Weak formats — advisory for planners; mandatory fail signal for verifiers
- long abstract essays
- generic relationship theory dumps

## 12.2 Knowledge planning

### Main delivery jobs
- explain the loop
- reduce shame
- create intelligibility
- support better action

### Best formats
- short guide (`ArticleSection`)
- framework page (`ArticleSection`)
- explainers that lead to action
- state-linked articles

### Weak formats
- academic overreach
- therapy jargon
- debate-bait framed as education

## 12.3 Products planning

### Main delivery jobs
- operationalise the system
- compress time to relief
- increase consistency
- deepen implementation

### Best formats
- toolkits
- reset programmes (`ResetTimeline`)
- guided templates
- productised flows

### Weak formats
- vague "masterclass" positioning
- passive-content-only bundles

## 12.4 Guides planning

### Main delivery jobs
- hold differentiated truths without splitting the system
- help users feel seen
- personalise repair and desire protection

### Best formats
- companion guides (`GuideSectionCard`)
- life-phase guides
- perspective pages

### Weak formats
- adversarial side-taking
- identity-war language
- duplicate editorial families

---

# 13. Promotion gate

No object should move toward canonical drafting until it passes this gate.

## Required questions — all 14 are non-negotiable

1. What exact state does this serve?
2. What exact moment does it serve?
3. What is the smallest useful outcome?
4. What is the best format for that moment?
5. What canonical family does it belong to?
6. Is it free, paid, or core — and is there a real reason?
7. Does it sound like house voice?
8. Is it solo-safe?
9. What should trigger escalation or deferral?
10. What metric tells us it worked — and what threshold triggers retirement?
11. **What is its safety class?**
12. **What V1 UI component renders it — and is it ratified for this phase?**
13. **What canonical repair-module does it support — or is it an entry-point or
    off-product object?**
14. **What implementation phase is it eligible for — and has that phase's pass
    gate been confirmed?**

## Failure rule

If the object cannot answer all 14 questions cleanly, it is not ready for
canonical promotion.

---

# 14. Success metrics by delivery layer

## Attention metrics
- saves, shares, click-through, qualified opt-in, resonance signals
- **Kill threshold:** if click-through-to-activation falls below 2% after
  30 days, review for retirement or rewrite

## Activation metrics
- download / open rate, first-use completion, repeat use, self-reported
  relief, next-step conversion
- **Kill threshold:** if next-step conversion falls below 15% after first
  100 uses, flag for rework

## Operation metrics
- return usage, streak / continuity, check-in completion, script use,
  crisis kit use, reduction in drop-off between states
- **Kill threshold:** if return usage falls below 30% at 14-day mark, review

## Monetisation metrics
- conversion to paid, activation inside paid asset, completion rate,
  support request pattern, retention, perceived usefulness
- **Kill threshold:** if conversion from contextual placement falls below 3%
  after 60 days, commercial role assignment is reviewed

## Metric failure protocol

When a metric crosses its kill threshold:

1. Flag the object in the working matrix as `REVIEW`
2. Assign a human reviewer
3. Reviewer decides: retire / rewrite / reclassify / accept as expected
4. Decision is logged in the object's working matrix row
5. If reclassification changes commercial role, phase, or canonical family —
   log as drift in `DRIFT_REGISTER.md`

---

# 15. Open questions register

**All items that touch doctrine, route structure, naming, store posture,
or governed implementation assumptions must be added to `DRIFT_REGISTER.md`
as Open entries.**

The five items below already exist as Open entries D-021 through D-025 in
`docs/DRIFT_REGISTER.md`. They remain unresolved and must not be treated as
resolved here.

While these are open, apply the following conservative defaults in the
working matrix:

- Commerce surface labels: use internal canonical keys
- `commercial_role: paid` assignments: use `provisional-paid` instead
- Premium support objects: use `commercial_role: deferred`
- Pathway build order: treat Pathway 1 (After the fight) as first until
  D-025 is resolved

**D-021** — Confirm final public label set for commerce surfaces
**D-022** — Confirm exact boundaries between MOS core and paid toolkit layer
**D-023** — Confirm whether premium support tier exists in V1 at all; if not,
            close as "defer to post-V1"
**D-024** — Confirm whether any pathway, surface naming, or nav implication
            in this document implies new routes requiring drift logging
**D-025** — Confirm exact first flagship pathway build order

> These items do not block Phase-2 content production. State engine fixture
> content, micro-intervention scripts, and check-in copy can be drafted while
> D-021 through D-025 are being resolved. Only objects requiring confirmed
> `paid` commercial role or commerce surface placement are blocked.

---

# 16. Known planning constraints

## 16.1 Solo-first constraint
Do not assume paired-mode interaction where solo-safe design is required.
V1 is solo-first per `DRIFT_REGISTER.md` D-017. See §7.1.1 for format-level
enforcement.

## 16.2 Public/internal naming constraint
Respect ratified internal vs display naming where already set.

## 16.3 Repair-first constraint
Do not let Knowledge dominate the build sequence simply because it is easier
to write.

## 16.4 Delivery-not-doctrine constraint
This document may recommend packaging, sequencing, and format.
It may not settle doctrine disputes.

## 16.5 Phase-gating constraint — with sequencing note

**Important:** D-026 has already been accepted in `docs/DRIFT_REGISTER.md`.
`docs/marriage_os_implementation_phases.md` is the canonical phase-gate
authority for build sequencing and content eligibility. `docs/Implementation Plan.md`
remains the companion workstream and deliverables plan. This document must use
the canonical implementation phases for content production gating and must not
treat the numbering question as open.

| Content type | Earliest eligible phase | `Implementation Phases` ref |
|---|---|---|
| Check-in fixture content seeding `CheckInGrid`, `StateSummaryCard`, `NextBestMoveCard`, `MakeItWorseCard`, `QuickScriptCard` | **Phase-2** | Phase 2 — Local-first state system |
| Full repair module content (all 12 canonical modules) | **Phase-3** | Phase 3 — Repair Centre |
| Perspectives / Knowledge content | **Phase-4** | Phase 4 — Perspectives and Knowledge |
| Store / product descriptions | **Phase-5** | Phase 5 — Commerce UI |
| Entitlement-aware library content | **Phase-6** | Phase 6 — Supabase integration |
| AI-assisted objects | **Phase-9** | Phase 9 — AI utilities |

**`Implementation Plan` phase number note:** The `Implementation Plan` uses a
different phase numbering where Phase 2 = Schema and data contracts and
Phase 3 = State engine. Content operators must use
`docs/marriage_os_implementation_phases.md` as the phase-gate reference.
This was resolved by D-026 in `docs/DRIFT_REGISTER.md`, which was accepted.
The numbering difference remains visible for workstream planning only and does
not reopen the sequencing question.

**D-026** — Accepted in `docs/DRIFT_REGISTER.md`. Use
`docs/marriage_os_implementation_phases.md` for build sequencing and content
eligibility. Use `docs/Implementation Plan.md` for companion workstream scope
only.

## 16.6 Attention layer constraint
Attention objects must not be processed through the 6-stage operator pipeline.
Reserved for content destined for the PWA shell only.

---

# 17. Implementation sequence (phase-locked)

## Step 1
Verify D-021 through D-026 remain consistent with the active canonical set.
D-026 is already accepted in `docs/DRIFT_REGISTER.md`; do not treat the phase
numbering question as open.

## Step 2
Ratify the state taxonomy (§5) and safety classification enum (§5.3).
Confirm the canonical repair module set matches `MASTER_SPEC.md §11.2`.

## Step 3
Ratify the format library (§7) with component bindings confirmed.
Mark unratified-component formats as `phase_eligibility: V2`.

## Step 4
Ratify Pathway 1 (After the fight) in full — module anchor, full object stack,
free/paid boundary, metrics, kill thresholds.
This is the proof-of-concept for the entire delivery architecture.

## Step 5
Populate working matrix (§18) for Phase-2-eligible objects first.
Draft Phase-3 and Phase-4 objects only after Phase-2 pass gate is confirmed.

## Step 6
Draft only after all 14 promotion gate questions are answered cleanly.

## Step 7
Verify via operator pipeline. Promote to canonical content family on pass.

## Step 8
Wire into implementation surfaces after ratified promotion and after the
target implementation phase pass gate is confirmed.

---

# 18. Working matrix (first-wave objects across earliest eligible phases)

> This matrix is the production queue. No operator may draft an object whose
> row is incomplete.
>
> `provisional-paid` = commercial role pending D-022 resolution.
> `tier_wiring_phase` = phase when paid-access gate is wired (separate from
> authoring phase).
> `entry-point` in anchor field = diagnostic object that produces state,
> not routed to by state.

> For surfaced product objects such as `OBJ-008`, `phase_eligibility` refers to the
> earliest live commerce surface. Preparatory drafting may begin earlier, but the
> object is not treated as a surfaced Phase-3 deliverable.

| OBJ | Topic | Family | Audience state | Moment | Canonical repair-module anchor | Format | Target UI component | Phase eligibility | Tier wiring phase | Commercial role | Safety class | Kill threshold |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| OBJ-001 | After the fight — first repair move | repair | Hurt / activated | Immediate | `Pressure Loop` | Mini script | `QuickScriptCard` | Phase-2 | n/a | free | CAUTION | <5% copy rate in 30d → rework |
| OBJ-002 | After the fight — 7-day reset | repair | Hurt / activated | Same-day | `Resentment Building` | Reset programme (tiered: free first step + paid full reset authored together) | `ResetTimeline` | Phase-3 | Phase-5 (paid gate wired) | provisional-paid | CAUTION | <10% paid conv. in 60d → review pricing |
| OBJ-003 | Shutdown / silence — "do this first" | repair | Shut down / hurt | Immediate | `Quiet Drift` | One-screen intervention | `NextBestMoveCard` | Phase-2 | n/a | free | CAUTION | <20% next-step click → rework copy |
| OBJ-004 | Manager mode — pressure audit | repair | Overloaded / bitter | Preventative | `Mental Load / Manager Mode` | Checklist | `ChecklistCard` | Phase-3 | n/a | free | SAFE | <40% completion → shorten |
| OBJ-005 | One-sided initiation — counter-offer script | repair | Hurt / ashamed | Same-day / repeated | `One-Sided Initiation` | Mini script | `QuickScriptCard` | Phase-2 | n/a | free | CAUTION | <25% repeat use at 14d → rework framing |
| OBJ-006 | Phone drift — protected window guide | knowledge | Lonely / confused | Preventative | `Autonomy Deficit` | Short guide | `ArticleSection` | Phase-4 | n/a | free | SAFE | <50% read completion → split into shorter |
| OBJ-007 | Roommate drift — self-check | knowledge | Lonely / numb | Chronic | `Quiet Drift` | Self-check (checklist variant) | `ChecklistCard` | Phase-4 | n/a | free | SAFE | <20% next-step conv. → review CTA |
| OBJ-008 | Desire maintenance — monthly planner | products | All states | Longer-horizon | `Desire Maintenance` | Reset programme (paid product surfaced in Commerce) | `ResetTimeline` | Phase-5 (Commerce surface) | n/a | provisional-paid | SAFE | <60% activate within 7d of purchase → review onboarding |
| OBJ-009 | After the fight — His Perspective | guides | Blame / confusion | Same-day | `Resentment Building` | Short guide | `GuideSectionCard` | Phase-4 | n/a | free | SAFE | <30% repair CTA click → add bridge sentence |
| OBJ-010 | After the fight — Her Perspective | guides | Hurt / confused | Same-day | `Resentment Building` | Short guide | `GuideSectionCard` | Phase-4 | n/a | free | SAFE | <30% repair CTA click → add bridge sentence |
| OBJ-011 | Resentment Building — state summary card | repair | Bitter / reactive | Immediate | `Resentment Building` | One-screen intervention | `StateSummaryCard` | Phase-2 | n/a | core | CAUTION | <35% next-best-move click → rewrite state description |
| OBJ-012 | Desire Maintenance — check-in diagnostic | repair | Numb / disconnected | Preventative | `entry-point` | Guided check-in (produces state, does not respond to state) | `CheckInGrid` + state engine | Phase-2 | n/a | core | SAFE | <40% return at 7d → shorten check-in length |

---

# 19. Completion condition

This file is doing its job when:

- the team can tell what each idea should become
- the team can tell where it belongs
- the team can tell whether it should be free, paid, or core
- the team can tell which implementation phase it belongs to
- the team can tell which canonical repair module it supports
- the team can tell what UI component renders it
- the team can tell what safety class it carries
- drafting waste drops
- duplicate formats drop
- pathways become buildable
- content generation starts from delivery logic instead of topic sprawl
- every object that fails its kill threshold is reviewed, not ignored
- the promotion gate blocks any object that cannot answer all 14 questions
