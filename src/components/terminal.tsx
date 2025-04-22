"use server";
import { Badge } from "./ui/badge";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default async function Terminal() {
  return (
    <section
      className={`${sourceCodePro.className} container mx-auto px-4 py-12`}
    >
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center font-mono text-sm">terminal</div>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="mb-2">
            <span className="text-green-500 font-bold">
              piyush@portfolio:~$
            </span>{" "}
            <span className="text-[#EAE6D8]">ls skills</span>
          </div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge className="bg-blue-900 hover:bg-blue-800">C++</Badge>
            <Badge className="bg-yellow-900 hover:bg-yellow-800">Java</Badge>
            <Badge className="bg-purple-900 hover:bg-purple-800">Python</Badge>
            <Badge className="bg-red-900 hover:bg-red-800">Rust</Badge>
            <Badge className="bg-blue-900 hover:bg-blue-800">Node.js</Badge>
            <Badge className="bg-green-900 hover:bg-green-800">
              PostgreSQL
            </Badge>
            <Badge className="bg-orange-900 hover:bg-orange-800">MongoDB</Badge>
            <Badge className="bg-blue-900 hover:bg-blue-800">Docker</Badge>
            <Badge className="bg-gray-700 hover:bg-gray-600">Kubernetes</Badge>
            <Badge className="bg-red-900 hover:bg-red-800">Redis</Badge>
            <Badge className="bg-green-900 hover:bg-green-800">REST APIs</Badge>
          </div>
          <div className="mb-2">
            <span className="text-green-500 font-bold">
              piyush@portfolio:~$
            </span>{" "}
            <span className="text-[#EAE6D8]">cat about.txt</span>
          </div>
          <div className="mb-4 text-[#EAE6D8]">
            Backend developer with 2+ years of experience building scalable
            services and APIs. Passionate about system design, performance
            optimization, and clean code. Currently focused on microservices
            architecture and event-driven systems.
          </div>
          <div className="mb-2">
            <span className="text-green-500 font-bold">
              piyush@portfolio:~$
            </span>{" "}
            <span className="text-[#EAE6D8]">_</span>
            <span className="animate-pulse">❚</span>
          </div>
        </div>
      </div>
    </section>
  );
}
