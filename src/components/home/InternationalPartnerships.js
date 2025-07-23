import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import diu from "../../Images/MOU/diu-logo.webp";
import indiana from "../../Images/MOU/indiana-logo.jpeg";
import rushford from "../../Images/MOU/rushford-logo.webp";
import henry from "../../Images/MOU/henry-logo.webp";

const InternationalPartnerships = () => {
  return (
    <section className="awards-section ptb-50">
      <div className="container">
        <Row className="m-0">
          <Col md={6}>
            <div className="top-recruiters">
              <h3 className="modern-title">
                International Partnerships -{" "}
                <span>Making connections that span the globe</span>
              </h3>
              <p>
                The primary objective of the International Tie-ups is to promote
                internationalization and cross-cultural exchange in the academic
                realm. These tie-ups are aimed at fostering global academic and
                research opportunities for students, faculty, and staff members
                of ISBM University.
              </p>
              <p>
                Through these partnerships, ISBM University aims to provide its
                students with exposure to global educational practices, diverse
                perspectives, and a broader understanding of different cultures.
                Additionally, it facilitates the exchange of knowledge, research
                collaborations, and joint academic programmes between ISBM
                University and its international partners.
              </p>
            </div>
          </Col>

          <Col
            md={6}
            className="client-logos-container d-flex justify-content-center"
          >
            <Row className="logo-grid gx-3 gy-4">
              <Col xs={6}>
                <div className="ic-slider py-2">
                  <div className="logo-wrapper shadow-lg p-3 bg-white">
                    <img src={diu} alt="DIU Logo" className="img-fluid" />
                  </div>
                </div>
                <div className="ic-slider py-2">
                  <div className="logo-wrapper shadow-lg p-3 bg-white">
                    <img
                      src={indiana}
                      alt="Indiana Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="ic-slider py-2">
                  <div className="logo-wrapper shadow-lg p-3 bg-white">
                    <img
                      src={rushford}
                      alt="Rushford Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="ic-slider py-2">
                  <div className="logo-wrapper shadow-lg p-3 bg-white">
                    <img src={henry} alt="Henry Logo" className="img-fluid" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default InternationalPartnerships;
