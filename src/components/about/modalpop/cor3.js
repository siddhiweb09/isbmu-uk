import React from "react";
import { Modal, Button } from "react-bootstrap";
function Cor3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          PHD Chamber of Commerce and Industry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalparas">
        <p>
          ISBM University holds membership in the Ph.D. Chamber of Commerce and
          Industry (PHDCCI), a prominent business chamber in India. This
          affiliation connects ISBM University with a broad spectrum of industry
          professionals, entrepreneurs, and policymakers, enhancing its academic
          and research capabilities. As a member of PHDCCI, ISBM University
          benefits from a wealth of resources, including access to industry
          reports, networking events, and policy advocacy platforms. This
          membership enables the university to stay abreast of the latest
          industry developments and economic trends, fostering an environment of
          practical learning and innovation. Furthermore, it provides students
          and faculty with unique opportunities to engage with industry leaders,
          participate in workshops, and contribute to policy discussions,
          thereby bridging the gap between theoretical knowledge and real-world
          application. This collaboration exemplifies ISBM University's
          dedication to fostering industry-relevant education and research,
          equipping its students with the skills and insights necessary for
          their professional growth.{" "}
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default Cor3;
