export const portfolioData = {
  name: "Joan Louji",
  title: "Full-Stack Developer",
  about:
    "A passionate full-stack developer with a flair for creating elegant, user-centric web experiences. With over 5 years in the industry, I've honed my skills in modern web technologies, bridging the gap between beautiful design and robust functionality. I thrive on solving complex problems and turning innovative ideas into reality.",
  logo: "/images/logo.png",
  sections: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  workHistory: [
    {
      role: "Senior Frontend Developer",
      company: "Innovate Inc.",
      period: "2021 - Present",
      description:
        "Led the development of a large-scale e-commerce platform, focusing on performance and user experience. Mentored junior developers and implemented a new component library in React and TypeScript.",
      icon: "Briefcase",
    },
    {
      role: "Full-Stack Developer",
      company: "Tech Solutions LLC",
      period: "2018 - 2021",
      description:
        "Developed and maintained various client websites and web applications using the MERN stack. Collaborated with designers to create pixel-perfect interfaces and worked on backend APIs.",
      icon: "Briefcase",
    },
    {
      role: "Junior Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description:
        "Started my journey by building and maintaining WordPress sites for small businesses. Gained foundational skills in HTML, CSS, JavaScript, and PHP.",
      icon: "Briefcase",
    },
  ],
  skills: [
    { name: "JavaScript (ES6+)", icon: "Code" },
    { name: "TypeScript", icon: "Code" },
    { name: "React", icon: "Code" },
    { name: "Next.js", icon: "Code" },
    { name: "Node.js", icon: "Code" },
    { name: "GraphQL", icon: "Code" },
    { name: "UI/UX Design", icon: "Lightbulb" },
    { name: "Figma", icon: "Lightbulb" },
    { name: "Tailwind CSS", icon: "Code" },
    { name: "Firebase", icon: "Code" },
    { name: "Agile Methodologies", icon: "Lightbulb" },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A feature-rich e-commerce site built with Next.js, Stripe, and GraphQL. Features a dynamic product catalog, user authentication, and a custom CMS.",
      image: "https://placehold.co/600x400.png",
      tags: ["Next.js", "GraphQL", "Stripe"],
      link: "#",
      "data-ai-hint": "ecommerce website",
    },
    {
      title: "Project Management Tool",
      description:
        "A collaborative tool for teams to manage tasks and projects. Built with React and Firebase, featuring real-time updates and a drag-and-drop interface.",
      image: "https://placehold.co/600x400.png",
      tags: ["React", "Firebase", "Real-time"],
      link: "#",
      "data-ai-hint": "dashboard app",
    },
    {
      title: "Portfolio Website",
      description:
        "This very portfolio, designed to showcase my skills using modern web technologies and AI-powered content adaptation.",
      image: "https://placehold.co/600x400.png",
      tags: ["GenAI", "Next.js", "Tailwind CSS"],
      link: "#",
      "data-ai-hint": "portfolio design",
    },
  ],
  contact: {
    email: "alex.doe@example.com",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/", icon: "Linkedin" },
      { name: "GitHub", url: "https://github.com/", icon: "Github" },
      { name: "Twitter", url: "https://twitter.com/", icon: "Twitter" },
    ],
    icon: "Mail",
  },
};

export type PortfolioData = typeof portfolioData;
