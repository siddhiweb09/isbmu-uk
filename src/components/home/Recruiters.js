import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";

import company1 from "../../Images/companylogo2/Gujarat Ambuja Exports Limited 2.jpg";
import company2 from "../../Images/companylogo2/aquaplast.png";
import company3 from "../../Images/companylogo2/aurobindo.png";
import company4 from "../../Images/companylogo2/dabur.webp";
import company5 from "../../Images/companylogo2/hira-logo1.png";
import company6 from "../../Images/companylogo2/kalpataru.jpg";
import company7 from "../../Images/companylogo2/nsdc.jpg";
import company8 from "../../Images/companylogo2/securitylab.png";
import company9 from "../../Images/companylogo2/tmc.png";
import company10 from "../../Images/companylogo2/vrize.jpg";
import company11 from "../../Images/companylogo2/apb_company.jfif";
import company12 from "../../Images/companylogo2/bsa_corporation_limited_company.jfif";
import company13 from "../../Images/companylogo2/chemfield_cellulose_logo.jfif";
import company14 from "../../Images/companylogo2/dbpower.jfif";
import company15 from "../../Images/companylogo2/digiSafari_company2.jfif";
import company16 from "../../Images/companylogo2/nitika.jfif";
import company17 from "../../Images/companylogo2/Struc_sompany4.jfif";
import company18 from "../../Images/companylogo2/tuliplab_logo.jfif";

const Recruiters = () => {
  const recruiterSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Recruiters data
  const recruiters = [
    { name: "Gujarat Ambuja Exports Limited", logo: company1 },
    { name: "Aquaplast", logo: company2 },
    { name: "Aurobindo Pharma", logo: company3 },
    { name: "Dabur", logo: company4 },
    { name: "HIRA Group", logo: company5 },
    { name: "Kalpataru Power Transmission Ltd.", logo: company6 },
    { name: "NSDC (National Skill Development Corporation)", logo: company7 },
    { name: "Security Lab", logo: company8 },
    { name: "TMC (The Mandhana Consortium)", logo: company9 },
    { name: "Vrize", logo: company10 },
    { name: "APB Corporation", logo: company11 },
    { name: "BSA Corporation Limited", logo: company12 },
    { name: "Chemfield Cellulose", logo: company13 },
    { name: "DB Power", logo: company14 },
    { name: "DigiSafari", logo: company15 },
    { name: "Nitika Pharmaceuticals", logo: company16 },
    { name: "STRUC (Structural Solutions Company)", logo: company17 },
    { name: "Tulip Lab", logo: company18 },
  ];

  return (
    <section className="ptb-50 bg-blue">
      <div className="container">
        <Row className="mt-5">
          <Col lg={12}>
            <div className="recruiters-section" data-aos="fade-up">
              <h2 className="modern-title">Our Top <span>Recruiters</span></h2>
              <p className="modern-subtitle">
                We partner with industry leaders to provide exceptional
                opportunities
              </p>

              <Slider {...recruiterSettings} className="recruiters-slider">
                {recruiters.map((recruiter, index) => (
                  <div className="recruiter-item" key={index}>
                    <div className="recruiter-logo-container">
                      <img
                        src={recruiter.logo}
                        alt={recruiter.name}
                        className="recruiter-logo"
                      />
                    </div>
                    <p className="recruiter-name">{recruiter.name}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Recruiters;
