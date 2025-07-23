import React from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/vision-mission-banner.jpg";
import visionIcon from "../../Images/about/idea.png";
import missionIcon from "../../Images/about/achievement.png";
import valuesIcon from "../../Images/about/core-values-blue.png";
import visionImage from "../../Images/about/vision.jpg";
import missionImage from "../../Images/about/mission.jpg";

const VissionMission = () => {
  const coreValues = [
    {
      title: "Global Collaboration & Exchange ",
      description:
        "We believe in the power of cross-cultural learning, building strong partnerships with UK institutions, and creating dynamic student exchange programmes that enhance global perspectives.",
    },
    {
      title: "Inclusivity & Diversity ",
      description:
        " We celebrate the richness of cultures, backgrounds, and ideas, creating an environment where every student feels valued, respected and empowered to succeed",
    },
    {
      title: "Integrity & Ethical Leadership ",
      description:
        "We uphold the highest ethical standards in education and professional conduct, nurturing responsible and principled global citizens.",
    },
    {
      title: "Student-Centred Learning ",
      description:
        "We prioritise student success through holistic education, personalised support and opportunities for academic and professional growth.",
    },
    {
      title: "Industry & Societal Impact ",
      description:
        " We bridge academia with industry, fostering innovation and entrepreneurship that contributes to economic development and social progress.",
    },
    {
      title: "Sustainability & Responsibility ",
      description:
        "We are dedicated to promoting sustainable practices, social responsibility, and education that leads to meaningful, positive change in communities worldwide. ",
    },
  ];

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
              <h1 class="display-3 university-name">Our History</h1>
              <p class="lead tagline">
                Rooted in tradition, driven by innovation — our journey shapes
                the future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section ptb-50">
        <div className="container">
          <Row>
            <Col lg={7} className="mb-4 mb-lg-0">
              <div className="vision-image-container text-center">
                <img
                  src={visionIcon}
                  alt="Vision"
                  className="vision-icon mb-4"
                  width="60"
                />
                <h2 className="section-title modern-title text-blue">
                  Our Vision
                </h2>
                <blockquote className="blockquote m-0 vision-mission-statement">
                  <p className="mb-0 fst-italic">
                    To be a globally recognised centre of academic excellence,
                    bridging the rich educational heritage of India with the
                    dynamic innovation of the UK. Our London campus aspires to
                    cultivate future-ready leaders by fostering cross-cultural
                    learning and meaningful industry partnerships.Through
                    international collaboration and a commitment to inclusivity,
                    we aim to shape a new generation of global thinkers who
                    drive positive change in society.
                  </p>
                </blockquote>
              </div>
            </Col>
            <Col lg={5}>
              <div className="vision-mission-visual h-100 position-relative">
                <img
                  src={visionImage}
                  alt="University Campus"
                  className="img-fluid rounded shadow-lg w-100 h-100"
                />
                <div className="image-caption-overlay">
                  <div className="overlay-content">
                    <h3>Our Vision in Action</h3>
                    <p>Student-centric learning environment</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section ptb-50">
        <div className="container">
          <Row>
            <Col lg={7} className="order-lg-2 mb-4 mb-lg-0">
              <div className="mission-image-container text-center">
                <img
                  src={missionIcon}
                  alt="Mission"
                  className="mission-icon mb-4"
                  width="60"
                />
                <h2 className="section-title modern-title text-blue">
                  Our Mission
                </h2>
                <blockquote className="blockquote m-0 vision-mission-statement">
                  <p className="mb-0 fst-italic">
                    Rooted in the rich academic traditions of India and
                    embracing the global landscape of education, ISBM University
                    [India] London, is dedicated to fostering excellence,
                    innovation, and cross-cultural collaboration. Our London
                    campus serves as a gateway for students to experience
                    world-class learning through dynamic exchange programmes and
                    strategic partnerships with leading UK institutions. We are
                    committed to shaping future leaders with a global
                    perspective, empowering them with knowledge, skills and an
                    innate appreciation of cultural diversity. Through academic
                    rigor and international cooperation, we strive to create an
                    inclusive environment that nurtures intellectual curiosity,
                    professional growth and societal impact.
                  </p>
                </blockquote>
              </div>
            </Col>
            <Col lg={5} className="order-lg-1">
              <div className="vision-mission-visual h-100 position-relative">
                <img
                  src={missionImage}
                  alt="University Campus"
                  className="img-fluid rounded shadow-lg w-100 h-100"
                />
                <div className="image-caption-overlay">
                  <div className="overlay-content">
                    <h3>Our Mission at Work</h3>
                    <p>Implementing cutting-edge learning methodologies</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section ptb-50 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <img
              src={valuesIcon}
              alt="Core Values"
              className="values-icon mb-4"
              width="120"
            />
            <h2 className="section-title modern-title text-blue">
              Our Core Values
            </h2>
            <p className="modern-subtitle">
              The foundation that shapes our purpose, performance, and progress.
            </p>
          </div>

          <Row className="g-4">
            {coreValues.map((value, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow value-card">
                  <Card.Body className="text-center p-4">
                    <div className="value-number mb-3">
                      <span className="bg-blue text-white rounded-circle d-inline-flex p-3">
                        <i className="fs-3 ti ti-sparkles"></i>
                      </span>
                    </div>
                    <Card.Title className="fs-3 fw-bold mb-3">
                      {value.title}
                    </Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default VissionMission;
