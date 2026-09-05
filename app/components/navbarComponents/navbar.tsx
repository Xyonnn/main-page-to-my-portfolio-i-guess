"use client"

import { useLang } from "@/app/language/LanguageContext";

interface NavbarProps{
    activeSection: string;
}

export default function Navbar({activeSection}: NavbarProps){
    const {lang, toggleLang, t} = useLang();
    const linkClass = (section: string) =>
        `transition-colors duration-500 px-3 py-1 rounded-md 
        ${activeSection === section ? "bg-gray-700 text-white" : "text-gray-200 hover:text-white"}`;
    

    return(
        <div className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 bg-gray-800 ">
            <button className="text-lg sm:text-xl font-bold shrink-0" onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}>Xyon.dev</button>
            <div className="flex items-center gap-8">
                <nav className="hidden md:flex items-center gap-8">
                    <a className={linkClass("projects")} href="#projects">{t("navbarSec.projects")}</a>
                    <a className={linkClass("about")} href="#about">{t("navbarSec.about")}</a>
                    <a className={linkClass("contact")} href="#contact">{t("navbarSec.contact")}</a>  
                </nav>
                <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-900 transition-colors" onClick={toggleLang}>{lang === "pl" ? "PL | EN" : "EN | PL"}</button>
            </div>
        </div>
    );
}