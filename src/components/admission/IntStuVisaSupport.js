import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Breadcrumb,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/courseBanner.webp";
import applyImage from "../../Images/Banner/courseBanner.webp";

const IntStuVisaSupport = () => {
  return (
    <React.Fragment>
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
                International Students & Visa Support
              </h1>
              <p class="lead tagline">
                {" "}
                Supporting your journey to study in the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container-xxl">
          <Row className="justify-content-center g-4">
            <Col lg={12}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4 p-md-5">
                  <p>
                    We are proud to warmly welcome students from around the
                    world and are committed to supporting a smooth and enriching
                    transition to study in the UK. Our dedicated Admissions and
                    Student Support Team will help guide you through:
                  </p>

                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-world-check text-blue fs-4 mt-1 me-3"></i>
                      <span>Country-specific academic entry requirements</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-language text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        English language qualifications and preparation
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-file-certificate text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        The UK Student Visa application process, including CAS
                        (Confirmation of Acceptance for Studies)
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-home text-blue fs-4 mt-1 me-3"></i>
                      <span>Accommodation options and arrival guidance</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-users-group text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Cultural orientation, integration activities, and
                        ongoing student support
                      </span>
                    </ListGroup.Item>
                  </ListGroup>

                  <p className="mb-4">
                    We also offer pre-arrival advice, help with accommodation,
                    and a range of orientation activities to ensure you feel
                    prepared, supported, and connected from the moment you
                    apply.
                  </p>

                  <p>
                    Whether you choose to study on-site in the UK or join one of
                    our blended learning programmes from your home country,
                    you'll become part of a vibrant, inclusive, and globally
                    connected student community.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default IntStuVisaSupport;
