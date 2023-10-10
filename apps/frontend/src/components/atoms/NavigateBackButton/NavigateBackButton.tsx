import { FC, PropsWithChildren } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export type NavigateBackButtonProps = PropsWithChildren & {}

export const NavigateBackButton: FC<NavigateBackButtonProps> = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)} variant='text' color='secondary'>
      Back
    </Button>
  )
}
