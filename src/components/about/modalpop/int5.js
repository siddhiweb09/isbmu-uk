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
          United Nations Academic Impact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          <span style={{color:"#1663a2",fontWeight:'bold'}}>The United Nations Academic Impact (UNAI)</span> is an initiative that aligns institutions of higher education with the United Nations in supporting and contributing to the realization of United Nations goals and mandates, including the promotion and protection of human rights, access to education, sustainability and conflict resolution. Since 2010, UNAI has created a vibrant and diverse network of students, academics, scientists, researchers, think tanks, higher education institutions, continuing education and educational associations. There are over 1400 member institutions in more than 147 countries that reach over 25 million people in the education and research sectors worldwide, representing a global diversity of regions and a thematic wealth of disciplines.<br></br><br></br>
          <span style={{color:"#560c56",fontWeight:'bold'}}>ISBM University is a member of the United Nations Academic Impact (UNAI)</span>
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Int5