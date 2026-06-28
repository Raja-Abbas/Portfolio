import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, experience, education, techStack } from "@/lib/data";
import { PrintButton } from "@/components/resume/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name} - ${siteConfig.title}`,
};

export default function ResumePage() {
  const allSkills = Object.values(techStack).flat();

  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Link
          href="/"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Back to Portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-3xl px-8 py-12 print:px-0 print:py-0">
        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
          <p className="mt-1 text-lg text-gray-600">{siteConfig.title}</p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{siteConfig.location}</span>
            <span>{siteConfig.email}</span>
            <span>{siteConfig.phone}</span>
            <a href={siteConfig.linkedin} className="text-blue-600">
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
            Professional Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            {siteConfig.description}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
            Experience
          </h2>
          <div className="mt-3 space-y-5">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{job.role}</h3>
                  <span className="text-sm text-gray-500">{job.duration}</span>
                </div>
                <p className="text-sm text-gray-600">{job.company}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
            Education
          </h2>
          <div className="mt-3">
            <h3 className="font-semibold">{education.degree}</h3>
            <p className="text-sm text-gray-600">
              {education.institution}, {education.location}
            </p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
            Technical Skills
          </h2>
          <p className="mt-2 text-sm text-gray-700">{allSkills.join(" · ")}</p>
        </section>
      </article>

      <style>{`
        @media print {
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
