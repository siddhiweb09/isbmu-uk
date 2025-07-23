import React from "react";
import { Modal,Button} from "react-bootstrap";
import BCI from "../../../Images/PDF/BCI.pdf";
function Std6(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Bar Council of India (BCI)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University's School of Law has been approved by Bar Council of India (BCI) with a view to cater to the requirements of the legal profession. Students across the globe are groomed for bright professional careers by providing wide range of exposure on theoretical as well as practical aspects of law.
          </p>
          <a href={BCI}>Download Document</a>
        </Modal.Body>
      </Modal>
    );
  }

export default Std6