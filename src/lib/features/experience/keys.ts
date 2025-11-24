export const experienceKeys = {
  all: ["experience"] as const,
  lists: () => [...experienceKeys.all, "list"] as const,
  list: (scope: string) => [...experienceKeys.lists(), scope] as const,
  details: () => [...experienceKeys.all, "detail"] as const,
  detail: (id: string) => [...experienceKeys.details(), id] as const,
  scope: (scope: string) => [...experienceKeys.all, "scope", scope] as const,
};

