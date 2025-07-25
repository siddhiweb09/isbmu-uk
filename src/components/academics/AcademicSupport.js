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
import bannerImage from "../../Images/Banner/academic-support.jpg";
import futureImage from "../../Images/Banner/vision-mission-banner.jpg";
import academicstudent from "../../Images/academic/university-cap-throw-students.jpg";

const AcademicSupport = () => {
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
              <h1 class="display-3 university-name">
                Academic Support & Development
              </h1>
              <p class="lead tagline">
                Comprehensive resources to empower student success in our
                UK-India academic environment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <Container>
          <div className="p-4 p-md-5 bg-white rounded shadow-sm">
            {/* <h2 className="modern-title section-title text-blue text-center">
              Learning Support
            </h2> */}
            <p className="lead">
              “We are committed to student success. That’s why we offer a
              comprehensive range of academic support services, including study
              skill workshops, perosnal tutors, learning development resources,
              and one-to-one acadmeic gudiance. Our goal is to empower every
              student to reach their full acadmeic potential”
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AcademicSupport;
