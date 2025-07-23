import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Breadcrumb,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/vision-mission-banner.jpg";

const Policies = () => {
  const policyLinks = [
    "Teaching, Learning and Assessment",
    "Student Complaints",
    "Student Appeals",
    "Student Support and Wellbeing",
    "Equality, Diversity and Inclusion",
    "Safeguarding and Prevent Duty",
    "Data Protection",
    "Health and Safety",
    "Admissions and Enrolment",
    "IT and Acceptable Use",
    "Code of Governance",
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
              <h1 class="display-3 university-name">Policies</h1>
              <p class="lead tagline">
                Frameworks for excellence, integrity, and student success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-5">
        <div className="container">
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <p>
                    We are committed to transparency, integrity, and excellence
                    in all aspects of our operations. Our policies provide a
                    clear framework for how we govern, deliver, and support
                    high-quality higher education in line with UK expectations
                    and international best practices.
                  </p>

                  <p>
                    This section brings together the key policies that guide our
                    approach to academic standards, student support, governance,
                    equality, safety, and responsible conduct. Each policy
                    reflects our commitment to creating a respectful, inclusive,
                    and student-centred learning environment.
                  </p>

                  <p>
                    As a new UK university with global foundations, we are
                    aligning our policies with UK regulatory requirements,
                    including those of the Office for Students (OfS), Quality
                    Assurance Agency for Higher Education (QAA), and other
                    relevant bodies, while drawing on the proven frameworks of
                    our parent institution.
                  </p>

                  <p className="mb-0">
                    We are also committed to continuous review and development
                    of our policies to ensure they remain current, effective,
                    and responsive to the needs of our students, staff, and
                    broader community.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="section-title text-blue modern-title text-center mb-4">
                Our Core Policies
              </h2>
              <p className="text-center mb-5">
                You can explore our core policies using the links below:
              </p>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-0">
                  <ListGroup variant="flush">
                    {policyLinks.map((policy, index) => (
                      <ListGroup.Item
                        key={index}
                        action
                        className="py-3 px-4 d-flex align-items-center policy-item"
                      >
                        <i className="ti ti-carambola-filled text-purple me-3"></i>
                        <span>{policy}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Policies;
