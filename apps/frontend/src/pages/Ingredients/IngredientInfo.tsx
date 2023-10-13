import { useParams, Link, Navigate, generatePath } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { Card, Button } from '@mui/material'
import { useMemo } from 'react'

import { ingredientAtom } from '../../context'
import { IngredientContainer } from '../../components/atoms'

import { NAVIGATION_ROUTES } from '../../constants'

export const IngredientInfo = () => {
  const { id } = useParams<{ id: string }>()

  const ingredient = useAtomValue(useMemo(() => ingredientAtom(id), [id]))

  if (!ingredient) {
    return <Navigate to={NAVIGATION_ROUTES.Ingredients} replace={true} />
  }

  return (
    <Card variant='outlined'>
      <IngredientContainer {...ingredient} />
      <Link
        to={generatePath(NAVIGATION_ROUTES.IngredientEdit, {
          id: ingredient.id,
        })}
      >
        <Button variant='outlined'>Edit</Button>
      </Link>
    </Card>
  )
}
