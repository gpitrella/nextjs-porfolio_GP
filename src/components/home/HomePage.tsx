'use client';

import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/Icons";
import {
  selectHero,
  selectHighlights,
} from "@/lib/features/profile/scopes/me/selectors";
import { useProfile } from "@/lib/features/profile/scopes/me/hooks";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/../public/images/profile/gabriel-pitrella.png";
import lightBulb from "@/../public/images/svgs/miscellaneous_icons_1.svg";

const HomePage = () => {
  const { data, isLoading } = useProfile();
  const hero = selectHero(data);
  const highlights = selectHighlights(data);

  return (
    <>
      <TransitionEffect />
      <main className="flex min-h-screen w-full items-center text-dark dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          {isLoading || !hero ? (
            <div className="flex flex-col gap-6">
              <div className="h-16 w-56 animate-pulse rounded-full bg-dark/10 dark:bg-light/10" />
              <div className="h-10 w-full animate-pulse rounded-md bg-dark/10 dark:bg-light/10" />
              <div className="h-32 w-full animate-pulse rounded-md bg-dark/10 dark:bg-light/10" />
            </div>
          ) : (
            <div className="flex w-full flex-col justify-between lg:flex-col lg:items-center md:items-center">
              <div className="flex w-max flex-row content-center gap-2.5 md:self-center">
                <Image
                  src={profilePic}
                  alt="Gabriel Pitrella"
                  className="h-16 w-16 rounded-full lg:h-12 lg:w-12"
                  priority
                  sizes="(max-width:768px) 10vw, (max-width: 1200px) 5vw, 5vw"
                />
                <AnimatedText
                  text={hero.subtitle}
                  className="!text-lg !text-left md:!text-lg"
                />
              </div>
              <div className="flex w-full flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text={hero.title}
                  className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <p className="my-4 text-base font-medium dark:text-light sm:text-base">
                  {hero.summary}
                </p>
                <ul className="mb-4 w-full list-disc pl-5 text-left text-sm text-dark/80 dark:text-light/80 lg:text-center lg:pl-0 lg:list-none">
                  {highlights.map((item) => (
                    <li key={item} className="lg:list-none">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center self-start lg:self-center">
                  <Link
                    href={hero.cvUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Download CV of Gabriel Pitrella"
                    className="flex items-center rounded-lg border-2 border-transparent bg-dark p-2.5 px-3 text-lg font-semibold text-light transition hover:border-dark hover:bg-light hover:text-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  >
                    Resume <LinkArrow className="ml-1 w-4" />
                  </Link>
                  <Link
                    href={`mailto:${hero.contactEmail}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Layout>
        <HireMe />
        <div className="absolute bottom-0 right-10 inline-block w-20 md:hidden">
          <Image src={lightBulb} alt="Light Bulb" className="h-auto w-full" />
        </div>
      </main>
    </>
  );
};

export default HomePage;

