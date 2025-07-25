import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import diu from "../../Images/MOU/diu-logo.webp";
import indiana from "../../Images/Banner/looking-ahead-banner.jpg";
import rushford from "../../Images/MOU/rushford-logo.webp";
import henry from "../../Images/MOU/henry-logo.webp";

const EnrollmentSection = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className=" ptb-50 bg-blue">
      <div className="container">
        <Row className="m-0">
          <Col md={6} className="py-2">
            <div>
              <h3 className="modern-title text-white section-title-start">Enrolment 2025-2026</h3>
              <p className="text-white">
                The start of main enrolment for the academic year 2025/26 will
                be in August.
              </p>
              <Button
                className="btn-download btn-lg bg-purple border-0"
                onClick={() => setModalShow(true)}
              >
                Apply Now
              </Button>
            </div>
          </Col>

          <Col md={6} className="py-2">
            <img src={indiana} alt="Indiana Logo" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EnrollmentSection;
