import React from "react";
import { Modal,Button} from "react-bootstrap";
function Nat4(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          AIMS International
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is a member of AIMS International which facilitates global networking among it's members. AIMS International provides a platform for knowledge collaboration between academic-to-academic, academic-to-business, and business-to-business institutions. AIMS International is a "home" for Indian management scholars worldwide.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Nat4