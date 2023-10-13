import { FC } from 'react'
import { Ingredient } from '../../../types'
import { Box, Chip, styled, Typography } from '@mui/material'

type IngredientContainerProps = {} & Ingredient

export const IngredientContainer: FC<IngredientContainerProps> = ({
  name,
  measurement,
  category,
}) => {
  return (
    <StyledBox>
      <Typography variant='body1'>{name}</Typography>
      <Chip label={measurement} />
      <Chip label={category} />
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
`
