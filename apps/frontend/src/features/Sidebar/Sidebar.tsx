import * as React from 'react'
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton } from '@mui/material'

import { NavigationRoutesValues, NAVIGATION_ROUTES } from '../../constants'
import { NavLink } from 'react-router-dom'
import { NavigateBackButton } from '../../components/atoms'

type NavigationItem = {
  title: string
  path: NavigationRoutesValues
}

const navigationItems: NavigationItem[] = [
  { title: 'Home', path: NAVIGATION_ROUTES.Home },
  { title: 'Recipes', path: NAVIGATION_ROUTES.Recipes },
  { title: 'To Buy', path: NAVIGATION_ROUTES.Tobuy },
  { title: 'Storage', path: NAVIGATION_ROUTES.Storage },
  { title: 'Ingredients', path: NAVIGATION_ROUTES.Ingredients },
]

export const Sidebar = () => {
  const [state, setState] = React.useState(false)

  const toggleSidebar = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleSidebar(false)}
      onKeyDown={toggleSidebar(false)}
    >
      <List>
        {navigationItems.map((navigationItem) => (
          <ListItem key={navigationItem.title} disablePadding>
            <NavLink to={navigationItem.path} style={{ width: '100%' }}>
              <ListItemButton>{navigationItem.title}</ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <>
      <Button onClick={toggleSidebar(true)}>Menu</Button>
      <NavigateBackButton />
      <Drawer open={state} onClose={toggleSidebar(false)}>
        {list()}
      </Drawer>
    </>
  )
}
