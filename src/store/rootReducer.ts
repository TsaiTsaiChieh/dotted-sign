import {combineReducers} from '@reduxjs/toolkit'

import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
})

export default rootReducer
