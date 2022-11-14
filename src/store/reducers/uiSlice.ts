import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: uiState = {
  modals: {
    shouldAuthVisible: false,
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShouldAuthVisible: (state, {payload}: PayloadAction<boolean>) => {
      state.modals.shouldAuthVisible = payload
    },
  },
})

export const {setShouldAuthVisible} = uiSlice.actions
export default uiSlice.reducer
