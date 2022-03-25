import { combineReducers } from '@reduxjs/toolkit'
import fundListSlice from './fundListSlice'

const rootReducer = combineReducers({
  fundList: fundListSlice.reducer,
})

export default rootReducer;