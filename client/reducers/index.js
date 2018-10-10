
import { combineReducers } from "redux"

import milks from './milks'
import cafes from './cafes'

const reducers = combineReducers({
  milks: milks,
  cafes: cafes
})

export default reducers