import React from "react";
import { Modal,Button} from "react-bootstrap";
function Nat2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Indian Society for Training & Development (ISTD)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is an Institutional Member of Indian Society for Training & Development (ISTD) which was established in April 1970. ISTD has a large pool of individuals and institutions involved in the area of training and development of Human Resource from Government, Public and Private Sector Organizations & Enterprises; Educational and Training Institutions and other Professional Bodies.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Nat2