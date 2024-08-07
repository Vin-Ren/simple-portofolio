import { json, useLoaderData } from "@remix-run/react";
import { ImGithub } from "react-icons/im";
import { RiContactsBook3Line, RiInstagramLine } from "react-icons/ri";
import { getContacts } from "~/data";

export const loader = async () => {
  const contacts = await getContacts();
  return json({ contacts })
}


export default function Index() {
  const { contacts } = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="hero bg-opacity-0 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg bg-base-200 bg-opacity-80 rounded-xl p-8">
            <h1 className="text-slate-100 text-5xl font-bold flex flex-row gap-4"><RiContactsBook3Line className="w-12 h-12"/> My Socials</h1>

            <div className="pt-6 text-slate-200 text-lg font-medium text-wrap">
              <ul>
                <li>
                  <a href={`https://github.com/${contacts.github}`} target="_blank" className="flex flex-row gap-2 hover:text-purple-500 m-4">
                        <ImGithub className="w-8 h-8"/> {contacts.github}
                  </a>
                </li>
                <li>
                  <a href={`https://instagram.com/${contacts.instagram}`} target="_blank" className="flex flex-row gap-2 hover:text-purple-500 m-4">
                        <RiInstagramLine className="w-8 h-8"/> {contacts.instagram}
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