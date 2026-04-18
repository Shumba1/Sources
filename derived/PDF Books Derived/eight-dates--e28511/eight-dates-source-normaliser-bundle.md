# Eight Dates — Source Normaliser Bundle

## Repo placement

- Raw-source registration: `sources/raw/eight-dates-source.md`
- Derived normaliser bundle: `sources/derived/eight-dates-source-normaliser-bundle.md`
- Rich extract set: `sources/derived/eight-dates-extracts-rich.yaml`
- Schema-compatible extract projection: `sources/derived/eight-dates-extracts.schema-compatible.yaml`

## Canonical dependency note

The pipeline docs repeatedly point to `src/config/theme.ts` and `src/config/page-data.ts`
as canonical executable config. Those files are **not present in this repo snapshot**.
Only projected copies appear under `sources/raw/repo-ready-projection/src/config/*`.

For this pass, the binding canonical layer used was:
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`

And the route / product posture was cross-checked against the active MarriageOS source docs
already present in `sources/raw/feeder-docs/`.

---

## 1. Source registration

- **source_id:** SRC-ED-001
- **title:** *Eight Dates*
- **source_type:** book-pdf
- **likely value to Marriage OS:**  
  Strong feeder source for trust, conflict repair, intimacy maintenance, money meaning,
  shared play, family strain after children, and dream-level interpretation beneath conflict.
  Weak as direct product copy because the book is broad, date-night-centred, and built for
  long-form couple conversations rather than fast symptom-led interventions.
- **overall recommendation:** selective-use

---

## 2. Theme clusters

### CL-ED-01
- **theme:** reciprocity / trust / repair-scripts
- **short description:** Trust is built by repeated small prioritising actions; betrayal risk rises with secrecy, negative comparison, and weak repair.
- **likely destination classes:** `repair/*`, `knowledge/*`, `products/*`
- **usefulness rating:** high

### CL-ED-02
- **theme:** escalation / perpetual conflict / repair
- **short description:** The source distinguishes solvable versus perpetual conflict, pushes understanding over victory, and gives a practical fight-repair sequence.
- **likely destination classes:** `repair/*`, `knowledge/*`, `products/*`
- **usefulness rating:** high

### CL-ED-03
- **theme:** desire-maintenance / pressure-loop / life-phase-pressure
- **short description:** Sex quality is strongly shaped by out-of-bedroom rituals, emotional connection, acceptance of “no,” exhaustion, and family-stage overload.
- **likely destination classes:** `repair/*`, `guides/*`, `knowledge/*`
- **usefulness rating:** high

### CL-ED-04
- **theme:** money meaning / work as third party / unpaid labour
- **short description:** Money conflict is driven by symbolic meaning and family history; overwork and unequal unpaid labour erode connection.
- **likely destination classes:** `repair/*`, `knowledge/*`
- **usefulness rating:** high

### CL-ED-05
- **theme:** novelty-deficit / quiet drift / playfulness
- **short description:** Play, adventure, novelty, and laughter are treated as core anti-drift forces rather than luxuries.
- **likely destination classes:** `repair/*`, `knowledge/*`, `products/*`
- **usefulness rating:** high

### CL-ED-06
- **theme:** family-stability / shared meaning / dreams
- **short description:** Children raise strain unless the couple protects the primary bond; rituals, meaning, and dream-level conversations keep the relationship from flattening into logistics.
- **likely destination classes:** `knowledge/*`, `repair/*`, `guides/*`
- **usefulness rating:** medium-high

---

## 3. Best destination map

- **destination:** `repair/quiet-drift`  
  **why it fits:** The book strongly links drift to low play, low positivity, low curiosity, and loss of intentional connection.  
  **what belongs there:** play/laughter/novelty logic, small trust actions, out-of-bedroom affection rituals, relationship-priority reminders.  
  **confidence:** high

- **destination:** `repair/pressure-loop`  
  **why it fits:** The source gives clean material on accepting “no,” keeping connection after refusal, and talking about sex outside the bedroom.  
  **what belongs there:** no-without-punishment, repair-after-no, explicit discussion of what works, affectionate rituals that reduce pressure.  
  **confidence:** high

- **destination:** `repair/mental-load`  
  **why it fits:** Overwork, unpaid labour, and family load map tightly to a monetisable V1 repair surface.  
  **what belongs there:** work-as-third-party logic, time pie/priority logic, shared chores importance, family-load discussion.  
  **confidence:** high

- **destination:** `repair/touched-out`  
  **why it fits:** The sex and family material includes postpartum / nursing / exhaustion realities and non-demand closeness logic.  
  **what belongs there:** affection without escalation, low-pressure connection, life-phase sexual change, reassurance over demand.  
  **confidence:** medium-high

- **destination:** `knowledge/desire-and-familiarity`  
  **why it fits:** The book explains why romance outside the bedroom matters, why novelty matters, and why sex frequency/quality shifts with stress and life phase.  
  **what belongs there:** desire-supporting rituals, kissing, cuddling, play, sex talk outside the bedroom, life-stage caveats.  
  **confidence:** high

- **destination:** `knowledge/children-and-family-stability`  
  **why it fits:** The family chapter and post-baby discussion map strain after children and why the couple bond must stay primary.  
  **what belongs there:** U-curve logic, post-baby satisfaction drop, father involvement, maintaining intimacy after children.  
  **confidence:** medium-high

- **destination:** `knowledge/how-drift-starts`  
  **why it fits:** The opening chapters repeatedly show that decay starts in small missed moments, negative interpretation, low curiosity, and stopped repair.  
  **what belongs there:** small actions, bids, positivity, listening, de-prioritisation, drift as cumulative neglect.  
  **confidence:** high

- **destination:** `guides/read-both`  
  **why it fits:** The source is useful for neutral bridge material on difference acceptance, mutual understanding, and not pathologising normal mismatch.  
  **what belongs there:** difference acceptance, conflict-understanding stance, shared meaning, dreams beneath conflict.  
  **confidence:** medium

- **destination:** `products/hard-conversation-scripts-pack`  
  **why it fits:** The listening/open-question material is more useful as scripts or prompts than as core in-app doctrine.  
  **what belongs there:** open-ended question packs, witnessing phrases, repair debrief prompts.  
  **confidence:** medium

---

## 4. Extract cards

See:
- `sources/derived/eight-dates-extracts-rich.yaml`
- `sources/derived/eight-dates-extracts.schema-compatible.yaml`

High-value extract IDs from this source:
`EXT-ED-001` through `EXT-ED-025`

---

## 5. Keep / ignore / caution

### Keep
- trust as repeated small prioritising actions
- emotional-secrecy / comparison risk logic
- explicit trust-breach repair sequence
- mutual-understanding model of conflict
- perpetual-problem acceptance logic
- post-fight repair steps
- witnessing / validation listening mode
- sex-talk-outside-bedroom principle
- no-without-punishment principle
- out-of-bedroom affection rituals
- money meaning / family money history
- unpaid labour and overwork strain logic
- play / novelty / laughter as anti-drift maintenance
- family-stage strain after children
- shared meaning / rituals / dreams under conflict

### Ignore
- generic “go on eight dates forever” framing as primary UX
- lengthy restaurant / location / surprise-date instructions
- playful location gimmicks that do not map to symptom-led repair
- broad social uplift rhetoric about improving society through love
- source-specific examples that are illustrative but not structurally useful
- one-size-fits-all “weekly date night” as if it were the product centre

### Caution
- dated or broad-brush divorce-rate statistics
- broad gender-difference claims on sex frequency / fantasy / masturbation
- enthusiasm for “sacredness” language without translation to secular product wording
- any implication that more conversation is always the first move in acute friction
- ratio metrics (5:1, 20:1) should be used as directional teaching, not rigid scorekeeping
- post-baby statistics should be treated as context, not destiny
- adventure suggestions that could feel reckless, adolescent, or off-brand in MarriageOS

---

## 6. Conflict check against Marriage OS

### Conflict item 1
- **source idea:** The main wrapper is long-form scheduled date-night conversation.
- **point of tension:** MarriageOS is crisis-first and micro-intervention-led.
- **action:** translate
- **brief reason:** Keep the mechanism layer, not the weekly-date product wrapper.

### Conflict item 2
- **source idea:** The book is built for couples across dating, engagement, and marriage stages.
- **point of tension:** MarriageOS is for married / long-term couples with remaining goodwill.
- **action:** quarantine
- **brief reason:** Some examples and framing are still useful, but the audience fit is broader than the product.

### Conflict item 3
- **source idea:** Some chapters lean on lengthy self-exploration and open-ended dialogue.
- **point of tension:** MarriageOS must answer “what do I do now?” under stress.
- **action:** translate
- **brief reason:** Convert reflective material into scripts, guided prompts, or knowledge support rather than first-line repair UX.

### Conflict item 4
- **source idea:** Some sexual material uses hetero-generalised difference claims.
- **point of tension:** MarriageOS needs calm, non-moralising, low-drift interpretation without overclaiming gender universals.
- **action:** quarantine
- **brief reason:** Use only what survives translation into pressure, overload, desire, and reassurance logic.

### Conflict item 5
- **source idea:** The source occasionally uses elevated “sacred / spiritual / lifelong love story” rhetoric.
- **point of tension:** MarriageOS tone must stay premium and adult, but operational rather than sermon-like.
- **action:** translate
- **brief reason:** Shared meaning and ritual logic is useful; devotional rhetoric is not core UI language.

### Conflict item 6
- **source idea:** The book strongly favours ongoing conversation as the engine of relationship health.
- **point of tension:** MarriageOS cannot behave like therapy homework.
- **action:** translate
- **brief reason:** Preserve only the highest-utility scripts and decision protocols.

---

## 7. Dossier recommendations

### 1. `repair/quiet-drift`
- **why now:** This is the strongest direct fit with V1’s repair-first centre.
- **which extracts feed it:** `EXT-ED-001`, `EXT-ED-009`, `EXT-ED-012`, `EXT-ED-020`, `EXT-ED-021`, `EXT-ED-024`, `EXT-ED-025`
- **use first for:** Repair

### 2. `repair/pressure-loop`
- **why now:** The sex/intimacy chapter produces clean pressure-removal, no-with-repair, and connection-preserving material.
- **which extracts feed it:** `EXT-ED-010`, `EXT-ED-011`, `EXT-ED-012`, `EXT-ED-013`, `EXT-ED-024`
- **use first for:** Repair

### 3. `repair/mental-load`
- **why now:** Overwork, unpaid labour, and family load map tightly to a monetisable V1 repair surface.
- **which extracts feed it:** `EXT-ED-014`, `EXT-ED-015`, `EXT-ED-016`, `EXT-ED-017`, `EXT-ED-018`
- **use first for:** Repair

### 4. `knowledge/desire-and-familiarity`
- **why now:** This source is strong for explaining why desire degrades without requiring grievance framing.
- **which extracts feed it:** `EXT-ED-010`, `EXT-ED-011`, `EXT-ED-012`, `EXT-ED-013`, `EXT-ED-020`, `EXT-ED-024`
- **use first for:** Knowledge

### 5. `knowledge/children-and-family-stability`
- **why now:** The family material supports the product’s family-conscious doctrine without romanticising fake staying.
- **which extracts feed it:** `EXT-ED-018`, `EXT-ED-019`, `EXT-ED-022`, `EXT-ED-023`, `EXT-ED-024`
- **use first for:** Knowledge

### Reserve candidate
- **dossier target:** `products/hard-conversation-scripts-pack`
- **why now:** The source contains useful listening and open-ended conversation scaffolds, but they are better packaged as a tool than made central to the product.
- **which extracts feed it:** `EXT-ED-004`, `EXT-ED-007`, `EXT-ED-009`, `EXT-ED-010`, `EXT-ED-025`
- **use first for:** Product

---

## 8. Final verdict

This is a **selective-use** feeder, not a doctrine setter and not a final-copy source.
Its strongest contribution is mechanism-level material for trust, conflict repair,
pressure reduction, desire maintenance, playfulness, money meaning, family strain,
and dream-level interpretation.

It should influence:
- Repair modules on drift, pressure, and overload
- Knowledge articles on desire, children/family stability, and conflict patterns
- Script/tool products for hard conversations

It should **not** influence:
- top-level product posture
- primary UX wrapper
- audience definition
- safety boundaries
- public tone
- any expectation that long weekly conversations are the core intervention mode

Best next ingestion move:
build `repair/quiet-drift` or `repair/pressure-loop` first, because those are the
tightest conversions from this source into MarriageOS V1 value.
