import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import logo from "../../Images/logo/isbm-university.png";

const MenubarMob = () => {
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
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top custom-mb-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="University Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["About Us"].map((subItem, subIndex) => (
                  <li>
                    <a
                      key={subIndex}
                      className="dropdown-item"
                      href={subItem.link}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["Academics"].map((subItem, subIndex) => (
                  <li>
                    <a
                      key={subIndex}
                      className="dropdown-item"
                      href={subItem.link}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a href="/research" className="nav-link">
                Research
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admissions
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["Admissions"].map((subItem, subIndex) => (
                  <li>
                    <a
                      key={subIndex}
                      className="dropdown-item"
                      href={subItem.link}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student Life
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["Student Life"].map((subItem, subIndex) => (
                  <li>
                    <a
                      key={subIndex}
                      className="dropdown-item"
                      href={subItem.link}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact Us
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["Contact Us"].map((subItem, subIndex) => (
                  <li>
                    <a
                      key={subIndex}
                      className="dropdown-item"
                      href={subItem.link}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenubarMob;
