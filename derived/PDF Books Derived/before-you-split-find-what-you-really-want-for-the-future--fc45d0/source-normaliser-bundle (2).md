# Before You Split — Source Normaliser Bundle

## Repo placement

- Raw-source registration: `sources/raw/before-you-split--fc45d0/source.md`
- Derived normaliser bundle: `sources/derived/before-you-split--fc45d0/source-normaliser-bundle.md`
- Rich extract set: `sources/derived/before-you-split--fc45d0/extracts-rich.yaml`
- Schema-compatible extract projection: `sources/derived/before-you-split--fc45d0/extracts.schema-compatible.yaml`
- Dossiers: `sources/derived/before-you-split--fc45d0/dossiers/*.md`
- Final content candidates: `sources/derived/before-you-split--fc45d0/final-content-candidates/repair/*.md`
- Verification files: `sources/derived/before-you-split--fc45d0/verification/*.md`

## Canonical dependency note

This pass assumes the same MarriageOS pipeline discipline used for prior source
conditioning: raw source -> structured extracts -> dossier -> final content
candidate. This source should influence source-scoped candidates first, not
canonical product content.

---

## 1. Source registration

- **source_id:** SRC-BYS-001
- **source_key:** before-you-split--fc45d0
- **title:** *Before You Split*
- **source_type:** book-pdf
- **overall recommendation:** selective-use, high-value feeder
- **why it matters:** This source directly addresses decision-stage marital
  distress and offers practical material on blame, self-deception, unrealistic
  expectations, child impact, forgiveness, outside support, and rebuilding
  warmth and intimacy.
- **main constraint:** The source is written from a restoration-leaning,
  Christian, stay-and-work frame. MarriageOS must translate that into a calm,
  repair-first, safety-aware posture.

---

## 2. Theme clusters

### CL-BYS-01
- **theme:** unhappy-vs-harmful
- **short description:** The book explicitly distinguishes unhappy marriages from harmful or abusive ones and tells readers to get help and make safety plans when violence, toxicity, or danger is present.
- **likely destination classes:** `repair/*`, `knowledge/*`
- **usefulness rating:** very high

### CL-BYS-02
- **theme:** decision-distress / "I'm done"
- **short description:** The source treats split / survive / save as distinct paths and argues that panic, pain, and emotional overload can distort long-term decisions.
- **likely destination classes:** `repair/*`, `knowledge/*`
- **usefulness rating:** high

### CL-BYS-03
- **theme:** blame-loop / victim-story / emotional safety
- **short description:** A large portion of the book teaches that couples get trapped by blame, shame, hidden victim narratives, invalidation, and mismanaged escalation.
- **likely destination classes:** `repair/*`, `guides/*`
- **usefulness rating:** very high

### CL-BYS-04
- **theme:** expectations / prior wounds / mud story
- **short description:** The source frames overreaction and marital distress as partly driven by inherited wounds, lies, hidden expectations, and emotional baggage brought into the marriage.
- **likely destination classes:** `repair/*`, `knowledge/*`, `products/*`
- **usefulness rating:** high

### CL-BYS-05
- **theme:** child-impact / family atmosphere
- **short description:** The book repeatedly argues that parental conflict, disrespect, triangulation, and bitterness affect children well beyond the moment.
- **likely destination classes:** `repair/*`, `knowledge/*`
- **usefulness rating:** very high

### CL-BYS-06
- **theme:** forgiveness / support networks / intimacy recovery
- **short description:** The later chapters connect forgiveness, outside support, novelty, fun, and renewed intimacy as part of moving from survival to connection.
- **likely destination classes:** `repair/*`, `knowledge/*`, `products/*`
- **usefulness rating:** medium-high

---

## 3. Best destination map

- **destination:** `repair/im-done`
  - **why it fits:** The source is unusually strong for decision panic, hopelessness, and the “I can’t do this anymore” state.
  - **what belongs there:** split-survive-save framing, emotional-overload caution, unhappy-vs-harmful distinction, first-step logic.
  - **confidence:** high

- **destination:** `repair/we-keep-fighting`
  - **why it fits:** The source gives practical material on blame language, validation, victim stories, green/yellow/red escalation, and fighting for “we” instead of “me”.
  - **what belongs there:** blame interruption, emotion validation, peacemaking posture, anti-victim-story logic.
  - **confidence:** very high

- **destination:** `repair/our-conflict-is-hitting-the-kids`
  - **why it fits:** This is one of the book’s strongest and most operational sections.
  - **what belongs there:** respect in front of children, not using children for emotional support, not trashing the other parent, family meeting repair.
  - **confidence:** very high

- **destination:** `repair/resentment-and-forgiveness`
  - **why it fits:** The forgiveness chapter is useful but better as a second-wave repair path than as the first output from this source.
  - **what belongs there:** hurt/hate/heal logic, release without naïveté, shell-hardening metaphor.
  - **confidence:** medium-high

- **destination:** `knowledge/how-to-tell-unhappy-from-harmful`
  - **why it fits:** The note to reader gives one of the clearest safety-relevant distinctions in the source.
  - **what belongs there:** safety plans, professional help triggers, harmful vs unhappy boundaries.
  - **confidence:** very high

