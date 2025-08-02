import { Calendar, Code } from 'lucide-react'
import { APPS } from './apps'

export type AppCollectionType = (typeof APP_COLLECTIONS)[number]

export const APP_COLLECTIONS = [
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
