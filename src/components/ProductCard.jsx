import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Badge, Box, Button, Card,CardActions,CardContent,CardHeader, CardMedia, Chip, Container, Rating, Typography, } from '@mui/material'

export default function ProductCard({product}) {
  const navigate=useNavigate()


    return (
        <Card
            
            
            elevation={2}
            sx={{
                position:'relative',
                width: {
                    lg:'calc(25% - 20px)',
                    md:'calc(33.333% - 20px)',
                    sm:'calc(50% - 10px)',
                    xs:'calc(100%)'
                },
                height: {
                    md:500,
                    sm:500,
                    xs:500
                },
                m: {
                    lg:'10px',
                    md:'10px',
                    sm:'5px',
                    xs:'10px'
                },
            }}
            
        >
           <CardMedia
           component={'img'}
           height='200'
           image={product.image}
           sx={{
            objectFit:'scale-down',
            mt:2,
           
           }}
          />

          <CardContent
         
          >
          
            <Typography 
             gutterBottom  
             component='div'
             sx={{
                display:'flex',
                justifyContent:'center',
                fontSize:17
             }}
             >
                {product.title}
            </Typography>
           <Box

           
           sx={{
            width:'100%',
            position:'absolute',
            bottom:70,
            right:0,
            display:'flex',
            paddingLeft:2,
            paddingRight:2,
            justifyContent:'space-between'
            
            
           }}
           >
          <Box
          sx={{
            display:'flex',
            flexDirection:'column',
          }}
          >
          <Chip 
            label={`${product.price}$`}
            color='secondary'
            sx={{
                fontSize:16,
     
            }}
            />
         

    
            <Rating
            defaultValue={product.rating.rate}
            precision={0.5}
                sx={{
                    mt:2
                }}
            />
          </Box>

          <Box>
            <Chip
                label={`В наличии: ${product.rating.count}`}
                color='success'
                sx={{
                    fontSize:'16px'
                }}
            />
          </Box>
                
          
           </Box>

          <CardActions>
          <Button 
           sx={{
            position:'absolute',
            bottom:0,
            right:0,
            width:'100%',
            height:{
                xs:60
            }

           }}

         
           size='large'
           disableElevation
           variant='contained'
           onClick={()=>{navigate('product-full-info/'+product.id)}}
           >
            Узнать больше
           </Button>
          </CardActions>
            
          </CardContent>
            
          
        </Card>
    );
}
