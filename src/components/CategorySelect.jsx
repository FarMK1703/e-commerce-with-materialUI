import React,{useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select,Box, } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilteredproducts } from '../redux-store/fethProductsSlice';


export default function CategorySelect() {
  
    const[filterValue,setFulterValue]=useState('')
    const dispatch=useDispatch()


    const categories=[
        {RUTitle:'Все категории',ENGTitle:"common",},
        {RUTitle:'Электроника',ENGTitle:'electronics',},
        {RUTitle:'Ювелирные изделия',ENGTitle:'jewelery',},
        {RUTitle:'Мужская одежда',ENGTitle:"men's clothing",},
        {RUTitle:'Женская одежда',ENGTitle:"women's clothing",},
       
      
       ]


  return (
    <Box
    sx={{
        width:'100%',
        p:'15px 10px 15px 10px'
    
    }}
    >
        <FormControl
        sx={{
            width:{
                sm:'300px',
                xs:'100%'
            },

            backgroundColor:'#fff'
        }}
        >
        <InputLabel id='label'>Фильтр</InputLabel>
        <Select
        
        labelId='label'
        label='Фильтр'
        value={filterValue}
        onChange={
            (e)=>{setFulterValue(e.target.value), dispatch(setFilteredproducts(e.target.value)) }
          
            
            }
        >

        {categories.map((category)=>{
            return (
                <MenuItem
                sx={{
                    m:2
                }}
                 key={category.ENGTitle}
                 value={category.ENGTitle}>
                  {category.RUTitle}
                </MenuItem>
            )
        })}

        </Select>
    </FormControl>
    </Box>
  )
}
