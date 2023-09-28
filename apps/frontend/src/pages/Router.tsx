import { FC, PropsWithChildren } from 'react'
import { pagesData, RouterPage } from './pagesData.tsx'
import { Route, Routes } from 'react-router-dom'

interface RouterProps extends PropsWithChildren {}

export const Router: FC<RouterProps> = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: RouterPage) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return <Routes>{pageRoutes}</Routes>
}
