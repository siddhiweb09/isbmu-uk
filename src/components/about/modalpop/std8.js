import React from "react";
import { Modal, Button } from "react-bootstrap";
import pci from "../../../Images/docimg/pci-img.jpg";
import pharma_cert from "../../../Images/docimg/pharma_cert.jpg";
function Std8(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pharmacy Council of India
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={pharma_cert}
          style={{ width: "100%", marginBottom: "20px" }}
        />
        <img src={pci} style={{ width: "100%", marginBottom: "20px" }} />
      </Modal.Body>
    </Modal>
  );
}

export default Std8;
