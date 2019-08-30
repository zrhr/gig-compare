import React from "react";
import {connect} from 'react-redux'
import NoMatch from "./NoMatch";
import Explorer from "./Explorer"
function Child({ match,number }) {
    console.log(match, number)
    if(match===number.toLowerCase())

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
        "number":"fine"
    }
  
    return object1
   
  }
  
    
    export default connect(mapStateToProps)( Child);