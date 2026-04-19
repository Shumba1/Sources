# MarriageOS Phase 0 audit remediation patch

## What this patch implements

This patch applies the Phase 0 audit recommendations that are safe to implement now:

1. **Operating-layer install present in repo truth**
   - Adds `AGENTS.md`, `skills/`, `templates/`, `tasks/phase-0/`, `reviews/phase-0/`, and `REPO_TREE_PLACEMENT_PLAN.md` where missing.

2. **Task lifecycle ratified**
   - Uses only `open`, `review`, `rework`, `blocked`, and `done`.
   - `queued` is not used.

3. **PR-template path truth ratified**
   - Canonical PR template path becomes `.github/pull_request_template.md`.

4. **`DELIVERY_ARCHITECTURE.md` consistency patch**
   - Removes stale D-026 open-language.
   - Uses canonical implementation phases as the gating authority.
   - Corrects stale references that said D-021..D-025 were still “to be added”.

5. **Placement-plan artifact installed and cross-linked**
   - `REPO_TREE_PLACEMENT_PLAN.md` is added.
   - README entry points now reference it.

6. **Canonical editorial destinations reconciled with repo reality**
   - `content/repair/*`, `content/guides/*`, `content/knowledge/*`, and `content/products/*` remain canonical destination families.
   - Physical `content/` scaffolding is explicitly deferred until the relevant content phases open.

## Manual delete / retire actions

Apply these removals if they exist in your live repo:

- `docs/pull_request_template.md`
- `tasks/phase-0/queued/`

## Phase 0 exit intent

After applying this patch, run one focused review pass. If it lands cleanly and no new contradictions appear, the repo is in a defensible position to close Phase 0 and move into Phase 1.
