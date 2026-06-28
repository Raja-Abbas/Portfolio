"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Featured Projects
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Solutions That Solve Real Problems
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Selected work demonstrating technical depth, business impact, and
              production-ready engineering across industries.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <article className="group glass overflow-hidden rounded-xl transition-all hover:border-primary/30">
                <div className="relative aspect-video overflow-hidden bg-secondary/30">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-md bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.role && (
                      <span className="rounded-md border border-border/50 bg-background/50 px-2 py-0.5 text-xs text-muted-foreground">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.overview}
                  </p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        Business Problem
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        Solution
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/50 bg-background/50 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    <Button asChild size="sm">
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
