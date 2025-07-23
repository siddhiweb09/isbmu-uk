import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    ListGroup,
} from "react-bootstrap";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/work-for-us-banner.jpg";
import { Link } from "react-router-dom";

const PartnershipOpportunities = () => {
    const opportunitiesLinks = [
        "Articulation and progression pathways.",
        "Transnational education initiatives.",
        "Joint programme delivery and validation.",
        "Collaborative research projects.",
        "Staff development and academic exchange.",
        "Widening participation and inclusion strategies."
    ];
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
                            <h1 class="display-3 university-name">Partnership Opportunities</h1>
                            <p class="lead tagline">
                                Collaborate to Shape the Future of Learning
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <Row className="justify-content-center mb-5">
                        <Col lg={10}>
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-4 p-lg-5">
                                    <p>
                                        At ISBM University [India] London, we are building a bold and inclusive vision for the future of higher
                                        education. As a new university in the UK, we are currently in the advanced stages of institutional
                                        development, including preparing our registration submission to the Office for Students (OfS) and
                                        actively engaging with the Quality Assurance Agency (QAA) as part of our quality assurance and
                                        academic governance implementation.
                                    </p>

                                    <p className="mb-0">
                                        We are seeking to establish meaningful partnerships with UK universities that share our mission to
                                        broaden access, foster academic excellence, and address the evolving needs of diverse student
                                        populations, particularly first-generation learners and those from under-represented backgrounds.
                                        Our ambition is to co-create innovative, high-quality, and flexible educational models that respond
                                        to both local and global challenges.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <h2 className="section-title text-blue modern-title text-center mb-4">
                                Partnership Opportunities
                            </h2>
                            <p className="text-center mb-5">
                                We therefore invite UK universities to explore collaboration opportunities in areas such as:
                            </p>
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-0">
                                    <ListGroup variant="flush">
                                        {opportunitiesLinks.map((opportunity, index) => (
                                            <ListGroup.Item
                                                key={index}
                                                action
                                                className="py-3 px-4 d-flex align-items-center policy-item"
                                            >
                                                <i className="ti ti-brand-my-oppo fs-5 text-purple me-3"></i>
                                                <span>{opportunity}</span>
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
        </>
    );
};

export default PartnershipOpportunities;