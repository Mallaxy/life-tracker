export type IngredientCategory =
  | 'meat'
  | 'vegetable'
  | 'fruit'
  | 'dairy'
  | 'grain'
  | 'spice'
  | 'other'
  | (string & {})

export type IngredientMeasurement = 'g' | 'kg' | 'ml' | 'l' | 'unit' | (string & {})

export type Ingredient = {
  id: string
  name: string
  measurement: IngredientMeasurement
  category: IngredientCategory
}
