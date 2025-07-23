import React from "react";
import { Modal,Button} from "react-bootstrap";
function Int4(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          UN Global Compact Network India
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is an institutional member of UN Global Compact Network India. The Global Compact Network India works towards mainstreaming the ten universally accepted principles in business activities around the world, catalyzing action in support of broader UN goals, such as the Millennium Development Goals (MDGs) and setting the tone for the post-2015 development agenda within the Indian context.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Int4