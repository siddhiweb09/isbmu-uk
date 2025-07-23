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
import onlineLearningImage from "../../Images/Banner/vision-mission-banner.jpg";

const OnlineEducation = () => {
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
              <h1 class="display-3 university-name">Online Education</h1>
              <p class="lead tagline">
                Flexible world-class learning combining Indian academic rigor
                with UK innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Education Content */}
      <section className="ptb-50">
        <div className="container-xxl">
          <h2 className="fw-bold section-title modern-title text-blue text-center">
            Our Online Learning Options
          </h2>

          <Row className="justify-content-center align-items-center">
            {/* Image Column */}
            <Col lg={6} className="order-lg-1 order-2">
              <img
                src={onlineLearningImage}
                alt="Online Education"
                className="img-fluid rounded shadow"
                style={{
                  border: "5px solid white",
                  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                }}
              />
            </Col>

            {/* Content Column */}
            <Col lg={6} className="order-lg-2 order-1">
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded me-4">
                      <i className="ti ti-device-laptop text-blue fs-2"></i>
                    </div>
                    <div>
                      <h3 className="h4 mb-3 text-purple">
                        Level 7 Postgraduate Diploma
                      </h3>
                      <p className="mb-0">
                        Our Level 7 Postgraduate Diploma in Strategic Management
                        and Leadership is available through fully online
                        delivery model, allowing students to study from any
                        suitable location anywhere in the world. This flexible
                        format is designed to fit around professional and
                        personal commitments, enabling learners to progress at
                        their own pace while receiving expert academic support
                        and access to digital resources.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Undergraduate Programmes */}
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded me-4">
                      <i className="ti ti-school text-blue fs-2"></i>
                    </div>
                    <div>
                      <h3 className="h4 mb-3 text-purple">
                        Undergraduate Programmes
                      </h3>
                      <p className="mb-0">
                        For our undergraduate programmes, we offer a blended
                        delivery model, combining the convenience of online
                        learning with the benefits of on-site engagement. This
                        approach provides students with the flexibility to
                        manage their studies remotely while still enjoying
                        in-person teaching, group work, and campus facilities,
                        offering the best of both worlds.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Call to Action */}
      <section className="ptb-50 bg-purple">
        <div className="container-xxl">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold fs-1 mb-4 text-white">
                Ready to start your online learning journey?
              </h2>
              <Link
                to="/apply"
                className="btn bg-white btn-lg mt-4 px-4 fw-bold text-blue shadow"
              >
                Apply Now
              </Link>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default OnlineEducation;
