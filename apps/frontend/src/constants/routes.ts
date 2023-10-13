export const NAVIGATION_ROUTES = {
  Home: '/',
  Storage: '/storage',
  Tobuy: '/tobuy',
  Recipes: '/recipes',
  Ingredients: '/ingredients',
  IngredientsCreation: '/ingredients/create',
  IngredientsEdit: '/ingredients/edit/:id',
  NotFoundPage: '*',
} as const

export type NavigationRoutesType = Omit<typeof NAVIGATION_ROUTES, 'NotFoundPage'>

export type NavigationRoutesValues = NavigationRoutesType[keyof NavigationRoutesType]
