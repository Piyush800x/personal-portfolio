import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Source_Code_Pro } from "next/font/google";
import { Sora } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export default async function Hero() {
  return (
    <section
      className={`${sora.className} container mx-auto px-4 py-20 md:py-32`}
    >
      <div className="max-w-3xl">
        <div
          className={`${sourceCodePro.className} font-mono text-sm text-green-500 mb-4`}
        >
          $ whoami
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Backend Developer &{" "}
          <span className="text-green-500">System Architect</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          I build robust, scalable backend systems and APIs that power modern
          applications. Specializing in performance optimization, database
          design, and secure architecture.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-black">
            View My Projects <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="bg-green-600 hover:bg-green-700 hover:border-green-700 text-black border-green-600"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
