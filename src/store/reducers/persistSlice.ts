import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: persistState = {}

export const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    setFile: (state, {payload}: PayloadAction<string | undefined>) => {
      state.docBase64 = payload
      state.docIsPDF = !payload ?
        undefined :
        payload.includes('application/pdf')
    },
    setSign: (state, {payload}: PayloadAction<string | undefined>) => {
      state.signBase64 = payload
    },
  },
})

export const {setFile, setSign} = persistSlice.actions
export default persistSlice.reducer
