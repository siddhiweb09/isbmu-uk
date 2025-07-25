import React, { useState } from "react";
import { Container } from "react-bootstrap";
import EnquiryNow from "../common/EnquiryNow.js";
import { Card, Row, Col, Accordion, Modal, Button } from "react-bootstrap";
// import HorizontalTimeline from "./horizontalTimeline";
import Reccaraousal from "./reccaraousal";

const Accred = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className="recInfo-section">
      <Row className="recRow">
        <Col lg={7} md={6}>
          <div className="recDetails">
            <div className="recInfo p-4">
              <h2 className="text-white modern-title">
                Accredited for Success, Connected for Growth
              </h2>
              <p>
                Our accreditation ensures that you meet and exceed industry
                standards, while our robust membership network fosters
                invaluable connections and opportunities for growth.
              </p>
              <p>
                Enroll now to earn your degree from a highly recognized
                university.
              </p>
              {/* <Button
                className="btn-download btn bg-blue border-0"
                onClick={() => setModalShow(true)}
              >
                Apply Now
              </Button> */}
            </div>
          </div>
        </Col>
        <Col lg={5} md={6} className="recImages">
          <div className="recognition p-4">
            <Reccaraousal />
          </div>
        </Col>
      </Row>

      <EnquiryNow show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default Accred;
