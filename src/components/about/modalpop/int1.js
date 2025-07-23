import React from "react";
import { Modal,Button} from "react-bootstrap";
function Int1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Indo-American Chamber of Commerce (IACC)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is a member of Indo-American Chamber of Commerce (IACC). The Indo-American Chamber of Commerce (IACC), established in 1968, is the apex bi-lateral Chamber synergizing India-US Economic Engagement. The major objective of IACC is to promote Indo-American business, trade and economic relations. IACC acts as a catalyst for sustainable growth of business between India and the US.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Int1