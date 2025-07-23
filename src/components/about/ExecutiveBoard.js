import React from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/govBodyBanner.jpg";
import viceChancellor from "../../Images/Hon'ble Persons/Dr. Vinay M. Agrawal.png";

const ExecutiveBoard = () => {
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
              <h1 class="display-3 university-name">Executive Board</h1>
              <p class="lead tagline">
                World-class leadership bridging Indian academic excellence with
                UK innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="executive-board-section ptb-50">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={12}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="section-title text-blue modern-title text-center mb-4">
                    Executive Board
                  </h2>

                  <p>
                    The Executive Board provides the day-to-day leadership and
                    operational oversight that drives our university forward.
                    Committed to academic excellence, strategic growth, and
                    student success, the Board ensures that our institution
                    remains a centre of high standards, academic rigour, and
                    innovation.
                  </p>

                  <p>
                    Each member of the Executive Board brings a strong track
                    record of leadership both within higher education and
                    commerce, with deep expertise in teaching, research, and
                    professional practice. Working collaboratively, they set the
                    strategic direction of the university, manage resources
                    effectively, and uphold our values in everything we do.
                  </p>

                  <p>
                    At the core of their work is a shared dedication to
                    continuous improvement, ensuring that our programmes remain
                    challenging and relevant, our research impactful, and our
                    support services responsive to the needs of our students and
                    staff. They lead by example, fostering a culture of
                    integrity, accountability, and ambition across the
                    university.
                  </p>

                  <p>
                    With a clear focus on delivering an outstanding academic
                    experience, the Executive Board plays a key role in shaping
                    the university's environment where students can thrive and
                    staff are empowered to excel.
                  </p>
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

export default ExecutiveBoard;
