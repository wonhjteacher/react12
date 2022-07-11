import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: false,
  }
  

export const userSlice = createSlice({
    name: 'user',  //리듀서의 이름 
    initialState,   //데이터의 초기값 
    reducers:{ //상태가 변하면 어떻게 실행될지 지정한다. 
        login : (state, action) => {
            state.value = action.payload;
            action.type="SET_USER_LOGIN"

        },
        logout: (state, action) => {
            state.value = action.payload;
            action.type="SET_USER_LOGOUT"
        },
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;