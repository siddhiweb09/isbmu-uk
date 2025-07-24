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
import futureImage from "../../Images/Banner/vision-mission-banner.jpg";
import academicstudent from "../../Images/academic/university-cap-throw-students.jpg";

const IndustryConnections = () => {
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
                Industry Connections and Employability{" "}
              </h1>
              <p class="lead tagline">
                Bridging academia and industry across UK and Indian markets
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <Container>
          <div className="p-4 p-md-5 bg-white rounded shadow-sm">
            <h2 className="modern-title section-title text-blue text-center">
              Our Collaborations
            </h2>
            <p>
              Our strong links with UK employers, professional bodies, and
              industry partners mean that students gain valuable exposure to
              real-world scenarios, guest lectures, work placements, and live
              projects. We work actively to ensure our graduates are work-ready,
              globally minded, and highly employable.
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default IndustryConnections;
