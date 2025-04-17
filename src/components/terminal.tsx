import { Badge } from "./ui/badge";

export default async function Terminal() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="font-mono text-sm">terminal</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="mb-2">
            <span className="text-green-500">dev@portfolio:~$</span>{" "}
            <span className="text-white">ls skills</span>
          </div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge className="bg-blue-900 hover:bg-blue-800">Node.js</Badge>
            <Badge className="bg-purple-900 hover:bg-purple-800">Python</Badge>
            <Badge className="bg-yellow-900 hover:bg-yellow-800">Java</Badge>
            <Badge className="bg-red-900 hover:bg-red-800">Ruby</Badge>
            <Badge className="bg-green-900 hover:bg-green-800">
              PostgreSQL
            </Badge>
            <Badge className="bg-orange-900 hover:bg-orange-800">MongoDB</Badge>
            <Badge className="bg-blue-900 hover:bg-blue-800">Docker</Badge>
            <Badge className="bg-gray-700 hover:bg-gray-600">Kubernetes</Badge>
            <Badge className="bg-red-900 hover:bg-red-800">Redis</Badge>
            <Badge className="bg-purple-900 hover:bg-purple-800">GraphQL</Badge>
            <Badge className="bg-green-900 hover:bg-green-800">REST APIs</Badge>
          </div>
          <div className="mb-2">
            <span className="text-green-500">dev@portfolio:~$</span>{" "}
            <span className="text-white">cat about.txt</span>
          </div>
          <div className="mb-4 text-gray-300">
            Backend developer with 5+ years of experience building scalable
            services and APIs. Passionate about system design, performance
            optimization, and clean code. Currently focused on microservices
            architecture and event-driven systems.
          </div>
          <div className="mb-2">
            <span className="text-green-500">dev@portfolio:~$</span>{" "}
            <span className="text-white">_</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>
    </section>
  );
}
