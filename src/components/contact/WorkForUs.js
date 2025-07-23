import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Breadcrumb,
    Accordion,
} from "react-bootstrap";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/work-for-us-banner.jpg";
import { Link } from "react-router-dom";

const WorkForUs = () => {
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
                            <h1 class="display-3 university-name">Work For Us</h1>
                            <p class="lead tagline">
                                Transforming lives through the passion of educators.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptb-50">
                <Container>
                    <div className="p-4 p-md-5 bg-white rounded shadow-sm">
                        <h2 className="modern-title section-title text-blue text-center">
                            Work For Us
                        </h2>
                        <p>
                            We believe that education transforms lives and that begins with the people who deliver it. We are
                            proud to be a diverse, inclusive, and forward-thinking institution where staff are empowered to
                            grow, contribute meaningfully, and make a lasting impact on students, communities, and the global
                            education landscape.
                        </p>
                        <p>
                            Whether you’re an academic, researcher, or professional services colleague, you’ll find a supportive
                            and collaborative environment that values innovation, integrity, and continuous improvement. As
                            we grow and develop in the UK, we will be offering a range of rewarding career opportunities across
                            teaching, research, leadership, and operational roles, with flexible working options, ongoing
                            professional development, and a strong commitment to staff wellbeing.
                        </p>
                        <p>
                            As part of our growing team, you’ll play a vital role in helping us expand access to high-quality
                            education, support under-represented students, and build strong international partnerships,
                            particularly across the UK and India. If you share our passion for education that empowers and
                            uplifts, we’d love to hear from you.
                        </p>
                        <p className="text-center">
                        <small>
                            <span className="fw-bold">Nb.</span> we are particularly keen to hear from distinguished individuals to join our Board of Governors.
                        </small>
                        </p>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    );
};

export default WorkForUs;