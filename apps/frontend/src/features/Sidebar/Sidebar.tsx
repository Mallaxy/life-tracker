import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

import { NavigationRoutesValues, NAVIGATION_ROUTES } from '../../constants/routes'
import { NavLink } from 'react-router-dom'

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

export const TemporaryDrawer = () => {
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
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
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navigationItems.map((navigationItem) => (
          <ListItem key={navigationItem.title} disablePadding>
            <ListItemButton>
              <NavLink to={navigationItem.path}>{navigationItem.title}</NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
}
