import { FC, PropsWithChildren } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Select, MenuItem, Button, Input, styled } from '@mui/material'
import { defaultMeasurementOptions, defaultCategoryOptions } from '../../constants'
import { useSetAtom } from 'jotai'
import { ingredientsAtom } from '../../context'
import { IngredientCategory, IngredientMeasurement } from '../../types'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'

interface IngredientCreationProps extends PropsWithChildren {}

type IngredientCreationForm = {
  name: string
  measurement: IngredientMeasurement
  category: IngredientCategory
}

const defaultValues: IngredientCreationForm = {
  name: '',
  measurement: '',
  category: '',
}

export const IngredientCreation: FC<IngredientCreationProps> = () => {
  const { handleSubmit, control, reset } = useForm<IngredientCreationForm>({ defaultValues })
  const setIngredients = useSetAtom(ingredientsAtom)
  const navigate = useNavigate()
  const onSubmit = (data: IngredientCreationForm) => {
    const newIngredient = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    }
    setIngredients((prev) => [...prev, newIngredient])
    reset(defaultValues)

    toast(`Ingredient ${newIngredient.name} created!`, {
      type: 'success',
      position: 'bottom-right',
    })
  }

  return (
    <>
      <Button onClick={() => navigate(-1)} variant='outlined' color='secondary'>
        Back
      </Button>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller name='name' control={control} render={({ field }) => <Input {...field} />} />
        <Controller
          name='measurement'
          control={control}
          render={({ field }) => (
            <Select {...field} size='small'>
              {defaultMeasurementOptions.map((measurement) => (
                <MenuItem key={measurement} value={measurement}>
                  {measurement}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Controller
          name='category'
          control={control}
          render={({ field }) => (
            <Select {...field} size='small'>
              {defaultCategoryOptions.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Button type='submit' variant='contained' color='success'>
          Create
        </Button>
      </StyledForm>
    </>
  )
}

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
