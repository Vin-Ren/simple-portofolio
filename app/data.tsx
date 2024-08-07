import { GeneralInfo, Experience, Project, TagType, Contacts } from "./dataTypes"

export const getGeneralInfo = async (): Promise<GeneralInfo> => ({
  name: "Vincent Oei",
  heroContent: "My name is Vincent Oei, a programming enthusiast. I have multiple years of experience in a variety of fields inside programming, some of which are scripting, web development and competitive programming."
})



export const getExperiences = async (): Promise<{ experiences: Experience[] }> => ({
  experiences: [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus dolorum sequi. Vero quaerat quo, architecto delectus explicabo, excepturi deserunt necessitatibus porro non voluptas sapiente fuga molestias eum ex dicta.",
      timePeriod: "August 1945 - Present"
    },
    {
      title: "Scripting Automatons",
      description: "Created tons of scripts and automatons such as a web scrapers, automatic video game maps downlaoder and android automators.",
      timePeriod: "December 2020 - Present"
    }
  ]
})

export const getProjects = async (): Promise<{projects: Project[]}> => ({
  projects: [
    {
      name: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus dolorum sequi. Vero quaerat quo, architecto delectus explicabo, excepturi deserunt necessitatibus porro non voluptas sapiente fuga molestias eum ex dicta.",
      githubLink: "https://github.com/Vin-Ren/lorem-ipsum",
      tags: [
        {name: 'Lorem', type: TagType.Language},
        {name: 'Ipsum', type: TagType.Category},
        {name: 'Dolor', type: TagType.Dependencies},
        {name: 'Sit', type: TagType.Dependencies},
        {name: 'Amet', type: TagType.Others},
      ]
    },
    {
      name: "Invetixia",
      description: "A web application that simplify the process of invitating, ticketing and managing of an event",
      githubLink: "https://github.com/Vin-Ren/Invetixia",
      tags: [
        {name: 'Typescript', type: TagType.Language},
        {name: 'Web App', type: TagType.Category},
        {name: 'Vite', type: TagType.Dependencies},
        {name: 'React', type: TagType.Dependencies},
        {name: 'Prisma', type: TagType.Dependencies},
      ]
    }
  ]
})

export const getContacts = async (): Promise<Contacts> => ({
  github: "Vin-Ren",
  instagram: "vncnt.oei"
})
