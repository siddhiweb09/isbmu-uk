import React from "react";
import { Modal,Button} from "react-bootstrap";
function Int3(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          The Chartered Institute of Payroll Professionals (CIPP)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is the institutional member of and associated with The Chartered Institute of Payroll Professionals, which is a Chartered body for payroll, pensions and reward professionals in the UK and is dedicated to raising the profile of payroll businesses across the UK and internationally.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Int3