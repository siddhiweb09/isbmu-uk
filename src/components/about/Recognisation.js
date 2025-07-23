import React, { useState } from "react";
import { Container, Row, Col, Section, Card, ListGroup } from "react-bootstrap";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/recognisation-banner.jpg";

const Recognisation = () => {
  return (
    <>
      <Topnav />
      <section
        class="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bannerImage})`,
        }}
      >
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h1 class="display-3 university-name">
                Accreditations and Endorsements
              </h1>
              <p class="lead tagline">
                Committed to academic excellence and international standards
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow mb-5">
                <Card.Body className="p-4 p-lg-5">
                  <p className="lead">
                    Our university is proud to be part of a globally engaged
                    education group committed to academic excellence and
                    international standards.
                  </p>

                  <h3 className="mt-5 mb-3">Indian Accreditations</h3>
                  <p>
                    Our parent institution in India is a member of the
                    Association to Advance Collegiate Schools of Business
                    (AACSB), the International Association of Universities (IAU)
                    and the Association of Indian Universities (AOIU). It is
                    accredited with the University Grants Commission (UGC), the
                    Bar Council of India, the All Indian Council for Technical
                    Education, among several other recognitions. These
                    accreditations and memberships reflect a strong foundation
                    in quality assurance, global engagement, and a commitment to
                    continuous improvement in business and higher education.
                  </p>

                  <h3 className="mt-5 mb-3">UK Recognition</h3>
                  <p>
                    Our UK campus will operate with the same academic rigour,
                    values, and quality standards as our Indian counterpart. We
                    are pleased to confirm that our UK entity has been formally
                    recognised by the UK Department for Education (DfE) and is
                    approved to use the protected 'University' title. This
                    reflects our compliance with UK regulatory requirements and
                    our commitment to offering credible, high-quality higher
                    education in the UK.
                  </p>
                </Card.Body>
              </Card>

              <h2 className="text-center mb-4">
                Future Accreditations in Progress
              </h2>
              <p className="text-center mb-5">
                As a new and ambitious university in the UK, we are committed to
                upholding the highest standards of academic quality, governance,
                and student support.
              </p>

              <Row className="g-4">
                <Col md={4}>
                  <Card className="h-100 border-0 shadow bg-blue text-white">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-white text-blue rounded-circle mb-3">
                        <i className="ti ti-circle-check fs-4"></i>
                      </div>
                      <h4>Office for Students (OfS)</h4>
                      <p>
                        We are progressing through the application process for
                        OfS registration, the official regulator of higher
                        education in England. Registration with the OfS is a
                        crucial step in demonstrating our commitment to
                        delivering a high-quality academic experience and
                        ensuring transparency, accountability, and value for our
                        students.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="h-100 border-0 shadow bg-blue text-white">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-white text-blue rounded-circle mb-3">
                        <i className="ti ti-circle-check fs-4"></i>
                      </div>
                      <h4>Quality Assurance Agency (QAA)</h4>
                      <p>
                        We are also applying for membership with the QAA, the
                        UK's independent body entrusted with monitoring and
                        advising on standards and quality in higher education.
                        This membership will support our continuous improvement
                        efforts and enable us to benefit from national
                        frameworks, peer review, and best practice.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="h-100 border-0 shadow bg-blue text-white">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-white text-blue rounded-circle mb-3">
                        <i className="ti ti-circle-check fs-4"></i>
                      </div>
                      <h4>AACSB Membership</h4>
                      <p>
                        As part of our long-term development in the UK, we are
                        preparing to apply for AACSB membership, ensuring that
                        our UK operations align with international best
                        practices and maintain high standards of governance and
                        educational delivery.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Card className="border-0 shadow mt-5">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="mb-4">Our Commitment to Quality</h3>
                  <p>
                    In addition to the above, we are in dialogue with other
                    relevant professional, academic, and regulatory bodies as
                    part of our long-term commitment to quality assurance,
                    sector alignment, and recognition. We understand that trust
                    and credibility are built over time, and we are fully
                    transparent about our journey. As we work towards securing
                    full accreditation, we remain focused on delivering a
                    rigorous, enriching, and student-centred educational
                    experience from day one.
                  </p>
                  <p className="mb-0 fw-bold">
                    We will continue to update this page as our accreditation
                    status evolves.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recognisation;
