export const projectIdentity = {
  name: "Hedgehog One",
  chineseName: "刺猬一号",
  repository: "hedgehog1",
  scope: "v0.1a"
} as const;

export function getProjectName(): string {
  return projectIdentity.name;
}
