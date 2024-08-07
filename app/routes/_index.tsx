import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getGeneralInfo } from "~/data";

export const loader = async () => {
  const generalInfo = await getGeneralInfo();
  return json({ generalInfo })
}

export default function Index() {
  const { generalInfo } = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="hero bg-opacity-0 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg bg-base-200 bg-opacity-80 rounded-xl p-4">
            <h1 className="text-slate-100 text-5xl font-bold">Hello there 👋</h1>
            <p className="py-6 text-slate-200 text-lg text-wrap">
              {generalInfo.heroContent}
            </p>
            <Link to={'/experiences/'} className="btn btn-primary hover:bg-gradient-to-tl hover:from-blue-500 hover:to-pink-500 hover:border-none">
              {'> Start learning about me! <'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
