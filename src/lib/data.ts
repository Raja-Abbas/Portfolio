export const siteConfig = {
  name: "Raja Abbas Affandi",
  title: "Development Team Lead | React & Next.js Engineer",
  description:
    "Development Team Lead and React & Next.js Engineer building scalable, production-grade web applications. Expert in full-stack development, technical leadership, and performance optimization.",
  url: "https://rajaabbasaffandi.dev",
  location: "Abbottabad, Khyber Pakhtunkhwa, Pakistan",
  phone: "+92-3160539959",
  whatsapp: "923160539959",
  email: "abbasaffandi2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/raja-abbas-affandi/",
  upwork:
    "https://www.upwork.com/freelancers/~011305c043ed067cec",
  github: "https://github.com/Raja-Abbas",
  keywords: [
    "Development Team Lead",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "Software Engineer Pakistan",
    "Remote React Developer",
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Teams Lead" },
];

export const techStack = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Redux Toolkit",
    "Context API",
    "React Router",
    "SSR",
    "SSG",
    "Chakra UI",
    "Styled Components",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Authentication",
    "JWT",
    "Cookies",
  ],
  Database: ["MongoDB", "PostgreSQL"],
  Tools: [
    "Git",
    "GitHub",
    "Jira",
    "Trello",
    "Postman",
    "Jest",
    "Agile",
    "CI/CD",
  ],
};

export const experience = [
  {
    company: "Bluegrid Ventures",
    role: "Development Team Lead",
    duration: "September 2025 – Present",
    responsibilities: [
      "Lead frontend and MERN development initiatives across multiple product lines.",
      "Manage sprint planning, technical architecture, and delivery timelines.",
      "Review pull requests and enforce coding standards across the team.",
      "Mentor junior developers and conduct knowledge-sharing sessions.",
      "Collaborate with designers and stakeholders to align technical solutions with business goals.",
      "Improve application performance through profiling, optimization, and best practices.",
      "Deliver scalable business solutions that drive measurable product outcomes.",
    ],
  },
  {
    company: "Stellarstack.co",
    role: "Senior Software Engineer",
    duration: "July 2024 – July 2025",
    responsibilities: [
      "Developed production-ready applications using React, Next.js, Node.js, and Express.js.",
      "Optimized frontend performance, reducing load times and improving Core Web Vitals.",
      "Integrated third-party APIs and payment gateways for client-facing products.",
      "Converted Figma designs into pixel-perfect, responsive applications.",
      "Improved UX across multiple client projects through iterative feedback loops.",
      "Worked on backend enhancements, API design, and critical bug fixes.",
    ],
  },
  {
    company: "Stellarstack.co",
    role: "Frontend Developer",
    duration: "September 2023 – July 2024",
    responsibilities: [
      "Built responsive React applications for diverse client requirements.",
      "Developed reusable UI components that accelerated team delivery.",
      "Collaborated with backend developers on API contracts and data flow.",
      "Optimized applications for cross-browser compatibility and accessibility.",
      "Worked in Agile development cycles with sprint-based delivery.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  image: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  live: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: "endeavor-seo-landing",
    title: "SEO Landing Page",
    category: "Landing Page",
    role: "Front-end Engineer",
    image: "/projects/endeavor.jpg",
    overview:
      "Developed an SEO-optimized landing page for a startup using Next.js and Tailwind CSS. Implemented SSG, proper meta tags, clean URL structure, and responsive layouts focused on Core Web Vitals and fast page loads.",
    problem:
      "The startup needed a high-converting landing page that ranked well in search engines and loaded instantly to capture organic traffic and drive sign-ups.",
    solution:
      "Built a statically generated Next.js page with semantic HTML, optimized meta tags, clean URL architecture, and Tailwind-based responsive layouts tuned for Core Web Vitals and conversion rate.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "Website Performance Optimization",
      "Landing Page",
    ],
    live: "https://endeavor-nextjs-pro.vercel.app/",
  },
  {
    id: "orebi-ecommerce",
    title: "E-commerce Frontend",
    category: "E-Commerce",
    role: "Front-end Engineer",
    image: "/projects/orebi.jpg",
    overview:
      "Built a modern e-commerce frontend with product listings, cart flow, and checkout UI using React and Next.js. Integrated APIs for real-time data and optimized product pages for performance and SEO.",
    problem:
      "The business required a fast, intuitive shopping experience that could handle real-time inventory and pricing while keeping users engaged through checkout.",
    solution:
      "Delivered a React and Next.js storefront with API-driven product listings, streamlined cart and checkout flows, and performance-optimized product pages to improve retention and conversions.",
    technologies: [
      "React",
      "Next.js",
      "Web Application Development",
      "API Integration",
      "Ecommerce Performance Optimization",
    ],
    live: "https://orebishopping.vercel.app/",
  },
  {
    id: "desgy-figma-ui",
    title: "Figma to Pixel-Perfect React UI",
    category: "UI Engineering",
    role: "Front-end Engineer",
    image: "/projects/desgy.jpg",
    overview:
      "Converted complex Figma designs into a pixel-perfect React application with a reusable component system, responsive and accessible layouts, and consistent design across all devices.",
    problem:
      "The client needed their Figma designs translated into production code without losing visual fidelity, accessibility, or scalability across screen sizes.",
    solution:
      "Engineered a modular React component library from Figma specs using Tailwind CSS, ensuring pixel-perfect accuracy, responsive behavior, and clean architecture for long-term maintainability.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Performance Optimization",
      "SEO Performance",
    ],
    live: "https://desgy-tailwind-nextjs-free.vercel.app/",
  },
  // {
  //   id: "studiova-portfolio",
  //   title: "Studiova – Creative Portfolio Template",
  //   category: "Portfolio",
  //   role: "Front-end Engineer",
  //   image: "/projects/studiova.jpg",
  //   overview:
  //     "Studiova is a high-performance portfolio template for creatives, designers, developers, and agencies. Built with Next.js, React, Tailwind CSS, and TypeScript for blazing-fast performance, optimized SEO, and a seamless developer experience.",
  //   problem:
  //     "Creatives and agencies needed a minimal yet expressive portfolio that loads fast, ranks well, and showcases work professionally without heavy customization overhead.",
  //   solution:
  //     "Developed a visually striking Next.js template with TypeScript and Tailwind CSS, balancing minimal design with expressive layouts, optimized assets, and SEO best practices for personal and agency sites.",
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Tailwind UI",
  //   ],
  //   live: "https://studiova-six.vercel.app/",
  // },
  // {
  //   id: "blogforge-cms",
  //   title: "BlogForge – Next.js + Sanity CMS",
  //   category: "CMS / Blog",
  //   role: "Front-end Engineer",
  //   image: "/projects/blogforge.jpg",
  //   overview:
  //     "BlogForge is a high-performance template for content-driven websites—personal blogs, tech journals, and publishing platforms. Powered by Sanity CMS for effortless content management and NextAuth.js for secure authentication.",
  //   problem:
  //     "Publishers needed a fast, readable blog platform where both developers and non-technical editors could manage content without sacrificing performance or security.",
  //   solution:
  //     "Built a Next.js and Tailwind CSS publishing platform integrated with Sanity CMS for real-time content updates and NextAuth.js for flexible, secure authentication including social and passwordless login.",
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Tailwind UI",
  //     "Sanity CMS",
  //     "NextAuth.js",
  //   ],
  //   live: "https://blog-forge-nextjs-axyi.vercel.app/",
  // },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Modern React and Next.js applications built for speed, accessibility, and maintainability at scale.",
    icon: "Code2",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end MERN applications and REST APIs that connect frontend experiences to robust backend systems.",
    icon: "Layers",
  },
  {
    title: "Performance Optimization",
    description:
      "Improve Core Web Vitals, reduce bundle sizes, and deliver sub-second load times that impact conversion.",
    icon: "Zap",
  },
  {
    title: "UI Engineering",
    description:
      "Pixel-perfect implementation from Figma with attention to micro-interactions and responsive behavior.",
    icon: "Palette",
  },
  {
    title: "Technical Leadership",
    description:
      "Code reviews, mentoring, architecture decisions, and Agile delivery that elevate team output.",
    icon: "Users",
  },
];

