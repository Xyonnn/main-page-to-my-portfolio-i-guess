"use client"

import Footer from "./components/footerComponents/footer";
import ProjectCom from "./components/mainComponents/projects";
import Navbar from "./components/navbarComponents/navbar";
import SectionDivider from "./components/mainComponents/sectionDivider";
import { useLang } from "./language/LanguageContext";
import { useDetectSection } from "./customHooks/useDetectSection";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import CopyButton from "./components/mainComponents/linkButtons";

export default function Home() {
    const {t} = useLang();
    const activeSection = useDetectSection(["hero", "projects", "about", "contact"]);
  return (
    <div className="scroll-smooth flex min-h-screen flex-col bg-gray-900 text-white">
        <Navbar activeSection={activeSection} />

        <section id="hero" className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-4xl">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl" >{t("heroSec.title")}</h1 >
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">{t("heroSec.description")}</p>
            <a href="#projects" className="mt-8 inline-block text-sm text-gray-300 transition-colors hover:text-white">{t("heroSec.projects")}</a>
          </div>
        </section>

          <SectionDivider/>

        <section id="projects" className="scroll-mt-20">
          <ProjectCom/>
        </section>

          <SectionDivider/>

        <section id="about" className="scroll-mt-20">
          <div className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-24">
              <div className="w-full">
                  <div className="mb-6">
                      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                          {t("aboutSec.title")}
                      </h2>
                  </div>

                  <div className="grid gap-12 md:grid-cols-2">
                      <div>
                          <p className="text-lg leading-relaxed text-gray-400">
                              {t("aboutSec.description")}
                          </p>

                          <p className="mt-6 text-lg leading-relaxed text-gray-400">
                              {t("aboutSec.moreDescription")}
                          </p>
                      </div>

                      <div>
                          <p className="mb-5 text-sm text-gray-400">
                              {t("aboutSec.technologies")}
                          </p>

                          <div className="flex flex-wrap gap-2">
                              {[
                                  "React",
                                  "Node.js",
                                  "TypeScript",
                                  "Next.js",
                                  "JavaScript",
                                  "Tailwind CSS",
                                  "MongoDB",
                                  "Firebase",
                              ].map((tech) => (
                                  <span key={tech} className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-white">
                                      {tech}
                                  </span>
                                ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

            <SectionDivider/>

        <section id="contact" className="scroll-mt-20">
            <div className="mx-auto flex max-w-5xl items-center px-6 py-24">
                <div className="grid w-full items-center md:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            {t("contactSec.title")}
                        </h2>

                        <p className="mt-2 max-w-xl text-lg leading-relaxed text-gray-400">
                            {t("contactSec.description")}
                        </p>
                    </div>

                    <div className="flex justify-start gap-4 md:justify-end">
                        <a href="https://github.com/Xyonnn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:text-white">
                            <FaGithub size={24} />
                        </a>

                        <CopyButton toCopy="xyon_" icon={<FaDiscord size={24}/>}/>
                        <CopyButton toCopy="pj.kostera@gmail.com" icon={<FiMail size={24}/>}/>

                    </div>
                </div>
            </div>
        </section>
        
        <Footer/>
    </div>
  );
}
