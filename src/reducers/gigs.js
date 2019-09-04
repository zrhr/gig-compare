import {RECEIVE_GIGS,ADD_RATING} from '../actions/gigs' 

const intialState=[]
const gigs = (state = intialState, action) => {
    switch (action.type) {
        case RECEIVE_GIGS:
            return action.payload
        case ADD_RATING:
            return state.map(gig=>
                        {
                        if(gig.id===action.id && action.rating!=null)
                            return{...gig, "rating":action.rating, "compare": false}
                        else
                            return{...gig, "rating": "5", "compare":false}
                        })           
                    

            
    
        default:
            return state
    }
  }
  
  export default gigs