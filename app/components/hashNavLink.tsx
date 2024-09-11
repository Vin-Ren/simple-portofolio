import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useSection } from "~/contexts/sections";

export default function HashNavLink({ to, className = '', onClick, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { to: string }) {
    const { currentSection, setCurrentSection } = useSection()
    const [currentHash, setCurrentHash] = useState("")

    useEffect(() => {
        setCurrentHash(currentSection || "")
    }, [currentSection])

    const handleClick = (e: unknown) => {
        window.document.getElementById(to.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start"});
        onClick?.(e as any);
        setCurrentSection(to as string);
    }

    return (
        <button 
            className={`text-md hover:scale-110 transition-all ${'#' + currentHash === to ? 'btn-active bg-gray-800 bg-opacity-65 scale-110' : ''}` + className}
            onClick={(e) => handleClick(e)}
            {...props} />
    )
}
