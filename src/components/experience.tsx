import { ChevronRight } from "lucide-react";

export default async function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <div className="font-mono text-sm text-green-500 mb-4">
        $ cat ./experience.log
      </div>
      <h2 className="text-3xl font-bold text-white mb-12">Work Experience</h2>

      <div className="space-y-12 max-w-3xl">
        <div className="border-l-2 border-green-500 pl-6 relative">
          <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
          <h3 className="text-xl font-bold text-white">
            Senior Backend Engineer
          </h3>
          <div className="flex items-center text-gray-400 mb-4">
            <span className="font-mono">TechCorp Inc.</span>
            <span className="mx-2">•</span>
            <span>2021 - Present</span>
          </div>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Led the development of a high-throughput message processing
                system handling 50M+ daily events
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Optimized database queries resulting in 70% reduction in API
                response times
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Designed and implemented microservice architecture for the
                company's core platform
              </span>
            </li>
          </ul>
        </div>

        <div className="border-l-2 border-gray-700 pl-6 relative">
          <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px] top-1"></div>
          <h3 className="text-xl font-bold text-white">Backend Developer</h3>
          <div className="flex items-center text-gray-400 mb-4">
            <span className="font-mono">DataSystems Ltd.</span>
            <span className="mx-2">•</span>
            <span>2018 - 2021</span>
          </div>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Developed RESTful APIs and services for the company's SaaS
                platform
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Implemented authentication and authorization systems using
                OAuth2 and JWT
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Created automated CI/CD pipelines reducing deployment time by
                60%
              </span>
            </li>
          </ul>
        </div>

        <div className="border-l-2 border-gray-700 pl-6 relative">
          <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px] top-1"></div>
          <h3 className="text-xl font-bold text-white">
            Junior Software Engineer
          </h3>
          <div className="flex items-center text-gray-400 mb-4">
            <span className="font-mono">InnovateTech</span>
            <span className="mx-2">•</span>
            <span>2016 - 2018</span>
          </div>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Built and maintained backend services for web applications
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Designed database schemas and implemented data access layers
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span>
                Collaborated with frontend developers to integrate APIs with
                user interfaces
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
