import HashNavLink from "~/components/hashNavLink";
import { BsPersonRaisedHand } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { RiContactsBook3Line } from "react-icons/ri";


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
        <HashNavLink to={'#Intro'} onClick={handleClick}>
          <BsPersonRaisedHand className="w-5 h-5" />
          Self Introduction
        </HashNavLink>
      </li>
      <li>
        <HashNavLink to={'#Experiences'} onClick={handleClick}>
          <MdOutlineWorkHistory className="w-5 h-5" />
          Experiences
        </HashNavLink>
      </li>
      <li>
        <HashNavLink to={'#Projects'} onClick={handleClick}>
          <ImGithub className="w-5 h-5" />
          Projects
        </HashNavLink>
      </li>
      <li>
        <HashNavLink to={'#Socials'} onClick={handleClick}>
          <RiContactsBook3Line className="w-5 h-5" />
          Socials
        </HashNavLink>
      </li>
    </>
  )
}
