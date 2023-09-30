import { Ingredient } from '../types'
import { atomWithStorage } from 'jotai/utils'

export const ingredientsAtom = atomWithStorage<Ingredient[]>('ingredients', [])
