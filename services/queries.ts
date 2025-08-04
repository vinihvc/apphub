import React from 'react'
import { APPS } from '@/content/apps'
import { CATEGORIES } from '@/content/categories'
import { APP_COLLECTIONS } from '@/content/collections'
import { PLATFORMS } from '@/content/platforms'

export const getApps = React.cache(() => {
  return APPS
})

export const getAppBySlug = React.cache((slug: string) => {
  return APPS.find((app) => app.slug === slug)
})

export const getCollectionBySlug = React.cache((slug: string) => {
  return APP_COLLECTIONS.find((collection) => collection.slug === slug)
})

export const getCollections = React.cache(() => {
  return APP_COLLECTIONS
})

export const getPlatforms = React.cache(() => {
  return PLATFORMS
})

export const getCategories = React.cache(() => {
  return CATEGORIES
})
