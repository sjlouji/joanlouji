import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "./section-wrapper";
import ReactECharts from "echarts-for-react";

interface GanttTask {
  name: string;
  start: string; // e.g., '2023-01'
  end: string; // e.g., '2023-06'
  color?: string;
}

interface GanttChartProps {
  tasks: GanttTask[];
  months: string[]; // timeline: e.g., ['2023-01', '2023-02', ...]
}

const timeline = [
  {
    type: "experience",
    org: "Pando",
    role: "SOFTWARE ENGINEER - 1",
    period: "May 2023 - Present",
    location: "Chennai Area, India",
    details: [
      "Migrated to Microservice Architecture: Transformed the Cost Engine and Rate Management monolithic product into a microservice architecture.",
      "Migrated to Vue 3: Successfully migrated the Costing Engine and Rate management frontend from Vue 2 to Vue 3.",
      "Developed Authentication Services: Created authentication services for both external and internal microservices.",
      "Data Encryption: Implemented data encryption to secure incoming data.",
      "Vue 3 Component Library: Established a new repository for a Vue 3 component library and integrated it with Storybook.",
      "Handled High-Volume Requests: Managed to handle billions of requests efficiently.",
      "Data Pipelines and Lambdas: Created and optimized data pipelines and AWS Lambda functions.",
      "Code Reviews and Hiring: Regular code reviews and participated in hiring.",
    ],
  },
  {
    type: "experience",
    org: "Pando",
    role: "ASSOCIATE SOFTWARE ENGINEER",
    period: "Feb 2021 - May 2023",
    location: "Chennai Area, India",
    details: [
      "Worked on TMS module: Integrated TMS with external software.",
      "Developed warehouse management software: Created API Service using Node.js and Express JS.",
      "Worked on procurement software: Implemented WebSockets and polling for live data transfer.",
      "Developed last-mile optimization solutions.",
      "Bootstrapped the first Flutter application at Pando.",
      "Participated in recruitment for Flutter developers.",
    ],
  },
  {
    type: "experience",
    org: "Pando",
    role: "SOFTWARE DEVELOPMENT INTERN",
    period: "Dec 2020 - Feb 2021",
    location: "Chennai Area, India",
    details: [
      "Developed a new intermediary service for shipment bookings and tracking.",
      "Integrated documentation from four major US carriers.",
      "Worked with Node.js, Vue.js, MongoDB, Docker, AWS EC2, and S3.",
      "Architected applications and participated in client meetings.",
    ],
  },
  {
    type: "experience",
    org: "SP Robotic Works",
    role: "SOFTWARE DEVELOPMENT INTERN",
    period: "Aug 2019 - Aug 2019",
    location: "Chennai Area, India",
    details: [
      "Built an internal CRM tool using Laravel, MySQL, and Vue.js.",
      "Developed new features, APIs, and wrote unit tests.",
      "Collaborated with testing team and used Google Cloud Platform.",
    ],
  },
  {
    type: "education",
    org: "LOYOLA-ICAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
    role: "Bachelor of Technology . Information Technology",
    period: "2016 - 2020",
    location: "Chennai Area, India",
    details: [
      "Freelancing Projects, Programming with C++, Android application development, Build ERP using OODO - Python, Musician & Keyboardist, Graphics design, Football (Midfielder, Defence).",
    ],
  },
  {
    type: "education",
    org: "HILTON MATRIC HR. SEC. SCHOOL",
    role: "Higher Secondary Schooling",
    period: "Mar 2015 - Mar 2016",
    location: "Old courtallam, Tenkasi, Tamil Nadu.",
    details: [],
  },
  {
    type: "education",
    org: "HILTON MATRIC HR. SEC. SCHOOL",
    role: "Secondary Schooling",
    period: "Mar 2013 - Mar 2014",
    location: "Old courtallam, Tenkasi, Tamil Nadu.",
    details: [],
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience & Education">
      <div className="w-full max-w-5xl mx-auto py-8 overflow-x-auto">
        <div className="flex items-end gap-12 min-w-[900px] relative">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, type: "spring", stiffness: 80 }}
              className="relative flex flex-col items-center min-w-[220px]"
            >
              {/* Dot */}
              <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow mb-2" />
              {/* Vertical line (hidden for last item) */}
              {idx < timeline.length - 1 && (
                <div className="w-1 h-16 bg-blue-200 absolute left-1/2 top-4 z-0" />
              )}
              {/* Content */}
              <div className="bg-white rounded-xl shadow-md px-4 py-3 mt-2 text-center w-full">
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  {item.type === "education" ? "EDUCATION" : "EXPERIENCE"}
                </div>
                <div className="font-bold text-base text-blue-900">
                  {item.role}
                </div>
                <div className="text-sm text-blue-700 font-semibold">
                  {item.org}
                </div>
                <div className="text-xs text-gray-500 mb-1">
                  {item.period} &middot; {item.location}
                </div>
                <ul className="list-disc text-left ml-4 text-gray-700 text-xs space-y-1">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
