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
import admissionsImage from "../../Images/Banner/courseBanner.webp";

const Admission = () => {
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
              <h1 class="display-3 university-name">Admission </h1>
              <p class="lead tagline">Be Part of Our Founding Student Community </p>
            </div>
          </div>
        </div>
      </section>

       <section className="ptb-50">
        <div className="container-xxl">
          <Row className="justify-content-center align-items-center g-5 mb-5">
           
            <Col lg={12}>
              <div className="">
                <p className="lead mb-4">
                  As a new and ambitious institution in UK higher education, ISBM University [India] London, is preparing to welcome its first students.
                </p>
                <p>
                  We are currently finalising our registration with the Office for Students (OfS) and working closely with the Quality Assurance Agency (QAA) to ensure the highest standards of academic quality and student support.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={12}>
              <Card className="border-0 bg-light">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="section-title modern-title text-center">Our Mission</h2>
                  <p>
                    Our mission is to make higher education more inclusive, flexible, and globally relevant, whether you're a school/college leaver, working professional, or international student. This page outlines everything you need to know about applying, funding your studies, and what you can expect from your learning journey with us.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Next Steps */}
      <section className="ptb-50 bg-purple text-white">
        <div className="container-xxl">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">Ready to Begin Your Journey?</h2>
              {/* <Link to="/apply" className="btn btn-light btn-lg px-4 me-2">
                Apply Now
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                Contact Us
              </Link> */}
            </Col>
          </Row>
        </div>
      </section>

      
     
      <Footer />
    </React.Fragment>
  );
};

export default Admission;
