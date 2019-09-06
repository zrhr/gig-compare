import {RECEIVE_REVIEWS,COMMENT_CREATED,ALL_REVIEWS, DELETE_REVIEW, OPEN_REVIEW, REVIEW_EDITED} from '../actions/reviews'
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
        case OPEN_REVIEW:
            return state.map(review=>{
                 if(action.payload===review.id)
                    return {...review, mod:!review.mod}
                else
                        return review })    
        case REVIEW_EDITED:
            return state.map(review=>{
                if(action.id===review.id)
                   return action.payload
               else
                       return review })
        default:
            return state
    }
  }
  
  export default reviews