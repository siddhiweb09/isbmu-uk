import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrowImage from "../../Images/programs/arrow.webp";
import p1 from "../../Images/programs/p-bg-1.jpg";
import p2 from "../../Images/programs/p-bg-2.jpg";
import p3 from "../../Images/programs/p-bg-3.jpg";
import p4 from "../../Images/programs/p-bg-3.jpg";

const Programs = () => {
  return (
    <section className="programs-section ptb-50">
      <div className="container">
        <Row className="m-0">
          <Col md={6} className="programs-text-col d-flex flex-column">
            <h2 className="modern-title mb-4">
              Discover Career-Driven <span className="text-white">Study Options </span>That Empower
              Your Ambitions
            </h2>
            {/* <h3 className="modern-subtitle mb-3">
              Empowering Minds Through Industry-Relevant Education
            </h3> */}
            <p className="programs-description">
              Our extensive academic teams are currently developing new and
              exciting undergraduate and postgraduate programmes designed to
              prepare students for success in an increasingly competitive and
              globalised world. Rooted in academic excellence and real-world
              relevance, our programmes aim to equip graduates with the skills,
              knowledge, and confidence to thrive in their chosen fields.
            </p>

            <div className="arrow-container">
              <img src={arrowImage} alt="Arrow" className="arrow-image" />
              <a href="#" className="view-all-link">
                View All Programs →
              </a>
            </div>
          </Col>

          <Col md={6}>
            <Row className="m-0">
              <Col md={6} className="d-flex flex-column justify-content-center">
                <div className="py-3">
                  <ProgramCard
                    title="BA (Hons) Business and Management"
                    image={p1}
                    link="#"
                  />
                </div>
                <div className="py-3">
                  <ProgramCard
                    title="BA (Hons) Computing and Information Technology"
                    image={p2}
                    link="#"
                  />
                </div>
              </Col>
              <Col md={6} className="justify-content-between">
                <div className="py-3">
                  <ProgramCard
                    title="L7 Postgraduate Diploma in Strategic Management and Leadership"
                    image={p3}
                    link="#"
                  />
                </div>
                <div className="py-3">
                  <ProgramCard title="MBA Top-Up" image={p4} link="#" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

// Card Component
const ProgramCard = ({ title, image, link }) => (
  <div className="program-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="program-card-body">
      <h3 className="card-title">{title}</h3>
      <a href={link} className="btn btn-outline-light btn-sm mt-4">
        View Program <i className="ml-1 rt rt-arrow-right-regular"></i>
      </a>
    </div>
  </div>
);

export default Programs;
