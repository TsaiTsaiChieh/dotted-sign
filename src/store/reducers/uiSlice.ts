import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: uiState = {
  modals: {
    shouldAuthVisible: false,
    registerVisible: false,
    loginVisible: false,
  },
  loadingVisible: false,
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
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loadingVisible = payload
    },
  },
})

export const {
  setShouldAuthVisible,
  setRegisterVisible,
  setLoginVisible,
  setLoading,
} = uiSlice.actions
export default uiSlice.reducer
