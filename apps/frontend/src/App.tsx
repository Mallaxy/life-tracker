import { PageContainer } from './layout/PageContainer.tsx'
import { Typography } from '@mui/material'
export const App = () => {
  const string = 'Hello world + test+'

  return (
    <PageContainer>
      <Typography variant='h2'>{string}</Typography>
    </PageContainer>
  )
}
