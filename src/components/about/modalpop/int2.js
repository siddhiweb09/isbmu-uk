import React from "react";
import { Modal,Button} from "react-bootstrap";
function Int2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          The Council of EU Chambers of Commerce in India (EU Chambers)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is the institutional member of The Council of EU Chambers of Commerce in India, an International Forum with a vision to serve as the apex Chamber in India that represents the interests of European Companies and Entities in India. Under the aegis of Ambassadors and Head of the Delegation of the European Union to India as the Chief Patrons well as eminent member companies, Chamber has successfully carved out a path that epitomises the development of global economic partnership between India and Europe. Diplomatic representatives of EU countries are among the special invitees. Indian and European companies connected with Indo-EU trade, commerce, manufacture, services and professions, directly or indirectly, are our patron members.<br></br><br></br>

          The Chamber is an important link between European Union – Indian Businesses. The European Union today is India’s largest trading partner.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Int2