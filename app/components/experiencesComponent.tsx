import { useLoaderData } from "@remix-run/react";
import ExperienceEntryBox from "~/components/experienceEntryBox";
import { loader } from "~/routes/_index";


export default function ExperiencesComponent({innerRef}:{innerRef:React.MutableRefObject<null>}) {
  const { experiences } = useLoaderData<typeof loader>()

  return (
    <div className="min-h-screen min-w-full text-slate-200 flex justify-center pt-12 snap-center" id="Experiences" ref={innerRef}>
      <div className="flex-1 max-w-4xl">
        <h2 className="text-2xl font-bold  text-slate-100 p-3 m-4 rounded-xl underline underline-offset-8" key={"Header"}>
          My Experiences
        </h2>

        {experiences.map((e) => <ExperienceEntryBox {...e} />)}
      </div>
    </div>
  )
}
