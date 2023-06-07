import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
    sx={{
        height:'200px',
        backgroundColor:'#303846',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >

    <Typography  
    sx={{
        fontSize:16,
        color:'white'
    }}
    variant='subtitle2'>
      e-commerce-shop
    </Typography>

    </Box>
  )
}
