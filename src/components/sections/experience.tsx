"use client";

import { Briefcase } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Work Experience
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Professional Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From frontend developer to team lead — building products, mentoring
              engineers, and driving technical excellence.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <FadeIn key={`${job.company}-${job.role}`} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col gap-8 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-card md:left-1/2">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <div className="glass rounded-xl p-6 transition-colors hover:border-primary/30">
                      <div className="mb-1 text-sm font-medium text-primary">
                        {job.duration}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="mb-4 text-muted-foreground">{job.company}</p>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
