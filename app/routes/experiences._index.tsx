import { json, Link, useLoaderData } from "@remix-run/react";
import ExperienceEntryBox from "~/components/experienceEntryBox";
import { getExperiences } from "~/data";


export const loader = async () => {
  const { experiences } = await getExperiences();
  return json({ experiences })
}


export default function Index() {
  const { experiences } = useLoaderData<typeof loader>()

  return (
    <div className="min-h-screen min-w-full text-slate-200 flex justify-center">
      <div className="flex-1 max-w-4xl">
        <h2 className="text-2xl font-bold  text-slate-100 p-3 m-4 rounded-xl underline underline-offset-8">
          My Experiences
        </h2>

        {experiences.map((e) => <ExperienceEntryBox {...e} />)}

        <div className="w-full flex items-center justify-center mt-12">
          <Link to={'/projects/'} className="btn btn-primary hover:bg-gradient-to-bl hover:from-blue-500 hover:to-pink-500 hover:border-none">
            {'Sneak a peek into my projects!'}
          </Link>
        </div>
      </div>
    </div>
  )
}
