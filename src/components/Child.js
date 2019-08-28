import React from "react";
import {connect} from 'react-redux'
import NoMatch from "./NoMatch";
function Child({ match,number }) {
    console.log(match, number)
    if(match===number)

    return (
      <div>
        <h3>ID: {match}</h3>
      </div>
    );
    else return(
        <NoMatch/>
    )
}
function mapStateToProps(state, ownProps) {
  console.log(state)
    const match = ownProps.match.params.id;
    const number =state.gigs[0];
    const object1= {
        "match":match,
        "number":number
    }
  
    return object1
   
  }
  
    
    export default connect(mapStateToProps)( Child);