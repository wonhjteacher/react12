import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
        state = state.push(action.payload) ;
        action.type="SET_ADD_ITEM"
    },
    deleteCart: (state,action) => {
        
        action.type="SET_DELETE_ITEM"
    },
   
  },
})

export const {addCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer