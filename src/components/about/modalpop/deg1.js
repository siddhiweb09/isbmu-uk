import React from "react";
import { Modal,Button} from "react-bootstrap";
import suu from '../../../Images/docimg/su-letter.webp';
function Deg1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          SAMBALPUR UNIVERSITY
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={suu} style={{width:"100%",marginBottom:'20px'}} />
        </Modal.Body>
      </Modal>
    );
  }

export default Deg1;