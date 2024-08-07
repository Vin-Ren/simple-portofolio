import { json, useLoaderData } from "@remix-run/react";
import { ImGithub } from "react-icons/im";
import ProjectEntryCard from "~/components/projectEntryCard";
import { getProjects } from "~/data";

export const loader = async () => {
  const { projects } = await getProjects();
  return json({ projects })
}


export default function Index() {
  const { projects } = useLoaderData<typeof loader>()

  return (
    <div className="min-h-screen min-w-full text-slate-200 flex justify-center">
      <div className="flex-1 max-w-4xl">
        <h2 className="text-2xl font-bold  text-slate-100 p-3 m-4 rounded-xl underline underline-offset-8">
          My Projects
        </h2>
        <div className="flex flex-auto flex-wrap">
          {projects.map((e) => <ProjectEntryCard {...e} />)}
        </div>
      </div>
    </div>
  )
}
