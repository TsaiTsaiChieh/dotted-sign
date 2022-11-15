import {combineReducers} from '@reduxjs/toolkit'

import authReducer from './reducers/authSlice'
import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
})

export default rootReducer
