import { PageContainer } from './layout/PageContainer.tsx'
import { Typography } from '@mui/material'
import { DeleteButton } from './components/atoms'
export const App = () => {
  const string = 'Hello world + test+'

  return (
    <PageContainer>
      <DeleteButton />
      <Typography variant='h2'>{string}</Typography>
    </PageContainer>
  )
}
