# renovate-config

Renovate configuration presets for mi11er.net projects.

## Usage

Add the following to your `renovate.json` or `package.json` (under `"renovate"` key):

```json
{
  "extends": ["github>mi11er-net/renovate-config"]
}
```

## What this config does

### Base

Extends `config:recommended` (Renovate's current standard preset), which includes the
Dependency Dashboard, semantic commit prefixes, curated monorepo groupings, and
crowd-sourced workarounds and package replacements.

### Update behaviour

| Setting               | Value             | Rationale                                                                                |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| `minimumReleaseAge`   | 3 days            | npm packages can be unpublished within 72 h; wait for stability before proposing updates |
| `prHourlyLimit`       | 10                | Avoids notification floods while still moving quickly after initial onboarding           |
| Peer dep strategy     | widen             | Keeps published packages (e.g. eslint-config) compatible with multiple peer versions     |
| Lock file maintenance | weekly, automerge | Routine regeneration; low risk, no review needed                                         |
| Stale PRs             | rebase            | Keeps open PRs up-to-date with base branch automatically                                 |
| PR creation           | not-pending       | Waits for branch CI to pass/fail before opening the PR                                   |

### Package rules

| Scope                              | Behaviour                                              |
| ---------------------------------- | ------------------------------------------------------ |
| npm devDependencies — minor/patch  | Grouped into one PR, automerges when CI passes         |
| npm devDependencies — major        | Individual PRs, manual merge                           |
| npm dependencies (non-dev)         | Renovate defaults — individual PRs, no automerge       |
| GitHub Actions — digest updates    | Automerge (SHA pin refresh, no behaviour change)       |
| GitHub Actions — version bumps     | Grouped as "GitHub Actions", manual merge              |
| Docker — digest updates            | Automerge (image rebuild, no version change)           |
| Docker — minor/patch version bumps | Grouped as "Docker images", manual merge               |
| NuGet — minor/patch                | Grouped as "NuGet packages", automerges when CI passes |
| CircleCI                           | Ungrouped, automerge, scheduled Monday before 6 am     |
