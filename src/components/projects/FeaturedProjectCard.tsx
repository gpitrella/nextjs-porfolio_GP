'use client';

import { GithubIcon } from "@/components/Icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCard } from "@/lib/features/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionImage = motion(Image);

interface FeaturedProjectCardProps {
  project: ProjectCard;
}

export const FeaturedProjectCard = ({
  project,
}: FeaturedProjectCardProps) => {
  return (
    <Card className="relative flex h-full w-full max-w-6xl flex-col gap-8 overflow-hidden border border-dark/10 bg-light p-8 shadow-2xl dark:border-light/20 dark:bg-dark/60 lg:p-6">
      <div
        className={cn(
          "absolute inset-y-4 inset-x-4 -z-10 rounded-[2.5rem] border border-dark/5",
          "bg-gradient-to-br from-light to-white/30 dark:from-dark dark:to-dark/40",
          "blur-3xl opacity-60"
        )}
      />

      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="group block w-full rounded-3xl"
        aria-label={project.accessibilityLabel}
      >
        <MotionImage
          src={project.heroImage}
          alt={project.title}
          className="h-72 w-full rounded-3xl object-cover shadow-2xl"
          sizes="(max-width: 1024px) 100vw, 60vw"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
          priority={project.featured}
        />
      </Link>

      <CardContent className="flex flex-1 flex-col p-0">
        <span className="text-base font-medium uppercase tracking-wide text-primary dark:text-primaryDark">
          {project.projectType}
        </span>
        <CardHeader className="px-0">
          <CardTitle className="text-3xl lg:text-2xl">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {project.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-base leading-relaxed lg:text-sm line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wide text-dark/60 dark:text-light/70">
          {project.technologies.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-full bg-dark/5 px-4 py-1 text-xs dark:bg-light/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-dark px-6 py-2 text-base font-semibold text-light transition hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
          >
            Visitar proyecto
          </Link>
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-base font-medium text-dark underline-offset-4 hover:underline dark:text-light"
            aria-label={`Ver código fuente de ${project.accessibilityLabel}`}
          >
            <span>Código</span>
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

