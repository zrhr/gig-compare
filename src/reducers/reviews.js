import {RECEIVE_REVIEWS,COMMENT_CREATED} from '../actions/reviews'
const intialState=[]
const reviews = (state = intialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.payload
        
        case COMMENT_CREATED:
            return state.concat(action.payload)
            
    
        default:
            return state
    }
  }
  
  export default reviews