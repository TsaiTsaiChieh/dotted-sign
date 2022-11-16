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
    login: (state, {payload}: PayloadAction<UserDataType>) => {
      state.isAuth = true
      state.userData = payload
    },
    setNativeRegisterIsPass: (state, {payload}: PayloadAction<boolean>) => {
      state.nativeRegisterIsPass = payload
    },
    logout: (state) => {
      state.isAuth = false
      state.userData = undefined
    },
  },
})

export const {login, setNativeRegisterIsPass, logout} = authSlice.actions
export default authSlice.reducer
