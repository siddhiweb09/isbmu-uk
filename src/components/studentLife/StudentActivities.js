import React from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import bannerImage from "../../Images/Banner/activities-hero.jpg";
import societies from "../../Images/studentLife/societies.jpg";
import events from "../../Images/studentLife/events.jpg";
import online from "../../Images/studentLife/online-activities.jpg";

const StudentActivities = () => {
  const clubs = [
    "Cultural Exchange Club",
    "Women in Leadership Network",
    "Student Ambassadors & Peer Mentors Group",
    "Tech & Digital Society",
    "Global Citizens Forum",
    "Entrepreneurship & Innovation Society",
  ];

  const eventsList = [
    "Welcome Week and International Student Socials",
    "Guest Speaker Series and Career Talks",
    "Cultural Celebrations (Diwali, Black History Month)",
    "Mental Health & Wellbeing Week",
    "Hackathons and Pitch Competitions",
    "Volunteering Days and Local Community Projects",
  ];

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
              <h1 class="display-3 university-name">Student Activities</h1>
              <p class="lead tagline">
                Discover passions, build friendships, and develop skills beyond
                the classroom
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction */}

      <section className="py-5 bg-light">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h2 className="section-title modern-title mb-4 text-center">
                Beyond the Classroom: Enriching Your Student Experience
              </h2>
              <p className="lead">
                At ISBM University we believe that university life is about more
                than just academics, it's about discovering your passions,
                building lifelong friendships, and developing skills that shape
                your future.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-5">
        <div className="container">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src={societies}
                className="img-fluid rounded shadow"
                alt="Student societies"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title-start modern-title mb-4">Clubs & Societies</h2>
              <p>
                Our student activities programme offers a wide range of
                opportunities to get involved. Whether you're interested in
                joining a student society or building leadership experience,
                there's something for everyone.
              </p>
              <Row>
                <Col md={6}>
                  <ListGroup variant="flush" className="mb-4">
                    {clubs.slice(0, 3).map((club, index) => (
                      <ListGroup.Item
                        key={index}
                        className="border-0 d-flex align-items-start shadow mb-3 p-3"
                      >
                        <i className="ti ti-users text-purple mt-1 me-3"></i>
                        <span>{club}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <ListGroup variant="flush">
                    {clubs.slice(3).map((club, index) => (
                      <ListGroup.Item
                        key={index}
                        className="border-0 d-flex align-items-start shadow mb-3 p-3"
                      >
                        <i className="ti ti-users text-purple mt-1 me-3"></i>
                        <span>{club}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-5 bg-light">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
              <img
                src={events}
                className="img-fluid rounded shadow"
                alt="University events"
              />
            </Col>
            <Col lg={6} className="order-lg-1">
              <h2 className="section-title-start modern-title mb-4">Events Calendar</h2>
              <p>
                We host a vibrant calendar of events throughout the year to
                enrich your student experience and connect you with peers.
              </p>
              <ListGroup variant="flush" className="mb-4">
                {eventsList.map((event, index) => (
                  <ListGroup.Item
                    key={index}
                    className="border-0 d-flex align-items-start bg-golden mb-3 fw-medium"
                  >
                    <i className="ti ti-calendar mt-1 me-3"></i>
                    <span>{event}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              {/* <button className="btn btn-primary mt-3">
                See Upcoming Events
              </button> */}
            </Col>
          </Row>
        </div>
      </section>

      {/* Online Activities */}
      <section className="py-5">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src={online}
                className="img-fluid rounded shadow"
                alt="Online activities"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title-start modern-title mb-4">Online & Blended Activities</h2>
              <p>
                For students studying via blended or online learning, many
                activities are offered virtually, ensuring everyone can stay
                connected, collaborate with peers, and fully engage in
                university life, regardless of location.
              </p>
              {/* <div className="d-flex gap-3 mt-4">
                <button className="btn btn-outline-primary">
                  <i className="fas fa-laptop me-2"></i> Virtual Events
                </button>
                <button className="btn btn-outline-primary">
                  <i className="fas fa-globe me-2"></i> Online Societies
                </button>
              </div> */}
            </Col>
          </Row>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="section-title modern-title mb-4 text-center">Shape Your University Experience</h2>
          <p className="lead mb-4">
            Student voices are central to everything we do. Get involved and
            help build a supportive, vibrant University community.
          </p>
          {/* <button className="btn btn-gold px-4">Get Involved Today</button> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default StudentActivities;
