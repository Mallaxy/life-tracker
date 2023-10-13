import { FC, PropsWithChildren } from 'react'
import { useAtomValue } from 'jotai'
import { categorizedAvailableIngredientsAtom } from '../../context/atoms/storage.ts'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { NAVIGATION_ROUTES } from '../../constants'

export type StorageProps = PropsWithChildren & {}

export const Storage: FC<StorageProps> = () => {
  const categorizedAvailableIngredients = useAtomValue(categorizedAvailableIngredientsAtom)

  return (
    <>
      <Typography variant='h2'>Storage</Typography>
      <Link to={NAVIGATION_ROUTES.StorageAdd}>
        <Button>Add Ingredient</Button>
      </Link>
      {Object.entries(categorizedAvailableIngredients).map(([category, ingredients]) => {
        return (
          <Accordion key={category}>
            <AccordionSummary>
              <Typography variant='h4'>{category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {ingredients.map((ingredient) => {
                return (
                  <div key={ingredient.id}>
                    <Typography variant='body1'>{ingredient.name}</Typography>
                    <Typography variant='body1'>{ingredient.quantity}</Typography>
                    <Typography variant='body1'>{ingredient.measurement}</Typography>
                  </div>
                )
              })}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}
