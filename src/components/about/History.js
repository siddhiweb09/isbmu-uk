import React, { Component } from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import bannerImage from "../../Images/Banner/historyBanner.jpg";
import legacyImage from "../../Images/about/legacy.jpg";
import globalImage from "../../Images/about/global.jpg";

const History = () => {
  return (
    <>
      <Topnav />
      <section class="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bannerImage})` }}>
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h1 class="display-3 university-name">Our History</h1>
              <p class="lead tagline">
                Rooted in tradition, driven by innovation — our journey shapes
                the future
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container">
          <Row className="m-0">
            <div className="col-md-6 d-flex justify-content-end flex-column">
              <div className="image-wrapper position-relative">
                <div className="image-bg h-75"></div>
                <img
                  src={legacyImage}
                  className="img-fluid rounded placement-image position-relative"
                  alt="Placement Classroom"
                />
              </div>
            </div>
            <Col lg={6}>
              <h2 className="section-title-start modern-title mt-lg-0 mt-4">
                ISBM University's Legacy
              </h2>
              <p>
                ISBM University in central India has a proud legacy of academic
                excellence, deeply rooted in India’s rich educational
                traditions. Since its establishment in 2016, the university has
                been a leader in cross-disciplinary learning, producing new
                generations of scholars, professionals, and changemakers. It was
                awarded the title "Best Upcoming University for 2017” in India
                and further building on this strong foundation, the university
                is now expanding its global footprint with a new campus in
                London.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <section className="pb-50">
        <div className="container">
          <Row className="m-0 justify-content-between">
            <Col lg={6}>
              <h2 className="section-title-start modern-title">
                Global Expansion
              </h2>
              <p>
                This milestone marks an exciting chapter, one that strengthens
                ISBM University’s commitment to international collaboration and
                student mobility. By establishing a presence in one of the
                world’s most dynamic academic and cultural hubs, we aim to
                create an educational bridge between India and the UK, fostering
                knowledge exchange, global partnerships, and transformative
                learning experiences.
              </p>
              <p>
                Our campus in west London is more than just an extension; it is
                a symbol of our vision for a borderless education system, where
                students, researchers, and industry leaders come together to
                solve global challenges and shape the future.
              </p>
            </Col>
            <div className="col-md-6 d-flex justify-content-end flex-column">
              <div className="image-wrapper position-relative">
                <div className="image-bg1 h-75"></div>
                <img
                  src={globalImage}
                  className="img-fluid rounded placement-image position-relative"
                  alt="Placement Classroom"
                />
              </div>
            </div>
          </Row>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default History;
