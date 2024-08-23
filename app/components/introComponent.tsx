import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";


export default function IntroComponent({innerRef}:{innerRef:React.MutableRefObject<null>}) {
  const { generalInfo } = useLoaderData<typeof loader>()

  return (
    <div className="hero bg-opacity-0 min-h-screen snap-center" ref={innerRef} id="Intro">
      <div className="hero-content text-center">
        <div className="max-w-lg bg-base-200 bg-opacity-80 rounded-xl p-8">
          <h1 className="text-slate-100 max-md:text-3xl md:text-4xl font-bold">Hello there 👋</h1>
          <p className="py-6 text-slate-200 text-lg text-wrap">
            {generalInfo.heroContent}
          </p>
        </div>
      </div>
    </div>
  )
}
