import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
export default function InfoCard(props) {
    return (
        <div >
            <Card>
            <CardImg top width="125px" height="125px" src={props.item.logoUrl} alt={props.item.name}/>
            <CardBody>
            <div><p>rating:{}</p></div>
            <h4>{props.item.name}</h4>
            <h5>{props.item.type}</h5>
            <ul>
                <li>Minimum Pay: {props.item.minPay}</li>
                <li>Tips: {props.item.tips}</li>
                <li>Busy Times: {props.item.peakTimes}</li>
                <li>{props.item.traded} Company</li>
            </ul>
            <hr/>

            <input type="checkbox" data-id={props.item.id}></input> 
            </CardBody>
            </Card>
        </div>
    )
}
