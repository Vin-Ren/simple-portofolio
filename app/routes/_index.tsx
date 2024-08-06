import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getGeneralInfo } from "~/data";

export const loader = async () => {
  const generalInfo = await getGeneralInfo();
  return json({ generalInfo })
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
  let generalInfo = { name: 'Unknown' }
  if (data?.generalInfo!==undefined) {
    generalInfo = data.generalInfo
  }

  return [
    { title: `${generalInfo.name}'s Portofolio` },
    { name: `${generalInfo.name}'s Portofolio`, content: "" },
  ];
};

export default function Index() {
  const { generalInfo } = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="hero bg-opacity-0 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg bg-slate-800 bg-opacity-80 rounded-lg p-4">
            <h1 className="text-slate-100 text-5xl font-bold">Hello there 👋</h1>
            <p className="py-6 text-slate-200 text-lg text-wrap">
              { generalInfo.heroContent }
            </p>
            <button className="btn btn-primary hover:bg-gradient-to-bl hover:from-blue-500 hover:to-pink-500">Start to know me!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
