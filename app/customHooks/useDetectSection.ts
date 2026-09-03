"use client"

import { useEffect, useState } from "react";

export function useDetectSection(sectionID: string[]){
    const [currentSection, setCurrentSection] = useState <string>("");

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (sections) => {
                sections.forEach((section)=>{
                    if(section.isIntersecting){
                        setCurrentSection(section.target.id);
                    }
                });
            },
            {
                rootMargin: "-80% 0px -20% 0px",
            }
        );
        sectionID.forEach((id)=>{
            const el = document.getElementById(id);
            if(el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [sectionID]);
    return currentSection;
}