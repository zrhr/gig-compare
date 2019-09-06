import React, {Component} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody} from 'mdbreact';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
class ModalPage extends React.Component {
    state = {
        redirect: false,
        cancel: false
    }

    // {()=><Redirect     to={{       pathname: "/compare",       state: { from:
    // this.props.location }     }}    />
    compare = () => {
        this.setState({redirect: true, cancel: false})
    }
    cancel = () => {

        this.setState({redirect: false, cancel: true})
    }
    render() {
        console.log(this.props, "modal")
        if (this.state.redirect) 
            return (<Redirect to="/compare"/>)
        else if (this.state.cancel) 
            return window.location.reload()
        else 
            return (
                <MDBContainer>
                    <MDBModal
                        isOpen={this.props.modalShow}
                        toggle={this.cancel}
                        frame
                        position="bottom">
                        <MDBModalBody className="text-center">
                            To compare hit the button to the far right!
                            <MDBBtn color="secondary" onClick={this.cancel}>Cancel</MDBBtn>
                            <MDBBtn color="primary" onClick={this.compare}>Compare</MDBBtn>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
            );
        }
    }

export default ModalPage;