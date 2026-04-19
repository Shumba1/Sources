# SOURCE_RESERVOIR_OBJECT_MAP.md

## Purpose

This document makes the source system usable.

It maps the three live source reservoirs against Marriage OS content object types so content generation stays smooth instead of confused.

It does **not** override canon.
It translates source use into controlled drafting inputs.

---

## The three live source reservoirs

### 1. Book-derived reservoir
Use for:
- deep repair logic
- structured knowledge
- perspective support
- product/tool substance
- strong candidate starting points

This reservoir is best when the object needs durable logic, practical structure, or explainable frameworks.

### 2. Master corpus / online chatter reservoir
Use for:
- pain articulation
- emotionally real phrasing
- hooks
- friction language
- social recognition
- scroll-stopping openings

This reservoir is best for **language realism and attention**, not for carrying the product’s doctrinal backbone.

### 3. Phase 1 key themes reservoir
Use for:
- unresolved core themes
- themes that cut across multiple families
- doctrine-heavy or commercially important themes that still need proper decomposition into objects
- anything central to the product model that books alone do not cleanly settle

This reservoir is best for **strategic core material** that still needs to be translated into the right object mix.

---

## Writing-arbitration layer

Source reservoirs do not control voice.

Voice is governed by `docs/Voice and Tone Bible.md`.
For every object, choose the correct writing mode before drafting:

- `hurt`
- `blaming`
- `act`

The Bible also controls:
- banned register
- side-taking prohibition
- useful-next-move rule
- midnight usefulness test

---

## Source-role header required in dossiers

Every dossier should begin with this block:

```yaml
source_roles:
  primary_reservoir: book-derived | master-corpus | phase-1-key-themes
  secondary_reservoir: book-derived | master-corpus | phase-1-key-themes | none
  language_reservoir: master-corpus | book-derived | phase-1-key-themes | none
  excluded_as_backbone:
    - <reservoir-name>
  voice_mode: hurt | blaming | act
```

This is mandatory whenever source material from more than one reservoir is used.

---

## Source-reservoir map by content object type

| Content object type | Primary reservoir | Secondary reservoir | Language reservoir | Voice mode | What to avoid |
|---|---|---|---|---|---|
| Attention asset | Master corpus | Book-derived or Phase 1 themes for truth-check | Master corpus | `hurt` or `blaming` | Letting books dictate hook language or turning the asset into an essay |
| Activation asset | Book-derived | Phase 1 themes | Master corpus | `act` | Overbuilding theory or using chatter as backbone |
| Repair immediate object | Book-derived | Phase 1 themes | Master corpus | `act` | Letting master corpus become backbone logic |
| Repair module / reset | Book-derived + Phase 1 themes | none | Master corpus lightly | `act` with `hurt` in openings where needed | Building modules from chatter alone or collapsing them into knowledge exposition |
| Knowledge article | Book-derived or Phase 1 themes | the other of those two | Master corpus lightly | `hurt` or `blaming` depending on thesis | Using chatter as primary thesis source |
| Perspective piece | Phase 1 themes + Book-derived | none | Master corpus | `hurt` and `blaming` where distortion needs stripping | Letting grievance language or side-taking set the frame |
| Product / tool page | Phase 1 themes + Book-derived | none | Master corpus | `act` | Letting products read like courses or hot takes |
| Commerce support copy | Canon + page-data first | Book-derived only if needed | Master corpus lightly | `act` | Treating source material as stronger than canonical UX copy |
| Progress / retention copy | Canon first | Book-derived lightly | none or master corpus lightly | `act` | Over-philosophising operational surfaces |
| App UI / push / micro-script | Canon + Book-derived support | none or Phase 1 themes | none or master corpus lightly | `act` | Using chatter as backbone or adding flourishes |

---

## Simplified family rules

### Repair
- Backbone: **books**
- Reinforcement: **phase 1 themes**
- Wording: **master corpus**
- Never let master corpus lead

### Knowledge
- Backbone: **books or phase 1 themes**
- Reinforcement: the other one
- Wording: **master corpus lightly**
- Never let chatter become the thesis

### Perspectives
- Backbone: **phase 1 themes + books**
- Wording: **master corpus**
- Never let grievance language lead

### Products
- Backbone: **phase 1 themes + books**
- Wording: **master corpus for buyer-language**
- Never let products become course ads

### Attention
- Backbone: **master corpus**
- Truth-check: **books / phase 1 themes**
- Never let attention outrun product truth

---

## Smooth-generation rule

Every object must know:
- which reservoir provides backbone logic
- which reservoir provides reinforcement
- which reservoir provides language realism
- which reservoir must not become backbone
- which voice mode governs the writing

If those five things are not explicit, drafting is not ready.

---

## Bottom line

- **Books = depth and structure**
- **Master corpus = language realism and attention**
- **Phase 1 key themes = unresolved strategic core**
- **Voice & Tone Bible = writing arbitration**
- **Canon = constraints and final arbitration**

That is the live source harmony model.
