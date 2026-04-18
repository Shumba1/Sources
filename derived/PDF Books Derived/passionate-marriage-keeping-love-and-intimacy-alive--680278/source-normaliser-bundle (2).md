# Passionate Marriage — Source Normaliser Bundle

## Repo placement

- Raw-source registration: `sources/raw/passionate-marriage--2b04ff/source.md`
- Derived normaliser bundle: `sources/derived/passionate-marriage--2b04ff/source-normaliser-bundle.md`
- Rich extract set: `sources/derived/passionate-marriage--2b04ff/extracts-rich.yaml`
- Schema-compatible extract projection: `sources/derived/passionate-marriage--2b04ff/extracts.schema-compatible.yaml`
- Dossiers: `sources/derived/passionate-marriage--2b04ff/dossiers/*.md`
- Final content candidates: `sources/derived/passionate-marriage--2b04ff/final-content-candidates/*/*.md`
- Verification files: `sources/derived/passionate-marriage--2b04ff/verification/*.md`

## Canonical dependency note

This pass follows the same MarriageOS source-conditioning discipline used in prior
ingestion work: raw source -> structured extracts -> dossier -> final content
candidate. This source should influence source-scoped candidates first, not canonical
product content.

As with earlier passes against the repo snapshot, canonical docs appear to be present
in `docs/*`, while `src/config/theme.ts` and `src/config/page-data.ts` appear in a
repo-ready projection path rather than the live config tree. This source pass therefore
assumes **canonical fallback used = true**.

---

## 1. Source registration

- **source_id:** SRC-PM-001
- **source_key:** passionate-marriage--2b04ff
- **title:** *Passionate Marriage*
- **source_type:** book-pdf
- **overall recommendation:** selective-use, high-value feeder
- **why it matters:** This source is unusually strong where MarriageOS needs help
  explaining desire collapse, boring routine intimacy, pressure driven by anxiety,
  emotional fusion, and the selfhood required for mutual closeness.
- **main constraint:** The source is clinically dense, sexually explicit in places, and
  sometimes sounds like an advanced workshop rather than a first-response product.
  MarriageOS must translate it into calmer, simpler, safety-aware language.

---

## 2. Theme clusters

### CL-PM-01
- **theme:** differentiation / self-in-relation
- **short description:** The source argues that real intimacy depends on staying connected without losing yourself.
- **likely destination classes:** `repair/*`, `knowledge/*`, `guides/*`
- **usefulness rating:** very high

### CL-PM-02
- **theme:** desire collapse under emotional fusion
- **short description:** One of the source’s sharpest insights is that low desire can be a protection against vulnerability, importance, novelty, and the risk of wanting.
- **likely destination classes:** `repair/*`, `knowledge/*`
- **usefulness rating:** very high

### CL-PM-03
- **theme:** self-soothing / embodied regulation / contact tools
- **short description:** The source gives specific practices for calming base tension, making contact, and noticing when partners are physically together but emotionally absent.
- **likely destination classes:** `repair/*`, `products/*`
- **usefulness rating:** high

### CL-PM-04
- **theme:** gridlock / two-choice dilemmas / normal marital sadism
- **short description:** The later sections explain why couples stay stuck, manipulate choices, punish each other, and mistake chronic tension for unsolvable incompatibility.
- **likely destination classes:** `repair/*`, `guides/*`
- **usefulness rating:** very high

### CL-PM-05
- **theme:** mature eroticism / sexual potential over time
- **short description:** The source rejects youth-centered sex myths and argues that mature erotic connection can deepen as self-acceptance and emotional union grow.
- **likely destination classes:** `knowledge/*`, `repair/*`
- **usefulness rating:** high

---

## 3. Best destination map

- **destination:** `repair/pressure-loop`
  - **why it fits:** The source is especially strong where touch feels loaded, wanting feels risky, novelty has collapsed, and desire has flattened under fear, fusion, or pressure.
  - **what belongs there:** not-wanting-to-want, fear of wanting, self-soothing, following connection, low-pressure contact.
  - **confidence:** very high

- **destination:** `repair/we-keep-fighting`
  - **why it fits:** The source explains gridlock better than many mainstream books because it ties conflict to differentiation failure, passive aggression, and dodged choices.
  - **what belongs there:** two-choice dilemmas, normal marital sadism, hold onto yourself, comfort-vs-growth cycle.
  - **confidence:** high

- **destination:** `knowledge/desire-and-familiarity`
  - **why it fits:** This is one of the cleanest theoretical fits in the source.
  - **what belongs there:** emotional fusion, mature desire, beauty in people not technique, sexual prime versus genital prime, being seen in intimacy.
  - **confidence:** very high

- **destination:** `repair/quiet-drift`
  - **why it fits:** Some of the anti-routine and anti-staleness material can inform quiet-drift repair.
  - **what belongs there:** stale comfort cycles, following connection, embodied contact.
  - **confidence:** medium

