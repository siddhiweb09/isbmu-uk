import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import logo from "../../Images/logo/isbm-university.jpg";

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
      { label: "About", link: "/about-us" },
      {
        label: "Vision Mission",
        link: "/vision-mission",
      },
      { label: "Governing Board", link: "/governing-board" },
      { label: "executive Board", link: "/executive-board" },
      { label: "Accredition", link: "/accreditations-endorsements" },
      { label: "Policies", link: "/policies" },
      // {
      //   label: "Code of Conduct (Management)",
      //   link: "/code-of-conduct-management",
      // },
      // { label: "Code of Conduct (Student)", link: "/code-of-conduct-student" },
      // {
      //   label: "Code of Conduct (Boardes of Hostel)",
      //   link: "/code-of-conduct-boardes-of-hostel",
      // },
    ],
    Academics: [
      { label: "courses", link: "/courses" },
      { label: "Online Education", link: "/online-education" },
      { label: "Academic Overview", link: "/academic-overview" },
      {
        label: "Academic Philosophy",
        link: "/academic-philosophy",
      },
      // { label: "Academics at Our London Campus ", link: "/" },
      // { label: "Acadmic Support", link: "/" },
      { label: "Industry Connection", link: "/" },
    ],
    Research: [
      { label: "Research", link: "/" },
      // ...schools.map((school, index) => ({
      //   key: index,
      //   label: school.title,
      //   link: `/${school.name.toLowerCase().replace(/\s+/g, "-")}`,
      // })),
      // You can add additional items after the mapped schools if needed
      // { label: "All Programmes", link: "/programmes" },
    ],
    Admissions: [
      {
        label: "Admission",
        link: "/admission",
      },
      {
        label: "How to apply",
        link: "/how-to-apply",
      },
      { label: "International Students", link: "/international-students-and-visa-support" },
      { label: "Tution Fees", link: "/tution-fees" },
      { label: "Access and Participations", link: "/access-and-participation" },
      { label: "Student Protection", link: "/student-protection" },
      // {
      //   label: "Payment Procedure Guidelines",
      //   link: "/payment-procedure-guidelines",
      // },
      // {
      //   label: "Admission Procedure Guidelines",
      //   link: "/admission-procedure-guidelines",
      // },
      // { label: "Admission Helpdesk", link: "/admission-help-desk" },
    ],
    "Student Life": [
      { label: "Campus Experience", link: "/" },
      { label: "Student Support", link: "/" },
      { label: "Student Activities", link: "/" },
      // { label: "Download", link: "/download-form" },
      // { label: "Alumni Portal", link: "https://isbmalumni.com/" },
      // { label: "Voter Portal", link: "https://voterportal.eci.gov.in/" },
      // { label: "Anti Ragging Committee", link: "/anti-ragging-committee" },
      // { label: "Anti-Ragging Squad", link: "/anti-ragging-squad" },
      // {
      //   label: "Scheduled Caste and Scheduled Tribe Committee",
      //   link: "/sc-and-st-committee",
      // },
      // { label: "Other Backward Class Committee", link: "/obc-committee" },
      // {
      //   label: "Students' Grievance Redressal Committee",
      //   link: "/student-grievance-committee",
      // },
      // { label: "Internal Complaints Committee", link: "/icc-committee" },
      // { label: "Cultural Committee", link: "/cultural-committee" },
      // { label: "Student Council", link: "/student-council" },
      // { label: "Student ERP", link: "https://isbmuniversity.online/" }
    ],
    ContactUs: [
      { label: "How to Find", link: "/" },
      { label: "Partnership Opportunities", link: "/" },
      // { label: "Global Readiness", link: "/global-readiness" },
      // { label: "Recruiters", link: "/recruiters" },
      // {
      //   label: "Campus Recruitment and Interview Training",
      //   link: "/campus-recruitment-interview-training",
      // },
      // { label: "Work at ISBM University", link: "/work-at-isbmu" },
    ],
    WorkForUs: [
      { label: "Work For Us", link: "/" },
      // { label: "Library", link: "/library" },
      // { label: "Laboratory", link: "/laboratory" },
      // { label: "Campus Infrastructure", link: "/campus-infrastructure" },
      // { label: "Sports Facilities", link: "/sports-facilities" },
      // { label: "Extra Curricular", link: "/extra-curricular" },
      // {
      //   label: "Digitized Learning System",
      //   link: "/digitized-learning-system",
      // },
      // { label: "Bus Routes And Schedules", link: "/bus-routes-and-schedules" },
      // { label: "Bus Transportation Fees", link: "/bus-transportation-fees" },
      // { label: "Bus Transportation", link: "/bus-transportation" },
      // { label: "Hostel", link: "/hostel" },
    ],
    // International: [
    //   {
    //     label: "International Partnerships",
    //     link: "/international-partnerships",
    //   },
    //   { label: "International Students", link: "/international-students" },
    // ],
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
                {dropdownContent["AboutUs"].map((subItem, subIndex) => (
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Research
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["Research"].map((subItem, subIndex) => (
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
                {dropdownContent["StudentLife"].map(
                  (subItem, subIndex) => (
                    <li>
                      <a
                        key={subIndex}
                        className="dropdown-item"
                        href={subItem.link}
                      >
                        {subItem.label}
                      </a>
                    </li>
                  )
                )}
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
                ContactUs
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["ContactUs"].map((subItem, subIndex) => (
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
                Work For Us
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["WorkForUs"].map((subItem, subIndex) => (
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
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                International
              </a>
              <ul className="dropdown-menu">
                {dropdownContent["International"].map((subItem, subIndex) => (
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
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenubarMob;
