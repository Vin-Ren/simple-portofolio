import { json } from "@remix-run/react";
import IntroComponent from "~/components/IntroComponent";
import { getContacts, getExperiences, getGeneralInfo, getProjects } from "~/data";

export const loader = async () => {
  const generalInfo = await getGeneralInfo();
  const { experiences } = await getExperiences();
  const { projects } = await getProjects();
  const contacts = await getContacts();
  return json({ generalInfo, experiences, projects, contacts })
}

export default function Index() {
  return (
    <div>
      <IntroComponent/>
    </div>
  );
}
