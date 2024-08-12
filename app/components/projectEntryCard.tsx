import { ImGithub } from "react-icons/im";
import { Project } from "~/dataTypes";


export default function ProjectEntryCard({ name, description, githubLink, tags }: Project) {
  return (
    <div className="card m-4 bg-base-200 bg-opacity-80 max-md:w-full md:w-96 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-slate-100">{name}</h2>
        <p className="text-slate-300">{description}</p>
        <div className="card-actions justify-begin mt-2 flex-col">
          <div className="flex gap-1 flex-wrap">
            {tags.map((e) => <div className={`badge badge-outline ${e.type}`}>{e.name}</div>)}
          </div>
          <a href={githubLink} target="_blank" className="btn btn-ghost text-md mt-2">
            <ImGithub className="w-6 h-6" /> Repository
          </a>
        </div>
      </div>
    </div>
  )
}
