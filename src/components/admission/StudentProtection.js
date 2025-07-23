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

const StudentProtection = () => {
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
              <h1 class="display-3 university-name">Student Protection</h1>
              <p class="lead tagline"> Safeguarding your academic journey</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Container>
          <Row className="justify-content-center g-4">
            <Col lg={12}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <h4 className=" mb-4 section-title-start">
                    The full plan will be published prior to programme launch.
                  </h4>

                  <p>
                    We understand that students need security and reassurance
                    when committing to their studies. As part of our
                    registration process with the OfS, we are developing a
                    robust Student Protection Plan that outlines how we will
                    safeguard your interests. Protecting your academic journey
                    and peace of mind is a top priority for the University.
                  </p>

                  <p className="mt-4">
                    Our Student Protection Plan is a key part of our regulatory
                    obligations and is designed to protect your interests in the
                    unlikely event of:
                  </p>

                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-book-off text-blue fs-4 mt-1 me-3"></i>
                      <span>Course or programme changes</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-chalkboard-off text-blue fs-4 mt-1 me-3"></i>
                      <span>Disruption to teaching</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-building-skyscraper text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Institutional closure or significant changes to our
                        provision
                      </span>
                    </ListGroup.Item>
                  </ListGroup>

                  <p>
                    The plan outlines how we will communicate with students,
                    support transitions, and ensure continuity of study where
                    possible. It will be reviewed annually and published
                    publicly on our website once finalised and approved by the
                    OfS.
                  </p>

                  <p className="mt-4 lead text-purple fw-bold">
                    Your success and peace of mind are central to how we
                    operate.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default StudentProtection;
