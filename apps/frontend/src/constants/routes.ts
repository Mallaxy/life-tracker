export const NAVIGATION_ROUTES = {
  Home: '/',
  Storage: '/storage',
  Tobuy: '/tobuy',
  Recipes: '/recipes',
  Ingredients: '/ingredients',
  IngredientCreation: '/ingredients/create',
  IngredientEdit: '/ingredient/:id/edit',
  IngredientInfo: '/ingredient/:id',
  NotFoundPage: '*',
} as const

export type NavigationRoutesType = Omit<typeof NAVIGATION_ROUTES, 'NotFoundPage'>

export type NavigationRoutesValues = NavigationRoutesType[keyof NavigationRoutesType]
