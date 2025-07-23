import React from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import bannerImage from "../../Images/Banner/govBodyBanner.jpg";
import presidentImage from "../../Images/Hon'ble Persons/Dr. Vinay M. Agrawal.png";

const GoverningBoard = () => {
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
              <h1 class="display-3 university-name">Governing Board</h1>
              <p class="lead tagline">
                Strategic leadership for educational excellence and student
                success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container">
          <h2 className="section-title text-center modern-title">
            University Governance
          </h2>
          <p>
            At the heart of our university’s mission is a deep commitment to
            widening participation in higher education and supporting every
            student’s progression into meaningful employment. Our Governing
            Board plays a vital role in driving this vision forward.
          </p>
          <p>
            Comprised of dedicated individuals who bring a wealth of experience
            from both higher education and the commercial sector, the Board
            provides strategic leadership that reflects a balanced and
            forward-thinking approach. Their diverse backgrounds ensure that
            decisions are informed by a broad perspective — one that values
            academic excellence while also responding to the evolving needs of
            industry and society.
          </p>
          <p>
            Passionate about access, opportunity, and outcomes, our Board
            members champion initiatives that remove barriers to education,
            promote social mobility, and enhance graduate employability. Their
            combined expertise helps to shape a learning environment that
            prepares students not only for academic success but also for
            rewarding and impactful careers.
          </p>
          <p>
            Together, the Governing Board works closely with university
            leadership to ensure that our policies, partnerships, and programmes
            are aligned with our core purpose: to empower all students to reach
            their full potential.
          </p>
        </div>
      </section>

      <section className="ptb-50 bg-light">
        <div className="container">
          <h2 className="section-title text-center modern-title">
            Meet the President & Chancellor
          </h2>
          <Row className="m-0 justify-content-between">
            <Col lg={7}>
              <figure>
                <blockquote class="blockquote">
                  <h2 className="text-blue fs-2">Dr. Vinay M. Agrawal </h2>
                </blockquote>
                <figcaption class="blockquote-footer fs-5 mt-3 text-golden">
                  Ph.D., MBA, BE
                </figcaption>
              </figure>

              <p>
                Dr Agrawal is an educationist with solid leadership qualities
                and the ability to push the envelope of thought. He is highly
                acclaimed with an enthusiastic zeal and ambition to bring
                innovative changes to the education system, particularly in
                India. He is the recipient of several prestigious awards for his
                contribution to education in India, such as Shiksha Bharti
                Puraskar (2010) and Bharat Vikas Ratna (2012). In 2016 Dr
                Agrawal received recognition as being the ‘Youngest University
                Chancellor in the World’ (World Book Of Records UK).
              </p>
              <blockquote className="blockquote mt-4 p-3 bg-light border-start border-3 border-blue">
                <p className="mb-0 fst-italic">
                  "Education is an intervention in modern society where,
                  harmonious development can be achieved by enlightenment of an
                  individual's heart, mind and soul. I am of the opinion that
                  education can transform the attitude, thought process and
                  lifestyle of people leading to the development of society.
                  Education makes people flexible in thinking rationally and
                  making appropriate decisions. I have always worked towards
                  empowering the mass. Education serves as the tool and
                  technique of empowerment with skilled and socially relevant
                  citizens. ISBM University stands for humanism, rationality,
                  idea exploration and innovation. The approach of our
                  curriculum focuses on experiential learning, ensuring better
                  content delivery and provisions for co-curricular and
                  extra-curricular activities as integral components of the
                  learning process."
                </p>
                <footer className="blockquote-footer mt-2">
                  Dr. Vinay M. Agrawal
                </footer>
              </blockquote>
            </Col>
            <div className="col-md-5 mt-5 d-flex justify-content-center">
              <div className="image-wrapper position-relative w-100">
                <div className="image-bg1 h-75"></div>
                <img
                  src={presidentImage}
                  style={{ maxHeight: "450px" }}
                  className="img-fluid rounded placement-image position-relative"
                  alt="Placement Classroom"
                />
              </div>
            </div>
          </Row>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default GoverningBoard;
