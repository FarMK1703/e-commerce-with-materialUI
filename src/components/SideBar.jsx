import { Box,FormControl, ListItem, ListItemButton,Divider, Typography, List, ListItemText,ListItemIcon,Drawer} from '@mui/material'
import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import DiamondIcon from '@mui/icons-material/Diamond';
import Man2Icon from '@mui/icons-material/Man2';
import WomanIcon from '@mui/icons-material/Woman';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { useSelector } from 'react-redux';
import { toggleSideBar } from '../redux-store/toggleSideBarSlice';
import { useDispatch } from 'react-redux';
import { setProductCategory } from '../redux-store/productCategorySlice';



export default function SideBar() {
 const categories=[
  {RUTitle:'Все',ENGTitle:"common",icon:<BorderAllIcon fontSize='large'/>},
  {RUTitle:'Электроника',ENGTitle:'electronics',icon:<ComputerIcon fontSize='large'/>},
  {RUTitle:'Ювелирные изделия',ENGTitle:'jewelery', icon:<DiamondIcon fontSize='large'/>},
  {RUTitle:'Мужская одежда',ENGTitle:"men's clothing", icon:<Man2Icon fontSize='large'/>},
  {RUTitle:'Женская одежда',ENGTitle:"women's clothing",icon:<WomanIcon fontSize='large'/>},
 

 ]


 const sideBarIsActive = useSelector((state) => state.sideBarIsActive.value)
 const dispatch=useDispatch()
 

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
    Категории товаров
   </Typography>
   </ListItem>
    {categories.map(category=>{
      return(
        <ListItem
        key={category.RUTitle}
        
        >
        <ListItemButton
        onClick={
          ()=>{
            dispatch(setProductCategory({'ENGTitle':category.ENGTitle,'RUTitle':category.RUTitle}))
          }
        }
       
        >
          <ListItemIcon>
            {category.icon}
          </ListItemIcon>
          <ListItemText primary={category.RUTitle}/>
        </ListItemButton>
        </ListItem>
      )
    })}
   </List>
  </Drawer>
    </Box>
  )
}
