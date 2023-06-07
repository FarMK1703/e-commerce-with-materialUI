import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Box, CircularProgress} from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux-store/fethProductsSlice";
import CategorySelect from "../components/CategorySelect";

export default function Catalog() {
    const dispatch = useDispatch();

    
    const products = useSelector((store) => store.fetchProducts.products);
    const filteredProducts=useSelector((store)=>store.fetchProducts.filteredProducts)

  
    const [isLoading, setIsLoading] = useState(false);

    
    
    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        } 
        else{
          return
        }
    }, []);



  





    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                "https://fakestoreapi.com/products"
            );
            dispatch(setProducts(response.data));
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };





    if (!isLoading) {
        return (
            <div
                style={{
                    backgroundColor: "#E7EBF0",
                    scrollBehavior: "smooth",
                    paddingBottom: "50px",
                }}
            >
                <CategorySelect />
                <Box
                    sx={{
                        zIndex: "1000",
                        display: "flex",
                        flexWrap: "wrap",
                        minHeight: "100vh",
                    }}
                >
                    {filteredProducts.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                index={index}
                                product={product}
                            />
                        );
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
