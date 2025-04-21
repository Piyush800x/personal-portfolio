import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Terminal from "@/components/terminal";

export default function Home() {
  return (
    <div className="min-h-screen sm:mx-12 text-gray-300">
      {/* Navbar */}
      <Header />
      <main>
        {/* Hero */}
        <Hero />
        {/* Terminal */}
        <Terminal />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Experience */}
        <Experience />
        {/* Contact */}
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
