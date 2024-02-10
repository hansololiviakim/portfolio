import { StaticImageData } from 'next/image'

export type HomeLinksType = {
  id: number
  title: string
  url: string
}

export type CommonTitleType = {
  title: string
  desc: string
}

export type ExperiencesType = {
  id: 'CAREER' | 'EDUCATION' | 'ACTIVITY'
  title: string
  desc: string
  detail: string[]
  period: string
}

export type portfoliosType = {
  id: number
  flag: 'TEAM' | 'PERSONAL'
  title: string
  stack: string[]
  desc: string
  link: {
    name: string
    url: string
  }[]
  src: StaticImageData
}

export type contactsType = {
  id: 'mail' | 'github' | 'tistory'
  contact: string
  link: string
}
