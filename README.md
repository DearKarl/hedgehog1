# Hedgehog One / 刺猬一号

Hedgehog One (`hedgehog1`) is a deterministic Diagram IR to SVG compiler.

The v0.1a scope is intentionally narrow: it will compile a structured dataflow diagram IR into a left-to-right ranked SVG output. The runtime must work without an LLM, network access, or an interactive external service.

General-purpose models must not directly generate the final SVG. Every diagram must first pass through structured Diagram IR, and the same input must produce byte-stable output.

Current development is focused on the Diagram IR -> SVG compiler foundation for v0.1a. HTML GUI, PPTX, PDF/code/research extraction, LLM planning, absolute/grid layout, groups, ports, free shapes, undirected edges, and PNG visual regression are outside the v0.1a scope.

## Development

```sh
pnpm install
pnpm build
pnpm check
```

## CLI

After building, the v0.1a CLI exposes only three commands:

```sh
hedgehog1 validate input.diagram.json
hedgehog1 compile input.diagram.json -o output.svg
hedgehog1 check input.diagram.json
```

`validate` parses and validates Diagram IR. `compile` writes deterministic SVG output. `check` validates, compiles in memory twice, and verifies byte-for-byte deterministic output.
