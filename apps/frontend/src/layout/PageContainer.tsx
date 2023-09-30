import { FC, ReactNode } from 'react'
import { Container, styled } from '@mui/material'
import { TemporaryDrawer } from '../features/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastProvider } from './ToastProvider.tsx'

interface PageContainerProps {
  children?: ReactNode
}

export const PageContainer: FC<PageContainerProps> = () => {
  return (
    <ToastProvider>
      <TemporaryDrawer></TemporaryDrawer>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </ToastProvider>
  )
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: darkseagreen;
  gap: 1rem;
`
