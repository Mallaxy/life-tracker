import { useNavigate } from 'react-router-dom'
import { GetParamKeysObj, NAVIGATION_ROUTES, NavigationRoutesType } from '../constants'
/**
 * Experimental hook that extends default navigate.
 * navigateTo - Takes route name and hydrate it with passed params
 */
export const useNavigateTo = () => {
  const navigate = useNavigate()

  const navigateTo = <TRouteName extends keyof NavigationRoutesType>(
    route: TRouteName,
    params: GetParamKeysObj<NavigationRoutesType[TRouteName]>,
  ) => {
    const path = NAVIGATION_ROUTES[route]
    const hydratedPath = path.replace(/:(\w+)/g, (match, paramName: string) => {
      if (paramName in params) {
        return (params as Record<typeof paramName, string>)[paramName]
      }
      return match
    })

    navigate(hydratedPath)
  }

  return { navigateTo }
}
