import { NavLink } from "@remix-run/react";
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
        <NavLink to={'/'} className={({ isActive }) => `text-md ${isActive ? 'btn-active' : ''}`} onClick={handleClick}>
          <BsPersonRaisedHand className="w-5 h-5" />
          Self Introduction
        </NavLink>
      </li>
      <li>
        <NavLink to={'/experiences'} className={({ isActive }) => `text-md ${isActive ? 'btn-active' : ''}`} onClick={handleClick}>
          <MdOutlineWorkHistory className="w-5 h-5" />
          Experiences
        </NavLink>
      </li>
    </>
  )
}
