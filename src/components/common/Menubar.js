import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Row } from "react-bootstrap";
import logo from "../../Images/logo/isbm-university.png";
import logoWhite from "../../Images/logo/ISBMU LONDON WHITE LOGO.png";

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
      { label: "Programmes", link: "/our-programmes" },
      { label: "Online Education", link: "/online-education" },
      { label: "Looking Ahead", link: "/looking-ahead" },
      { label: "Academic Philosophy", link: "/academic-philosophy" },
      {
        label: "Academics at Our London Campus",
        link: "/academics-at-our-london-campus",
      },
      {
        label: "Academic Support & Development",
        link: "/academic-support-&-development",
      },
      {
        label: "Industry Connections and Employability",
        link: "/industry-connections-and-employability",
      },
    ],
    Admissions: [
      { label: "How to Apply", link: "/how-to-apply" },
      {
        label: "International Students & Visa Support",
        link: "/international-students-and-visa-support",
      },
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
      {
        label: "Partnership Opportunities",
        link: "/partnership-opportunities",
      },
      { label: "Work for Us", link: "/work-for-us" },
    ],
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
          </div>

          <div className="menubar col-md-10 p-0">
            <div className="menu_nav">
              <ul className="menu_header" ref={divRef}>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle">About Us</span>
                  <div
                    className="dropdown-menu about-us-menu col"
                    ref={targetRef}
                    style={{ width: `${width}px` }}
                  >
                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["About Us"].map(
                          (subItem, subIndex) => (
                            <div className="col-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-12">
                                  <a
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle">Academics</span>
                  <div
                    className="dropdown-menu "
                    ref={targetRef}
                    style={{ width: `${width}px` }}
                  >
                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Academics"].map(
                          (subItem, subIndex) => (
                            <div className="col-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-12">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/research" className="nav-link">
                    Research
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle">Admissions</span>
                  <div
                    className="dropdown-menu"
                    style={{ width: `${width}px` }}
                  >
                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Admissions"].map(
                          (subItem, subIndex) => (
                            <div className="col-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-12">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle">Student Life</span>
                  <div
                    className="dropdown-menu student-life-menu"
                    ref={targetRef}
                    style={{ width: `${width}px` }}
                  >
                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Student Life"].map(
                          (subItem, subIndex) => (
                            <div className="col-lg-12 col-md-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-12">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle">Contact Us</span>
                  <div
                    className="dropdown-menu contact-us-menu"
                    ref={targetRef}
                    style={{ width: `${width}px` }}
                  >
                    <div className="col-12 p-0">
                      <div className="row justify-content-between m-0">
                        {dropdownContent["Contact Us"].map(
                          (subItem, subIndex) => (
                            <div className="col-lg-12 col-md-12" key={subIndex}>
                              <div className="row justify-content-between dropdown-item-border-bottom">
                                <div className="col-12">
                                  <a
                                    key={subIndex}
                                    className="dropdown-item col-6"
                                    href={subItem.link}
                                  >
                                    {subItem.label}
                                  </a>
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
