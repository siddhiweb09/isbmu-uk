import React from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col } from "react-bootstrap";
import bannerImage from "../../Images/Banner/courseBanner.webp";
import { Link } from "react-router-dom";
import academicstudent from "../../Images/academic/university-cap-throw-students.jpg";

const AcademicsLondon = () => {
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
              <h1 class="display-3 university-name">
                Academics at Our London Campus
              </h1>
              <p class="lead tagline">
                Where Indian academic rigor meets British educational innovation
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
                  Our Academic Vision
                </h2>
                <p className="lead">
                  We bring the academic excellence and heritage of a
                  much-respected Indian University to the heart of the United
                  Kingdom.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col lg={6}>
              <div className="philosophy-content pe-lg-4">
                <p>
                  Our academic programmes are thoughtfully designed to blend
                  global perspectives with local relevance, offering students a
                  rich, inclusive and career-focused learning experience. Our
                  faculty includes a blend of experienced academics from both
                  the UK and visiting Professors from India, many of whom bring
                  years of industry and research expertise into the classroom.
                  With small class sizes and personalised attention, students
                  benefit from close mentorship and a collaborative learning
                  environment.
                </p>
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

      <Footer />
    </>
  );
};

export default AcademicsLondon;
