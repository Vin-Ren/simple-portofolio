import {
  json,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { getGeneralInfo } from "./data";
import { RiMenu3Fill, RiFileCodeFill } from "react-icons/ri";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BsPersonRaisedHand } from "react-icons/bs";
import NavigationBarEntries from "./components/navigationBarEntries";


export const loader = async () => {
  const generalInfo = await getGeneralInfo();
  return json({ generalInfo })
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { generalInfo } = useLoaderData<typeof loader>()

  return (
    <div>
      <header>
        <div className="navbar bg-base-100 bg-opacity-85">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-ghost lg:hidden">
                <RiMenu3Fill className="h-5 w-5" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1">
                <NavigationBarEntries/>
              </ul>
            </div>
            <Link className="btn btn-ghost text-xl" to={'/'}>{`${generalInfo.name}'s Portofolio`}</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <NavigationBarEntries/>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="tooltip tooltip-left" data-tip={'Source Code'}>
              <a className="btn btn-ghost" href={'https://github.com/Vin-Ren/simple-portofolio'} target="_blank">
                <RiFileCodeFill className="h-5 w-5"/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen text-slate-200">
        <Outlet />
      </main>

      <footer className="footer footer-center bg-slate-800 text-base-content p-4">
        <aside>
          <p>Still alive in {new Date().getFullYear()}. Created with love ❤️</p>
        </aside>
      </footer>
    </div>
  );
}
