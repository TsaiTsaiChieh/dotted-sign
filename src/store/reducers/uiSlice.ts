import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: uiState = {
  modals: {
    shouldAuthVisible: false,
    registerVisible: false,
    loginVisible: true,
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShouldAuthVisible: (state, {payload}: PayloadAction<boolean>) => {
      state.modals.shouldAuthVisible = payload
    },
    setRegisterVisible: (state, {payload}: PayloadAction<boolean>) => {
      state.modals.registerVisible = payload
    },
    setLoginVisible: (state, {payload}: PayloadAction<boolean>) => {
      state.modals.loginVisible = payload
    },
  },
})

export const {setShouldAuthVisible, setRegisterVisible, setLoginVisible} =
  uiSlice.actions
export default uiSlice.reducer
