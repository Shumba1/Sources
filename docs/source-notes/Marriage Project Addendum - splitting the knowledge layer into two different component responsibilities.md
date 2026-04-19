# Status Note — Marriage Project Addendum - splitting the knowledge layer into two different component responsibilities.md

- **Authority level:** Tier 2 — Active feeder / accepted patch
- **Current status:** Active until fully merged
- **Primary role:** Accepted architecture correction for the knowledge layer

## Use this file for

- separating `KnowledgeArticleCard` from `ArticleSection`
- knowledge-detail route corrections
- component-registry corrections
- resolver split for index vs detail rendering

## Do not use this file for

- broader product truth outside the knowledge-layer fix
- overriding canonical decisions unrelated to the article-body architecture

## Canonical overrides

- `src/config/page-data.ts`
- accepted registry/component patches in repo

## Reason

This file resolves a real mismatch and remains active until its logic is fully integrated everywhere.
