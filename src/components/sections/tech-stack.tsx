"use client";

import type { ElementType } from "react";
import {
  Braces,
  Cloud,
  Code,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Palette,
  Server,
  Shield,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { techStack } from "@/lib/data";

const iconMap: Record<string, ElementType> = {
  "React.js": Code,
  "Next.js": Globe,
  TypeScript: Braces,
  JavaScript: Terminal,
  HTML5: Layout,
  CSS3: Palette,
  "Tailwind CSS": Layers,
  Redux: Layers,
  "Redux Toolkit": Layers,
  "Context API": Code,
  "React Router": GitBranch,
  SSR: Server,
  SSG: Server,
  "Chakra UI": Layout,
  "Styled Components": Palette,
  "Node.js": Server,
  "Express.js": Server,
  "RESTful APIs": Cloud,
  Authentication: Shield,
  JWT: Shield,
  Cookies: Shield,
  MongoDB: Database,
  PostgreSQL: Database,
  Git: GitBranch,
  GitHub: GitBranch,
  Jira: Wrench,
  Trello: Wrench,
  Postman: Cloud,
  Jest: Code,
  Agile: Zap,
  "CI/CD": Zap,
};

export function TechStack() {
  return (
    <section id="tech-stack" className="section-padding bg-card/20">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tools I Use to Build at Scale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A battle-tested toolkit for delivering production-grade applications
              from concept to deployment.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(techStack).map(([category, skills], catIndex) => (
            <FadeIn key={category} delay={catIndex * 0.1}>
              <div className="glass rounded-xl p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {skills.map((skill) => {
                    const Icon = iconMap[skill] || Code;
                    return (
                      <div
                        key={skill}
                        className="group flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 transition-all hover:border-primary/30 hover:bg-primary/5"
                      >
                        <Icon className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
