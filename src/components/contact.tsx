import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default async function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 bg-gray-950">
      <div className="font-mono text-sm text-green-500 mb-4">
        $ ./contact.sh
      </div>
      <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <div>
          <p className="text-gray-400 mb-6">
            Interested in working together? Have a project in mind or just want
            to connect? Feel free to reach out through any of the channels
            below.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:contact@example.com"
              className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
            >
              <Mail className="h-5 w-5 mr-3" />
              <span>contact@example.com</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
            >
              <Github className="h-5 w-5 mr-3" />
              <span>github.com/yourusername</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-3" />
              <span>linkedin.com/in/yourusername</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-white font-bold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
