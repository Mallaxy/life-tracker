import { FC, ReactNode } from 'react'
import { Container, styled } from '@mui/material'

interface PageContainerProps {
  children?: ReactNode
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: darkseagreen;
`
