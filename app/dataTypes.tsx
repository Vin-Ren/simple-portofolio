export interface GeneralInfo {
  name: string
  heroContent: string
}

export interface Experience {
  title: string
  description: string
  timePeriod: string
}

export enum TagType {
  Language = 'badge-primary',
  Category = 'badge-secondary',
  Libraries = 'badge-accent',
  Others = 'badge-ghost'
}

export interface Project {
  name: string
  description: string
  githubLink: string
  tags: {name: string, type: TagType}[]
}

export interface Contacts {
  github: string,
  instagram: string,
  linkedin: string
}
