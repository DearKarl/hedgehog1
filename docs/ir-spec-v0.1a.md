# Diagram IR v0.1a

Hedgehog One v0.1a accepts a deliberately small Diagram IR for deterministic dataflow diagrams.

The only supported flow is:

```text
Diagram IR v0.1a -> validate -> ranked layout -> SVG AST -> stable SVG
```

v0.1a schema validation is strict. Unknown fields are rejected on the root diagram object, node objects, and edge objects.

## Root Object

Required fields:

- `irVersion`: must be `"0.1a"`
- `id`: non-empty string
- `title`: non-empty string
- `kind`: must be `"dataflow"`
- `direction`: must be `"left-to-right"`
- `nodes`: array of node objects
- `edges`: array of edge objects
- `metadata`: object

## Node

Required fields:

- `id`: non-empty string
- `label`: non-empty string
- `role`: one of the allowed node roles

Allowed `role` values:

- `source`
- `transform`
- `model`
- `metric`
- `output`

## Edge

Required fields:

- `id`: non-empty string
- `from`: non-empty string
- `to`: non-empty string

Optional fields:

- `label`: string
- `evidenceRef`: non-empty string

In v0.1a, `evidenceRef` is preserved exactly as provided. The compiler does not parse external files, access the network, or infer evidence outside the IR.

## v0.1a Non-Scope

v0.1a does not implement:

- HTML GUI
- PPTX
- PDF extraction
- code extraction
- research extraction
- LLM planner
- absolute layout
- grid layout
- groups
- ports
- arbitrary style tokens
- circle/text/free shapes
- undirected edges
- PNG visual regression

## Validation Boundary

M1 only defines schema-level validation. Duplicate IDs, missing edge references, invalid graph topology, and cycle detection are semantic validation concerns for M2.
