# Hedgehog One / 刺猬一号

Hedgehog One (`hedgehog1`) is a deterministic Diagram IR to SVG compiler.

The v0.1a scope is intentionally narrow: it will compile a structured dataflow diagram IR into a left-to-right ranked SVG output. The runtime must work without an LLM, network access, or an interactive external service.

General-purpose models must not directly generate the final SVG. Every diagram must first pass through structured Diagram IR, and the same input must produce byte-stable output.

Current development is focused on the Diagram IR -> SVG compiler foundation for v0.1a. HTML GUI, PPTX, PDF/code/research extraction, LLM planning, absolute/grid layout, groups, ports, free shapes, undirected edges, and PNG visual regression are outside the v0.1a scope.

## Development

```sh
pnpm install
pnpm check
```
