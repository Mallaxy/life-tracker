import { Ingredient } from './ingredients.ts'

export type AvailableIngredient = {
  id: Ingredient['id']
  quantity: number
}

export type HydratedAvailableIngredient = AvailableIngredient & Ingredient

export type CategorizedAvailableIngredients = Record<
  Ingredient['category'],
  HydratedAvailableIngredient[]
>
