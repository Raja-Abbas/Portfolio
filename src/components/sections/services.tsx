"use client";

import type { ElementType } from "react";
import {
  Award,
  Box,
  Code2,
  Gauge,
  Globe,
  Layers,
  MessageSquare,
  Palette,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { services, whyWorkWithMe } from "@/lib/data";

const serviceIcons: Record<string, ElementType> = {
  Code2,
  Layers,
  Zap,
  Palette,
  Users,
};

const whyIcons: Record<string, ElementType> = {
  Shield,
  Box,
  TrendingUp,
  Target,
  MessageSquare,
  Globe,
  Award,
  Gauge,
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How I Can Help Your Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              End-to-end engineering services focused on delivering business value,
              not just writing code.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Code2;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="group glass h-full rounded-xl p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyWorkWithMe() {
  return (
    <section id="why-me" className="section-padding bg-card/20">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Why Work With Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Teams Worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              More than a developer — a partner who understands that great
              engineering serves business goals.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyWorkWithMe.map((item, index) => {
            const Icon = whyIcons[item.icon] || Shield;
            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="group glass h-full rounded-xl p-5 transition-all hover:border-primary/30">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
