import { FC, PropsWithChildren } from 'react'

import { Typography } from '@mui/material'

interface HomeProps extends PropsWithChildren {}

export const Home: FC<HomeProps> = () => {
  const string = 'Hello world + test+'

  return (
    <>
      <Typography variant='h2'>{string}</Typography>
    </>
  )
}
