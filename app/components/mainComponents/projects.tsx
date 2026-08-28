export default function ProjectCom(){
    return(
        <div className="flex min-h-screen items-center justify-center px-6 py-24">
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                <a href="https://tdl-portfolio-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="group flex min-h-72 flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800/50">
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                To Do App
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-gray-400">
                            Prosta aplikacja do zarządzania zadaniami stworzona
                            za pomocą React, Node.js i Tailwind CSS.
                        </p>
                    </div>

                    <div>
                        <div className="mb-5 flex flex-wrap gap-2">
                            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                React
                            </span>
                            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                Node.js
                            </span>
                            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                Firebase
                            </span>
                            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                MongoDB
                            </span>
                        </div>

                        <p className="text-xs text-yellow-300">
                            W trakcie rozwoju
                        </p>
                    </div>
                </a>

                <a href="https://mini-shop-portfolio-six.vercel.app" target="_blank" rel="noopener noreferrer" className="group flex min-h-72 flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800/50">
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Mini Sklep
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-gray-400">
                            Mały e-commerce'owy projekt tworzony w TypeScript,
                            Next.js i Tailwind CSS.
                        </p>
                    </div>

                    <div>
                        <div className="mb-5 flex flex-wrap gap-2">
                            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                TypeScript
                            </span>

                            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                MongoDB
                            </span>

                            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400">
                                Next.js
                            </span>
                        </div>

                        <p className="text-xs text-yellow-300">
                            W trakcie rozwoju
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}