import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 products:[]
}

export const fetchProductSlice = createSlice({
  name: 'fethcedProducts',
  initialState,
  reducers:{
    setProducts:(state,action)=>{
      state.products=action.payload
    }
   

    
  }})



  export const {setProducts}=fetchProductSlice.actions
  export default fetchProductSlice.reducer