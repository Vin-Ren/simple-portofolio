import { RiCodeSSlashFill } from "react-icons/ri";

export default function ExperienceEntryBox({ title, description = '', timePeriod = '-' }: { title: string, description?: string, timePeriod?: string }) {
  return (
    <div className="bg-black bg-opacity-60 p-6 m-6 rounded-xl flex flex-col shadow-xl hover:border hover:border-white hover:scale-105 transition-all" key={title}>
      <div className="flex flex-row gap-2 items-center mb-2">
        <RiCodeSSlashFill className="w-6 h-6 bg-violet-600 rounded-sm p-1 mb-5" />
        <div className="flex flex-col gap-1 ml-2 align-middle">
          <h3 className="max-md:text-lg md:text-2xl font-medium">{title}</h3>
          <small className="text-sm text-slate-400">
            {timePeriod}
          </small>
        </div>
      </div>
      <div className="flex-1 ml-10">
        {description}
      </div>
    </div>
  )
}
