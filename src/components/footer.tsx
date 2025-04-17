import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default async function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="h-5 w-5 text-green-500" />
            <span className="font-mono text-sm text-white">
              © {new Date().getFullYear()} | Built with Next.js
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-500">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
