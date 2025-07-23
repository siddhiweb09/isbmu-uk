import React, { useState } from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import aicte1 from "../../../Images/docimg/AICTE_2023-24.pdf";
import aicte2 from "../../../Images/docimg/AICTE_2024-25.PDF";
import aicte3 from "../../../Images/docimg/AICTE_2025-26.pdf";

function Std11(props) {
  const [key, setKey] = useState("2023-24");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          AICTE Approval
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="2023-24" title="2023-24">
            <iframe
              src={aicte1}
              style={{ width: "100%", height: "500px", border: "none" }}
              title="AICTE 2023-24"
            />
          </Tab>
          <Tab eventKey="2024-25" title="Extended Approval - 2024-25">
            <iframe
              src={aicte2}
              style={{ width: "100%", height: "500px", border: "none" }}
              title="AICTE 2024-25"
            />
          </Tab>
          <Tab eventKey="2025-26" title="Extended Approval - 2025-26">
            <iframe
              src={aicte3}
              style={{ width: "100%", height: "500px", border: "none" }}
              title="AICTE 2025-26"
            />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

export default Std11;