import React from "react";
import { Modal,Button} from "react-bootstrap";
function Nat5(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Center for Education Growth & Research
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is a member of Center for Education Growth & Research (CEGR) which facilitates towards qualitative, innovative and employability-enhancing education, preparing the next generation as future leaders.The Centre provides a platform for the exchange of dialogue among educationists, the media and policy makers and augments educational growth and research.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Nat5