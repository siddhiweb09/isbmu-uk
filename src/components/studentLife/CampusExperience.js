import React from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import bannerImage from "../../Images/Banner/campus-hero.jpg";
import classroom from "../../Images/campus/classroom.jpg";
import westLondon from "../../Images/campus/west-london.jpg";
import opportunities from "../../Images/campus/opportunities.jpg";
import community from "../../Images/campus/community.jpg";

const CampusExperience = () => {
  return (
    <>
      <Topnav />
      {/* Hero Section */}
      <section
        class="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bannerImage})`,
        }}
      >
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h1 class="display-3 university-name">The Campus Experience</h1>
              <p class="lead tagline">
                Where Indian academic heritage meets London's vibrant energy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <p className="lead mb-4">
                Welcome to ISBM University [India] London, located in Hounslow,
                west London - a vibrant, diverse, and thriving part of the
                capital where academic ambition meets real-world opportunity.
              </p>
              <p>
                Choosing to study here isn't just about earning a degree; it's
                about becoming part of a dynamic community that combines the
                energy of the city with the warmth of a supportive local
                environment.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-5">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src={classroom}
                className="img-fluid rounded shadow"
                alt="Classroom interaction"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title-start modern-title">Our Supportive Community</h2>
              <p>
                We are proudly situated in the heart of west London, a location
                that offers the best of both worlds. Unlike large, imposing
                campuses that can feel overwhelming, our community-focused
                campus is woven into the fabric of the local area.
              </p>
              <ListGroup variant="flush" className="mb-4 p-3 shadow">
                <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                  <i className="ti ti-circle-check mt-1 me-3 text-purple"></i>
                  <span>Smaller class sizes and personalised support</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                  <i className="ti ti-circle-check mt-1 me-3 text-purple"></i>
                  <span>Closer relationships with lecturers and peers</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 ps-0 d-flex align-items-start">
                  <i className="ti ti-circle-check mt-1 me-3 text-purple"></i>
                  <span>A true sense of belonging and safety</span>
                </ListGroup.Item>
              </ListGroup>
              <p className="fst-italic">
                At ISBM University [India] London, you're more than just a
                student ID, you're a valued member of the community.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Local Life Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
              <img
                src={westLondon}
                className="img-fluid rounded shadow"
                alt="West London landmarks"
              />
            </Col>
            <Col lg={6} className="order-lg-1">
              <h2 className="section-title-start modern-title">
                Local Life: Culture, Creativity, Connection
              </h2>
              <p>
                West London is a cultural melting pot, rich in history, music,
                and global cuisine. From riverside walks in Richmond to bustling
                markets in Shepherd's Bush, there's always something to explore.
              </p>
              <Row>
                <Col md={6}>
                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start mb-3 shadow bg-blue text-white rounded">
                      <i className="fas fa-map-marker-alt text-primary mt-1 me-3"></i>
                      <span>Westfield London shopping</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start mb-3 shadow bg-blue text-white rounded">
                      <i className="fas fa-map-marker-alt text-primary mt-1 me-3"></i>
                      <span>Kew Gardens (UNESCO Site)</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start mb-3 shadow bg-blue text-white rounded">
                      <i className="fas fa-map-marker-alt text-primary mt-1 me-3"></i>
                      <span>Lyric Theatre & Bush Hall</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0 d-flex align-items-start mb-3 shadow bg-blue text-white rounded">
                      <i className="fas fa-map-marker-alt text-primary mt-1 me-3"></i>
                      <span>Historic parks & palaces</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <p>
                With excellent transport links, central London is just a short
                tube ride away.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-5">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src={opportunities}
                className="img-fluid rounded shadow"
                alt="Professional opportunities"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title-start modern-title">
                Opportunities Around Every Corner
              </h2>
              <p>
                Studying at our London campus opens the door to a wealth of
                professional opportunities. The area is home to:
              </p>
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item className="border-0 d-flex align-items-start bg-purple text-white mb-3">
                  <i className="ti ti-briefcase mt-1 me-3"></i>
                  <span>Media and creative industries (BBC, Sky Studios)</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start bg-purple text-white mb-3">
                  <i className="ti ti-briefcase mt-1 me-3"></i>
                  <span>Thriving business hubs with networking events</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start bg-purple text-white">
                  <i className="ti ti-briefcase mt-1 me-3"></i>
                  <span>
                    World-class healthcare, tech, and education sectors
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <p>
                Whatever academic subject you're pursuing, our location places
                you at the crossroads of innovation and opportunity.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
              <img
                src={community}
                className="img-fluid rounded shadow"
                alt="Campus community"
              />
            </Col>
            <Col lg={6} className="order-lg-1">
              <h2 className="section-title-start modern-title">A Campus That Feels Like Home</h2>
              <p>
                Our campus prioritises accessibility, collaboration and
                community. Set in a welcoming neighbourhood, it's designed to
                encourage interaction between students, staff, and the wider
                community.
              </p>
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item className="border-0 d-flex align-items-start bg-golden fw-medium mb-3">
                  <i className="ti ti-home mt-1 me-3 fw-medium"></i>
                  <span>
                    Easy to navigate and less intimidating than large campuses
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start bg-golden fw-medium mb-3">
                  <i className="ti ti-home mt-1 me-3 fw-medium"></i>
                  <span>Surrounded by local cafés and independent shops</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start bg-golden fw-medium">
                  <i className="ti ti-home mt-1 me-3 fw-medium"></i>
                  <span>Fosters strong networks and lifelong friendships</span>
                </ListGroup.Item>
              </ListGroup>
              <p className="fst-italic">
                This unique setting offers a genuine connection to the local
                area that larger institutions often struggle to provide.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CampusExperience;
