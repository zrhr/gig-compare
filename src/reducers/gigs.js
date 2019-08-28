const intialState=["five"]
const gigs = (state = intialState, action) => {
    switch (action.type) {
      case 'LOAD_GIGS':
        return action.gigs
      default:
        return state
    }
  }
  
  export default gigs