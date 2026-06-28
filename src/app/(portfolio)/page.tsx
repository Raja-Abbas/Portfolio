import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Services, WhyWorkWithMe } from "@/components/sections/services";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Services />
      <WhyWorkWithMe />
      <GitHubActivity />
      <Education />
      <Contact />
    </>
  );
}
