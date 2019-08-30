import {RECEIVE_GIGS} from '../actions/index' 

const intialState=[]
const gigs = (state = intialState, action) => {
    switch (action.type) {
      case RECEIVE_GIGS:
        return action.payload
      default:
        return state
    }
  }
  
  export default gigs