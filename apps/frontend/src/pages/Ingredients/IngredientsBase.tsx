import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { Button, List, ListItem, TextField, Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import { ingredientsAtom } from '../../context'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION_ROUTES } from '../../constants'
import { useNavigateTo } from '../../hooks/useNavigateTo.ts'

interface IngredientsBaseProps extends PropsWithChildren {}

export const IngredientsBase: FC<IngredientsBaseProps> = () => {
  const navigate = useNavigate()
  const { navigateTo } = useNavigateTo()
  const ingredients = useAtomValue(ingredientsAtom)

  const [searchValue, setSearchValue] = useState('')

  const filteredIngredients = useMemo(
    () =>
      ingredients.filter((ingredient) => {
        return ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
      }),
    [ingredients, searchValue],
  )

  return (
    <>
      <Typography variant='h2'>Ingredients</Typography>
      <TextField
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value ?? '')}
      />
      <Button
        variant='contained'
        color='success'
        onClick={() => navigate(NAVIGATION_ROUTES.IngredientsCreation)}
      >
        Create Ingredient
      </Button>
      <List>
        {filteredIngredients.map((ingredient) => (
          <ListItem
            key={ingredient.id}
            onClick={() => navigateTo('IngredientsEdit', { id: ingredient.id })}
          >
            <Typography variant='body1'>{ingredient.name}</Typography>
            {'  -  '}
            <Typography variant='body1'>{ingredient.measurement}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  )
}
