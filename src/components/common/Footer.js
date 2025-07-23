import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import whatsapp from "../../Images/icons/whatsapp.webp";
import { Link } from "react-router-dom";
import facebook from "../../Images/icons/facebook.png";
import twitter from "../../Images/icons/twitter.png";
import instagram from "../../Images/icons/instagram.png";
import linkedin from "../../Images/icons/linkedin.png";
import youtube from "../../Images/icons/youtube.png";
import logoWhite from "../../Images/logo/ISBMU LONDON WHITE LOGO.png";
import EnquiryNow from "./EnquiryNow";

const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "https://isbmuniversity.edu.in/admin-portal/schoolsApi"
        );
        setSchools(response.data.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    fetchSchools();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="footer-section bg-blue text-white ptb-50">
        <div className="container">
          <Row className="flex-wrap-reverse m-0">
            {/* Column 1: About Us */}
            <Col md={3} className="footer-column">
              <h4 className="footer-heading mt-4">About Us</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/about-us">About us </Link>
                </li>
                <li>
                  <Link to="/vision-mission">Vision Mission</Link>
                </li>
                <li>
                  <Link to="/governing-board">Governing Board</Link>
                </li>
                <li>
                  <Link to="/executive-board">Executive Board</Link>
                </li>

                <li>
                  <Link to="/accreditations-endorsements">Acceredition</Link>
                </li>
                <li>
                  <Link to="/policies">Policies</Link>
                </li>
              </ul>
            </Col>

            {/* Column 3: Admissions & Academics */}
            <Col md={3} className="footer-column">
              <h4 className="footer-heading mt-4">Admission</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">Admission</Link>
                </li>
                <li>
                  <Link to="/">How to Apply</Link>
                </li>
                <li>
                  <Link to="/">International Students</Link>
                </li>
                <li>
                  <Link to="/">Tution Fees</Link>
                </li>
                <li>
                  <Link to="/">Access and Participations</Link>
                </li>
                <li>
                  <Link to="/">Student Protection</Link>
                </li>
              </ul>
            </Col>

            <Col md={3} className="footer-column">
              <h4 className="footer-heading mt-4">Contact Us</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">How to Find Us</Link>
                </li>
                <li>
                  <Link to="/">Partnership Opportunities</Link>
                </li>
                <li>
                  <Link to="/">Work For Us</Link>
                </li>
              </ul>
            </Col>

            {/* Column 4: Logo, Address, Map & Social */}
            <Col md={3} className="footer-contact-column">
              <div className="footer-logo-wrapper">
                <img
                  src={logoWhite}
                  alt="ISBM University Logo"
                  className="footer-logo"
                />
              </div>

              <div className="footer-address">
                United Kingdom:
                <br />
                Sceptre House, 75-81 Staines Road
                <br />
                Hounslow,London,W5 2UA, UK
              </div>

              {/* <div className="footer-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4049.1388814933766!2d82.27918607519366!3d20.843678994109872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a25febf2368cb33%3A0x8df9cf351c0cd8d5!2sISBM%20University!5e1!3m2!1sen!2sin!4v1752229578743!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="ISBM University Location"
                ></iframe>
              </div> */}

              <div className="footer-social-icons">
                <div className="social-icons-grid">
                  <a
                    href="https://www.facebook.com/isbmuniversity/"
                    aria-label="Facebook"
                    className="social-icon"
                  >
                    <img src={facebook} alt="Facebook" className="icon-img" />
                    <span className="icon-bg"></span>
                  </a>
                  <a
                    href="https://instagram.com/isbm_university"
                    aria-label="Instagram"
                    className="social-icon"
                  >
                    <img src={instagram} alt="Instagram" className="icon-img" />
                    <span className="icon-bg"></span>
                  </a>
                  <a
                    href="https://twitter.com/ISBMUniversity"
                    aria-label="Twitter"
                    className="social-icon"
                  >
                    <img src={twitter} alt="Twitter" className="icon-img" />
                    <span className="icon-bg"></span>
                  </a>
                  <a
                    href="https://www.linkedin.com/school/13211303/admin/"
                    aria-label="LinkedIn"
                    className="social-icon"
                  >
                    <img src={linkedin} alt="LinkedIn" className="icon-img" />
                    <span className="icon-bg"></span>
                  </a>
                  <a
                    href="https://www.youtube.com/c/ISBMUniversity"
                    aria-label="YouTube"
                    className="social-icon"
                  >
                    <img src={youtube} alt="YouTube" className="icon-img" />
                    <span className="icon-bg"></span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="footer-copyright bg-golden">
        <div className="container">
          <Row className="m-0">
            <Col className="text-center">
              <p className="fw-medium">
                © Copyright {new Date().getFullYear()}{" "}
                <a href="https://isbmuniversity.edu.in/">ISBM University</a>.
                All Rights Reserved
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
