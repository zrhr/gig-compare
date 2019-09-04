import {RECEIVE_GIGS,ADD_RATING, ADD_COMPARE} from '../actions/gigs' 

const intialState=[]
const gigs = (state = intialState, action) => {
    switch (action.type) {
        case RECEIVE_GIGS:
            return action.payload
        case ADD_RATING:
            return state.map(gig=>
                        {
                        if(gig.id===action.id && action.payload!=null)
                            return{...gig, "rating":action.payload, "compare": false}
                        else
                            return{...gig, "compare":false}
                        })           
                    
        case ADD_COMPARE:
            return state.map(gig=>{
                if(gig.id===action.id )
                            return{...gig,  "compare": !gig.compare}
                        else
                            return{...gig}
            })
            
    
        default:
            return state
    }
  }
  
  export default gigs