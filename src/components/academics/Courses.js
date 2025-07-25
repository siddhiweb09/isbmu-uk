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
import courseImage1 from "../../Images/academic/mba-banner.jpg";
import courseImage2 from "../../Images/academic/diploma-strategic-management-banner.jpg";
import courseImage3 from "../../Images/academic/it-programe-banner.jpg";
import courseImage4 from "../../Images/academic/mba-2-banner.jpg";

const Courses = () => {
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
              <h1 class="display-3 university-name">Programmes Offered</h1>
              <p class="lead tagline">
                World-class education bridging Indian academic excellence with
                UK innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-section ptb-50">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={12}>
              <h2 className="section-title modern-title text-blue text-center">
                Our Programmes
              </h2>

              <p>
                Our extensive academic teams are currently developing new and
                exciting undergraduate and postgraduate programmes designed to
                prepare students for success in an increasingly competitive and
                globalised world. Rooted in academic excellence and real-world
                relevance, our programmes aim to equip graduates with the
                skills, knowledge, and confidence to thrive in their chosen
                fields.
              </p>

              <p>
                Delivered by our team of expert academics and industry
                practitioners, our programmes offer flexible study options and a
                supportive learning environment, making them accessible for all
                aspiring students and busy professionals.
              </p>

              <p>
                Our initial programme areas primarily focus on the dynamic and
                high-demand areas of Business Management and Leadership as well
                as Computing and Information Technology. These areas represent
                our commitment to delivering practical, future-focused education
                that meets the needs of students and employers alike. Our
                curriculum draws on the strengths of our Indian foundation while
                aligning with UK higher education standards and practices to
                ensure a globally informed, locally relevant offer. Students
                benefit from internationally recognised qualifications,
                cutting-edge pedagogy, and a learning environment that
                encourages critical thinking, innovation, and cross-cultural
                understanding.
              </p>
            </Col>
          </Row>

          {/* Courses Accordion */}
          <Row className="justify-content-center">
            <Col lg={12}>
              <h3 className="text-center modern-title section-title text-blue">
                Explore Our Programmes
              </h3>
              <div
                id="featured-course"
                className="container position-relative"
                style={{ marginTop: "-150px", zIndex: 2 }}
              >
                {/* MBA Top-Up */}
                <Row className="g-0 shadow-lg my-5">
                  <Col md={5} className="d-flex p-0">
                    <img
                      src={courseImage1}
                      alt="MBA Programme"
                      className="img-fluid h-100"
                      style={{
                        objectFit: "cover",
                        minHeight: "400px",
                        borderTopLeftRadius: "0.375rem",
                        borderBottomLeftRadius: "0.375rem",
                      }}
                    />
                  </Col>
                  <Col md={7} className="bg-white p-4 p-md-5">
                    <div>
                      <span className="badge bg-blue bg-opacity-10 text-light mb-3">
                        Postgraduate
                      </span>
                      <h4 className="fw-bold mb-3">MBA Top-Up</h4>
                      <div className="mb-4">
                        <p>
                          In partnership with and validated by ISBM University.
                        </p>
                        <p>
                          Take your leadership journey to the next level with
                          our MBA Top-Up programme, designed exclusively for
                          graduates of our Level 7 Postgraduate Diploma in
                          Strategic Management and Leadership.
                        </p>
                        <p>
                          Delivered in partnership with ISBM University, this
                          flexible and focused programme enables diploma holders
                          to achieve a full Master of Business Administration
                          (MBA) qualification by completing a final stage of
                          study consisting of a research methods module and
                          dissertation. The Top-Up offers a fast-track route to
                          an internationally recognised MBA, building directly
                          on the knowledge and skills developed during your
                          Level 7 studies.
                        </p>
                        <p>
                          This programme is ideal for ambitious professionals
                          seeking to enhance their strategic impact, broaden
                          their global business understanding, and gain a
                          respected qualification that can open doors to senior
                          roles in a wide range of sectors.
                        </p>
                      </div>
                      {/* <div className="d-flex gap-3 mt-4">
                        <Link to="/apply" className="btn btn-primary px-4 py-2">
                          Apply Now
                        </Link>
                        <Link
                          to="/mba-details"
                          className="btn btn-outline-primary px-4 py-2"
                        >
                          Learn More
                        </Link>
                      </div> */}
                    </div>
                  </Col>
                </Row>

                {/* L7 Postgraduate Diploma */}
                <Row className="g-0 shadow-lg mb-5">
                  <Col md={7} className="bg-white p-4 p-md-5">
                    <div>
                      <span className="badge bg-blue bg-opacity-10 text-light mb-3">
                        Postgraduate
                      </span>
                      <h4 className="fw-bold mb-3">
                        L7 Postgraduate Diploma in Strategic Management and
                        Leadership
                      </h4>
                      <div className="mb-4">
                        <p>
                          Designed for aspiring senior managers and leaders, our
                          Level 7 Postgraduate Diploma in Strategic Management
                          and Leadership offers a dynamic and forward-thinking
                          programme tailored to the demands of today’s complex
                          and rapidly evolving business environment.
                        </p>
                        <p>
                          This advanced qualification equips students with the
                          critical knowledge, practical tools, and strategic
                          insight needed to lead organisations through
                          transformation, drive innovation, and manage change
                          effectively. The curriculum focuses on high-level
                          strategic planning, leadership development, and
                          organisational performance, enabling professionals to
                          make informed decisions that align with long-term
                          objectives.
                        </p>
                        <p>
                          Whether you're looking to progress within your current
                          organisation or transition into a new leadership role,
                          this diploma provides a solid platform for career
                          advancement. The programme is ideal for experienced
                          managers, entrepreneurs, and professionals seeking to
                          deepen their strategic capabilities and achieve
                          Chartered Manager status or progress to an MBA or
                          further postgraduate study.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={5} className="d-flex p-0">
                    <img
                      src={courseImage2}
                      alt="Postgraduate Diploma"
                      className="img-fluid h-100"
                      style={{
                        objectFit: "cover",
                        minHeight: "400px",
                        borderTopLeftRadius: "0.375rem",
                        borderBottomLeftRadius: "0.375rem",
                      }}
                    />
                  </Col>
                </Row>

                {/* BA (Hons) Computing and IT */}
                <Row className="g-0 shadow-lg mb-5">
                  <Col md={5} className="d-flex p-0">
                    <img
                      src={courseImage3}
                      alt="Computing and IT"
                      className="img-fluid h-100"
                      style={{
                        objectFit: "cover",
                        minHeight: "400px",
                        borderTopLeftRadius: "0.375rem",
                        borderBottomLeftRadius: "0.375rem",
                      }}
                    />
                  </Col>
                  <Col md={7} className="bg-white p-4 p-md-5">
                    <div>
                      <span className="badge bg-blue bg-opacity-10 text-light mb-3">
                        Undergraduate
                      </span>
                      <h4 className="fw-bold mb-3">
                        BA (Hons) Computing and Information Technology
                      </h4>
                      <div className="mb-4">
                        <p>
                          In an increasingly digital world, our Computing and IT
                          programmes equip students with cutting-edge knowledge
                          in areas such as cybersecurity, data analysis, and
                          systems management. With a curriculum informed by
                          industry needs and technological innovation, students
                          will graduate with the practical and analytical skills
                          essential for careers across the global tech
                          landscape.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* BA (Hons) Business and Management */}
                <Row className="g-0 shadow-lg mb-5">
                  <Col md={7} className="bg-white p-4 p-md-5">
                    <div>
                      <span className="badge bg-blue bg-opacity-10 text-light mb-3">
                        Undergraduate
                      </span>
                      <h4 className="fw-bold mb-3">
                        BA (Hons) Business and Management
                      </h4>
                      <div className="mb-4">
                        <p>
                          Our Business and Management programmes are designed to
                          develop strategic thinking, leadership capabilities,
                          and commercial acumen. Blending academic rigour with
                          hands-on learning and real-world case studies, these
                          programmes prepare students to navigate and succeed in
                          today’s fast-paced, ever-evolving business
                          environment. Graduates will be well-equipped for a
                          broad range of roles across sectors, from
                          entrepreneurship to corporate leadership.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={5} className="d-flex p-0">
                    <img
                      src={courseImage4}
                      alt="Business and Management"
                      className="img-fluid h-100"
                      style={{
                        objectFit: "cover",
                        minHeight: "400px",
                        borderTopLeftRadius: "0.375rem",
                        borderBottomLeftRadius: "0.375rem",
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Courses;
