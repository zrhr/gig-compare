import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {MDBCol, MDBRow, MDBCard, MDBCardImage, MDBContainer} from 'mdbreact';
import CompTable from './CompTable';
import Header from './Header';
import Explorer from './Explorer'
function Compare(props) {
    console.log(props)
    if (props.gigs.length === 0) 
        return (<Redirect path="/"/>)
    else 
        return (
            <div>
                <Header></Header>

                <MDBContainer>
                    <Explorer path="compare"></Explorer>
                    <MDBRow>
                        {props
                            .gigs
                            .map(gig => {
                                if (gig.compare) 
                                    return (

                                        <MDBCol>
                                            <h1>{gig.name}</h1>

                                            <MDBRow>
                                                <MDBCol md="8" sm="1">
                                                    <MDBCard>
                                                        <MDBCardImage src={gig.logoUrl} height="20em"></MDBCardImage>
                                                    </MDBCard>
                                                </MDBCol>
                                            </MDBRow>
                                            <CompTable item={gig}></CompTable>
                                        </MDBCol>
                                    )
                            })}

                    </MDBRow>
                </MDBContainer>
            </div>
        )
}
function mapStatetoProps(state, ownProps) {
    return {gigs: state.gigs, ownProps: ownProps}
}

export default connect(mapStatetoProps, null)(Compare);
