import {RECEIVE_REVIEWS} from '../actions/reviews'
const intialState=[]
const reviews = (state = intialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.payload
        
        
            
    
        default:
            return state
    }
  }
  
  export default reviews