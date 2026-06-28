# AGENTS.md

## Project Identity

- Project: Hedgehog One / 刺猬一号 / `hedgehog1`
- Frozen scope: v0.1a

## v0.1a Frozen Scope

Hedgehog One v0.1a only implements a fully deterministic `dataflow` `left-to-right` ranked layout `Diagram IR -> SVG` compiler.

The compiler must remain usable without LLMs, network access, external extraction systems, or interactive services.

## Non-Negotiable Principles

- General-purpose models must not directly generate final SVG.
- Every diagram must pass through structured Diagram IR before SVG is produced.
- The same input must produce byte-identical output.
- Invalid input must produce explicit diagnostics and must not be silently repaired.
- Every feature must have automated tests.
- Before modifying code, explain the implementation plan first.
- After each implementation, run the relevant tests.

## Required Compiler Pipeline

The core compiler pipeline must remain:

```text
parse -> schemaValidate -> semanticValidate -> canonicalize -> layout -> buildSvgAst -> serializeSvg
```

Do not bypass this pipeline when adding behavior.

## v0.1a Prohibited Work

Do not implement any of the following in v0.1a:

- HTML GUI
- PPTX
- PDF / code / research extraction
- LLM planner
- absolute layout
- grid layout
- groups
- ports
- free shapes

## v0.1a CLI Surface

The CLI surface is limited to:

```text
hedgehog1 validate input.diagram.json
hedgehog1 compile input.diagram.json -o output.svg
hedgehog1 check input.diagram.json
```

Do not add additional CLI commands or flags unless the v0.1a plan is explicitly updated.

## evidenceRef Rule

In v0.1a, `evidenceRef` is only validated as a non-empty string and preserved exactly as provided.

The compiler must not:

- resolve `evidenceRef` as a local file path
- parse external files
- fetch network resources
- infer evidence content from outside the IR

## check Command Rule

The `check` command must execute:

1. `validate`
2. an in-memory `compile`
3. two consecutive in-memory compiles and a byte-for-byte output equality check

`check` must fail if validation fails, compilation fails, or the two compile outputs differ.
