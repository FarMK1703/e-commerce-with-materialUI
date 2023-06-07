import React from 'react'
import { Box, Button,Icon, Typography,Chip, CircularProgress, IconButton } from '@mui/material'
import { useParams } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function ProductFullInfo() {

  const param=useParams()
  const id=param.id

  const navigate=useNavigate()

  const products=useSelector(store=>store.fetchProducts.products)
  const product=products[id]

  



  return (
    <Box
    sx={{
      minHeight:'calc(100vh - 60px)',
      width:'100%',
      display:'flex',
      alignItems:'center',
      overflowY:'auto',
      paddingBottom:'100px',
      position:'relative'
    }}
    >


    <IconButton

    onClick={()=>{
      navigate(-1)
    }}
     sx={{
      position:'absolute',
      top:{
        sm:'30px',
        xs:'15px'
      },
      ml:{
        xs:1,
        sm:4
      }
     }}
    >
      <WestIcon color='primary' fontSize='large'/>
    </IconButton>

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
