import React from "react";
import { Modal,Button} from "react-bootstrap";
import allindia from '../../../Images/docimg/allindia.jpg';
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
          All India Council of Technical Education (AICTE)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={allindia} style={{width:"100%",marginBottom:'20px'}} />
        </Modal.Body>
      </Modal>
    );
  }

export default Std4 