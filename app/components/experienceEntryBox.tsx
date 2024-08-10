import { RiCodeSSlashFill } from "react-icons/ri";

export default function ExperienceEntryBox({ title, description = '', timePeriod = '-' }: { title: string, description?: string, timePeriod?: string }) {
  return (
    <div className="bg-base-100 bg-opacity-80 p-4 m-4 rounded-lg flex flex-col shadow-xl">
      <div className="flex flex-row gap-2 items-center mb-2">
        <RiCodeSSlashFill className="w-6 h-6 bg-fuchsia-600 rounded-sm p-1 mb-5" />
        <div className="flex flex-col gap-1 ml-2 align-middle">
          <h3 className="text-2xl">{title}</h3>
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
