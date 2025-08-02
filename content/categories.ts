import { APPS } from './apps'

export const CATEGORIES = [...new Set(APPS.flatMap((app) => app.category))]
