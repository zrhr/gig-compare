import React,{useState,useEffect} from 'react'
import { MDBIcon,MDBCard, MDBCardText, MDBCardImage, MDBInput,
    MDBBtn,Container, MDBRow, MDBCol, MDBCardTitle } from 'mdbreact';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    import Moment from 'react-moment'

import CompTable from './CompTable'
import { receiveReviews , createComment} from '../actions/reviews';
import { connect } from 'react-redux';
import { create } from 'jss';
 function Single(props) {
    const [loaded,setLoaded]=useState(false)
    const [textArea,setTextArea]=useState("");
    const [userRating, setUserRating] = useState(5)
  useEffect(() => {
    console.log(props.ownProps.item.id)
   props.receiveReviews(props.ownProps.item.id)
    return setLoaded(true);
     }, [])
const handleTextArea=(e)=>{
    setTextArea(e.target.value)
}
const handleSelect=(e)=>{
    setUserRating(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault();
    setTextArea("");
    props.createComment({"jobId":props.ownProps.item.id, "userId":1, "comment":textArea, "rating":userRating})
}
     const calendarStrings = {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };
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
        <hr></hr>
        <MDBRow>
            <MDBCol>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
        <MDBInput onChange={(e)=>handleTextArea(e)}
          type="textarea"
          label="Review"
          rows="2"
          icon="pencil-alt"
          value={textArea}
        />
        <div>
        <select className="browser-default custom-select" onChange={(e)=>handleSelect(e)}>
          <option>Review Rating</option>
          <option value="1">1 Stars</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
         <MDBBtn className="btn btn-outline-blue" type="submit" >
                    Add Comment
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </form>
            </MDBCol>
        </MDBRow>
        {!loaded ?<>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </>: 
     props.reviews.map(x=>{const num=x.rating; const ratingArray= Array(num).fill(1);
        
         return (
      <MDBCard width="100%" testimonial>
          <MDBCardTitle>
              <Moment fromNow={true} calendar={calendarStrings} date={x.createDateTime}/>
            </MDBCardTitle><p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                 {x.comment}
                </p>
                <div className="orange-text">
                    {ratingArray.map(i=><MDBIcon icon="star" />)}
                  
                  
                </div>
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
    createComment:id=>dispatch(createComment(id)),
    receiveReviews:id=>dispatch(receiveReviews(id))
  }
  }
export default connect(mapStatetoProps, mapDispatchtoProps) (Single);
