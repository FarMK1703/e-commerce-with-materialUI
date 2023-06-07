import { Box,FormControl, ListItem, ListItemButton,Divider, Typography, List, ListItemText,ListItemIcon,Drawer, Icon} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { toggleSideBar } from '../redux-store/toggleSideBarSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';



export default function SideBar() {
 const dispatch=useDispatch()
 const navigate=useNavigate()


 const navItems=[
  
 {title:'На главную', path:'/front-page', icon:<HomeIcon/>},
 {title:'Каталог товаров', path:'/', icon:<CategoryIcon/>}

 ]


 const sideBarIsActive = useSelector((state) => state.sideBarIsActive.value)
 

  return (
    <Box  onClick={()=>{dispatch(toggleSideBar())}}
    >
      <Drawer
     
    
     anchor='right'
     
     open={sideBarIsActive}
    
  >
   <List
   sx={{
    color:'gray',
    width:{
      sm:400,
     
    }
   }}
   >
   <ListItem>
   <Typography
    sx={{
      fontSize:18
    }}
   >
    Навигация
   </Typography>
   </ListItem>
    {navItems.map(item=>{
      return(
        <ListItem
        key={item.title}
        
        >
        <ListItemButton
        onClick={
          ()=>{
            navigate(item.path)
          }
        }
       
        >
          <ListItemIcon >
           {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title}/>
        </ListItemButton>
        </ListItem>
      )
    })}
   </List>
  </Drawer>
    </Box>
  )
}
