import { json } from "@remix-run/react";
import { useEffect, useRef } from "react";
import ExperiencesComponent from "~/components/experiencesComponent";
import IntroComponent from "~/components/introComponent";
import ProjectsComponent from "~/components/projectsComponent";
import SocialsComponent from "~/components/socialsComponent";
import { useSection } from "~/contexts/sections";
import { getContacts, getExperiences, getGeneralInfo, getProjects } from "~/data";

export const loader = async () => {
  const generalInfo = await getGeneralInfo();
  const { experiences } = await getExperiences();
  const { projects } = await getProjects();
  const contacts = await getContacts();
  return json({ generalInfo, experiences, projects, contacts })
}

export default function Index() {
  const {setCurrentSection} = useSection()
  const introRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const socialsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // console.log("intersected with", entry.target.id, entry.intersectionRatio)
          setCurrentSection(entry.target.id)
          // window.location.hash = entry.target.id
        }
      },
      {
        threshold: 0.7,
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }
    if (experiencesRef.current) {
      observer.observe(experiencesRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (socialsRef.current) {
      observer.observe(socialsRef.current);
    }

    // Clean up the observer
    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
      if (experiencesRef.current) {
        observer.unobserve(experiencesRef.current);
      }
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      if (socialsRef.current) {
        observer.unobserve(socialsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <IntroComponent innerRef={introRef} />
      <ExperiencesComponent innerRef={experiencesRef} />
      <ProjectsComponent innerRef={projectsRef} />
      <SocialsComponent innerRef={socialsRef} />
    </div>
  );
}
