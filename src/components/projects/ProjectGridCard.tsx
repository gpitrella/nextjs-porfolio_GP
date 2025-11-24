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
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionImage = motion(Image);

interface ProjectGridCardProps {
  project: ProjectCard;
}

export const ProjectGridCard = ({ project }: ProjectGridCardProps) => {
  return (
    <Card className="flex h-full flex-col border border-dark/10 bg-light/80 p-6 shadow-xl transition dark:border-light/10 dark:bg-dark/60">
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={project.accessibilityLabel}
        className="block overflow-hidden rounded-2xl"
      >
        <MotionImage
          src={project.heroImage}
          alt={project.title}
          className="h-56 w-full rounded-2xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <CardHeader className="px-0">
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary dark:text-primaryDark">
          {project.projectType}
        </p>
        <CardTitle className="text-2xl">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto px-0">
        <div className="flex items-center justify-between">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-base font-semibold underline underline-offset-4"
          >
            Visitar
          </Link>
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ver código fuente de ${project.accessibilityLabel}`}
            className="text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark"
          >
            <GithubIcon className="h-6 w-6" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

