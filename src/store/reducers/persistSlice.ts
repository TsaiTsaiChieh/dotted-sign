import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: persistState = {}

export const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    setFile: (state, {payload}: PayloadAction<string | undefined>) => {
      state.docBase64 = payload
    },
  },
})

export const {setFile} = persistSlice.actions
export default persistSlice.reducer
