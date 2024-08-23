import { Link, LinkProps, useLocation } from "@remix-run/react";

export default function HashNavLink({to, className='', ...props}: LinkProps) {
    const location = useLocation()
    
    return (
        <Link {...{to}} className={`text-md ${location.hash===to ? 'btn-active' : ''}`+className } {...props}/>
    )
}
