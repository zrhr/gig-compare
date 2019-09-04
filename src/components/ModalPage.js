import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';

class ModalPage extends React.Component {




render() {
  return (
      <MDBContainer>
            <MDBModal isOpen={this.props.modalShow} frame position="bottom">
          <MDBModalBody className="text-center">
            To compare blank and blank hit the button below!
            <MDBBtn color="secondary" >Cancel</MDBBtn>
            <MDBBtn color="primary">Compare</MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;