# renovate-config

Renovate configuration presets for mi11er.net projects.

## Usage

Add the following to your `renovate.json` or `package.json` (under `"renovate"` key):

```json
{
  "extends": ["github>mi11er-net/renovate-config"]
}
```

## Migration from npm preset

If you were previously using `"extends": ["@mi11er"]`, you should migrate to the repository-based preset format as npm presets are now deprecated:

```json
{
  "extends": ["github>mi11er-net/renovate-config"]
}
```
