import Footer from "./components/footerComponents/footer";
import ProjectCom from "./components/mainComponents/projects";
import Navbar from "./components/navbarComponents/navbar";
import SectionDivider from "./components/mainComponents/sectionDivider";

export default function Home() {
  return (
    <div className="scroll-smooth flex min-h-screen flex-col bg-gray-900 text-white">
        <Navbar/>
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-4xl">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl" >Xyon czyli ja</h1 >
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">Mlody, aspirujacy programista, ktory chce tworzyc strony internetowe</p>
            <a href="#projects" className="mt-8 inline-block text-sm text-gray-300 transition-colors hover:text-white">Moje projekty :3</a>
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
                          Kilka słów o mnie
                      </h2>
                  </div>

                  <div className="grid gap-12 md:grid-cols-2">
                      <div>
                          <p className="text-lg leading-relaxed text-gray-400">
                              Jestem młodym aspirującym programistą, który
                              interesuje się tworzeniem stron internetowych
                              i aplikacji.
                          </p>

                          <p className="mt-6 text-lg leading-relaxed text-gray-400">
                              Obecnie rozwijam swoje umiejętności w React,
                              Next.js oraz TypeScript poprzez tworzenie wlasnych projektów.
                          </p>
                      </div>

                      <div>
                          <p className="mb-5 text-sm text-gray-400">
                              Technologie, z którymi pracuje:
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
        <Footer/>
    </div>
  );
}
