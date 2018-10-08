
import { combineReducers } from "redux"

import milks from './milk.js'

const reducers = combineReducers({
  milks: milks
})

export default reducers