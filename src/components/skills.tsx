import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Terminal,
  Server,
  Database,
  Code,
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronRight,
} from "lucide-react";

export default async function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div className="font-mono text-sm text-green-500 mb-4">
        $ ls -la ./skills
      </div>
      <h2 className="text-3xl font-bold text-white mb-12">
        Technical Expertise
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <Server className="h-8 w-8 text-blue-500 mb-2" />
            <CardTitle className="text-white">Backend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                Node.js & Express
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                Python & Django/Flask
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                Java Spring Boot
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                RESTful API Design
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <Database className="h-8 w-8 text-purple-500 mb-2" />
            <CardTitle className="text-white">Database Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                PostgreSQL & MySQL
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                MongoDB & NoSQL
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                Redis & Caching Strategies
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                Database Optimization
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <Code className="h-8 w-8 text-yellow-500 mb-2" />
            <CardTitle className="text-white">
              DevOps & Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                Docker & Containerization
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                Kubernetes Orchestration
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                CI/CD Pipelines
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                AWS/GCP Cloud Services
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
