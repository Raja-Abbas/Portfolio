"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
  Terminal,
} from "lucide-react";

const floatingIcons = [
  { Icon: Code2, x: "10%", y: "15%", delay: 0 },
  { Icon: Server, x: "75%", y: "10%", delay: 0.2 },
  { Icon: Database, x: "85%", y: "60%", delay: 0.4 },
  { Icon: GitBranch, x: "5%", y: "70%", delay: 0.6 },
  { Icon: Layers, x: "60%", y: "80%", delay: 0.8 },
  { Icon: Terminal, x: "30%", y: "5%", delay: 1 },
];

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent" />
      <div className="absolute inset-0 rounded-2xl bg-grid-pattern bg-grid opacity-30" />

      <motion.div
        className="absolute inset-4 rounded-xl glass"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center gap-2 border-b border-border/50 pb-4">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              app.tsx
            </span>
          </div>

          <div className="mt-4 flex-1 space-y-3 font-mono text-xs sm:text-sm">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-violet-400"
            >
              <span className="text-blue-400">export</span>{" "}
              <span className="text-yellow-300">function</span>{" "}
              <span className="text-foreground">App</span>
              <span className="text-muted-foreground">() {"{"}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="pl-4 text-muted-foreground"
            >
              <span className="text-blue-400">return</span> (
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="pl-8"
            >
              <span className="text-green-400">&lt;Dashboard</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="pl-12 text-muted-foreground"
            >
              scalable=<span className="text-orange-400">true</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="pl-12 text-muted-foreground"
            >
              performant=<span className="text-orange-400">true</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="pl-8"
            >
              <span className="text-green-400">/&gt;</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="pl-4 text-muted-foreground"
            >
              );
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              className="text-muted-foreground"
            >
              {"}"}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute flex h-10 w-10 items-center justify-center rounded-lg glass text-primary"
          style={{ left: x, top: y }}
          animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-4 w-4" />
        </motion.div>
      ))}

      <motion.div
        className="absolute -right-2 top-1/4 rounded-lg glass px-3 py-2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-foreground">
            99 Lighthouse
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-2 bottom-1/4 rounded-lg glass px-3 py-2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      >
        <span className="text-xs font-medium text-foreground">
          Production Ready
        </span>
      </motion.div>
    </div>
  );
}
