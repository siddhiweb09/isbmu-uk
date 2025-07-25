import { Container, Row, Col, Section } from "react-bootstrap";
import React from "react";
import AACSBLogo from "../../Images/accrediations/aacsb.png";
import NaacLogo from "../../Images/accrediations/Naac.jpg";
import IAOULogo from "../../Images/accrediations/iaou.png";
import unImage from "../../Images/home/unhome1.jpg";
import unStudentImage from "../../Images/home/unstudent.jpg";

const AboutSec = () => {
  return (
    <React.Fragment>
      <section className="ptb-50">
        <div className="container">
          <Row className="g-4">
            <Col md={6} className="about-images">
              <Row>
                {/* First image (Left) with larger top margin */}
                <Col md={6}>
                  <div
                    className="about-image-wrapper"
                    style={{ marginTop: "4rem" }}
                  >
                    <img
                      src={unImage}
                      alt="University Campus"
                      className="about-image img-fluid rounded-3 shadow"
                    />
                  </div>
                </Col>

                {/* Second image (Right) with larger bottom margin */}
                <Col md={6}>
                  <div
                    className="about-image-wrapper"
                    style={{ marginBottom: "3rem" }}
                  >
                    <img
                      src={unStudentImage}
                      alt="Students Learning"
                      className="about-image img-fluid rounded-3 shadow"
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <div className="about-section">
                {/* Header */}
                <h6 className="modern-subtitle mb-3">
                  Explore What Makes Us Exceptional
                </h6>

                {/* Main Title */}
                <h2 className="modern-title mb-3">
                  {/* About Our University */}A Legacy of{" "}
                  <span>Excellence & Growth</span>
                </h2>

                {/* First Paragraph */}
                <p className="about-content first-content mb-3">
                  At ISBM University [India] London, we bring together the rich
                  academic heritage of India with the dynamic innovation of the
                  UK. Our London campus serves as a global hub for learning,
                  research, and cross-cultural collaboration, offering students
                  a unique opportunity to engage with diverse perspectives and
                  world-class education.
                </p>

                {/* Second Paragraph with more spacing */}
                <p className="about-content second-content mb-3">
                  Through strategic partnerships with leading UK institutions
                  and vibrant student exchange programmes, we foster academic
                  excellence, industry connections and a global outlook.
                  Committed to inclusivity, innovation, and ethical leadership,
                  we empower students to become forward-thinking professionals
                  and changemakers in an interconnected world.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSec;
