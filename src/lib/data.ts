import {
  Lightbulb,
  Star,
  Zap,
  TrendingUp,
  ShoppingBag,
  Code2,
} from "lucide-react";
import type { ResumeData } from "@/types/resume";

export const portfolioData = {
  name: "Joan Louji",
  title: "Velocity-First Engineer",
  subTitle:
    "Hey, I'm Joan Louji, an Software Engineer logistics problems into product since 2020.",
  logo: "/images/logo.png",
  sections: [
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Posts", href: "#posts" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ],
  about: {
    name: "Joan Louji",
    description: [
      "Engineer by profession, Working at Pando who is passionate about developing new software products and writing efficient algorithms. I enjoy being part of a major Autonomous Supply chain product development team, solving complex supply chain problems, enhancing products, and contributing to solutions that make a real impact.",
      "I graduated from Loyola ICAM College of Engineering and Technology (LICET), Chennai, in 2020 with a B.Tech degree. During my time in college, I delved into Native Android and iOS development, freelanced on various projects, and contributed to open-source communities.",
      "Apart from my technical pursuits, I have a creative side too. I love playing the keyboard, and I used to play football and tennis regularly during my college days.",
    ],
    links: [
      {
        color: "bg-green-600",
        title: "GitHub - sjlouji",
        subtitle: "Explore my open-source projects.",
        url: "https://github.com/sjlouji/",
        logo: "/images/github.svg",
      },
      {
        color: "bg-black",
        title: "Medium - sjlouji10",
        subtitle: "Read my articles on software engineering.",
        url: "https://medium.com/@sjlouji10",
        logo: "/images/medium.png",
      },
    ],
    skillsDescription: "Skills I'm familiar with and my interests",
    skills: [
      { name: "JavaScript", logo: "/images/js.png" },
      { name: "TypeScript", logo: "/images/typescript.png" },
      { name: "React", logo: "/images/react.png" },
      { name: "Next.js", logo: "/images/icons8-next.js-480.png" },
      { name: "Node.js", logo: "/images/node-js.png" },
      { name: "Java", logo: "/images/java.png" },
      { name: "Python", logo: "/images/python.png" },
      { name: "Flutter", logo: "/images/icons8-flutter-480.png" },
      {
        name: "Nginx",
        logo: "/images/nginx.png",
      },
      { name: "Redis", logo: "/images/icons8-redis-480.png" },
      { name: "Postgres", logo: "/images/icons8-postgres-480.png" },
      { name: "MongoDB", logo: "/images/icons8-mongodb-480.png" },
      { name: "Docker", logo: "/images/docker.png" },
      { name: "Git", logo: "/images/social.png" },
      { name: "LangChain", logo: "/images/langchain.png" },
      { name: "AWS", logo: "/images/icons8-aws-logo-480.png" },
      { name: "Blogging", logo: "/images/medium.png" },
      { name: "Audio Engineering", logo: "" },
      { name: "LLMs", logo: "" },
    ],
  },
  works: [
    {
      date: "June 2025",
      title: "E-Commerce Platform",
      description:
        "A feature-rich e-commerce site built with Next.js, Stripe, and GraphQL. Features a dynamic product catalog, user authentication, and a custom CMS.",
      tags: ["Next.js", "GraphQL", "Stripe"],
      link: "#",
      "data-ai-hint": "ecommerce website",
    },
    {
      date: "June 2025",
      title: "Project Management Tool",
      description:
        "A collaborative tool for teams to manage tasks and projects. Built with React and Firebase, featuring real-time updates and a drag-and-drop interface.",
      image: "https://placehold.co/600x400.png",
      tags: ["React", "Firebase", "Real-time"],
      link: "#",
      "data-ai-hint": "dashboard app",
    },
    {
      date: "June 2025",
      title: "Portfolio Website",
      description:
        "This very portfolio, designed to showcase my skills using modern web technologies and AI-powered content adaptation.",
      image: "https://placehold.co/600x400.png",
      tags: ["GenAI", "Next.js", "Tailwind CSS"],
      link: "#",
      "data-ai-hint": "portfolio design",
    },
    {
      date: "June 2025",
      title: "Design is the shift",
      description:
        "Daily content with insights, ideas, and tips for designers.",
      tags: ["Content", "Design", "Inspiration"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design blog",
    },
    {
      date: "June 2025",
      title: "Amazing design can come from anywhere",
      description: "Stories and lessons from working with designers worldwide.",
      tags: ["Story", "Remote Work"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "global design",
    },
    {
      date: "June 2025",
      title: "How to get your motivation back as a designer",
      description: "Tips and strategies to reignite your creative spark.",
      tags: ["Motivation", "Creativity"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "motivation",
    },
    {
      date: "June 2025",
      title: "Design is more than just pixels",
      description: "Exploring the deeper meaning and impact of design.",
      tags: ["Philosophy", "Design"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design philosophy",
    },
    {
      date: "June 2025",
      title: "Design is the shift",
      description:
        "Daily content with insights, ideas, and tips for designers.",
      tags: ["Content", "Design", "Inspiration"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design blog",
    },
    {
      date: "June 2025",
      title: "Amazing design can come from anywhere",
      description: "Stories and lessons from working with designers worldwide.",
      tags: ["Story", "Remote Work"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "global design",
    },
    {
      date: "June 2025",
      title: "How to get your motivation back as a designer",
      description: "Tips and strategies to reignite your creative spark.",
      tags: ["Motivation", "Creativity"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "motivation",
    },
    {
      date: "June 2025",
      title: "Design is more than just pixels",
      description: "Exploring the deeper meaning and impact of design.",
      tags: ["Philosophy", "Design"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design philosophy",
    },
    {
      date: "June 2025",
      title: "Design is the shift",
      description:
        "Daily content with insights, ideas, and tips for designers.",
      tags: ["Content", "Design", "Inspiration"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design blog",
    },
    {
      date: "June 2025",
      title: "Amazing design can come from anywhere",
      description: "Stories and lessons from working with designers worldwide.",
      tags: ["Story", "Remote Work"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "global design",
    },
    {
      date: "June 2025",
      title: "How to get your motivation back as a designer",
      description: "Tips and strategies to reignite your creative spark.",
      tags: ["Motivation", "Creativity"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "motivation",
    },
    {
      date: "June 2025",
      title: "Design is more than just pixels",
      description: "Exploring the deeper meaning and impact of design.",
      tags: ["Philosophy", "Design"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design philosophy",
    },
    {
      date: "June 2025",
      title: "Design is the shift",
      description:
        "Daily content with insights, ideas, and tips for designers.",
      tags: ["Content", "Design", "Inspiration"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design blog",
    },
    {
      date: "June 2025",
      title: "Amazing design can come from anywhere",
      description: "Stories and lessons from working with designers worldwide.",
      tags: ["Story", "Remote Work"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "global design",
    },
    {
      date: "June 2025",
      title: "How to get your motivation back as a designer",
      description: "Tips and strategies to reignite your creative spark.",
      tags: ["Motivation", "Creativity"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "motivation",
    },
    {
      date: "June 2025",
      title: "Design is more than just pixels",
      description: "Exploring the deeper meaning and impact of design.",
      tags: ["Philosophy", "Design"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design philosophy",
    },
    {
      date: "June 2025",
      title: "Design is the shift",
      description:
        "Daily content with insights, ideas, and tips for designers.",
      tags: ["Content", "Design", "Inspiration"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design blog",
    },
    {
      date: "June 2025",
      title: "Amazing design can come from anywhere",
      description: "Stories and lessons from working with designers worldwide.",
      tags: ["Story", "Remote Work"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "global design",
    },
    {
      date: "June 2025",
      title: "How to get your motivation back as a designer",
      description: "Tips and strategies to reignite your creative spark.",
      tags: ["Motivation", "Creativity"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "motivation",
    },
    {
      date: "June 2025",
      title: "Design is more than just pixels",
      description: "Exploring the deeper meaning and impact of design.",
      tags: ["Philosophy", "Design"],
      link: "https://victorberbel.kit.com",
      "data-ai-hint": "design philosophy",
    },
  ],
  contact: {
    heading: "Ideas Don't Build\nThemselves. Let's Talk",
    subheading:
      "I'm always open to collaborations or conversations. Drop me a message anytime.",
    email: "sjlouji10@gmail.com",
    addressLabel: "My Address",
    address: [
      "Joan Louji",
      "13/7, Lake Area 3rd Cross Street,",
      "Nungambakkam, Chennai – 34.",
    ],
    socialsLabel: "Follow Me",
    location: "Chennai, India",
    availability: "Open to opportunities",
    preferredContact: "Email preferred",
    newsletter: {
      title: "Stay Updated",
      description: "Subscribe to my Medium newsletter for tech insights",
      url: "https://medium.com/@sjlouji10",
      buttonText: "Subscribe to Medium",
    },
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/sjlouji",
        logo: "/images/github.svg",
      },
      {
        name: "Medium",
        url: "https://medium.com/@sjlouji10",
        logo: "/images/medium.png",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sjlouji",
        logo: "/images/LI-In-Bug.png",
      },
      {
        name: "Twitter",
        url: "https://x.com/JoanLouji",
        logo: "/images/icons8-x-500.png",
      },
    ],
  },
};

export const initialData: ResumeData = {
  personalDetails: {
    name: "EDWARD MITCHELL",
    title: "Web Developer | HTML, CSS, PHP | WordPress Expert",
    phone: "+44 20 7123 4567",
    email: "help@enhancv.com",
    linkedin: "linkedin.com",
    location: "Reading, United Kingdom",
  },
  summary:
    "Enthusiastic Web Developer with 5+ years of experience in creating responsive websites and a proven track record in SEO optimisation. Expertise in HTML, CSS, PHP, WordPress and WooCommerce with a passion for delivering optimal user experience.",
  experience: [
    {
      id: "exp1",
      title: "Senior Web Developer",
      company: "Digital Dynamics Ltd",
      startDate: "06/2019",
      endDate: "Present",
      location: "Reading, United Kingdom",
      description: [
        "Led the redesigning of the company's main e-commerce site, increasing customer satisfaction scores by 20% through improved layout and usability.",
        "Spearheaded the integration of a new payment gateway that reduced checkout process time by 35%, directly impacting sales growth.",
        "Improved website load times by 25% through advanced coding techniques, resulting in a lower bounce rate and higher engagement.",
        "Collaborated with the marketing team on SEO strategies that led to a 40% increase in organic traffic within 12 months.",
        "Managed updates and security patches for a portfolio of 15+ WordPress websites, ensuring 99.9% uptime.",
        "Developed custom plugins and themes tailored to business needs, enhancing site functionality and user experience.",
      ],
    },
    {
      id: "exp2",
      title: "Web Developer",
      company: "Tech Solutions Inc",
      startDate: "02/2016",
      endDate: "05/2019",
      location: "Reading, United Kingdom",
      description: [
        "Revamped user interface for client's main web application, increasing customer engagement by 30%.",
        "Coded responsive layout for multiple websites attended to reach a wide audience, achieving compatibility across 98% of devices.",
        "Played a key role in the implementation of a robust backup strategy that decreased potential data loss exposure by 90%.",
        "Initiated the use of Google Webmaster tools to monitor website performance, which identified critical areas for improvement.",
        "Contributed to team efforts in SEO optimisation that escalated the clients' page ranking into the top 10 search results.",
      ],
    },
    {
      id: "exp3",
      title: "Front-end Developer",
      company: "Creative Web Studio",
      startDate: "09/2013",
      endDate: "01/2016",
      location: "London, United Kingdom",
      description: [
        "Developed and implemented a new CSS framework which reduced time to market for new web pages by 15%.",
        "Increased website accessibility ratings by ensuring compliance with WCAG 2.0 standards.",
        "Customised WordPress themes to reflect brand guidelines for 5 major clients.",
        "Provided maintenance and enhancement support for a suite of WordPress ecommerce sites.",
      ],
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Science in Web Development",
      university: "University of London",
      startDate: "01/2011",
      endDate: "01/2013",
      location: "London, United Kingdom",
    },
    {
      id: "edu2",
      degree: "Bachelor of Science in Computer Science",
      university: "University of Reading",
      startDate: "01/2007",
      endDate: "01/2011",
      location: "Reading, United Kingdom",
    },
  ],
  achievements: [
    {
      id: "ach1",
      icon: Lightbulb,
      title: "Website Redesign",
      description:
        "Orchestrated complete overhaul of main ecommerce site leading to increased user satisfaction and average session duration.",
    },
    {
      id: "ach2",
      icon: Star,
      title: "Streamlined Checkout Process",
      description:
        "Successfully integrated new payment solution halving checkout time and supporting increased transaction volumes.",
    },
    {
      id: "ach3",
      icon: Zap,
      title: "Optimisation Expertise",
      description:
        "Reduced load times and bounce rates across multiple projects by employing cutting edge coding techniques.",
    },
    {
      id: "ach4",
      icon: TrendingUp,
      title: "SEO Success",
      description:
        "Drove a 40% increase in organic traffic within a year by innovating and implementing new SEO strategies.",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "PHP",
    "WordPress",
    "WooCommerce",
    "Search Engine Optimisation",
  ],
  courses: [
    {
      id: "crs1",
      name: "Advanced WordPress Development",
      institution:
        "Focused on creating custom plugins and themes, provided by WP Academy.",
    },
    {
      id: "crs2",
      name: "SEO Fundamentals Course",
      institution:
        "Detailed course on SEO strategies and tools, given by Moz Academy.",
    },
  ],
  passions: [
    {
      id: "pas1",
      icon: ShoppingBag,
      name: "E-Commerce Innovation",
      description:
        "I am deeply interested in the evolving trends and technologies shaping online retail experiences.",
    },
    {
      id: "pas2",
      icon: Code2,
      name: "Code Optimisation",
      description:
        "Passionate about enhancing website performance through advanced code optimisation techniques.",
    },
  ],
};

export const sectionIds = [
  "hero",
  ...portfolioData.sections.map((section) => section.href.replace("#", "")),
];

export const PAGE_SIZE = 4;

export type PortfolioData = typeof portfolioData;
