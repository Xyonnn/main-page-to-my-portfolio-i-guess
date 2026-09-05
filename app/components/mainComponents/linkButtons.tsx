"use client"

import { useState, ReactNode } from "react"
import { useLang } from "@/app/language/LanguageContext";



interface GuzikProp{
    toCopy: string;
    icon: ReactNode;
}
export default function CopyButton({toCopy, icon}: GuzikProp){
    const {t} = useLang();
    const [copied, setCopied] = useState(false);
    const handleCopy = async () =>{
        try{
            await navigator.clipboard.writeText(toCopy);
            setCopied(true);

            setTimeout(()=>{
                setCopied(false);
            }, 1000);
        }catch(err){
            console.error("Something went wrong: ", err);
        }
    }

    return(
        <div className="relative">
            <button onClick={handleCopy} className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:text-white">
                {icon}
            </button>
            {copied && (
                <span className="absolute left-1/2 top-full mt-2 whitespace-nowrap rounded-md bg-gray-700 px-3 py-1 text-xs text-white shadow-lg animate-fade-in">
                    {t("copyText.text")}
                </span>
            )}
        </div>
    )
}