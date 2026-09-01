"use client"

import { useLang } from "@/app/language/LanguageContext";

export default function Footer(){
    const {t} = useLang();
    return(
        <div className="mt-auto w-full bg-gray-800 py-4 text-center text-white-400">
            <p>{t("footerSec.text")}<span className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 font-medium"><a href="https://github.com/Xyonnn" target="_blank" rel="noopener noreferrer">Xyon</a></span></p>
        </div>
    );
}