"use client";

import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Education
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Academic Foundation
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-2xl">
            <div className="glass flex items-start gap-4 rounded-xl p-6 transition-colors hover:border-primary/30">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {education.degree}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {education.institution}
                </p>
                <p className="text-sm text-muted-foreground">
                  {education.location}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
