export const projectIdentity = {
  name: "Hedgehog One",
  chineseName: "刺猬一号",
  repository: "hedgehog1",
  scope: "v0.1a"
} as const;

export function getProjectName(): string {
  return projectIdentity.name;
}

export { ErrorCodes } from "./errors/codes.js";
export { wrapLabel } from "./compiler/label.js";
export { layoutRankedDataflow } from "./compiler/ranked-layout.js";
export { canonicalizeDiagramIr } from "./ir/canonicalize.js";
export { sortDiagnostics } from "./ir/diagnostics.js";
export { parseDiagramJson } from "./ir/parse.js";
export { DiagramIrV01aSchema } from "./ir/schema.js";
export {
  schemaValidateDiagramIr,
  semanticValidateDiagramIr,
  validateDiagramIr
} from "./ir/validate.js";
export type { LayoutEdge, LayoutModel, LayoutNode, Point } from "./compiler/layout-model.js";
export type { DiagnosticCode } from "./errors/codes.js";
export type {
  CanonicalDiagramIrV01a,
  CanonicalEdgeV01a,
  CanonicalNodeV01a
} from "./ir/canonicalize.js";
export type { Diagnostic } from "./ir/diagnostics.js";
export type { ParseDiagramJsonResult } from "./ir/parse.js";
export type { DiagramIrV01a, EdgeV01a, MetadataV01a, NodeRole, NodeV01a } from "./ir/types.js";
export type { ValidationResult } from "./ir/validate.js";
