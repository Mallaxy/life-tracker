import { ReactElement } from 'react'
import { Login } from './Login/Login.tsx'
import { Home } from './Home/Home.tsx'

export interface RouterPage {
  title: string
  path: string
  element: ReactElement
}

export const pagesData: RouterPage[] = [
  {
    title: 'Login',
    path: '/login',
    element: <Login />,
  },
  {
    title: 'Home',
    path: '/',
    element: <Home />,
  },
]
