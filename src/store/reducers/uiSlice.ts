import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: uiState = {
  modals: {
    shouldAuthVisible: false,
    registerVisible: false,
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
  },
})

export const {setShouldAuthVisible, setRegisterVisible} = uiSlice.actions
export default uiSlice.reducer
