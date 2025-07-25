import React from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col } from "react-bootstrap";
import bannerImage from "../../Images/academic/symbols-come-out-bulb-top-book.jpg";
import { Link } from "react-router-dom";
import academicstudent from "../../Images/academic/academic-philosophy-banner.webp";

const AcademicPhilosophy = () => {
  return (
    <>
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
              <h1 class="display-3 university-name">Academic Philosophy</h1>
              <p class="lead tagline">
                Blending India's educational heritage with UK academic
                innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container-xxl">
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="text-blue modern-title section-title">
                  Our Educational Approach
                </h2>
                <p className="lead">
                  ISBM University aims to help students realize dreams through
                  an educational pedagogy which focuses better on connecting
                  with them as people, inside and outside the classroom.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col lg={6}>
              <div className="philosophy-content pe-lg-4">
                <p>
                  Our academic philosophy is rooted in the belief that education
                  should be dynamic, interdisciplinary, and globally relevant.
                  We combine the rich intellectual traditions of India with the
                  innovative and research-driven approach of the UK to create a
                  learning environment that fosters critical thinking,
                  creativity, and real-world problem-solving. By integrating
                  tradition with modernity, collaboration with independent
                  thought, and academic rigor with real-world application, we
                  will empower our students to become leaders, innovators, and
                  change-makers in their fields.
                </p>
                {/* <p>
                  With many experiences enriched over past quite many years, our
                  tools of teaching have changed considerably, but the heart of
                  what we do has just remained constant. The relationships that
                  our faculty members look forward to build with the learners
                  take ISBM University education far beyond merely imparting
                  knowledge and preparing job-seekers.
                </p>
                <p>
                  Our faculties are surely experts in their respective fields,
                  but seek to produce graduates who will aspire to have more
                  than a successful career. According to Chancellor Dr. Vinay
                  Agrawal, ISBM University's students can make a difference in
                  the University itself much before they go out making
                  difference in the real world.
                </p> */}
              </div>
            </Col>
            <Col lg={6}>
              <div className="philosophy-image rounded overflow-hidden shadow">
                <img
                  src={academicstudent}
                  alt="ISBM University Classroom"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* <section className="ptb-50">
        <div className="container-xxl">
          <Row className="justify-content-center mb-5">
            <Col lg={12}>
              <div className="text-center">
                <h2 className="text-blue modern-title section-title">
                  Our Guiding Principles
                </h2>
                <p className="lead">
                  The academic philosophy of ISBM University is rooted in a
                  commitment to excellence, innovation, and holistic
                  development.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="facility-card p-4 h-100 bg-white rounded shadow-sm">
                <div className="facility-icon mb-3 text-primary">
                  <i className="ti ti-medal facility-icon-style"></i>
                </div>
                <h4>Excellence in Education</h4>
                <p>
                  We provide high-quality education meeting international
                  standards through rigorous curriculum, experienced faculty,
                  and focus on critical thinking and creativity.
                </p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="facility-card p-4 h-100 bg-white rounded shadow-sm">
                <div className="facility-icon mb-3 text-primary">
                  <i className="ti ti-user facility-icon-style"></i>
                </div>
                <h4>Student-Centred Learning</h4>
                <p>
                  We prioritize each student's needs and potential, fostering
                  active learning and personal growth through personalized
                  support and mentorship.
                </p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="facility-card p-4 h-100 bg-white rounded shadow-sm">
                <div className="facility-icon mb-3 text-primary">
                  <i className="ti ti-brain facility-icon-style"></i>
                </div>
                <h4>Interdisciplinary Collaboration</h4>
                <p>
                  We promote collaboration across fields to explore diverse
                  perspectives and develop comprehensive solutions to complex
                  issues.
                </p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="facility-card p-4 h-100 bg-white rounded shadow-sm">
                <div className="facility-icon mb-3 text-primary">
                  <i className="ti ti-microscope facility-icon-style"></i>
                </div>
                <h4>Research and Innovation</h4>
                <p>
                  We advance knowledge through cutting-edge research addressing
                  real-world challenges and contributing to societal
                  advancement.
                </p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="facility-card p-4 h-100 bg-white rounded shadow-sm">
                <div className="facility-icon mb-3 text-primary">
                  <i className="ti ti-heart facility-icon-style"></i>
                </div>
                <h4>Ethical & Social Responsibility</h4>
                <p>
                  We instill strong ethical values and commitment to
                  sustainability, equity, and community service in our students.
                </p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="facility-card p-4 h-100 bg-white rounded shadow-sm">
                <div className="facility-icon mb-3 text-primary">
                  <i className="ti ti-world facility-icon-style"></i>
                </div>
                <h4>Global Perspective</h4>
                <p>
                  We prepare students for an interconnected world through
                  international curriculum perspectives and global partnerships.
                </p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="facility-card p-4 h-100 bg-white rounded shadow-sm">
                <div className="facility-icon mb-3 text-primary">
                  <i className="ti ti-book facility-icon-style"></i>
                </div>
                <h4>Lifelong Learning</h4>
                <p>
                  We promote continuous personal and professional development to
                  help graduates adapt to evolving career demands.
                </p>
              </div>
            </Col>

            <Col md={12}>
              <div className="chancellor-message bg-light-blue p-4 p-lg-5 rounded mt-4">
                <Row className="align-items-center">
                  <Col lg={12}>
                    <blockquote className="mb-0">
                      <p className="fs-5 fst-italic">
                        "At ISBM University, we believe education should
                        transform lives. Our students don't just prepare for
                        careers - they develop the vision to make meaningful
                        contributions to society. The difference begins here on
                        campus, where we encourage every student to think beyond
                        themselves and consider how they can serve their
                        communities."
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default AcademicPhilosophy;
