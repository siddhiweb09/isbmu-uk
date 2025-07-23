import React from "react";
import { Modal, Button } from "react-bootstrap";
import suu from "../../../Images/rec/ISO_EGAC_DOC.webp";

function Qua1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          International Organization for Standardization (ISO)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalparas">
        <div className="modal-body recog">
          <img src={suu} style={{ width: "100%", marginBottom: "20px" }} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Qua1;
