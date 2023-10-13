import { FC, PropsWithChildren } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { ingredientsAtom } from '../../context'
import { useAtomValue } from 'jotai'

export type StorageAddProps = PropsWithChildren & {}

export const StorageAdd: FC<StorageAddProps> = () => {
  const ingredients = useAtomValue(ingredientsAtom)

  const options = ingredients.map((ingredient) => ({
    label: ingredient.name,
  }))

  return (
    <Autocomplete
      id='combo-box-demo'
      renderInput={(params) => (
        <TextField {...params} placeholder='Name your ingredient' label='Ingredient' />
      )}
      sx={{ width: 300 }}
      options={options}
    />
  )
}
