import { FC, PropsWithChildren } from 'react'
import { useAtom } from 'jotai'
import { ingredientAtom } from '../../context'
import { Ingredient } from '../../types'
import { toast } from 'react-toastify'

import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { IngredientForm } from '../../features'
import { NAVIGATION_ROUTES } from '../../constants'
import { Typography } from '@mui/material'

interface IngredientEditProps extends PropsWithChildren {}

export const IngredientEdit: FC<IngredientEditProps> = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [ingredient, updateIngredient] = useAtom(ingredientAtom(id))

  const onSubmit = (newIngredient: Ingredient) => {
    updateIngredient(newIngredient)

    toast(`Ingredient ${newIngredient.name} updated!`, {
      type: 'success',
    })

    navigate(NAVIGATION_ROUTES.Ingredients)
  }

  if (!ingredient) return <Navigate to={NAVIGATION_ROUTES.Ingredients} />

  return (
    <>
      <Typography variant='h2'>Edit Ingredient</Typography>
      <IngredientForm
        onSubmit={onSubmit}
        submitButtonText='Update'
        initialIngredientData={ingredient}
      />
    </>
  )
}
