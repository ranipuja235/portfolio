import type { IconType } from 'react-icons'

export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: IconType
  external?: boolean
}

export type Stat = {
  value: string
  label: string
}

export type Highlight = {
  title: string
  description: string
}

export type Skill = {
  name: string
  level: number
  icon: IconType
}

export type Project = {
  category: 'enterprise' | 'iot' | 'mobility'
  title: string
  description: string
  techStack: string[]
  // githubUrl: string
  liveUrl: string
  highlight: string
}

export type Experience = {
  role: string
  company: string
  duration: string
  projects?: string[]
  summary: string
  achievements: string[]
}

export type Profile = {
  name: string
  role: string
  intro: string
  email: string
  availability: string
  location: string
  profileImage: string
}
