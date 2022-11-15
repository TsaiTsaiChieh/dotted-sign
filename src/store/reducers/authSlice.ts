import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: authState = {
  isAuth: false,
  nativeRegisterIsPass: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, {payload}: PayloadAction<boolean>) => {
      state.isAuth = payload
    },
    setNativeRegisterIsPass: (state, {payload}: PayloadAction<boolean>) => {
      state.nativeRegisterIsPass = payload
    },
    setUserData: (state, {payload}: PayloadAction<UserDataType>) => {
      state.userData = payload
    },
  },
})

export const {setIsAuth, setNativeRegisterIsPass, setUserData} =
  authSlice.actions
export default authSlice.reducer
