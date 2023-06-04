import React from 'react'
import { Box, Button,Icon, Typography,Chip, CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export default function ProductFullInfo() {

  const param=useParams()
  const id=param.id
  const [product,setProduct]=useState({})
  const [isLoading,setIsLoading]=useState(false)
  

  useEffect(()=>{
    fetchProduct()
  },[])


  const fetchProduct=async ()=>{
    try{
      setIsLoading(true)
      const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(response.data)
      setIsLoading(false)
    }

    catch(error){
      console.error(error)
    }
  }
 
  

 if(isLoading){
  return (
    <Box
        sx={{
            minHeight: "calc(100vh - 60px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <CircularProgress size={60} />
    </Box>
);
 }
  



  return (
    <Box
    sx={{
      minHeight:'calc(100vh - 60px)',
      width:'100%',
      display:'flex',
      alignItems:'center',
      overflowY:'auto'
    }}
    >
      <Box
      sx={{
        display:'flex',
        flexDirection:{
          sm:'row',
          xs:'column'
        },
        width:'100%',
        justifyContent:'center',
        pt:{
          xs:2,
          sm:8,
        }
      }}
      >
        <Box
        sx={{
          width:{
            xs:'100%',
            sm:'30%'
          },
          height:'450px',
          backgroundImage:`url(${product.image})`,
          backgroundSize:'contain',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center',
          mr:4
        }}
        >
          
        </Box>

        <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          p:{
            xs:2,
            sm:4,
          }

        }}
        >

         <Typography  
         maxWidth={
          { 
            xs:'95%',
            sm:'550px'
            
          }
         }
         variant='overline'
         fontSize={'18px'}>
           {product.title}
         </Typography>

        <Typography mt={3} variant='subtitle1'>
          Цена: <Chip sx={{fontSize:16, ml:1}} color='secondary'  label={product.price+' $'}/>
        </Typography>

        <Typography mt={3} variant='subtitle1'>
          Количество: <Chip sx={{fontSize:16,ml:1}} color='success' label={`${product.rating?.count}`}/>
        </Typography>

        <Typography mt={3}  variant='subtitle1'>
            Описание:
          </Typography>

        <Typography 
        mt={1} 
        variant='body1'
        maxWidth={'450px'}
        >
         

          {product.description}
        </Typography>

        <Button 
        startIcon={<AddShoppingCartIcon/>}
        size="large"
        variant='contained'
        sx={{
          mt:{
            xs:4,
            sm:8
          },
          maxWidth:{
            xs:'100%',
            sm:'250px',
          },

          height:{
            xs:'60px',
            sm:'auto'
          }
        }}
        >
          Добавить в корзину
        </Button>

        </Box>


        
       
      </Box>
    </Box>
  )
}
