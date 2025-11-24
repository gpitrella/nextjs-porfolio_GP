'use client';

import { useQuery } from "@tanstack/react-query";
import { certificateKeys } from "../../keys";
import { fetchCertificates } from "./api";

export const useCertificates = () =>
  useQuery({
    queryKey: certificateKeys.list("me"),
    queryFn: fetchCertificates,
  });

