import { Link } from "@remix-run/react";
import { BsPersonRaisedHand } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";


export default function NavigationBarEntries() {
    const handleClick = () => {
        const elem = document.activeElement as HTMLElement | null;
        if (elem) {
          elem?.blur();
        }
    };
    return (
        <>
            <li>
                <Link to={'/'} className="text-md" onClick={handleClick}>
                    <BsPersonRaisedHand className="w-5 h-5"/>
                    Self introduction
                </Link>
            </li>
            <li>
                <Link to={'/experiences'} className="text-md" onClick={handleClick}>
                    <MdOutlineWorkHistory className="w-5 h-5"/>
                    Experiences
                </Link>
            </li>
        </>
    )
}
