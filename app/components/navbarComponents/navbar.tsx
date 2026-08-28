"use client"

export default function Navbar(){
    return(
        <div className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-gray-800 ">
            <button className="text-xl font-bold" onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}>Xyon.dev</button>
            <nav className="flex items-center gap-8">
                <a className="text-gray-200 hover:text-white transition-colors" href="#projects">Projekty</a>
                <a className="text-gray-200 hover:text-white transition-colors" href="#about">O mnie</a>
                <a className="text-gray-200 hover:text-white transition-colors" href="#contact">Kontakt</a>
                <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-900 transition-colors">PL | EN</button>
            </nav>
        </div>
    );
}