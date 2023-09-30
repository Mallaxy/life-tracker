export const NAVIGATION_ROUTES = {
  Storage: 'storage',
  Tobuy: 'tobuy',
  Recepies: 'recepies',
  Ingredients: 'ingredients',
  NotFoundPage: '*',
} as const

export type NavigationRoutesType = Omit<typeof NAVIGATION_ROUTES, 'NotFoundPage'>

export type NavigationRoutesValues = NavigationRoutesType[keyof NavigationRoutesType]
