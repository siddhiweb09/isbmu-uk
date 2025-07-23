import React from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col, Card, Tab, ListGroup, Nav } from "react-bootstrap";
import bannerImage from "../../Images/Banner/work-for-us-banner.jpg";
import heathrow from "../../Images/contact/heathrow.jpg";
import gatwick from "../../Images/contact/gatwick.jpg";
import stansted from "../../Images/contact/stansted.jpg";
// import tube from "../../Images/Location/tube.jpg";

const HowToFindUs = () => {
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
              <h1 class="display-3 university-name">How To Find Us </h1>
              <p class="lead tagline">
                Conveniently located in Hounslow with excellent transport links
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
              <p className="lead">
                Our campus is easy to reach by rail or road, with several
                airports within driving distance. Heathrow, one of the world's
                busiest airports, is just 15 minutes away.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-blue modern-title text-center mb-4">
            Travel Options
          </h2>

          <Tab.Container defaultActiveKey="road">
            <Row>
              <Col lg={3} className="mb-4 mb-lg-0">
                <Card className="border-0 shadow bg-golden travel-ops">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="road"
                        className="py-3 d-flex align-items-center"
                      >
                        <i className="ti ti-car me-3"></i> By Road
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="plane"
                        className="py-3 d-flex align-items-center"
                      >
                        <i className="ti ti-plane me-3"></i> By Plane
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="rail"
                        className="py-3 d-flex align-items-center"
                      >
                        <i className="ti ti-train me-3"></i> By Rail
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="bus"
                        className="py-3 d-flex align-items-center"
                      >
                        <i className="ti ti-bus me-3"></i> By Bus
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card>
              </Col>
              <Col lg={9}>
                <Tab.Content>
                  {/* By Road */}
                  <Tab.Pane eventKey="road">
                    <Card className="border-0 shadow h-100">
                      <Card.Body>
                        <h3 className="section-title fs-3 modern-title text-center mb-4">
                          Travelling by Road
                        </h3>
                        <p>
                          Our postcode is <strong>TW3 3HW</strong> and is easily
                          accessible from the M40, M25, M4, M3, and M1
                          motorways.
                        </p>
                        <button className="btn bg-blue text-white mt-3">
                          <i className="ti ti-map me-2"></i> Get Directions
                        </button>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* By Plane */}
                  <Tab.Pane eventKey="plane">
                    <Card className="border-0 shadow h-100 travel-plane bg-blue">
                      <Card.Body>
                        <h2 className="section-title fs-3 text-white modern-title text-center mb-5">
                          Travelling by Plane
                        </h2>

                        <Row className="g-4">
                          <Col md={4}>
                            <Card className="h-100 border-0 shadow">
                              <Card.Img variant="top" src={heathrow} />
                              <Card.Body>
                                <h5>Heathrow Airport</h5>
                                <p className="small">
                                  World's busiest international airport, just 15
                                  minutes away.
                                </p>
                                <ListGroup variant="flush" className="small">
                                  <ListGroup.Item className="border-0 ps-0">
                                    <i className="ti ti-road me-2"></i> 15min by
                                    road
                                  </ListGroup.Item>
                                  <ListGroup.Item className="border-0 ps-0">
                                    <i bg-goldenclassName="ti ti-subway me-2"></i>{" "}
                                    20min via Piccadilly Line
                                  </ListGroup.Item>
                                </ListGroup>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-outline-primary mt-2 w-100"
                                >
                                  More Info
                                </a>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col md={4}>
                            <Card className="h-100 border-0 shadow">
                              <Card.Img variant="top" src={gatwick} />
                              <Card.Body>
                                <h5>Gatwick Airport</h5>
                                <p className="small">
                                  Second-largest UK airport, about 55 minutes
                                  away.
                                </p>
                                <ListGroup variant="flush" className="small">
                                  <ListGroup.Item className="border-0 ps-0">
                                    <i className="ti ti-road me-2"></i> 55min by
                                    road
                                  </ListGroup.Item>
                                  <ListGroup.Item className="border-0 ps-0">
                                    <i className="ti ti-train me-2"></i> 1hr
                                    20min by rail
                                  </ListGroup.Item>
                                </ListGroup>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-outline-primary mt-2 w-100"
                                >
                                  More Info
                                </a>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col md={4}>
                            <Card className="h-100 border-0 shadow">
                              <Card.Img variant="top" src={stansted} />
                              <Card.Body>
                                <h5>Stansted Airport</h5>
                                <p className="small">
                                  Major hub for low-cost airlines, about 90
                                  minutes away.
                                </p>
                                <ListGroup variant="flush" className="small">
                                  <ListGroup.Item className="border-0 ps-0">
                                    <i className="ti ti-road me-2"></i> 1hr
                                    30min by road
                                  </ListGroup.Item>
                                  <ListGroup.Item className="border-0 ps-0">
                                    <i className="ti ti-train me-2"></i> 1hr
                                    50min by rail
                                  </ListGroup.Item>
                                </ListGroup>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-outline-primary mt-2 w-100"
                                >
                                  More Info
                                </a>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* By Rail */}
                  <Tab.Pane eventKey="rail">
                    <Card className="border-0 shadow h-100">
                      <Card.Body>
                        <h3 className="section-title fs-3 modern-title text-center mb-4">
                          Travelling by Rail
                        </h3>

                        <Row>
                          <Col md={6}>
                            <h4 className="text-decoration-underline">
                              National Rail Services
                            </h4>
                            <p>
                              <strong>Hounslow Railway Station</strong> (TW3
                              2DQ) is served by Southwestern Railway with
                              services from London Waterloo.
                            </p>
                            <ul className="mb-4">
                              <li>12 minute walk to campus</li>
                              <li>Trains every 30 minutes</li>
                            </ul>
                          </Col>
                          <Col md={6}>
                            <h4 className="text-decoration-underline">
                              London Underground
                            </h4>
                            <p>
                              <strong>Hounslow Central Station</strong> on the
                              Piccadilly Line provides direct connections to
                              central London.
                            </p>
                            <ul>
                              <li>5 minute walk to campus</li>
                              <li>Direct to major stations</li>
                            </ul>
                          </Col>
                        </Row>

                        {/* <img
                          src={tube}
                          className="img-fluid rounded mt-3"
                          alt="Tube map"
                        /> */}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* By Bus */}
                  <Tab.Pane eventKey="bus">
                    <Card className="border-0 shadow h-100">
                      <Card.Body>
                        <h3 className="section-title fs-3 modern-title text-center mb-4">
                          Travelling by Bus
                        </h3>
                        <p>The campus is well-served by numerous bus routes:</p>

                        <Row>
                          <Col md={6}>
                            <div className="p-3 bg-blue text-white rounded mb-3">
                              <h6 className="mb-2">
                                <i className="ti ti-map text-golden me-2"></i>
                                Hibernia Road (Stop E)
                              </h6>
                              <p className="small mb-1">1 minute walk</p>
                              <p className="small mb-0">
                                Routes: 116, 117, 235, 237, 423, 635
                              </p>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="p-3 bg-blue text-white rounded">
                              <h6 className="mb-2">
                                <i className="ti ti-map text-golden me-2"></i>
                                St Michael & St Martin Church (Stop H)
                              </h6>
                              <p className="small mb-1">2 minute walk</p>
                              <p className="small mb-0">
                                Routes: 81, 203, 222, H32, H98, N9
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-blue modern-title text-center mb-4">
            Our Addresses
          </h2>
          <Row>
            <Col lg={6}>
              <Card className="border-0 shadow h-100">
                <Card.Body>
                  <h3 className="text-purple text-decoration-underline mb-3">
                    United Kingdom Campus
                  </h3>
                  <address className="mb-0">
                    Sceptre House, 75-81 Staines Road
                    <br />
                    Hounslow, London
                    <br />
                    W5 2UA, UK
                  </address>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow h-100">
                <Card.Body>
                  <h3 className="text-purple text-decoration-underline mb-3">
                    India Campus
                  </h3>
                  <address className="mb-0">
                    Nawapara (Kosmi)
                    <br />
                    Block & Tehsil - Chhura
                    <br />
                    Gariyaband, Chhattisgarh - 493996
                    <br />
                    India
                  </address>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HowToFindUs;
