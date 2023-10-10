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

export type GetParamKeys<TPath extends string> = TPath extends ''
  ? []
  : TPath extends `${string}/:${infer Param}/${infer Tail}`
  ? [Param, ...GetParamKeys<Tail>]
  : TPath extends `${string}/:${infer Param}`
  ? [Param]
  : []

export type GetParamKeysObj<TPath extends string> = TPath extends ''
  ? Record<string, never>
  : TPath extends `${string}/:${infer Param}/${infer Tail}`
  ? { [Key in Param]: string } & GetParamKeysObj<Tail>
  : TPath extends `${string}/:${infer Param}`
  ? { [Key in Param]: string }
  : Record<string, never>
