import { Calendar, Code, type LucideIcon } from 'lucide-react'
import { APPS, type AppType } from './apps'

export interface AppCollectionType {
  slug: string
  title: string
  description: string
  image?: string
  tags: string[]
  icon: LucideIcon
  apps: AppType[]
}

export const APP_COLLECTIONS: AppCollectionType[] = [
  {
    icon: Code,
    title: 'Essential Developer Tools',
    slug: 'developer-tools',
    description:
      'Powerful apps for developers to code, debug, and ship faster. Streamline your development workflow.',
    tags: ['Development', 'Coding', 'Debugging', 'Git', 'Terminal'],
    apps: APPS.filter((app) => app.category.includes('development')),
  },
  {
    icon: Calendar,
    title: 'Productivity Powerhouse',
    slug: 'productivity',
    description:
      'Boost your efficiency with these carefully selected productivity apps for Mac.',
    tags: ['Task Management', 'Notes', 'Calendar', 'Focus', 'Automation'],
    apps: APPS.filter((app) => app.category.includes('productivity')),
  },
]
