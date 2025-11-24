import { getCertificates } from "../../index";
import { CertificateRecord } from "../../types";

export const fetchCertificates = async (): Promise<CertificateRecord[]> =>
  Promise.resolve(getCertificates("me"));

