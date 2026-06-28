"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/lib/data";

const highlights = [
  "Development Team Lead with strong frontend expertise across React ecosystems.",
  "Experience building production-grade web applications for startups and agencies.",
  "Deep understanding of React, Next.js, TypeScript, and modern frontend architecture.",
  "Proven track record collaborating with designers, product managers, and stakeholders.",
  "Passionate about performance optimization, clean architecture, and code quality.",
  "Experienced mentoring developers and leading frontend initiatives to delivery.",
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering Leader Who Delivers Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              I translate business requirements into scalable technical solutions
              while leading development teams, maintaining code quality, and
              shipping high-performance web applications that users love.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-6 text-center transition-colors hover:border-primary/30"
                >
                  <p className="text-3xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
