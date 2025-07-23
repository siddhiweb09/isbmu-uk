import React from "react";
import { Modal,Button} from "react-bootstrap";
function Nat3(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Bombay Management Association (BMA)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is an institutional member of Bombay Management Association (BMA) which has pioneered efforts to help enhance managerial effectiveness and improve the standards of Business Management in India. BMA is widely regarded as one of the best management associations in India resulting in over 1.25 lakh managers.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Nat3