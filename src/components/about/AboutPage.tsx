'use client';

import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "@/../public/images/profile/laouaj-kaoutar.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useContext, useEffect, useRef, RefObject } from "react";
import { MainName } from "@/components/GlobalContext";
import {
  selectBiography,
  selectMetrics,
} from "@/lib/features/profile/scopes/me/selectors";
import { useProfile } from "@/lib/features/profile/scopes/me/hooks";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref as RefObject<Element>, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && Number(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [springValue, value]);

  return <span ref={ref} aria-live="polite" />;
};

const AboutPage = () => {
  const name = useContext(MainName);
  const { data } = useProfile();
  const biography = selectBiography(data);
  const metrics = selectMetrics(data);

  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 sm:pt-12 xs:pt-8">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-5xl lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              {biography.map((paragraph) => (
                <p key={paragraph} className="my-4 font-medium first:mt-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="col-span-3 flex flex-col items-end justify-between md:order-3 md:col-span-8 xl:flex-row xl:items-center">
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="flex flex-col items-end justify-center xl:items-center"
                >
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={metric.value} />
                    {metric.suffix}
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {metric.label}
                  </h2>
                </div>
              ))}
            </div>

            <div className="col-span-1 hidden items-center justify-center md:order-1 md:col-span-8 md:flex">
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-dark/10 dark:border-light/20">
                <Image
                  src={profilePic}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 25vw"
                />
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;

