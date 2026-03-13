'use client';

import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  name?: string;
}

const Footer: React.FC<FooterProps> = ({ name = "Gabriel Pitrella" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{currentYear} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built by&nbsp;
          <Link
            href="https://github.com/gpitrella"
            className="underline underline-offset-2"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Visit ${name}'s GitHub profile`}
          >
            {name}
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;

