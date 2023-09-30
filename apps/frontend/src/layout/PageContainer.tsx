import { FC, ReactNode } from 'react'
import { Container, styled } from '@mui/material'
import { TemporaryDrawer } from '../features/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

interface PageContainerProps {
  children?: ReactNode
}

export const PageContainer: FC<PageContainerProps> = () => {
  return (
    <>
      <TemporaryDrawer></TemporaryDrawer>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: darkseagreen;
`
