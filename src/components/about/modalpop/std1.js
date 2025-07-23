import React from "react";
import { Modal,Button} from "react-bootstrap";
import std1 from '../../../Images/docimg/act_content1.jpg';
import std2 from '../../../Images/docimg/act_content2.jpg';
import std3 from '../../../Images/docimg/act_content3.jpg';
import std4 from '../../../Images/docimg/act_content4.jpg';
import std5 from '../../../Images/docimg/act_content5.jpg';
function Std1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          The ACT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={std1} style={{width:"100%",marginBottom:'20px'}} />
          <img src={std2} style={{width:"100%",marginBottom:'20px'}} />
          <img src={std3} style={{width:"100%",marginBottom:'20px'}} />
          <img src={std4} style={{width:"100%",marginBottom:'20px'}} />
          <img src={std5} style={{width:"100%",marginBottom:'20px'}} />
        </Modal.Body>
      </Modal>
    );
  }

export default Std1  