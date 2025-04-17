import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

export default async function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 bg-gray-950">
      <div className="font-mono text-sm text-green-500 mb-4">
        $ cd ./projects
      </div>
      <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              Distributed Task Queue System
            </CardTitle>
            <CardDescription>
              High-performance job processing system
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            <p className="mb-4">
              Designed and implemented a distributed task processing system
              capable of handling 10,000+ jobs per minute with automatic retries
              and dead-letter queues.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-900">Node.js</Badge>
              <Badge className="bg-red-900">Redis</Badge>
              <Badge className="bg-purple-900">RabbitMQ</Badge>
              <Badge className="bg-gray-700">Docker</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-950"
            >
              View Details
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              Real-time Analytics API
            </CardTitle>
            <CardDescription>
              Event processing and analytics platform
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            <p className="mb-4">
              Built a scalable real-time analytics API that processes and
              aggregates millions of events daily with sub-second query response
              times.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-yellow-900">Java</Badge>
              <Badge className="bg-green-900">PostgreSQL</Badge>
              <Badge className="bg-blue-900">Kafka</Badge>
              <Badge className="bg-gray-700">Kubernetes</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-950"
            >
              View Details
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              Microservice Authentication System
            </CardTitle>
            <CardDescription>
              Secure identity and access management
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            <p className="mb-4">
              Developed a centralized authentication and authorization system
              for microservices with JWT, OAuth2, and role-based access control.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-900">Node.js</Badge>
              <Badge className="bg-orange-900">MongoDB</Badge>
              <Badge className="bg-purple-900">GraphQL</Badge>
              <Badge className="bg-gray-700">Docker</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-950"
            >
              View Details
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              Data Pipeline Framework
            </CardTitle>
            <CardDescription>ETL and data processing system</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            <p className="mb-4">
              Created a flexible data pipeline framework for ETL processes,
              supporting multiple data sources and destinations with error
              handling and monitoring.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-purple-900">Python</Badge>
              <Badge className="bg-green-900">PostgreSQL</Badge>
              <Badge className="bg-blue-900">Apache Airflow</Badge>
              <Badge className="bg-gray-700">AWS S3</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-950"
            >
              View Details
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
