import React, {forceUpdate}from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    export default function InfoCard(props) {
 
   
    return (
        <div >
            <Card>
            <Link to={`/${props.item.name.toLowerCase()}`}> <CardImg top width="125px" height="125px" src={props.item.logoUrl} alt={props.item.name}/></Link>
            <CardBody>
            <div><p>rating: {props.item.rating}</p></div>
            <Link to={`/${props.item.name.toLowerCase()}`}><h4>{props.item.name}</h4></Link>
            <h5>{props.item.type}</h5>
            <ul>
                <li>Minimum Pay: {props.item.minPay}</li>
                <li>Tips: {props.item.tips}</li>
                <li>Busy Times: {props.item.peakTimes}</li>
                <li>{props.item.traded} Company</li>
            </ul>
            <hr/>

            <input type="checkbox" data-id={props.item.id}/> <span> Add to Compare</span> 
            </CardBody>
            </Card>
        </div>
    )
}
