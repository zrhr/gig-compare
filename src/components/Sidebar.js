import React from 'react'
import {Card, CardText,Row} from 'reactstrap'
export default function Sidebar() {
    return (
        <div><Row>
            <Card>
                
                <input type="text" placeholder="Type to search"></input>
            </Card>
            </Row>
            <Row>
            <Card>Hello</Card>
            </Row>
        </div>
    )
}
