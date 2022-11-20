import { Box, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from '@mui/material'
import React from 'react'

const SidebarDrawer = ({open, setOpen}) => {
    const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <SwipeableDrawer
    PaperProps={{
        sx: {
          backgroundColor: "#2D5A27",
          color: "white",
          borderRadius: "100px 0px 0 100px",
        },
      }}
    anchor='right'
    disableBackdropTransition={!iOS}
    disableDiscovery={iOS} 
    open={open}
    onClose={()=>setOpen(false)}
    onOpen = {()=>setOpen(true)}
    >
    <Box sx={{width:{xs:250, md:300}, display:'flex', justifyContent:'center'}}>
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <List>
               <ListItem disablePadding sx={{':hover':{bgcolor:'green'}}}>
                   <ListItemButton>
                       <ListItemText>Home</ListItemText>
                   </ListItemButton>
               </ListItem>

               <ListItem disablePadding sx={{':hover':{bgcolor:'green'}}}>
                   <ListItemButton>
                       <ListItemText>About</ListItemText>
                   </ListItemButton>
               </ListItem>

               <ListItem disablePadding sx={{':hover':{bgcolor:'green'}}}>
                   <ListItemButton>
                       <ListItemText>Products</ListItemText>
                   </ListItemButton>
               </ListItem>

               <ListItem disablePadding sx={{':hover':{bgcolor:'green'}}}>
                   <ListItemButton>
                       <ListItemText>Contact</ListItemText>
                   </ListItemButton>
               </ListItem>
            </List>
        </Box>
    </Box>

    </SwipeableDrawer>
  )
}

export default SidebarDrawer