import {configureStore} from '@reduxjs/toolkit'
import toggleSideBarSliceReducer from './toggleSideBarSlice'
import fethProductsSlice from './fethProductsSlice'


export const store=configureStore({
    reducer:{
      sideBarIsActive:toggleSideBarSliceReducer,
      fetchProducts:fethProductsSlice
    },
    

   
})



