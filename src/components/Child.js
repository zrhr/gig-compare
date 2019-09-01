import React from "react";
import {connect} from 'react-redux'
import NoMatch from "./NoMatch";
import Explorer from "./Explorer"
function Child({ match, gigs }) {
    const names=gigs.map(gig=>gig.name.toLowerCase());
    const index=names.indexOf(match);

    if(index!==-1)
    return (
     <Explorer path={match}/>
     
    );
    else return(
        <NoMatch/>
    )
}
function mapStateToProps(state, ownProps) {
  console.log(state)
    const match = ownProps.match.params.id;
    
    const object1= {
        "match":match,
        "gigs": state.gigs,
        

    }
  
    return object1
   
  }
  
    
    export default connect(mapStateToProps)( Child);