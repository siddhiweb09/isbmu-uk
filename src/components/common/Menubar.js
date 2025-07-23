import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Row } from "react-bootstrap";
import logo from "../../Images/logo/isbm-university.png";
import logoWhite from "../../Images/logo/ISBMU LONDON WHITE LOGO.png";
import logoRec from "../../Images/logo/accredition.png";
import menubarIcon from "../../Images/icons/menu.png";
import { Carousel } from "react-bootstrap";
import c1_image from "../../Images/commonimg/isbm12.webp";

import academicsImg1 from "../../Images/commonimg/acadcemics-1.jpg";
import academicsImg2 from "../../Images/commonimg/acadcemics-2.jpg";
import academicsImg3 from "../../Images/commonimg/acadcemics-3.jpg";
import academicsImg4 from "../../Images/commonimg/acadcemics-4.jpg";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const divRef = useRef(null);
  const targetRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [hoveredSchool, setHoveredSchool] = useState(null);
  const [courses, setCourses] = useState([]);
  const [schools, setSchools] = useState([]);

  // Consolidated size adjustment function
  const adjustSize = () => {
    if (divRef.current && targetRef.current) {
      const containerWidth = divRef.current.offsetWidth;
      targetRef.current.style.width = `${containerWidth}px`;
      setWidth(containerWidth);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

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
    const fetchCourses = async () => {
      try {
        if (hoveredSchool) {
          const response = await axios.get(
            `https://isbmuniversity.edu.in/admin-portal/coursesList${hoveredSchool}`
          );
          setCourses(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [hoveredSchool]);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => {
    adjustSize();
  };

  const handleMouseLeave = () => {};
  // Dropdown content for each menu item
  const dropdownContent = {
    "About Us": [
      { label: "About Us", link: "/about-us" },
      { label: "History", link: "/history" },
      {
        label: "Mission, Vision and Values",
        link: "/mission-vision-values",
      },
      { label: "Governing Board", link: "/governing-board" },
      { label: "Executive Board", link: "/executive-board" },
      {
        label: "Accredition and Endorsements",
        link: "/accreditations-endorsements",
      },
      { label: "Policies", link: "/policies" },
    ],
    Academics: [
      { label: "Courses", link: "/courses" },
      { label: "Online Education", link: "/online-education" },
      { label: "Looking Ahead", link: "/looking-ahead" },
      { label: "Academic Philosophy", link: "/academic-philosophy" },
      { label: "Academics at Our London Campus", link: "/academics-at-our-london-campus" },
      { label: "Academic Support & Development", link: "/academic-support-&-development" },
      { label: "Industry Connections and Employability", link: "/industry-connections-and-employability" },
    ],
    Admissions: [
      { label: "How to Apply", link: "/how-to-apply" },
      { label: "International Students & Visa Support", link: "/international-students-and-visa-support" },
      { label: "Tuition Fees", link: "/tuition-fees" },
      { label: "Access & Participation", link: "/access-and-participation" },
      { label: "Student Protection", link: "/student-protection" },
    ],
    "Student Life": [
      { label: "The Campus Experience", link: "/the-campus-experience" },
      { label: "Student Support", link: "/student-support" },
      { label: "Student Activities", link: "/student-activities" },
    ],
    "Contact Us": [
      { label: "How To Find Us", link: "/how-to-find-us" },
      { label: "Partnership Opportunities", link: "/partnership-opportunities" },
      { label: "Work for Us", link: "/work-for-us" },
    ],
  };

  const academicsCarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const placementCarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };

  const campusCarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark custom-navbar fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid p-0">
        <Row className="justify-content-between w-100 m-0 py-3 ps-5">
          <div className="logobar col-md-2 p-0">
            <a className="navbar-brand" href="/">
              <img className="logo" src={logoWhite} alt="University Logo" />
            </a>
            {/* <img className="reclogo" src={logoRec} alt="Accreditation Logo" /> */}
          </div>

          <div className="menubar col-md-10 p-0">
            <div className="menu_nav">
              <ul className="menu_header" ref={divRef}>
                <li
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={handleMouseLeave}
                  className="nav-item dropdown"
                >
                  <span className="nav-link dropdown-toggle">About Us</span>
                  <div
                    className="dropdown-menu col"
                    ref={targetRef}
                    onMouseEnter={() => handleMouseEnter()} // Keep hoverable
                    onMouseLeave={handleMouseLeave}
                    style={{ width: `${width}px` }} // Apply the measured widthMenu container width
                  >
                    <div className="col-12">
                      <div className="row m-0 p-4">
                        <div className="col-6">
                          <Carousel
                            className="menubar-carousel"
                            indicators={false}
                            controls={false}
                          >
                            <Carousel.Item interval={3000} data-pause="true">
                              <h3 className="text-decoration-underline mb-3">
                                Knowledge Meets Innovation
                              </h3>
                              <p>
                                <small>
                                  ISBM University is a UGC and NAAC-recognized
                                  institution dedicated to academic innovation
                                  and excellence.
                                </small>
                              </p>
                              <p>
                                <small>
                                  It offers a future-focused learning
                                  environment that nurtures talent and
                                  leadership.
                                </small>
                              </p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000} data-pause="true">
                              <h3 className="text-decoration-underline mb-3">
                                Excellence Engineered for Tomorrow
                              </h3>
                              <p>
                                <small>
                                  Our programs are designed with a strong
                                  industry-academic interface, blending theory
                                  with hands-on experience.
                                </small>
                              </p>
                              <p>
                                <small>
                                  From engineering to management, each course
                                  empowers students with practical skills and
                                  knowledge.
                                </small>
                              </p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000} data-pause="true">
                              <h3 className="text-decoration-underline mb-3">
                                Recognized. Respected. Remarkable.
                              </h3>
                              <p>
                                <small>
                                  Recognized by UGC, AICTE, AIU, PCI and
                                  accredited by NAAC for maintaining high
                                  academic standards.
                                </small>
                              </p>
                              <p>
                                <small>
                                  ISBM University is committed to compliance
                                  with top regulatory and quality benchmarks in
                                  higher education.
                                </small>
                              </p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000} data-pause="true">
                              <h3 className="text-decoration-underline mb-3">
                                Your Career, Our Commitment
                              </h3>
                              <p>
                                <small>
                                  We prepare students for global careers with a
                                  focus on real-world application, internships,
                                  and soft skills.
                                </small>
                              </p>
                              <p>
                                <small>
                                  Industry tie-ups, expert-led sessions, and
                                  placement support ensure strong career
                                  outcomes.
                                </small>
                              </p>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                        <div className="col-6">
                          <img src={c1_image} height={200} />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["About Us"].map(
                          (subItem, subIndex) => (
                            <div className="col-lg-4 col-md-6" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-10">
                                  <a
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                                <div className="col-1 dropdown-item-icon">
                                  <i className="ti ti-arrow-right"></i>{" "}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={handleMouseLeave}
                  className="nav-item dropdown"
                >
                  <span className="nav-link dropdown-toggle">Academics</span>
                  <div
                    className="dropdown-menu"
                    ref={targetRef}
                    onMouseEnter={() => handleMouseEnter()} // Keep hoverable
                    onMouseLeave={handleMouseLeave}
                    style={{ width: `${width}px` }} // Apply the measured widthMenu container width
                  >
                    <div className="col-6 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Academics"].map(
                          (subItem, subIndex) => (
                            <div className="col-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-10">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                                <div className="col-1 dropdown-item-icon">
                                  <i className="ti ti-arrow-right"></i>{" "}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="col-6 ps-3">
                      <Slider
                        {...academicsCarousel}
                        className="academics-carousel"
                      >
                        <div className="academicsImg">
                          <img src={academicsImg1} />
                        </div>
                        <div className="academicsImg">
                          <img src={academicsImg2} />
                        </div>
                        <div className="academicsImg">
                          <img src={academicsImg3} />
                        </div>
                        <div className="academicsImg">
                          <img src={academicsImg4} />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Research
                  </a>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={handleMouseLeave}
                  className="nav-item dropdown"
                >
                  <span className="nav-link dropdown-toggle">Admissions</span>
                  <div className="dropdown-menu" style={{ width: `${width}px` }}>
                    <div className="col-6 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Admissions"].map(
                          (subItem, subIndex) => (
                            <div className="col-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-10">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                                <div className="col-1 dropdown-item-icon">
                                  <i className="ti ti-arrow-right"></i>{" "}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="col-6 ps-3">
                      <div className="adm-card p-3">
                        <h4 className="text-decoration-underline">
                          Fill the Application Form
                        </h4>
                        <p>
                          <small>
                            Complete the online form with accurate academic and
                            personal details.
                          </small>
                        </p>
                        <button className="btn btn-primary trigger_popup">
                          Enquire Now
                        </button>
                      </div>
                      <div className="adm-card p-3">
                        <h4 className="text-decoration-underline">
                          Get Counselling
                        </h4>
                        <p>
                          <small>
                            Connect with our admission experts to choose the
                            right course and clarify your doubts.
                          </small>
                        </p>
                      </div>
                      <div className="adm-card p-3">
                        <h4 className="text-decoration-underline">
                          Pay & Submit
                        </h4>
                        <p>
                          <small>
                            Make the application fee payment and submit your
                            form for final review.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={handleMouseLeave}
                  className="nav-item dropdown"
                >
                  <span className="nav-link dropdown-toggle">Student Life</span>
                  <div
                    className="dropdown-menu"
                    ref={targetRef}
                    onMouseEnter={() => handleMouseEnter()} // Keep hoverable
                    onMouseLeave={handleMouseLeave}
                    style={{ width: `${width}px` }} // Apply the measured widthMenu container width
                  >
                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Student Life"].map(
                          (subItem, subIndex) => (
                            <div className="col-lg-6 col-md-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-10">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                                <div className="col-1 dropdown-item-icon">
                                  <i className="ti ti-arrow-right"></i>{" "}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={handleMouseLeave}
                  className="nav-item dropdown"
                >
                  <span className="nav-link dropdown-toggle">Contact Us</span>
                  <div
                    className="dropdown-menu"
                    ref={targetRef}
                    onMouseEnter={() => handleMouseEnter()} // Keep hoverable
                    onMouseLeave={handleMouseLeave}
                    style={{ width: `${width}px` }} // Apply the measured widthMenu container width
                  >
                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Contact Us"].map(
                          (subItem, subIndex) => (
                            <div className="col-lg-6 col-md-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-10">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                                <div className="col-1 dropdown-item-icon">
                                  <i className="ti ti-arrow-right"></i>{" "}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </div>
    </nav>
  );
};

export default Menubar;
