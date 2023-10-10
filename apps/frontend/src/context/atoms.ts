import { atom } from 'jotai'
import { Ingredient } from '../types'
import { atomWithStorage } from 'jotai/utils'
import { findAndReplace } from '../helpers'

export const ingredientsAtom = atomWithStorage<Ingredient[]>('ingredients', [])
export const ingredientAtom = (ingredientId?: string) =>
  atom(
    (get) => {
      const ingredients = get(ingredientsAtom)
      return ingredients.find((ingredient) => ingredient.id === ingredientId)
    },
    (get, set, update: Ingredient) => {
      const ingredients = get(ingredientsAtom)
      const newIngredients = findAndReplace(update, ingredients)
      set(ingredientsAtom, newIngredients)
    },
  )