- **destination:** `knowledge/desire-and-familiarity`
  - **why it fits:** The fun and intimacy chapter contributes novelty, criticism-free zones, and the connection between emotional closeness and physical intimacy.
  - **what belongs there:** novelty, affection, sex-talk, agenda-free fun.
  - **confidence:** medium

- **destination:** `guides/read-both`
  - **why it fits:** The support-network and expectations sections are useful for helping couples see one another more accurately.
  - **what belongs there:** outside perspective, realistic expectations, partner differences, support people.
  - **confidence:** medium

---

## 4. Keep / ignore / caution

### Keep
- unhappy vs harmful distinction
- safety-plan recommendation when harm or violence is present
- strong warning against long-term decisions driven by emotional overload alone
- split / survive / save as a diagnostic frame
- “mud story” as shorthand for hidden wounds or internalised lies
- unrealistic expectations as conflict fuel
- blame-and-shame loop
- green / yellow / red escalation framing
- validate emotions instead of jumping to logic or fixing
- victim-story analysis
- fight for “we”, not “me”
- child impact of disrespect and triangulation
- respect for the other parent in front of children
- value of wise outside support
- novelty and fun as reconnection inputs
- reopen intimacy conversation carefully

### Ignore
- extended personal testimony where it adds no reusable mechanism
- church/ministry-specific examples that do not materially improve the mechanism
- website homework references as product logic
- overlong rhetorical build-up around staying married

### Caution
- restoration bias can drift into “stay unless proven impossible”
- Christian framing is useful only when translated into neutral doctrine
- the “emotionally abusive” discussion should not dilute real abuse detection
- divorce regret and outcome comparisons should not be oversold
- child-impact material should never be used to shame someone into staying in a harmful home
- fun / intimacy advice should not be applied where coercion, fear, or contempt are dominant

---

## 5. Conflict check against MarriageOS

### Conflict item 1
- **source idea:** Strong preservation bias toward saving the marriage.
- **point of tension:** MarriageOS must be safety-aware and cannot pressure users to remain in harmful situations.
- **action:** translate
- **brief reason:** Keep the anti-panic logic; reject any all-costs restoration implication.

### Conflict item 2
- **source idea:** “Mud story” is heavily psychologised and autobiographical.
- **point of tension:** MarriageOS prefers fast, operational language over memoir framing.
- **action:** translate
- **brief reason:** Convert into prior-wound / hidden-story / trigger language.

### Conflict item 3
- **source idea:** Christian spirituality is treated as an integral repair path.
- **point of tension:** MarriageOS must remain broadly accessible and non-sermonic.
- **action:** quarantine
- **brief reason:** Keep meaning / support / reflection logic; do not make faith language default.

### Conflict item 4
- **source idea:** Separation may be presented mainly through regret, cost, and downside.
- **point of tension:** MarriageOS cannot manipulate through fear.
- **action:** translate
- **brief reason:** Keep realism about consequences without coercive framing.

### Conflict item 5
- **source idea:** Forgiveness is strongly privileged.
- **point of tension:** Forgiveness cannot be confused with premature restoration, erased boundaries, or tolerance of harm.
- **action:** translate
- **brief reason:** Keep it as a release and repair path, not as automatic reconciliation.

---

## 6. Dossier recommendations

### 1. `repair/im-done`
- **why now:** This is the source’s sharpest distinctive contribution to MarriageOS.
- **which extracts feed it:** `EXT-BYS-001`, `EXT-BYS-002`, `EXT-BYS-003`, `EXT-BYS-009`, `EXT-BYS-010`, `EXT-BYS-011`
- **use first for:** Repair

### 2. `repair/we-keep-fighting`
- **why now:** The conflict chapters are practical, concrete, and highly translatable.
- **which extracts feed it:** `EXT-BYS-004`, `EXT-BYS-005`, `EXT-BYS-006`, `EXT-BYS-007`, `EXT-BYS-008`, `EXT-BYS-012`, `EXT-BYS-013`, `EXT-BYS-014`
- **use first for:** Repair

### 3. `repair/our-conflict-is-hitting-the-kids`
- **why now:** The source gives unusually actionable family-protection logic.
- **which extracts feed it:** `EXT-BYS-015`, `EXT-BYS-016`, `EXT-BYS-017`, `EXT-BYS-018`, `EXT-BYS-019`
- **use first for:** Repair

### Reserve candidates
- `repair/resentment-and-forgiveness`
- `knowledge/how-to-tell-unhappy-from-harmful`
- `knowledge/desire-and-familiarity`

---

## 7. Final verdict

This is a **high-value selective feeder** for decision-stage distress, conflict loops,
child-impact protection, and forgiveness-adjacent repair. It should not set
canonical posture, but it should materially inform how MarriageOS handles:
- “I’m done”
- chronic fighting
- children exposed to conflict
- the difference between unhappy and harmful
- rebuilding warmth after resentment

Best next outputs from this source are the three repair dossiers above.
