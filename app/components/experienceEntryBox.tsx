import { RiCodeSSlashFill } from "react-icons/ri";

export default function ExperienceEntryBox({title, description}: {title: string, description: string}) {
    return (
        <div className="bg-slate-800 bg-opacity-90 p-4 m-4 rounded-lg flex flex-col">
            <div className="flex flex-row gap-2 items-center mb-2">
                <RiCodeSSlashFill className="w-6 h-6 bg-fuchsia-600 rounded-sm p-1 mt-1"/>
                <h3 className="text-2xl">{title}</h3>
            </div>
            <div className="flex-1">
                {description}
            </div>
        </div>
    )
}
