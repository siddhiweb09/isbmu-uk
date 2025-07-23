import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";

import placementuser_1 from "../../Images/placement/placement1.jpeg";
import placementuser_2 from "../../Images/placement/placement2.jpg";
import placementuser_3 from "../../Images/placement/placement3.jpg";
import placementuser_4 from "../../Images/placement/placement4.jpg";
import placementuser_5 from "../../Images/placement/placement5.jpg";
import placementuser_6 from "../../Images/placement/placement6.jpg";
import placementuser_7 from "../../Images/placement/placement7.jpg";

const Placement = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="placement-modern ptb-50 color-section">
      <div className="container">
        <Row className="m-0">
          <Col lg={6}>
            <div>
              <h2 className="modern-title mb-5">
                Launch Your <span>Career</span> with <span>Confidence</span>
              </h2>
            </div>
          </Col>
        </Row>

        <Row className="placement-content justify-content-between">
          <Col lg={6} className="stats-container">
            <div className="stats-grid">
              {placementStats.map((stat, index) => (
                <div
                  className="stat-card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="stat-value">
                    {stat.value}
                    {stat.unit && (
                      <span className="lpa-text"> {stat.unit}</span>
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-decoration"></div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={5} className="placement-container">
            <Carousel>
              <Carousel.Item interval={3000} data-pause="true">
                <div className="placement-img-container ">
                  <img
                    className="d-block w-100 placement-img"
                    src={placementuser_1}
                    alt="The Best in Campus Facilities and Resources"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000} data-pause="true">
                <div className="placement-img-container ">
                  <img
                    className="d-block w-100 placement-img"
                    src={placementuser_2}
                    alt="The Best in Campus Facilities and Resources"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000} data-pause="true">
                <div className="placement-img-container">
                  <img
                    className="d-block w-100 placement-img"
                    src={placementuser_3}
                    alt="The Best in Campus Facilities and Resources"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000} data-pause="true">
                <div className="placement-img-container">
                  <img
                    className="d-block w-100 placement-img"
                    src={placementuser_4}
                    alt="The Best in Campus Facilities and Resources"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000} data-pause="true">
                <div className="placement-img-container">
                  <img
                    className="d-block w-100 placement-img"
                    src={placementuser_5}
                    alt="The Best in Campus Facilities and Resources"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000} data-pause="true">
                <div className="placement-img-container">
                  <img
                    className="d-block w-100 placement-img"
                    src={placementuser_6}
                    alt="The Best in Campus Facilities and Resources"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000} data-pause="true">
                <div className="placement-img-container">
                  <img
                    className="d-block w-100 placement-img"
                    src={placementuser_7}
                    alt="The Best in Campus Facilities and Resources"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </section>
  );
};

// Placement stats data
const placementStats = [
  { value: "6500", unit: "+", label: "Placements" },
  { value: "70", unit: "LPA", label: "Highest offer" },
  { value: "25", unit: "LPA", label: "Average offer" },
  { value: "250", unit: "+", label: "Companies hired students" },
  { value: "150", unit: "+", label: "Companies Visited" },
  { value: "95", unit: "%", label: "Students Placed" },
];

// const placementStats = [
//   { value: "NA", unit: "+", label: "Placements" },
//   { value: "NA", unit: "LPA", label: "Highest offer" },
//   { value: "NA", unit: "LPA", label: "Average offer" },
//   { value: "NA", unit: "+", label: "Companies hired students" },
//   { value: "NA", unit: "+", label: "Companies Visited" },
//   { value: "NA", unit: "%", label: "Students Placed" },
// ];

export default Placement;
