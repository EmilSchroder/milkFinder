
import { combineReducers } from "redux"

import milks from './milks.js'

const reducers = combineReducers({
  milks: milks
})

export default reducers