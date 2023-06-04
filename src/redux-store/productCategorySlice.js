import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: {
    RUTitle:'Все',
    ENGTitle:'common'
  },
}

export const productCategorySlice = createSlice({
  name: 'productCategory',
  initialState,
  reducers:{

    setProductCategory:(state,action)=>{
        state.category.ENGTitle=action.payload.ENGTitle
        state.category.RUTitle=action.payload.RUTitle
    }

    
  }})



  export const {setProductCategory}=productCategorySlice.actions
  export default productCategorySlice.reducer