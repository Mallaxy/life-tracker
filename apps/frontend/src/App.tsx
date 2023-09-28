import { BrowserRouter } from 'react-router-dom'
import { Router } from './pages/Router.tsx'

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
