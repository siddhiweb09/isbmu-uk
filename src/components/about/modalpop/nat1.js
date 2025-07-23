import React from "react";
import { Modal,Button} from "react-bootstrap";
function Nat1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Indian Society for Technical Education (ISTE)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is proud to be an institutional member of Indian Society for Technical Education (ISTE) Which is one of the most prestigious Bodies governing Technical Education and is also one of the AICTE approved Body to run various programmes including WPLP – Working Professionals Learning programme.The Indian Society for Technical Education (ISTE) is a national, professional, non-profit society registered under the societies Registration Act of 1860. First started in 1941 as the Association of Principals of Technical Institutions, it was converted into "Indian Society for Technical Education” in 1968 with a view to enlarging its activities and advancing the cause of technological education. The major objective of the ISTE is to assist and contribute in the production and development of top quality professional engineers / technicians and Management graduates needed by the industries and other organizations. Being the only national organization of educators in the field of engineering, Management and technology, ISTE is involved in the various technical committees, boards formed by central government, Ministry of Human resource Development, AICTE/DOTE/DST. State government, are also involving the ISTE in many of their important programmes and activities relating to technical education.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Nat1