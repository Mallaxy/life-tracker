import { atomWithStorage } from 'jotai/utils'
import {
  AvailableIngredient,
  CategorizedAvailableIngredients,
  HydratedAvailableIngredient,
} from '../../types'
import { atom } from 'jotai'
import { ingredientAtom } from './ingredients'

export const availableIngredientsAtom = atomWithStorage<AvailableIngredient[]>(
  'availableIngredients',
  [],
)

export const hydratedAvailableIngredientsAtom = atom<HydratedAvailableIngredient[]>((get) => {
  const availableIngredients = get(availableIngredientsAtom)
  const hydratedIngredients = availableIngredients.map((availableIngredient) => {
    const ingredient = get(ingredientAtom(availableIngredient.id))

    if (!ingredient) {
      throw new Error(`Ingredient with id ${availableIngredient.id} not found`)
    }

    return {
      ...availableIngredient,
      ...ingredient,
    }
  })

  return hydratedIngredients
})

export const categorizedAvailableIngredientsAtom = atom<CategorizedAvailableIngredients>((get) => {
  const availableIngredients = get(hydratedAvailableIngredientsAtom)

  const categorizedIngredients = availableIngredients.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = []
    }

    acc[ingredient.category].push(ingredient)

    return acc
  }, {} as CategorizedAvailableIngredients)

  return categorizedIngredients
})
