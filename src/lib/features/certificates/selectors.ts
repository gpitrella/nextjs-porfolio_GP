import { CertificateRecord } from "./types";

export const selectCertificates = (
  certificates?: CertificateRecord[]
): CertificateRecord[] => certificates ?? [];

