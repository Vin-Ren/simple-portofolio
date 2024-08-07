
export const getGeneralInfo = async (): Promise<{ name: string, heroContent: string }> => ({
  name: "Vincent Oei",
  heroContent: "My name is Vincent Oei, a programming enthusiast. I have multiple years of experience in a variety of fields inside programming, some of which are scripting, web development and competitive programming."
})


export const getExperiences = async (): Promise<{ experiences: { title: string, description: string, timePeriod: string }[] }> => ({
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

