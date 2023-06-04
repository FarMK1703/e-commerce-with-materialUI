import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from 'axios'
import { useDispatch, useSelector  } from "react-redux";
import { setProducts } from "../redux-store/fethProductsSlice";





export default function Catalog() {
  
   const dispatch=useDispatch()


    const category=useSelector(store=>store.productCategory.category)
    const products=useSelector(store=>store.fetchProducts.products)

    
    
    const [filteredProducts, setFilteredProducts]=useState([])
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
     
      fetchProducts()

    },[])




    useEffect(()=>{
     if(category.ENGTitle!=='common'){
      setFilteredProducts(products.filter(product=>product.category===category.ENGTitle))
     }
     else{
     
      setFilteredProducts(products)
     }
    },[category])



    const fetchProducts=async ()=>{
      try{
       
        setIsLoading(true)
        const response=await axios.get('https://fakestoreapi.com/products')  
        dispatch(setProducts(response.data))
        setFilteredProducts(response.data)
        setIsLoading(false)
      }

      catch(error){
        console.error(error)
      }
    }


    



  






   




    if (!isLoading) {
        return (
          
          
              <div
            style={{
              backgroundColor: "#E7EBF0",
              scrollBehavior:'smooth',
              
              
            }}
            >
             <Typography variant="h5"
             color='secondary'
             sx={{
              pl:4,
              pt:2
             }}
             >
             {category.RUTitle}
             </Typography>
              <Box
                sx={{
                    zIndex: "1000",
                    display: "flex",
                    flexWrap: "wrap",
                    minHeight: "100vh",
                }}
            >

            
                {filteredProducts.map((product, index) => {
                    return <ProductCard key={index}  product={product} />;
                })}
            </Box>
            </div>
           
        );
    } else {
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress size={60} />
            </Box>
        );
    }
}
