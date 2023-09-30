import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PageContainer } from './layout/PageContainer'
import { Home } from './pages/Home/Home'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { NAVIGATION_ROUTES } from './constants/routes'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageContainer />}>
          <Route index element={<Home />} />
          <Route path={NAVIGATION_ROUTES.Storage} />
          <Route path={NAVIGATION_ROUTES.Tobuy} />
          <Route path={NAVIGATION_ROUTES.Recepies} />
          <Route path={NAVIGATION_ROUTES.Ingredients} />
          <Route path={NAVIGATION_ROUTES.NotFoundPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
