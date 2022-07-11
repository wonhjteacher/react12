import { configureStore,combineReducers } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import userSlice from './user/userSlice'
import storage from "redux-persist/lib/storage"; //로컬스토리지 
//import storageSession from"redux-persist/lib/storage/session"; //세션스토리지
import { persistReducer } from 'redux-persist'; 
//리듀서가 실행될때 persist 를 같이 사용하게 묶어서 사용

const persistConfig = {
  key: 'root',  //  localStorage에 저장될 때의 key값.
  storage,
}

const rootReducer = combineReducers({
  cart:cartSlice,
  user:userSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
// rootReducer와 persist를 묶어서 사용.
//redux-persist를 사용해서  로컬스토리지에 state 저장하면 페이지가 새로고침 되어도 initialState 값이
//로컬스토리지에 저장된 state 값으로 대체되기 때문에 초기화 되지 않는다.

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;