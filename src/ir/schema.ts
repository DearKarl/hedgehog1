import { Type } from "@sinclair/typebox";

const NonEmptyString = Type.String({ minLength: 1 });

export const NodeRoleSchema = Type.Union([
  Type.Literal("source"),
  Type.Literal("transform"),
  Type.Literal("model"),
  Type.Literal("metric"),
  Type.Literal("output")
]);

export const NodeV01aSchema = Type.Object(
  {
    id: NonEmptyString,
    label: NonEmptyString,
    role: NodeRoleSchema
  },
  { additionalProperties: false }
);

export const EdgeV01aSchema = Type.Object(
  {
    id: NonEmptyString,
    from: NonEmptyString,
    to: NonEmptyString,
    label: Type.Optional(Type.String()),
    evidenceRef: Type.Optional(NonEmptyString)
  },
  { additionalProperties: false }
);

export const MetadataV01aSchema = Type.Record(Type.String(), Type.Unknown());

export const DiagramIrV01aSchema = Type.Object(
  {
    irVersion: Type.Literal("0.1a"),
    id: NonEmptyString,
    title: NonEmptyString,
    kind: Type.Literal("dataflow"),
    direction: Type.Literal("left-to-right"),
    nodes: Type.Array(NodeV01aSchema),
    edges: Type.Array(EdgeV01aSchema),
    metadata: MetadataV01aSchema
  },
  {
    $id: "https://github.com/DearKarl/hedgehog1/schemas/diagram-ir.v0.1a.schema.json",
    additionalProperties: false
  }
);
