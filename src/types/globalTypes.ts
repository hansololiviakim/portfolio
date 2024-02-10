import { StaticImageData } from 'next/image'

export type HomeLinkType = {
  id: number
  title: string
  url: string
}

export type CommonTitleType = {
  title: string
  desc: string
}

export type ExperiencesType = {
  id: string
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
