# Marriage OS Content Pipeline — Operator Checklist

## Purpose

This checklist is for the humans running the Marriage OS content pipeline.

It tells operators:
- what to feed into each stage
- what to reject before wasting tokens
- what a pass looks like
- when not to move downstream
- what to do if a stage fails

This sits beside the pipeline playbook and translates it into execution discipline.

---

# Pipeline map

1. **Source intake**
2. **Source normaliser**
3. **Dossier builder**
4. **Final generator**
5. **Verifier**
6. **Ship / stage / rework**

---

# Global operating rules

## Always true
- One source bundle or one target at a time.
- One destination at a time.
- Canonical layer always overrides raw source material.
- Do not skip directly from raw source to final content.
- Do not move downstream on “looks good.”
- Do not treat smooth prose as evidence of quality.
- If the verifier flags unsupported claims, the output is not ready.
- If the stage output is bloated, mixed, or destination-confused, stop and fix it before moving on.

## Canonical layer required at every downstream stage
Before running stages 2–5, the operator must have access to:
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/BRAND_AND_VISUAL_SYSTEM.md`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `marriage_os_implementation_phases.md`

If these are missing, stale, or disputed:
- **Stop**
- resolve governance first

## Phase-gating rule
At every downstream stage, the operator must treat `marriage_os_implementation_phases.md` as the phase-gate authority.

That means:
- do not draft or generate content whose `Phase Eligibility` is later than the current implementation phase
- do not use `Implementation Plan.md` phase numbers to outrun the local-first build order
- if a target depends on a later component, surface, or execution pass, stop and defer it

---

# Stage 1 — Source intake

## Goal
Prepare raw material so the source normaliser is not forced to reason from chaos.

## Acceptable input types
- PDF
- notes
- links
- screenshots
- mixed packet

## Operator must provide
- source title
- source type
- short description
- likely theme
- likely destination guess
- whether it is already organised or still jumbled

## Intake checklist
- [ ] Source file or source packet is actually present
- [ ] File name is readable and stable
- [ ] Source type is identified correctly
- [ ] Obvious duplicates are removed
- [ ] If the packet is mixed, child items are listed
- [ ] If the source is huge, a first bounded slice is chosen
- [ ] If the source is a PDF, operator knows whether full book / chapter range / section is being processed
- [ ] If the source is screenshots, each screenshot has a brief description
- [ ] If the source is links, the operator has captured title and access date
- [ ] Initial theme guess is assigned
- [ ] Initial destination guess is assigned

## Do not proceed if
- the file set is incomplete
- the packet is too large and undefined
- multiple unrelated themes are bundled without labels
- nobody can explain why this source matters to Marriage OS

## Pass standard
Move to Source Normaliser only if:
- the source is bounded enough to process
- the operator can state in one sentence why it may matter
- the likely theme and destination guess are at least plausible

---

# Stage 2 — Source normaliser

## Goal
Turn raw material into extract cards, theme clusters, and dossier candidates.

## Feed into this stage
- one bounded source or source bundle
- canonical layer summary
- optional chapter/page constraints
- source metadata

## Operator prompt wrapper
Use:
- exact source boundary
- exact page/chapter limits if relevant
- instruction not to write final content

## Operator checklist before run
- [ ] Source boundary is explicit
- [ ] Canonical layer summary is available
- [ ] The operator has chosen whether this is a full source pass or a partial pass
- [ ] If PDF is long, chapter or page clustering instruction is included
- [ ] If source is mixed, operator has warned that it is mixed
- [ ] No final-generation instruction is accidentally included

## Expected output
- source registration
- theme clusters
- best destination map
- extract cards
- keep / ignore / caution
- conflict check
- dossier recommendations

## Quality checks
- [ ] Extracts are atomic, not broad summaries
- [ ] Extracts are destination-aware
- [ ] Direct claims are separated from inference
- [ ] Weak material is marked weak
- [ ] Ignore list actually excludes fluff, repetition, or source-only tangents
- [ ] Conflict check identifies tension with Marriage OS where relevant
- [ ] The output does not contain final prose pretending to be extraction

## Red flags
- “This book is about…” style summary with no usable_for mapping
- 3,000 words of elegant summary and only 2 weak extract cards
- everything is labelled “high confidence”
- no ignore / caution section
- no conflict check
- model starts writing repair copy or knowledge article sections

## Pass standard
Move to Dossier Builder only if:
- there are enough extract cards for one target
- extract cards are specific and usable
- destination recommendations are coherent
- the output clearly separates keep / ignore / caution
- no major unresolved conflict with canonical layer has been ignored

## If fail
- narrow the source boundary
- split the source by theme
- rerun extraction with stricter instructions
- remove mixed material that is polluting the pass

---

# Stage 3 — Dossier builder

## Goal
Assemble one target-specific writing pack for one Marriage OS destination.

## Feed into this stage
- one exact target destination
- canonical layer summary
- approved extract cards only
- optional source notes
- optional internal draft fragments

## Never feed into this stage
- the raw PDF alone
- the whole book summary
- multiple targets
- multiple destination classes in one run

## Operator checklist before run
- [ ] Exact target is specified (example: `repair/pressure-loop`)
- [ ] Only relevant extract cards are supplied
- [ ] Canonical layer summary is present
- [ ] The operator has removed obvious off-target extracts
- [ ] The operator has not mixed `repair/*` and `knowledge/*` goals in one prompt
- [ ] Draft fragments, if included, are explicitly demoted below extracts
- [ ] Target `Phase Eligibility` is known
- [ ] Target `Phase Eligibility` is less than or equal to the current implementation phase defined in `marriage_os_implementation_phases.md`
- [ ] Required component/surface for this target exists in the current implementation tranche

## Expected output
- dossier header
- target fit summary
- included extracts
- excluded extracts
- core content logic
- preserve / soften / reject claims
- tone instructions
- structural blueprint
- linked destinations
- blockers
- readiness verdict

## Quality checks
- [ ] Dossier is for one target only
- [ ] Included extracts are justified
- [ ] Excluded extracts are explained
- [ ] The dossier does not drift into final copy
- [ ] Core content logic matches the target class
- [ ] Claims to soften or reject are explicitly called out
- [ ] Structural blueprint is concrete
- [ ] Readiness verdict is honest

## Target-specific pass tests

### If repair dossier
- [ ] Symptom-led
- [ ] Action-first
- [ ] Supports the 7-part module anatomy
- [ ] Does not collapse into a theory article

### If guide dossier
- [ ] One audience track only
- [ ] Not grievance-coded
- [ ] Shared repair goal visible
- [ ] Bridge logic exists where needed

### If knowledge dossier
- [ ] One idea only
- [ ] Clear article thesis
- [ ] Section outline is chunkable
- [ ] Ends in practical branch

### If product dossier
- [ ] Utility is obvious
- [ ] Included assets are clear
- [ ] Promise boundary is explicit
- [ ] No hype logic

### If doctrine dossier
- [ ] Principle is crisp
- [ ] Exclusions are clear
- [ ] Red lines are explicit where needed

## Red flags
- dossier sounds like final content already
- dossier mixes repair advice and knowledge exposition with no separation
- dossier includes low-confidence material as backbone logic
- no claims-to-reject section
- no blockers even when support is thin
- “ready-for-generation” without enough extract support

## Pass standard
Move to Final Generator only if:
- dossier says `ready-for-generation`
- blockers are absent or minor
- target fit is clear
- structural blueprint is usable
- preserve / soften / reject instructions are explicit

## If fail
- request more extracts
- tighten the target
- split the target into smaller objects
- quarantine source-bound ideas
- rerun dossier stage

---

# Stage 4 — Final generator

## Goal
Write one final Marriage OS content object from one approved dossier.

## Feed into this stage
- exact target
- canonical layer summary
- finished dossier only

## Never feed into this stage
- raw source material
- extract cards without dossier
- multiple dossiers
- “use your judgment” instructions

## Operator checklist before run
- [ ] Dossier is marked `ready-for-generation`
- [ ] Exact target is included
- [ ] Canonical layer summary is included
- [ ] Required target structure is clear
- [ ] The operator has removed any raw-source appendix from the prompt
- [ ] The instruction says “return only the final content object”
- [ ] Target `Phase Eligibility` is still valid for the current implementation tranche
- [ ] The relevant implementation pass gate has been met per `marriage_os_implementation_phases.md`

## Expected output
One final content object only.

## Quality checks
- [ ] Output matches target class
- [ ] Required section structure is present
- [ ] Tone is on-brand
- [ ] No meta-commentary
- [ ] No dossier language leaks through
- [ ] No extract ids or confidence language appear
- [ ] No obvious unsupported expansion appears
- [ ] Content is usable in product, not in seminar

## Target-specific pass tests

### Repair
- [ ] One dominant action in “Do This First”
- [ ] “Say This” sounds human and emotionally adult
- [ ] “Do This Tonight” is concrete
- [ ] “7-Day Reset” is realistic
- [ ] Not a disguised knowledge article

### Guide
- [ ] One audience track only
- [ ] Not adversarial
- [ ] Not partner-diagnosis heavy
- [ ] Ends in repair direction

### Knowledge
- [ ] One idea only
- [ ] Sections are clean and chunkable
- [ ] Ends in practical branch
- [ ] Does not try to become the whole philosophy of the app

### Product
- [ ] Tool utility is obvious
- [ ] No hype
- [ ] No inflated transformation promise
- [ ] CTA is clear and grounded

### Doctrine
- [ ] Crisp and governing
- [ ] No fluff
- [ ] Operational implications present

## Red flags
- polished but bloated
- emotionally impressive but structurally wrong
- sounds like blog content
- drift into stale language or labels
- source author’s worldview dominates product posture
- unsafe implications sneak in

## Pass standard
Move to Verifier only if:
- output is structurally complete
- output is clearly on target
- tone is plausibly on-brand
- no obvious major safety problem exists

## If fail
- rerun final generation with tighter wrapper
- shorten target scope
- strengthen dossier instructions
- do not skip verifier and hand-edit blind

---

# Stage 5 — Verifier

## Goal
Audit the final output against canonical layer, dossier, structure, tone, safety, and drift.

## Feed into this stage
- exact target
- canonical layer
- finished dossier
- required target structure
- final content object

## Operator checklist before run
- [ ] Final output is the only content being audited
- [ ] Dossier used to generate it is attached
- [ ] Canonical layer summary is attached
- [ ] Target class is explicit
- [ ] Verifier is instructed not to rewrite unless failure is severe

## Expected output
- verification header
- canonical check
- dossier fidelity check
- structure check
- tone check
- safety check
- drift check
- required revisions
- unsupported claims list
- final verdict

## Quality checks
- [ ] Verdict is explicit
- [ ] Revisions are specific and minimal
- [ ] Unsupported claims are actually listed
- [ ] Structure audit is section-by-section
- [ ] Safety check is real, not performative
- [ ] Drift check is real, not generic
- [ ] Verifier did not silently rewrite the piece

## Pass standards

### PASS
Move to ship/stage only if:
- canonical compliance is solid
- dossier fidelity is solid
- structure is correct
- tone is on-brand
- safety is clean
- drift is clean

### PASS WITH REVISIONS
Move only after the required revisions are made and the piece is rechecked.

### FAIL
Do not edit manually unless failure is tiny and obvious.
Usually:
- return to Final Generator
- or return to Dossier Builder if the failure reflects weak dossier logic

## Red flags
- verifier says “generally strong” but names no concrete checks
- unsupported claims list is empty when the piece clearly invented things
- no drift findings on a suspiciously polished output
- safety check ignores subtle coercive undertones

---

# Stage 6 — Ship / stage / rework

## Goal
Decide what happens after verification.

## If PASS
- [ ] Stage the content in the appropriate content layer
- [ ] Add traceability row
- [ ] Mark target complete
- [ ] Link to adjacent destinations if needed

## If PASS WITH REVISIONS
- [ ] Apply only the required revisions
- [ ] Re-run verifier
- [ ] Do not expand scope during revision

## If FAIL
Determine failure source:

### Failure source: weak extracts
Go back to Source Normaliser

### Failure source: wrong target logic
Go back to Dossier Builder

### Failure source: writing drift only
Go back to Final Generator

### Failure source: unresolved canonical conflict
Stop and resolve governance first

---

# Role-by-role checklist

## Human operator
- [ ] Chose the right source boundary
- [ ] Chose the right destination target
- [ ] Attached the correct canonical layer
- [ ] Did not mix stages
- [ ] Did not overfeed the model
- [ ] Did not accept smooth nonsense

## Builder
- [ ] Stayed inside one target
- [ ] Followed required structure
- [ ] Preserved dossier logic
- [ ] Avoided invention

## Verifier
- [ ] Checked canonical fit
- [ ] Checked dossier fidelity
- [ ] Checked structure
- [ ] Checked tone
- [ ] Checked safety
- [ ] Checked drift
- [ ] Issued a real verdict

---

# Stop / go summary

## Move forward only if
- source is bounded
- extracts are usable
- dossier is target-specific
- final output is structured
- verifier passes it

## Stop immediately if
- raw research is being used as final-writing input
- multiple targets are mixed together
- the model is writing elegant summary instead of pipeline output
- the final piece becomes theory-heavy and product-light
- the output sounds like therapy homework, guru content, or adversarial gender discourse
- unsupported claims appear
- safety or coercion risk appears
- stale project logic reappears

---

# Minimal operator decision tree

## If the source is messy:
- split it first

## If the extracts are vague:
- rerun extraction more narrowly

## If the dossier is bloated:
- cut to one target

## If the final piece is off-tone:
- rerun final generation, do not patch blindly

## If verifier fails on support:
- the dossier is probably weak

## If verifier fails on drift:
- reinforce canonical layer in the next run

## If verifier fails on safety:
- stop and redesign the target framing

---

# Final operating principle

The pipeline is only as strong as the operator discipline.

The models are not the main risk.
The main risk is letting messy material, mixed targets, or polished nonsense move downstream unchecked.

This checklist exists to stop that.
