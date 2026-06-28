import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { UpworkIcon } from "@/components/icons/upwork";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: siteConfig.upwork, icon: UpworkIcon, label: "Upwork" },
    { href: siteConfig.github, icon: Github, label: "GitHub" },
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-max section-padding !py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground">
              {siteConfig.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Development Team Lead
            </p>
            <p className="text-sm text-muted-foreground">
              React & Next.js Engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
