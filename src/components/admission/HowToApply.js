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

const HowToApply = () => {
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
              <h1 class="display-3 university-name">How To Apply ? </h1>
              <p class="lead tagline">Start your academic journey . </p>
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
                  <p className="lead mb-3">
                    We are excited to launch our first programmes soon. If
                    you're interested in studying with us, we encourage you to
                    register your interest now so we can keep you informed
                    about:
                  </p>

                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-center">
                      <i className="ti ti-calendar-event text-blue me-3 fs-4"></i>
                      <span>Programme launch dates</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-center">
                      <i className="ti ti-calendar-plus text-blue me-3 fs-4 "></i>
                      <span>Application opening dates</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-center">
                      <i className="ti ti-screen-share text-blue me-3 fs-4"></i>
                      <span>Virtual and on-campus open days</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-center">
                      <i className="ti ti-checklist text-blue me-3 fs-4"></i>
                      <span>Entry requirements</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-center">
                      <i className="ti ti-headset text-blue me-3 fs-4"></i>
                      <span>Personalised support and guidance</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <p>
                    Once open, applications will be submitted through our online
                    portal, designed to be quick, intuitive, and accessible. Our
                    admissions team will provide support at every stage, from
                    submitting your application to preparing for enrolment.
                  </p>

                  <p>
                    We are committed to fair and inclusive admissions, and
                    welcome applicants from a wide range of educational and
                    professional backgrounds.
                  </p>

                  <p className="mb-1">
                    To register your interest please email:
                  </p>
                  <a
                    href="mailto:admissions@isbmuniversity.uk"
                    className="text-purple fs-5"
                  >
                    admissions@isbmuniversity.uk
                  </a>
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

export default HowToApply;
