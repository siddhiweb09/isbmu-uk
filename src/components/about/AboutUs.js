import React, { Component } from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import bannerImage from "../../Images/Banner/homeBanner.jpg";


const AboutUs = () => {
  return (
    <>
      <Topnav />
      <section class="hero-section">
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h1 class="display-3 university-name">
                ISBM University [India] London
              </h1>
              <p class="lead tagline">
                Bridging the rich academic heritage of India with the dynamic
                innovation of the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="container india-uk-bridge">
        <div class="bridge-line"></div>
        <div class="bridge-icon india-flag">
          <i class="fas fa-flag"></i>
        </div>
        <div class="bridge-icon uk-flag">
          <i class="fas fa-flag-uk"></i>
        </div>
      </div> */}

      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h2 class="section-title modern-title">Our Global Hub</h2>
              <p class="lead">
                Our London campus serves as a global hub for learning, research,
                and cross-cultural collaboration, offering students a unique
                opportunity to engage with diverse perspectives and world-class
                education.
              </p>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-4 mb-4">
              <div class="text-center p-4 card shadow-lg border-0 h-100 bg-golden text-white">
                <div class="feature-icon">
                  <i class="ti ti-globe"></i>
                </div>
                <h2>Global Perspective</h2>
                <p>
                  Engage with students and faculty from around the world in our
                  diverse London campus community.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="text-center p-4 card shadow-lg border-0 h-100 bg-golden text-white">
                <div class="feature-icon">
                  <i class="ti ti-heart-handshake"></i>
                </div>
                <h2>Strategic Partnerships</h2>
                <p>
                  Collaborations with leading UK institutions enhance your
                  academic and professional journey.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="text-center p-4 card shadow-lg border-0 h-100 bg-golden text-white">
                <div class="feature-icon">
                  <i class="ti ti-replace"></i>
                </div>
                <h2>Exchange Programmes</h2>
                <p>
                  Vibrant student exchange opportunities to broaden your
                  horizons and academic experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container">
          <Row className="m-0">
            <div className="col-md-6 mt-5 d-flex justify-content-center">
              <div className="image-wrapper position-relative">
                <div className="image-bg h-75"></div>
                <img
                  src={bannerImage}
                  className="img-fluid rounded placement-image position-relative"
                  alt="Placement Classroom"
                />
              </div>
            </div>
            <Col lg={6}>
              <h2 className="section-title-start modern-title">
                A Legacy of Learning and Excellence
              </h2>
              <p className="fw-bold text-purple">
                Join us in shaping the future of education, where knowledge
                knows no boundaries.
              </p>
              <p>
                Through strategic partnerships with leading UK institutions and
                vibrant student exchange programmes, we foster academic
                excellence, industry connections and a global outlook. Committed
                to inclusivity, innovation, and ethical leadership, we empower
                students to become forward-thinking professionals and
                changemakers in an interconnected world.
              </p>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
