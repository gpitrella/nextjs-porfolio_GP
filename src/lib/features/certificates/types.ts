export type CertificateScope = "me" | "accelerator" | "admin";

export interface CertificateRecord {
  id: string;
  title: string;
  issuedAt: string;
  url: string;
  scope: CertificateScope | "shared";
}

