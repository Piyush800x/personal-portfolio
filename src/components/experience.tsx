"use server";
import { ChevronRight } from "lucide-react";
import { Source_Code_Pro } from "next/font/google";
import { Sora } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

const jobs = [
  {
    position: "Backend Engineer",
    company: "Fluencer Market",
    startYear: "2024",
    endYear: "2025",
    descriptions: [
      "Developed RESTful APIs and services for the company's SaaS platform",
      "Built and maintained backend services for web applications",
      "Created automated CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with frontend developers to integrate APIs with user interfaces",
    ],
    isCurrent: true,
  },
  {
    position: "Senior Backend Engineer",
    company: "TechCorp Inc",
    startYear: "2021",
    endYear: "2022",
    descriptions: [
      "Led the development of a high-throughput message processing system handling 50M+ daily events",
      "Optimized database queries resulting in 70% reduction in API response times",
      "Designed and implemented microservice architecture for the company's core platform",
    ],
    isCurrent: false,
  },
];

export default async function Experience() {
  return (
    <section
      id="experience"
      className={`${sora.className} container mx-auto px-4 py-20`}
    >
      <div
        className={`${sourceCodePro.className} font-mono text-sm text-green-500 mb-4`}
      >
        $ cat ./experience.log
      </div>
      <h2 className="text-3xl font-bold text-white mb-12">Work Experience</h2>

      <div className="space-y-12 max-w-3xl">
        {/* 1st */}
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`border-l-2 pl-6 relative ${
              job.isCurrent ? "border-green-500" : "border-gray-700"
            }`}
          >
            <div
              className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ${
                job.isCurrent ? "bg-green-500" : "bg-gray-700"
              }`}
            ></div>
            <h3 className="text-xl font-bold text-white">{job.position}</h3>
            <div className="flex items-center text-gray-400 mb-4">
              <span className="font-mono">{job.company}</span>
              <span className="mx-2">•</span>
              <span>
                {job.startYear} - {job.endYear}
              </span>
            </div>
            <ul className="space-y-2 text-gray-400">
              {job.descriptions.map((desc, idx) => (
                <li key={idx} className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
