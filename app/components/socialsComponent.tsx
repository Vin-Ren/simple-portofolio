import { json, useLoaderData } from "@remix-run/react";
import { ImGithub } from "react-icons/im";
import { RiContactsBook3Line, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import { getContacts } from "~/data";

export const loader = async () => {
  const contacts = await getContacts();
  return json({ contacts })
}


export default function SocialsComponent({innerRef}:{innerRef:React.MutableRefObject<null>}) {
  const { contacts } = useLoaderData<typeof loader>()

  return (
    <div ref={innerRef} id="Socials">
      <div className="hero bg-opacity-0 min-h-screen snap-center">
        <div className="hero-content min-w-full">
          <div className="max-md:min-w-full sm:max-w-lg bg-black bg-opacity-60 rounded-xl max-md:p-8 md:p-12 max-md:mx-12">
            <h1 className="text-slate-100 max-md:text-3xl md:text-4xl font-bold flex flex-row max-sm:gap-2 sm:gap-4 items-center">  
              <RiContactsBook3Line className="max-md:w-10 max-md:h-10 md:w-12 md:h-12"/>
              My Socials
            </h1>

            <div className="pt-6 text-slate-200 text-lg font-medium text-wrap">
              <ul>
                <li>
                  <a href={`https://github.com/${contacts.github}`} target="_blank" className="flex flex-row items-center gap-2 hover:text-purple-500 visited:text-purple-200 m-4">
                        <ImGithub className="w-8 h-8"/> {contacts.github}
                  </a>
                </li>
                <li>
                  <a href={`https://instagram.com/${contacts.instagram}`} target="_blank" className="flex flex-row items-center gap-2 hover:text-purple-500 visited:text-purple-200 m-4">
                        <RiInstagramLine className="w-8 h-8"/> {contacts.instagram}
                  </a>
                </li>
                <li>
                  <a href={`https://www.linkedin.com/in/${contacts.linkedin}`} target="_blank" className="flex flex-row items-center gap-2 hover:text-purple-500 visited:text-purple-200 m-4">
                        <RiLinkedinBoxFill className="w-8 h-8"/> {contacts.linkedin}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}