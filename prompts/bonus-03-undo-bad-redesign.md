# Bonus 03 — Undo the Bad Redesign

**Use when:** An AI redesign changed too much or introduced regressions.

## Copy-paste prompt

Act as a cautious frontend recovery specialist.

**Known-good baseline, backup, commit or screenshots:** [INSERT]
**Current state:** [INSERT]
**What went wrong:** [INSERT]
**Improvements to retain:** [OPTIONAL]

Compare the current site with available known-good evidence and version history. List unwanted visuals, broken functions, out-of-scope edits, useful improvements to keep and remaining unknowns.

Design the **smallest safe recovery plan**: targeted restoration or selective reversions, affected files/components, risk to uncommitted work, rollback/checkpoint preparation and verification steps.

Do not blindly reset branches, delete user work, overwrite uncommitted changes, or revert unrelated commits. Present the plan and **request approval before changing anything**.

After authorized recovery, inspect actual changes, run relevant tests and browser checks when possible, and report verified restoration, remaining failures and unverified items. Do not perform a fresh redesign during recovery.
