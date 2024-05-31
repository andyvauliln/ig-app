import type { Doc } from '@junobuild/core-peer';
import { IconKeys } from "@/components/icons"

export interface NoteData {
  text: string;
  url?: string;
}

export type Note = Doc<NoteData>;

export type HeroHeader = {
  header: string
  subheader: string
  image: string
}

export type Content = {
  text: string
  subtext: string
  icon?: IconKeys
}

export type ContentSection = {
  header: string
  subheader: string
  image?: string
  content: Array<Content>
}

export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  ogImage: string
}

export type ContactConfig = {
  email: string
}

export type Settings = {
  themeToggleEnabled: boolean
}

export type Layout = {
  heroHeader: string
  featureCards: string
  headers: {
    featureCards: string
    features: string
  }
}