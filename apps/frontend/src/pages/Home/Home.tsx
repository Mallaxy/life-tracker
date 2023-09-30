import { FC, PropsWithChildren } from 'react'

import { DeleteButton } from '../../components/atoms'
import { Typography } from '@mui/material'

interface HomeProps extends PropsWithChildren {}

export const Home: FC<HomeProps> = () => {
  const string = 'Hello world + test+'

  return (
    <>
      {import.meta.env.BASE_URL}
      <DeleteButton />
      <Typography variant='h2'>{string}</Typography>
    </>
  )
}
