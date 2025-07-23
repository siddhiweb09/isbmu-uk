import React from "react";
import { Modal, Button } from "react-bootstrap";
function Cor2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confederation of Indian Industry (CII)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalparas">
        <p>
          ISBM University is a proud member of the Confederation of Indian
          Industry (CII), a prestigious business association in India. This
          membership enables ISBM University to engage with a vast network of
          industry leaders and experts, fostering strong connections between
          academia and industry. Through CII, ISBM University gains access to
          valuable resources, industry insights, and collaborative opportunities
          that enhance its educational programs and research initiatives. The
          association also facilitates participation in various CII events,
          conferences, and seminars, providing students and faculty with
          exposure to the latest industry trends and best practices. This
          collaboration underscores ISBM University's commitment to providing a
          comprehensive and industry-aligned education, preparing its students
          for successful careers in a dynamic global environment.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default Cor2;
