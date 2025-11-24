export const educationKeys = {
  all: ["education"] as const,
  lists: () => [...educationKeys.all, "list"] as const,
  list: (scope: string) => [...educationKeys.lists(), scope] as const,
  details: () => [...educationKeys.all, "detail"] as const,
  detail: (id: string) => [...educationKeys.details(), id] as const,
  scope: (scope: string) => [...educationKeys.all, "scope", scope] as const,
};

