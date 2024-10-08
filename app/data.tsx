import { GeneralInfo, Experience, Project, TagType, Contacts } from "./dataTypes"

export const getGeneralInfo = async (): Promise<GeneralInfo> => ({
  name: "Vincent Oei",
  heroContent: "I'm Vincent Valentino Oei, an Enthusiast in Programming and Electronics, driven by curiosity to explore more fields within programming and electronics. Aspires to create, tweak, and manage systems aimed at the improvement of humanity's quality of life."
})



export const getExperiences = async (): Promise<{ experiences: Experience[] }> => ({
  experiences: [
    {
      title: "CLI App Developer",
      description: "Created variety of CLI apps, ranging from a simple bookmark-like application to a framework for building APIs.",
      timePeriod: "December 2020 - Present"
    },
    {
      title: "Fullstack Web Developer",
      description: "Made small to medium sites such as web-based attendance taker, url shortener, etc.",
      timePeriod: "June 2020 - Present"
    },
    {
      title: "Fullstack Web Developer for Prom",
      description: "Built a web app called Invetixia to accomodate my high school's prom night invitation and ticketing needs.",
      timePeriod: "November 2023 - April 2024"
    }
  ]
})

export const getProjects = async (): Promise<{projects: Project[]}> => ({
  projects: [
    {
      name: "Invetixia",
      description: "A web application that simplify the process of inviting, ticketing and managing of an event",
      githubLink: "https://github.com/Vin-Ren/Invetixia",
      tags: [
        {name: 'Typescript', type: TagType.Language},
        {name: 'Web App', type: TagType.Category},
        {name: 'Vite', type: TagType.Libraries},
        {name: 'React', type: TagType.Libraries},
        {name: 'Prisma', type: TagType.Libraries},
        {name: 'DaisyUI', type: TagType.Libraries},
        {name: 'shadcn/ui', type: TagType.Libraries},
      ]
    },
    {
      name: "Synapsis",
      description: "A full fledged automator for phone credits transactions with API integration for full control through web requests",
      githubLink: "https://github.com/Vin-Ren/Synapsis-Public",
      tags: [
        {name: 'Python', type: TagType.Language},
        {name: 'Automator', type: TagType.Category},
        {name: 'uiautomator2', type: TagType.Libraries},
        {name: 'FastAPI', type: TagType.Libraries},
        {name: 'xmpppy', type: TagType.Libraries},
        {name: 'pure-python-adb', type: TagType.Libraries},
      ]
    },
    {
      name: "API_Template",
      description: "An API consumer template and/or library to swiften the development process of an API consumer app",
      githubLink: "https://github.com/Vin-Ren/API_Template",
      tags: [
        {name: 'Python', type: TagType.Language},
        {name: 'Framework', type: TagType.Category},
        {name: 'requests', type: TagType.Libraries},
        {name: 'Boilerplate', type: TagType.Others}
      ]
    },
    {
      name: "AttrLinker",
      description: "A compact python library for simplifying your properties in classes with nested and complex objects.",
      githubLink: "https://github.com/Vin-Ren/AttrLinker",
      tags: [
        {name: 'Python', type: TagType.Language},
        {name: 'Library', type: TagType.Category},
        {name: 'Quality of Life', type: TagType.Others}
      ]
    },
    {
      name: "Url Shortener",
      description: "A simple url shortener app",
      githubLink: "https://github.com/Vin-Ren/url-shortener",
      tags: [
        {name: 'Typescript', type: TagType.Language},
        {name: 'Web App', type: TagType.Category},
        {name: 'Vite', type: TagType.Libraries},
        {name: 'React', type: TagType.Libraries},
        {name: 'Tailwind css', type: TagType.Libraries},
        {name: 'Prisma', type: TagType.Libraries},
      ]
    }
  ]
})

export const getContacts = async (): Promise<Contacts> => ({
  github: "Vin-Ren",
  instagram: "vncnt.oei",
  linkedin: "vincent-oei"
})
