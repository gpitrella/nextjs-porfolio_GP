'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[3px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomLinkProps & { toggle: () => void }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} text-3xl mb-6 relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const AppNavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex gap-5">
          <CustomLink href="/" title="Home" className="mr-0" />
          <CustomLink href="/about" title="About" className="mr-0" />
          <CustomLink href="/projects" title="Projects" className="mr-0" />
          <CustomLink
            href="/certifications"
            title="Certifications"
            className="mr-0"
          />
        </nav>
        <nav className="flex items-center justify-end flex-wrap">
          <a
            href="https://github.com/gpitrella"
            target="_blank"
            rel="noreferrer noopener"
            className="w-6 mx-3 transition duration-200 hover:-translate-y-0.5"
          >
            <GithubIcon className="h-full w-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielpitrella/"
            target="_blank"
            rel="noreferrer noopener"
            className="w-6 mx-3 transition duration-200 hover:-translate-y-0.5"
          >
            <LinkedInIcon className="h-full w-full" />
          </a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div
          className="w-[85%] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
  bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 transition-all duration-300"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mx-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="mx-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="mx-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/certifications"
              title="Certifications"
              className="mx-4"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-4 gap-4">
            <a
              href="https://github.com/gpitrella"
              target="_blank"
              rel="noreferrer noopener"
              className="w-12 mx-3 rounded-full bg-light p-3 text-dark transition duration-200 hover:-translate-y-0.5 dark:bg-dark sm:mx-1"
            >
              <GithubIcon className="h-full w-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielpitrella/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-12 mx-3 rounded-full p-3 text-dark transition duration-200 hover:-translate-y-0.5 sm:mx-1"
            >
              <LinkedInIcon className="h-full w-full" />
            </a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-12 ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default AppNavBar;

