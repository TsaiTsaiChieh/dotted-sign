import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: authState = {
  registerIsPass: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegisterIsPass: (state, {payload}: PayloadAction<boolean>) => {
      state.registerIsPass = payload
    },
  },
})

export const {setRegisterIsPass} = authSlice.actions
export default authSlice.reducer
