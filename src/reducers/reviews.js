import {RECEIVE_REVIEWS,COMMENT_CREATED,ALL_REVIEWS, DELETE_REVIEW} from '../actions/reviews'
const intialState=[]
const reviews = (state = intialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.payload
        case ALL_REVIEWS:
            return action.payload
        case COMMENT_CREATED:
            return state.concat(action.payload)
        case DELETE_REVIEW:
            return state.filter(r=>r.id!==action.payload)   
    
        default:
            return state
    }
  }
  
  export default reviews