export const whyWorkWithMe = [
  {
    title: "Production-Ready Development",
    description:
      "Every line of code is written with deployment, monitoring, and long-term maintenance in mind.",
    icon: "Shield",
  },
  {
    title: "Clean Architecture",
    description:
      "Modular, testable codebases that scale with your team and product complexity.",
    icon: "Box",
  },
  {
    title: "Scalable Frontend Systems",
    description:
      "Component libraries and patterns that grow with your product without technical debt.",
    icon: "TrendingUp",
  },
  {
    title: "Business-Focused Solutions",
    description:
      "Technology choices driven by business outcomes, not trends or personal preferences.",
    icon: "Target",
  },
  {
    title: "Strong Communication",
    description:
      "Clear updates, proactive problem-solving, and seamless collaboration across time zones.",
    icon: "MessageSquare",
  },
  {
    title: "Remote Collaboration",
    description:
      "Proven experience working with distributed teams across US, EU, and APAC regions.",
    icon: "Globe",
  },
  {
    title: "Team Leadership",
    description:
      "Mentoring developers, facilitating sprint ceremonies, and raising engineering standards.",
    icon: "Award",
  },
  {
    title: "Performance Optimization",
    description:
      "Measurable improvements in load times, bundle sizes, and user experience metrics.",
    icon: "Gauge",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Abbottabad University of Science & Technology",
  location: "Havelian, Pakistan",
};

export const projectTypes = [
  "Web Application",
  "SaaS Product",
  "E-Commerce",
  "Dashboard",
  "API Development",
  "Consulting",
  "Other",
];

export const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];
