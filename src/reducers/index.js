import { combineReducers } from 'redux'

import { alert } from './alert.reducer'
import { authentication, registration } from './auth.reducer'

export const rootReducer = combineReducers({
  alert,
  authentication,
  registration
})