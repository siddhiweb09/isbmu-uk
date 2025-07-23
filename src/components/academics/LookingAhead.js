import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Breadcrumb,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/courseBanner.webp";
import onlineLearningImage from "../../Images/academic/ISBM_PRO.webp";

const LookingAhead = () => {
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
              <h1 class="display-3 university-name">Looking Ahead </h1>
              <p class="lead tagline">
                Charting the future of global education through innovation and
                tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Education Content */}
      <section className="ptb-50">
        <div className="container">
          <Row className="m-0">
            <div className="col-md-6 mt-5 d-flex justify-content-center">
              <div className="image-wrapper position-relative">
                <div className="image-bg h-75"></div>
                <img
                  src={onlineLearningImage}
                  className="img-fluid rounded placement-image position-relative"
                  alt="Placement Classroom"
                />
              </div>
            </div>
            <Col lg={6}>
              <h2 className="section-title-start modern-title">
                Strategic Initiatives
              </h2>
              <p>
                We’re just getting started. As our UK campus continues to grow,
                we will be actively developing an expanded portfolio of
                programmes across a wider range of disciplines. Our goal is to
                offer a broad and inclusive range of courses that reflect both
                the strengths of our parent university and the needs of our
                diverse student community in the UK.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Call to Action */}
      <section className="ptb-50 bg-purple">
        <div className="container-xxl">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold fs-3 text-white">
                Stay tuned as we build on this strong foundation and shape a
                vibrant academic future here in the UK
              </h2>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default LookingAhead;
