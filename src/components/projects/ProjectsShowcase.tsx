'use client';

import AnimatedText from "@/components/AnimtedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { useProjects } from "@/lib/features/projects/scopes/me/hooks";
import { useMemo } from "react";

const ProjectsShowcase = () => {
  const { data = [], isLoading } = useProjects();

  // Combinar todos los proyectos, ordenados: featured primero, luego el resto
  const allProjects = useMemo(() => {
    const featured = data.filter((p) => p.featured);
    const standard = data.filter((p) => !p.featured);
    return [...featured, ...standard];
  }, [data]);

  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination surpasses knowledge!"
            className="mb-16 !text-5xl lg:!text-4xl sm:mb-8 sm:!text-3xl xs:!text-3xl"
          />

          {isLoading ? (
            <div className="grid grid-cols-12 gap-8 xl:gap-6 lg:gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="col-span-6 h-72 animate-pulse rounded-3xl bg-dark/5 dark:bg-light/10 sm:col-span-12"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-12 items-stretch gap-8 xl:gap-6 lg:gap-4">
              {allProjects.map((project) => (
                <div
                  key={project.id}
                  className="col-span-6 flex sm:col-span-12"
                >
                  <FeaturedProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default ProjectsShowcase;

