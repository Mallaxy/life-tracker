import { FC, PropsWithChildren } from 'react'
import { useSetAtom } from 'jotai'
import { ingredientsAtom } from '../../context'
import { Ingredient } from '../../types'
import { toast } from 'react-toastify'

import { IngredientForm } from '../../features'
import { Typography } from '@mui/material'

interface IngredientCreationProps extends PropsWithChildren {}

export const IngredientCreation: FC<IngredientCreationProps> = () => {
  const setIngredients = useSetAtom(ingredientsAtom)
  const onSubmit = (newIngredient: Ingredient) => {
    setIngredients((prev) => [...prev, newIngredient])

    toast(`Ingredient ${newIngredient.name} created!`, {
      type: 'success',
      position: 'bottom-right',
    })
  }

  return (
    <>
      <Typography variant='h2'>Create Ingredient</Typography>
      <IngredientForm onSubmit={onSubmit} submitButtonText='Create' shouldReset />
    </>
  )
}
