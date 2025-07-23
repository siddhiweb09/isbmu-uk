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

const AccessParticipation = () => {
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
              <h1 class="display-3 university-name">Access & Participation</h1>
              <p class="lead tagline">
                {" "}
                Creating equal opportunities for all students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="ptb-50">
        <div className="container-xxl">
          <Row className="justify-content-center g-4">
            <Col lg={12}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <p>
                    We are designing an inclusive, supportive learning
                    environment where every student is empowered to achieve
                    their full potential. We are proud to place equity and
                    inclusion at the centre of our mission. Our Access and
                    Participation Plan, developed as part of our forthcoming OfS
                    registration, outlines how we intend to:
                  </p>

                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-users-group text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Widen participation among under-represented and
                        disadvantaged groups, including first-generation
                        students, care-experienced learners, mature students and
                        those from lower-income backgrounds
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-trending-up text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Improve continuation, attainment, and progression rates
                        for all students
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-heart-handshake text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Offer tailored academic, wellbeing, and career support
                        to help every learner thrive
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-building-community text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Collaborate with schools, colleges, and community
                        partners to remove barriers to entry
                      </span>
                    </ListGroup.Item>
                  </ListGroup>

                  <p>
                    Our vision is a University experience where background is
                    never a barrier, and every student is empowered to succeed.
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

export default AccessParticipation;
