import React from 'react';
import {useEffect} from 'react';
import { receivePosts } from '../actions';
import { connect } from 'react-redux';
import InfoCard from './InfoCard'
import Header from './Header'
import Sidebar from'./Sidebar'
import Explorer from './Explorer'
import { Container, Row, Col } from 'reactstrap';
function App(props) 
{
 console.log(props.gigs)
  useEffect(() => {
    console.log(props.ownProps)
    props.receivePosts();
     }, [])
  return (
    <Container  fluid>
      <Header></Header>
      <Row>
      <Col md="1" sm="0" xs="0"></Col>  
      <Col md="10" sm="12" xs="12">  
        <Row>
         <Explorer path=""/> 
        </Row>
        </Col>
        <Col md="1" sm="0" xs="0"></Col>
        </Row>
      <Row>
      <Col md="1" sm="0" xs="0"></Col>  
      <Col md="10" sm="12" xs="12">  
        <Row>
          
        <Col md="2" sm="12">
         < Sidebar/>
        </Col>
        <Col md="10"sm="12"><Row>
     {props.gigs.length===0 ?"Loading": props.gigs.map(gig=>{ return (<Col  md="4" xs="12" sm="6" ><InfoCard item={gig} key={gig.id}/></Col>) })}
     </Row>
     </Col>
     </Row>
     </Col>
     <Col md="1" sm="0" xs="0"></Col>
     </Row>
     </Container>
    
  );
}
function mapStatetoProps(state,ownProps){
  return{
    gigs: state.gigs
    , ownProps:ownProps
  }
}
function mapDispatchToProps (dispatch){
return {
  receivePosts:()=>dispatch(receivePosts())
}
}
export default connect(mapStatetoProps,mapDispatchToProps)( App);
