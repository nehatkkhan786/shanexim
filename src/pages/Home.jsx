import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import BgVideo from '../assets/video.mp4'
import { Box, Button, IconButton, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import './home.css'
import { height } from '@mui/system';
import { useState } from 'react';
import SidebarDrawer from '../componenets/SidebarDrawer';

const Home = () => {
    const [open, setOpen] = useState(false)


  return (
    <Box sx={{width:'100%',height:'100vh' }}>
        <Box sx={{position:'absolute', zIndex:'999', display:'flex', justifyContent:'space-between', width:'100%', padding:{md:'20px 70px', xs:'20px 10px', color:'#fff'}}}>
           <Typography variant='h4' sx={{cursor:'pointer'}}>ShanExim</Typography>
            <IconButton onClick={()=>setOpen(!open)}>
                <MenuRoundedIcon sx={{color:'#fff'}}/>
            </IconButton>
        </Box>
       
        {/* <video src={BgVideo} autoPlay='autoplay' playsinline muted={true} loop={true}/> */}
        <div className='overlay'></div>
        <video src={BgVideo} muted="muted" autoplay="autoplay" playsinline="playsinline" loop="loop" />
       
        
        <Box sx={{position:'absolute',top:'0', width:'100%',height:'100%', display:'flex',flexDirection:'column', zIndex:'555', color:'#fff', alignItems:'center', justifyContent:'center'}}>
            <Typography sx={{ typography:{xs:'h4',md:'h3'}, textTransform:'uppercase', fontWeight:700,}}>WorldClass Seed </Typography>
            <Typography sx={{ typography:{xs:'h5',md:'h4'}, mt:1, textTransform:'uppercase', fontWeight:500 }}>From North-East India</Typography>
            <Typography sx={{ypography:{xs:'title2',md:'title', textAlign:'center',}, mt:1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </Typography>
            <Button  variant='contained'sx={{mt:2, color:'white', backgroundColor:'green', transition:'0.3s', ':hover':{letterSpacing:'10px', backgroundColor:'green'}}}>Explore</Button>
            <Box sx={{mt:6, display:'flex', gap:2}}>

               <SocialIcon className='social-icon' network="twitter" bgColor="green" />
               <SocialIcon network="instagram" bgColor="green" />
               <SocialIcon network="facebook" bgColor="green" />
            </Box>
            
        </Box>
       
        <SidebarDrawer open={open} setOpen={setOpen}/>
    </Box>
  )
}

export default Home 