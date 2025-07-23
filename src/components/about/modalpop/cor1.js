import React from "react";
import { Modal,Button} from "react-bootstrap";
function Cor1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          ASSOCHAM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is the institutional member of ASSOCHAM which initiated its endeavour of value creation for Indian industry in 1920. It has witnessed upswings as well as upheavals of Indian Economy, and contributed significantly by playing a catalytic role in shaping up the Trade, Commerce and Industrial environment of the country.<br></br><br></br>

          Today, ASSOCHAM has emerged as the fountainhead of Knowledge for Indian industry, which is all set to redefine the dynamics of growth and development in the technology driven cyber age of ‘Knowledge Based Economy’. ASSOCHAM is seen as a forceful, proactive, forward looking institution equipping itself to meet the aspirations of corporate India in the new world of business. ASSOCHAM is working towards creating a conducive environment of India business to compete globally.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Cor1