import { CertificateScope } from "./types";

export const certificateKeys = {
  root: ["certificates"] as const,
  list: (scope: CertificateScope) => [...certificateKeys.root, scope] as const,
};

