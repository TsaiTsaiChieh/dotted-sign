import {combineReducers} from '@reduxjs/toolkit'

import authReducer from './reducers/authSlice'
import persistReducer from './reducers/persistSlice'
import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  persist: persistReducer,
})

export default rootReducer
