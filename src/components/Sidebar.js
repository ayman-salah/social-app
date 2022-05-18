import { AccountBox, Article, Groups, Home, LocalGroceryStore, ModeNight, Person, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar({setmode , mode}) {
  return (
    <Box   p={2} flex={1} sx={{display:{xs:'none',sm:'block'}}}>
        <Box position="fixed">
           <List>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <Article  />
              </ListItemIcon>
              <ListItemText primary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <Groups  />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <LocalGroceryStore  />
              </ListItemIcon>
              <ListItemText primary="marketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <Person  />
              </ListItemIcon>
              <ListItemText primary="friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <Settings  />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <AccountBox  />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
                    <Switch onChange={e=> setmode(mode === 'light'?'dark':'light')}></Switch>
                </ListItemButton>
          </ListItem>
         
          </List>
        </Box>
        
    </Box>
  )
}

export default Sidebar