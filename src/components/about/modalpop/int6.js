import React from "react";
import { Modal,Button} from "react-bootstrap";
function Int5(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Sustainable Development Solutions Network
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
        <div className="modal-body recog">
        <p><span id="theun">The UN Sustainable Development Solutions Network (SDSN)</span> mobilizes global scientific and technological expertise to promote practical problem solving for sustainable development. The SDSN has operated under the auspices of the UN Secretary-General and the leadership of Professor Jeffrey Sachs since 2012. SDSN is building a global network of universities, research centres, and other knowledge institutions focusing on:</p>
        <ul id="sndul"><li id="sdli">Providing and mobilizing support for the SDGs</li>
          <li id="sdli">	They are promoting practical Solution Initiatives and long-term pathways for sustainable development. </li>
          <li id="sdli">They are promoting high-quality education and research collaboration for sustainable development. </li>
          <li id="sdli">Supporting governments in understanding and addressing the challenges of sustainable development</li></ul>
        <p>The organization and governance of the Global SDSN aim to enable many leaders from all regions and diverse backgrounds to participate in the development of the network. To facilitate this work, SDSN has a small secretariat with offices in New York and Paris. Acting as the board of SDSN, the Leadership Council brings together global sustainable development leaders from all regions and sectors, including civil society, the UN system, and the public and private sectors.</p>
        <p id="wearesd">We are proud to announce that ISBM University is a member of The UN Sustainable Development Solutions Network (SDSN)</p>
      </div>
        </Modal.Body>
      </Modal>
    );
  }

export default Int5