import { json, useLoaderData } from "@remix-run/react";
import ExperienceEntryBox from "~/components/experienceEntryBox";
import { getExperiences } from "~/data";


export const loader = async () => {
    const { experiences } = await getExperiences();
    return json({ experiences })
}


export default function Index() {
    const { experiences } = useLoaderData<typeof loader>()

    return (
        <>
            <h2 className="text-2xl font-bold  text-slate-100 p-3 m-4 rounded-xl underline underline-offset-8">
                My Experiences
            </h2>
            
            { experiences.map((e) => <ExperienceEntryBox {...e}/> ) }
        </>
    )
}
