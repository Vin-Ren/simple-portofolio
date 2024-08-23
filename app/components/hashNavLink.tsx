import { Link, LinkProps } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useSection } from "~/contexts/sections";

export default function HashNavLink({to, className='', ...props}: LinkProps) {
    const {currentSection} = useSection()
    const [currentHash, setCurrentHash] = useState("")

    useEffect(()=> {
        setCurrentHash(currentSection || "")
    }, [currentSection])
    
    return (
        <Link {...{to}} className={`text-md ${'#'+currentHash===to ? 'btn-active' : ''}`+className } {...props}/>
    )
}
