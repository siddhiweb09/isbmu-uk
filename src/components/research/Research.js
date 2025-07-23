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
import researchImage from "../../Images/Banner/courseBanner.webp";

const Research = () => {
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
              <h1 class="display-3 university-name">Research </h1>
              <p class="lead tagline">Research </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="ptb-50">
        <div className="container-xxl">
          <Row className="justify-content-center">
            <Col lg={12}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="section-title-start modern-title">
                    Driving Impact Through Inclusive and Global Education
                    Research
                  </h2>
                  <p>
                    At the heart of our research mission is a commitment to
                    advancing equity, inclusion, and global collaboration in
                    higher education.
                  </p>
                  <div className="mb-4">
                    <p>
                      As we grow and develop in the UK, our research initiatives
                      will focus on understanding and addressing the barriers to
                      access, achievement, and progression faced by
                      under-represented groups and first-generation university
                      students. We will be investigating the systemic factors
                      that influence student outcomes and seek evidence-based
                      strategies to promote inclusive success across all levels
                      of education.
                    </p>
                  </div>

                  <div className="mb-4">
                    <p>
                      Our academic teams are actively engaged in exploring the
                      long-term benefits of global education, examining how
                      international exposure, cross-cultural learning, and
                      global mobility shape graduates' careers, competencies,
                      and societal contributions. This includes a particular
                      focus on the evolving relationship between UK and Indian
                      higher education, where we are fostering collaborative
                      research, joint programmes, and knowledge exchange aimed
                      at enhancing transnational education.
                    </p>
                  </div>

                  <div>
                    <p>
                      Through applied research, policy engagement, and
                      international partnerships, we strive to inform practice
                      and shape the future of higher education. Our work will
                      contribute to a growing body of knowledge that supports
                      more equitable, diverse, and globally connected learning
                      environments.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="ptb-50 bg-light">
       <div className="container-xxl">
          <Row className="justify-content-center mb-4">
            <Col lg={8} className="text-center">
              <h2 className="modern-title text-center section-title">
                Our Research Focus
              </h2>
            </Col>
          </Row>
          <div class="row mt-5">
            <div class="col-md-4 mb-4">
              <div class="text-center p-4 card shadow-lg border-0 h-100 bg-golden text-white">
                <div class="feature-icon">
                  <i class="ti ti-accessible"></i>
                </div>
                <h2>Inclusive Education</h2>
                <p>Breaking barriers for under-represented groups</p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="text-center p-4 card shadow-lg border-0 h-100 bg-golden text-white">
                <div class="feature-icon">
                  <i class="ti ti-world"></i>
                </div>
                <h2>Global Collaboration</h2>
                <p>UK-India higher education partnerships</p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="text-center p-4 card shadow-lg border-0 h-100 bg-golden text-white">
                <div class="feature-icon">
                  <i class="ti ti-school"></i>
                </div>
                <h2>Student Outcomes</h2>
                <p>Evidence-based strategies for success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Research;
