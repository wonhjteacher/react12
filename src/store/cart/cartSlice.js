import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
       // console.log(action.payload)
        const equalItem = state.findIndex(item => item.id === action.payload.id);
        if(equalItem >=0) {
          alert ('장바구니에 동일한 상품이 있습니다.')
        }else{
          state = state.push(action.payload) ;
        }
        action.type="SET_ADD_ITEM"
    },
    deleteCart: (state,action) => {
      //console.log(action.payload)
      const num =state.findIndex((ele)=> ele.id === action.payload[0].id)
      state = state.splice(num,1);
      action.type="SET_DELETE_ITEM" 
    },
   
  },
})

export const {addCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer