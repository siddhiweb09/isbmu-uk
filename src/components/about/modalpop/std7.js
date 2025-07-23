import React from "react";
import { Modal,Button} from "react-bootstrap";
import membership from '../../../Images/docimg/aiu-membership.jpg';
function Std4(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Association of Indian Universities (AIU)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={membership} style={{width:"100%",marginBottom:'20px'}} />
        </Modal.Body>
      </Modal>
    );
  }

export default Std4 