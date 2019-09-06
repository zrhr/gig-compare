import React,{useEffect} from 'react'
import {Card, CardText, Row, CardHeader,CardBody} from 'reactstrap'
import {connect} from 'react-redux'
import {receiveAllReviews} from '../actions/reviews'
function Sidebar(props) {
    useEffect(() => {
       props.receiveAllReviews()
       
    }, [])
    return (
        <div>
           
            <Row>
                
                <Card style={{width:100+ "%", margin:"1em"}}>

                    <input
                        
                        type="text"
                        onChange={(e) => {
                        props.ownProps.handleSearchTerm(e)
                    }}
                        value={props.ownProps.searchTerm}
                        placeholder="Search by name"></input>
                </Card>
            </Row>
           
            <Row>
                <Card style={{width:100+ "%", margin:"1em"}}><CardHeader>Latest Reviews</CardHeader>
                    <CardBody>
                        {props.reviews.length>0?props.reviews.map(r=><CardText>{r.jobName}: {r.comment}</CardText>):"Loading"}
                     </CardBody>
                </Card>    
            </Row>
        </div>
    )
}
function mapStatetoProps(state, ownProps) {
    return {reviews:state.reviews, ownProps: ownProps}
}
function mapDispatchToProps(dispatch) {
    return {
        receiveAllReviews: ()=>dispatch(receiveAllReviews())
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar)
