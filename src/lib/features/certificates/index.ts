import { CERTIFICATES_DATA } from "./data";
import { CertificateRecord, CertificateScope } from "./types";

const byScope = (scope: CertificateScope): CertificateRecord[] =>
  CERTIFICATES_DATA.filter(
    (certificate) =>
      certificate.scope === scope || certificate.scope === "shared"
  );

export const getCertificates = (scope: CertificateScope): CertificateRecord[] =>
  byScope(scope);

export * from "./types";
export * from "./keys";
export * from "./selectors";

