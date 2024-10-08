import { ImGithub } from "react-icons/im";
import { Project } from "~/dataTypes";


export default function ProjectEntryCard({ name, description, githubLink, tags }: Project) {
  return (
    <div className="card m-4 bg-black bg-opacity-60 max-md:w-full md:w-96 shadow-2xl hover:shadow-slate-900 hover:scale-105 hover:border hover:border-white transition-all" key={name}>
      <div className="card-body">
        <h2 className="card-title text-slate-100">{name}</h2>
        <p className="text-slate-300">{description}</p>
        <div className="card-actions justify-begin mt-2 flex-col">
          <div className="flex gap-1 flex-wrap">
            {tags.map((e) => <div className={`badge badge-outline ${e.type} hover:scale-105`} key={e.name}>{e.name}</div>)}
          </div>
          <a href={githubLink} target="_blank" className="btn btn-ghost text-md mt-2 hover:scale-110">
            <ImGithub className="w-6 h-6" /> Repository
          </a>
        </div>
      </div>
    </div>
  )
}
