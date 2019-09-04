import { combineReducers } from 'redux'
import gigs from './gigs'
import reviews from './reviews'


export default combineReducers({
  gigs:gigs,reviews:reviews
})