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
import bannerImage from "../../Images/Banner/tution-fees.jpg";
import applyImage from "../../Images/Banner/courseBanner.webp";

const TutionFees = () => {
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
              <h1 class="display-3 university-name">Tution Fees</h1>
              <p class="lead tagline">
                {" "}
                Transparent and competitive tuition fees
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
                    Our tuition fees are designed to reflect the high quality
                    and value of your learning experience while remaining fair
                    and competitive. Full fee details for each programme will be
                    published prior to the opening of admissions.
                  </p>

                  <h3 className="section-title-start modern-title mt-5 mb-3">What to expect:</h3>

                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-cash text-blue fs-4 mt-1 me-3"></i>
                      <span>Transparent pricing, no hidden costs</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-credit-card text-blue fs-4 mt-1 me-3"></i>
                      <span>Flexible payment options and instalment plans</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-award text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Information on available scholarships and bursaries
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                      <i className="ti ti-help text-blue fs-4 mt-1 me-3"></i>
                      <span>
                        Fee support guidance for eligible UK students via
                        Student Finance England (SFE)
                      </span>
                    </ListGroup.Item>
                  </ListGroup>

                  <p>
                    We believe finances should never be a barrier to higher
                    education. Our Admissions and Student Finance Team will work
                    with you to understand your options and access the support
                    available.
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

export default TutionFees;
