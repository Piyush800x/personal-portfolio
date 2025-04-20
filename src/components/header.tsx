import Link from "next/link";
import { Terminal, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Source_Code_Pro } from "next/font/google";
import { ArrowDownToLine } from "lucide-react";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default async function Header() {
  return (
    <header className={`${sourceCodePro.className} border-b border-gray-800`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Terminal className="h-5 w-5 text-green-500" />
          <span className="font-mono text-lg font-medium text-white">
            piyush@portfolio:~$
          </span>
        </div>
        <nav className="hidden md:flex space-x-16 font-medium text-sm">
          <Link
            href="#about"
            className="hover:text-green-500 transition-colors"
          >
            ./about
          </Link>
          <Link
            href="#skills"
            className="hover:text-green-500 transition-colors"
          >
            ./skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-green-500 transition-colors"
          >
            ./projects
          </Link>
          <Link
            href="#experience"
            className="hover:text-green-500 transition-colors"
          >
            ./experience
          </Link>
          <Link
            href="#contact"
            className="hover:text-green-500 transition-colors"
          >
            ./contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="bg-green-600 hover:bg-green-700 hover:border-green-700 text-black border-green-600"
        >
          <ArrowDownToLine className="mr-2 h-4 w-4" />
          Resume
        </Button>
      </div>
    </header>
  );
}
