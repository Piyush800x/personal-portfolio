"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { Source_Code_Pro } from "next/font/google";
import { Sora } from "next/font/google";
import ContactFormClient from "./contact/contact-form";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${sora.className} container mx-auto px-4 py-20 flex flex-col items-start justify-start`}
    >
      <div className="sm:flex sm:flex-row flex-col justify-around items-start sm:space-x-12 space-y-8">
        {/* Section heading and links */}
        <div className="sm:max-w-2/4">
          <div
            className={`${sourceCodePro.className} font-mono text-sm text-green-500 mb-4`}
          >
            $ ./contact.sh
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

          <div className="flex justify-between gap-8 max-w-full">
            <div>
              <p className="text-gray-400 mb-6">
                Interested in working together? Have a project in mind or just
                want to connect? Feel free to reach out through any of the
                channels below.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:business@piyushpaul.com"
                  className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>business@piyushpaul.com</span>
                </a>
                <a
                  href="https://github.com/Piyush800x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Github className="h-5 w-5 mr-3" />
                  <span>github.com/Piyush800x</span>
                </a>
                <a
                  href="https://linkedin.com/in/piyushpaul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span>linkedin.com/in/piyushpaul</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="bg-[#172024] p-6 rounded-lg border border-gray-800 sm:w-2/4">
          <h3 className="text-white font-bold mb-4">Send a Message</h3>
          <ContactFormClient />
        </div>
      </div>
    </section>
  );
}
