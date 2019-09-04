import React from 'react';
import {useEffect,useState} from 'react';
import { receivePosts, addRatings, addToCompare } from '../actions/gigs.js';
import { connect } from 'react-redux';
import InfoCard from './InfoCard'
import Header from './Header'
import Sidebar from'./Sidebar'
import Explorer from './Explorer'

import { Container, Row, Col, Spinner } from 'reactstrap';
import ModalPage from './ModalPage.js';
function App({gigs,receivePosts, addRatings,ownProps,addToCompare}) 
{
  const [loaded,setLoaded]=useState(false)
  const [update,setUpdate]=useState(false)
  const [modalShow,setModalShow]=useState(false)
  useEffect(() => {
    console.log(ownProps)
    receivePosts();
    return setLoaded(true);
     }, [])

    useEffect(()=>{
      
    
      if(loaded){
        console.log("hello")
   gigs.map(x=>addRatings(x.id));
     setLoaded(false) 
    setUpdate(true)
     }
    },[gigs]);
const addToCompareHandler=(id)=>{
addToCompare(id);

}
if(update){
let gigCount=0;
for(let i=0; i<gigs.length; i++)
{
  if(gigs[i].compare)
gigCount++;
}
if(gigCount===2)
{
  if(!modalShow)
setModalShow(true);
}
}
  return (
    <> 
    <Header></Header>
   <ModalPage modalShow={modalShow}></ModalPage>
    <Container  >
     
      <Row>
     
      <Col md="12" sm="12" xs="12">  
        <Row>
         <Explorer path=""/> 
        </Row>
        </Col>
       
        </Row>
      <Row>
      
      <Col md="12" sm="12" xs="12">  
        <Row>
          
        <Col md="3" sm="12">
         < Sidebar/>
        </Col>
        <Col md="9"sm="12">
         <Row>
           <h1>Browse and Compare Gig Economy Apps </h1>
         </Row>
         <Row>
           <Col md="2" sm="5">{gigs.length} results</Col>
            <Col auto ></Col>
           <Col md="2" sm="2"><select name="type" >
             <option selected value="Best Match">Best Match</option>
             <option  value="Courier">Courier</option>
             <option value="Chauffeur">Chauffeur</option>
             </select> </Col>
           {/* <Col><Button onClick={()=>{console.log(gigs[0].rating); setUpdate(true)}}>Click</Button></Col> */}
         </Row>
         <Row>
           <Col>
           <hr></hr>
           </Col>
         </Row>

          <Row>

     {!update  ?<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />: gigs.map(gig=>{ return (<Col  md="4" xs="12" sm="6" ><InfoCard item={gig} addToCompareHandler={addToCompareHandler} key={gig.id}/></Col>) })}
     </Row>
     </Col>
     </Row>
     </Col>
    
     </Row>
     </Container>
    </>
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
  addToCompare:(id)=>dispatch(addToCompare(id)),
  addRatings:(id)=>dispatch(addRatings(id)),
  receivePosts:()=>dispatch(receivePosts())
}
}
export default connect(mapStatetoProps,mapDispatchToProps)( App);
