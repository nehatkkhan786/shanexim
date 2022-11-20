import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
      }}
    anchor='right'
    disableBackdropTransition={!iOS}
    disableDiscovery={iOS} 
    open={open}
    onClose={()=>setOpen(false)}
    onOpen = {()=>setOpen(true)}
    >
         <Box sx={{position:'absolute', top:'20px', zIndex:'25',}}>
              <IconButton onClick={()=>setOpen(false)}>
                <CloseRoundedIcon sx={{color:'#fff'}}/>
              </IconButton>
            </Box>
    <Box sx={{width:{xs:250, md:300}, display:'flex', justifyContent:'center'}}>
           
            <List>
               <ListItem disablePadding sx={{':hover':{backgroundColor:'green', letterSpacing:'5px'}}}>
                   <ListItemButton>
                       <ListItemText primary='Home'/>
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

    </SwipeableDrawer>
  )
}

export default SidebarDrawer