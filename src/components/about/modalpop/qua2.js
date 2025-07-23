import React from "react";
import { Modal,Button} from "react-bootstrap";
function Qua2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          GA Mark for “Quality Education”
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
        <div className="modal-body recog">
        <p>ISBM University is the first bearer of GA Mark for “Quality Education” in education sector.<br></br><br></br>

        Globally Assured Certificate for “Quality Education” to ISBM University insures that their education system fulfills all necessary standards required for correspondence courses, covers components like education system, faculties, course materials and students interaction programmes etc.<br></br><br></br>

        It is an enthusiastic attempt by ISBM university to expose the best of International Management principles, practices and managerial function to the students. At ISBM University, the students can get qualified without disrupting their current career progression and earning. It provides online Modules for discussion board, online chat, video lectures, message board and examinations and Course material are self explanatory and easy to understand.<br></br><br></br>

        Undergoing Globally Assured audit and fulfilling criteria was a unique experience and good learning.</p>
      </div>
        </Modal.Body>
      </Modal>
    );
  }

export default Qua2