import {configureStore} from '@reduxjs/toolkit'
import toggleSideBarSliceReducer from './toggleSideBarSlice'
import productCategorySlice from './productCategorySlice'
import fethProductsSlice from './fethProductsSlice'


export const store=configureStore({
    reducer:{
      sideBarIsActive:toggleSideBarSliceReducer,
      productCategory:productCategorySlice,
      fetchProducts:fethProductsSlice
    },
    

   
})



