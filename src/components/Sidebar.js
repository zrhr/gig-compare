import React from 'react'
import {Card,  Row} from 'reactstrap'
export default function Sidebar(props) {
    return (
        <div>
            <Row>
                <Card>

                    <input
                        type="text"
                        onChange={(e) => {
                        props.handleSearchTerm(e)
                    }}
                        value={props.searchTerm}
                        placeholder="Search by name"></input>
                </Card>
            </Row>
            <Row>
                <Card>Hello</Card>
            </Row>
        </div>
    )
}
