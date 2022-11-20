import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: uiState = {
  modals: {
    shouldAuthVisible: false,
    registerVisible: false,
    loginVisible: false,
    abandonVisible: false,
  },
  loadingVisible: false,
  stepId: '1',
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
    setAbandonVisible: (state, {payload}: PayloadAction<boolean>) => {
      state.modals.abandonVisible = payload
    },
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loadingVisible = payload
    },
    setStepId: (state, {payload}: PayloadAction<string>) => {
      state.stepId = payload
    },
  },
})

export const {
  setShouldAuthVisible,
  setRegisterVisible,
  setLoginVisible,
  setAbandonVisible,
  setLoading,
  setStepId,
} = uiSlice.actions
export default uiSlice.reducer
