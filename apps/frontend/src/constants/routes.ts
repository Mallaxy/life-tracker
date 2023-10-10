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

export type GetParamKeys<TTranslation extends string> = TTranslation extends ''
  ? []
  : TTranslation extends `${string}/:${infer Param}/${infer Tail}`
  ? [Param, ...GetParamKeys<Tail>]
  : TTranslation extends `${string}/:${infer Param}`
  ? [Param]
  : []

export type GetParamKeysObj<TTranslation extends string> = TTranslation extends ''
  ? Record<string, never>
  : TTranslation extends `${string}/:${infer Param}/${infer Tail}`
  ? { [Key in Param]: string } & GetParamKeysObj<Tail>
  : TTranslation extends `${string}/:${infer Param}`
  ? { [Key in Param]: string }
  : Record<string, never>
