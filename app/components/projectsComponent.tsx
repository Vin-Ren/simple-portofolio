import { useLoaderData } from "@remix-run/react";
import ProjectEntryCard from "~/components/projectEntryCard";
import { loader } from "~/routes/_index";


export default function ProjectsComponent({innerRef}:{innerRef:React.MutableRefObject<null>}) {
  const { projects } = useLoaderData<typeof loader>()

  return (
    <div className="min-h-screen min-w-full text-slate-200 flex justify-center mt-12 snap-center" ref={innerRef} id="Projects">
      <div className="flex-1 max-w-4xl">
        <h2 className="text-2xl font-bold  text-slate-100 p-3 m-4 rounded-xl underline underline-offset-8">
          My Projects
        </h2>
        <div className="flex flex-auto flex-wrap justify-around max-md:items-center max-lg:justify-center">
          {projects.map((e) => <ProjectEntryCard {...e} />)}
        </div>
      </div>
    </div>
  )
}
