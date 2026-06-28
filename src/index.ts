export const projectIdentity = {
  name: "Hedgehog One",
  chineseName: "刺猬一号",
  repository: "hedgehog1",
  scope: "v0.1a"
} as const;

export function getProjectName(): string {
  return projectIdentity.name;
}

export { DiagramIrV01aSchema } from "./ir/schema.js";
export type { DiagramIrV01a, EdgeV01a, MetadataV01a, NodeRole, NodeV01a } from "./ir/types.js";
