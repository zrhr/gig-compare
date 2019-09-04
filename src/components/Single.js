import React,{useState,useEffect} from 'react'
import { MDBTable,MDBCard, MDBCardText, MDBCardImage,
    MDBBtn,Container, MDBRow, MDBCol } from 'mdbreact';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { breakStatement } from '@babel/types';
import CompTable from './CompTable'
import { receiveReviews } from '../actions/reviews';
import { connect } from 'react-redux';
 function Single(props) {
    const [loaded,setLoaded]=useState(false)
 
  useEffect(() => {
    console.log(props.ownProps.item.id)
   props.receiveReviews(props.ownProps.item.id)
    return setLoaded(true);
     }, [])
    return (
        <div>
            <MDBRow>
                <MDBCol>
                    <h1>{props.ownProps.item.name}</h1>
                    <h4>{props.ownProps.item.type}</h4>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="8" sm="1">
                    <MDBCard>
                        <MDBCardImage src={props.ownProps.item.logoUrl}></MDBCardImage>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" sm="1">
                <MDBCard>

                
                <MDBBtn color="primary" size="lg" block>Sign up for {props.ownProps.item.name}</MDBBtn>
                <br></br>
                <MDBBtn color="secondary" size="md"  block>Add to compare</MDBBtn>
                </MDBCard>
                </MDBCol>
            </MDBRow>
            <br></br>
            <br></br>
            <MDBRow>
                <MDBCol>
                <h5>Gig Description</h5>
                <hr></hr>
                {props.ownProps.item.summary}
                </MDBCol>
            </MDBRow>
            <br></br>
            <br></br>
         <MDBRow>   <MDBCol>
        <h5>Gig Info</h5>
            <hr></hr>
            </MDBCol>
            <CompTable item={props.ownProps.item}></CompTable>
            </MDBRow>
            <MDBRow>
                <MDBCol>
        <h5>User Reviews</h5>
        <hr></hr>{!loaded ?<>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </>: 
     props.reviews.map(x=>{return (
      <MDBCard width="100%"><MDBCardText>x.comment
</MDBCardText>
    </MDBCard>)}) }        <MDBCard>
                      
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

function mapStatetoProps(state,ownProps){
    return{
      reviews: state.reviews
      , ownProps:ownProps
    }
  }
  function mapDispatchtoProps (dispatch){
  return {
    
    receiveReviews:id=>dispatch(receiveReviews(id))
  }
  }
export default connect(mapStatetoProps, mapDispatchtoProps) (Single);
