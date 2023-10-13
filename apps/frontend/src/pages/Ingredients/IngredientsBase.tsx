import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { Button, List, ListItem, TextField, Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import { ingredientsAtom } from '../../context'
import { Link } from 'react-router-dom'
import { NAVIGATION_ROUTES } from '../../constants'
import { IngredientContainer } from '../../components/atoms'

interface IngredientsBaseProps extends PropsWithChildren {}

export const IngredientsBase: FC<IngredientsBaseProps> = () => {
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
      <Link to={NAVIGATION_ROUTES.IngredientsCreation}>
        <Button variant='contained' color='success'>
          Create Ingredient
        </Button>
      </Link>
      <List>
        {filteredIngredients.map((ingredient) => (
          <ListItem key={ingredient.id}>
            <Link to={`edit/${ingredient.id}`}>
              <IngredientContainer {...ingredient} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}
