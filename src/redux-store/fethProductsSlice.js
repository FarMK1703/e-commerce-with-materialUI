import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 products:[],
 filteredProducts:[]
}

export const fetchProductSlice = createSlice({
  name: 'fetсhedProducts',
  initialState,
  reducers:{
    setProducts:(state,action)=>{
      state.products=action.payload
      state.filteredProducts=action.payload
      
    },


    setFilteredproducts:(state,action)=>{
      if (action.payload !== ""&& action.payload!=='common'){
      state.filteredProducts=state.products.filter(product=>product.category===action.payload)
      }
      else{
        state.filteredProducts=state.products
      }
    }

   

    
  }})



  export const {setProducts,setFilteredproducts}=fetchProductSlice.actions
  export default fetchProductSlice.reducer