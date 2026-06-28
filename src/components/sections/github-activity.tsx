"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/data";

const contributionData = [
  [0, 1, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 1, 3, 0, 2],
  [1, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1],
  [0, 1, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2],
  [2, 0, 1, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0],
  [1, 3, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0],
  [0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1],
  [3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0],
];

const intensityColors = [
  "bg-secondary",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/70",
  "bg-primary",
];

export function GitHubActivity() {
  return (
    <section id="github" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Open Source
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              GitHub Activity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Consistent contributions to personal projects, open source, and
              client codebases. Always shipping, always learning.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass mx-auto max-w-3xl rounded-xl p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                @{siteConfig.github.split("/").pop()}
              </a>
              <span className="text-xs text-muted-foreground">
                Last 52 weeks
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-flex flex-col gap-[3px]">
                {contributionData.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex gap-[3px]">
                    {week.map((level, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`h-3 w-3 rounded-sm ${intensityColors[level]} transition-colors hover:ring-1 hover:ring-primary/50`}
                        title={`${level} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              {intensityColors.map((color, i) => (
                <div key={i} className={`h-3 w-3 rounded-sm ${color}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
