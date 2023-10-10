import { Button, MenuItem, Select, styled, TextField } from '@mui/material'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { defaultCategoryOptions, defaultMeasurementOptions } from '../../constants'
import { Ingredient } from '../../types'

const defaultIngredientData: Ingredient = {
  id: Math.random().toString(36).substr(2, 9),
  name: '',
  measurement: '',
  category: '',
}

export type IngredientFormProps = {
  initialIngredientData?: Ingredient
  onSubmit: (data: Ingredient) => void
  submitButtonText: 'Create' | 'Update'
  shouldReset?: boolean
}

export const IngredientForm: FC<IngredientFormProps> = ({
  initialIngredientData = defaultIngredientData,
  onSubmit,
  submitButtonText,
  shouldReset = false,
}) => {
  const { handleSubmit, control, reset } = useForm<Ingredient>({
    defaultValues: initialIngredientData,
  })

  const onFormSubmit = (data: Ingredient) => {
    onSubmit(data)
    shouldReset && reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name='name'
        control={control}
        render={({ field }) => <TextField placeholder='Name your ingredient' {...field} />}
      />
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
        {submitButtonText}
      </Button>
    </StyledForm>
  )
}

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
