import React from "react";
import { Modal,Button} from "react-bootstrap";
function Std5(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          CGPURC
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
            ISBM University is recognized by Chhattisgarh Private Universities Regulatory Commission (CG-PURC).<br /><br />

            In compliance with the provisions of the Act, the State Government vide Gazette notification established a Regulatory Commission, Chhattisgarh Private Universities Regulatory Commission for the purpose of providing a regulatory mechanism at the State level and for working as an interface between the State Government and the central regulatory bodies for the purpose of ensuring appropriate standards of teaching, examination, research, extension programme, protection of interest of the students and reasonable service conditions of the employees.<br /><br />

            Appreciating the needs and the visualizing ambitions of youth of the state and as an effort to making them true, vis-a-vis recognizing the role of non-profit making Non Government Organizations (Trust/Companies/Societies) imparting quality higher education in the country, the Government of Chhattisgarh, in order to facilitate the student of the state, enacted ‘The Chhattisgarh Private Universities (Establishment and Operation) (Amendment) Act, 2016’, an Act for establishment and incorporation of self financed private university, ISBM University, in the State of Chhattisgarh for imparting higher education, and to regulate it's functions and for matters connected therewith or incidental thereto.<br /><br />

            In compliance with the provisions of of the Act, the State Government vide Gazette notification established a Regulatory Commission, Chhattisgarh Private Universities Regulatory Commission for the purpose of providing a regulatory mechanism at the State level and for working as an interface between the State Government and the central regulatory bodies for the purpose of ensuring appropriate standards of teaching, examination, research, extension programme, protection of interest of the students and reasonable service conditions of the employees.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Std5