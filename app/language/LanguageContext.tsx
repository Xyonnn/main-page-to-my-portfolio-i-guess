"use client"

import {createContext, useContext, useState, ReactNode} from "react";
import en from "../language/en.json";
import pl from "../language/pl.json";

type Language = "en" | "pl";

const translation: Record<Language, any> = {en, pl};

interface LangContextType{
    lang: Language;
    toggleLang: ()=> void;
    t: (key: string)=> string;
}

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({children}: {children: ReactNode}){
    const [lang, setLang] = useState<Language>("pl");

    const toggleLang = () =>{
        setLang((prev) => (prev === "pl" ? "en" : "pl"));
    };

    const t = (key: string): string =>{
        const val = key.split(".").reduce((obj, part) => (obj ? obj[part] : undefined), translation[lang]);
        return val;
    }

    return(
        <LanguageContext.Provider value={{lang, toggleLang, t}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang(){
    const context = useContext(LanguageContext);
     if (!context) {
        throw new Error("error cuz useLang is outside LangProvider");
    }
    return context;
}