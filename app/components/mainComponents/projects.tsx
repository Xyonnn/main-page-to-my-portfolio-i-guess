"use client"

import { useLang } from "@/app/language/LanguageContext";

const projects = [
    {
        key: "tdlapp",
        href: "https://tdl-portfolio-frontend.vercel.app",
        tags: ["React", "Node.js", "Firebase", "MongoDB"],
    },
    {
        key: "minishop",
        href: "https://mini-shop-portfolio-six.vercel.app",
        tags: ["TypeScript", "MongoDB", "Next.js"],
    },
];

export default function ProjectCom(){

    const {t} = useLang();

    return(
        <div className="flex min-h-screen items-center justify-center px-6 py-24">
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project)=>(
                    <a key={project.key} href={project.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-72 flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800/50">
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    {t(`projectSec.${project.key}.name`)}
                                </h2>
                            </div>
                            <p className="max-w-md text-sm leading-relaxed text-gray-400">
                                {t(`projectSec.${project.key}.description`)}
                            </p>
                        </div>

                        <div>
                            <div className="mb-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) =>(
                                    <span key={tag} className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs text-yellow-300">
                                {t(`projectSec.${project.key}.status`)}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}