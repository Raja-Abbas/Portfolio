"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/data";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl" />

      <div className="container-max relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for new opportunities
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">
                Building Scalable React & Next.js Applications
              </span>
              <br />
              <span className="text-gradient-primary">
                That Drive Business Growth.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Development Team Lead with professional experience building modern
              web applications using React, Next.js, TypeScript, Node.js, and the
              MERN stack. Passionate about creating maintainable software,
              optimizing performance, and leading engineering teams.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link href="/resume">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 text-sm text-muted-foreground">
              {siteConfig.location} &middot; {siteConfig.title}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="flex-1 w-full max-w-lg">
          <HeroIllustration />
        </FadeIn>
      </div>
    </section>
  );
}