- **destination:** `products/intimacy-reset-toolkit`
  - **why it fits:** Hugging till relaxed and follow-the-connection logic convert well into structured exercises if later productised carefully.
  - **what belongs there:** optional exercises, guardrails, prep language.
  - **confidence:** medium-high

---

## 4. Keep / ignore / caution

### Keep
- marriage makes you ready for marriage
- differentiation as closeness-with-selfhood
- emotional fusion as false closeness
- self-validated intimacy
- beauty in people, not in technique alone
- mature sexual potential and anti-youth myth
- not wanting to want
- fear of disapproval killing novelty
- self-soothing
- hugging till relaxed
- following connection
- two-choice dilemmas
- normal marital sadism
- comfort cycle versus growth cycle
- mutuality and standing on your own emotional feet

### Ignore
- extended case material that adds colour but not transferable mechanism
- advanced erotic detail when the underlying mechanism can be stated more cleanly
- brand/trademark framing around the Sexual Crucible approach
- triumphalist clinician voice where it adds no operational value

### Caution
- explicit sexual examples can feel shaming or overwhelming to users in acute pain
- advanced practices such as eyes-open orgasm can be mistaken for required benchmarks
- some language is older, therapist-heavy, or implicitly heteronormative
- intensity should never be prescribed where safety, coercion, trauma, or contempt are active
- the source sometimes assumes unusually high self-confrontation capacity from readers

---

## 5. Conflict check against MarriageOS

### Conflict item 1
- **source idea:** Advanced erotic openness is presented as a major developmental horizon.
- **point of tension:** MarriageOS must remain accessible to users who are flooded, ashamed, withdrawn, or not ready for sexual experimentation.
- **action:** translate
- **brief reason:** Keep the mechanism; remove the performance pressure.

### Conflict item 2
- **source idea:** Therapist-grade differentiation jargon carries much of the argument.
- **point of tension:** MarriageOS needs emotionally literate but user-friendly language.
- **action:** translate
- **brief reason:** Turn differentiation into selfhood / steadiness / staying connected without disappearing.

### Conflict item 3
- **source idea:** Explicit sexual exercises and examples are treated as central.
- **point of tension:** MarriageOS must be consent-first, safety-aware, and usable for people in non-sexual or pre-sexual repair states.
- **action:** quarantine
- **brief reason:** Keep only the parts that genuinely generalise.

### Conflict item 4
- **source idea:** Some passages can sound like all low desire is a selfhood problem.
- **point of tension:** MarriageOS must leave room for exhaustion, postpartum realities, pain, trauma, medication, overload, and relational injury.
- **action:** translate
- **brief reason:** Keep this as one mechanism among several.

### Conflict item 5
- **source idea:** ‘Normal marital sadism’ is a powerful but harsh frame.
- **point of tension:** MarriageOS tone should name cruelty without sounding theatrical or dehumanising.
- **action:** translate
- **brief reason:** Keep the honesty; soften the label in user-facing copy.

---

## 6. Dossier recommendations

### 1. `repair/pressure-loop`
- **why now:** This is the source’s most distinctive and MarriageOS-relevant repair contribution.
- **which extracts feed it:** `EXT-PM-002`, `EXT-PM-003`, `EXT-PM-004`, `EXT-PM-008`, `EXT-PM-009`, `EXT-PM-010`, `EXT-PM-011`, `EXT-PM-013`, `EXT-PM-017`
- **use first for:** Repair

### 2. `repair/we-keep-fighting`
- **why now:** The source gives a deeper explanation of chronic gridlock than most feeder texts.
- **which extracts feed it:** `EXT-PM-001`, `EXT-PM-002`, `EXT-PM-010`, `EXT-PM-015`, `EXT-PM-016`, `EXT-PM-017`, `EXT-PM-018`
- **use first for:** Repair

### 3. `knowledge/desire-and-familiarity`
- **why now:** This is the clearest theory destination for the source.
- **which extracts feed it:** `EXT-PM-002`, `EXT-PM-003`, `EXT-PM-004`, `EXT-PM-005`, `EXT-PM-006`, `EXT-PM-007`, `EXT-PM-008`, `EXT-PM-009`, `EXT-PM-012`, `EXT-PM-014`, `EXT-PM-018`
- **use first for:** Knowledge

### Reserve candidates
- `repair/quiet-drift`
- `products/intimacy-reset-toolkit`
- `guides/read-both`

---

## 7. Final verdict

This is a **high-value selective feeder** for the part of MarriageOS that needs to
explain why:

- desire dies in safe-but-flat or safe-but-loaded bonds
- the issue is not always libido but fear, importance, fusion, and self-loss
- repetitive fights are often dodged dilemmas, not just bad technique
- couples need embodied regulation before they can reconnect honestly
- mature erotic connection requires being seen, not merely being stimulated

Best next outputs from this source are the three dossiers above.
