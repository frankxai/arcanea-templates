# arcanea-templates — AGENTS.md

Template index for Arcanea project starters.

## Harness

- Manifest: `.agent-harness.json`
- Risk: template
- Deploy policy: none
- Health: `git status`
- Agent files: `AGENTS.md`, `CLAUDE.md`
- Global hooks: disabled.

## Operating Rules

1. Preserve template clarity over clever abstractions.
2. Do not introduce product-specific secrets, absolute local paths, or FrankX-only assumptions.
3. Keep generated files minimal and easy to copy into a new repo.
4. Verify edits with `git status` and any template-local checks that already exist.

## Catalog and marketplace governance

Read catalog.yaml and MARKETPLACE.md before changing product claims. Do not advertise an archived or unaudited child as maintained, production-ready or marketplace-approved. Each release-ready child must carry product and listing manifests, a rights record, clean-clone evidence and a named maintenance owner. Follow docs/media/media-policy.md. Listing submission, price, spend and public partner claims require explicit authorization.
