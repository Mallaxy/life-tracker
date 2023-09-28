import { FC, PropsWithChildren } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface AuthWrapperProps extends PropsWithChildren {}

export const AuthWrapper: FC<AuthWrapperProps> = () => {
  const isAuthorized = false

  return isAuthorized ? <Outlet /> : <Navigate to='/login' />
}
