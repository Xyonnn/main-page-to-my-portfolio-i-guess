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
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">Mlody gamer, aspirujacy programista, ktory chce tworzyc strony internetowe</p>
            <a href="#projects" className="mt-8 inline-block text-sm text-gray-300 transition-colors hover:text-white">Moje projekty :3</a>
          </div>
        </section>
          <SectionDivider/>
        <section id="projects" className="scroll-mt-20">
          <ProjectCom/>
        </section>
        <Footer/>
    </div>
  );
}
