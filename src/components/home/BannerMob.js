import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";

import { Row } from "react-bootstrap";
import logo from "../../Images/logo/isbm-university.png";
import { Carousel } from "react-bootstrap";
import MenubarMob from "../common/MenubarMob";

const BannerMob = () => {
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
      { label: "About ISBM University", link: "/about-us" },
      { label: "Vision & Mission", link: "/vision-mission" },
      { label: "Hon'ble Visitor", link: "/honorable-visitor" },
      { label: "Hon'ble Patron", link: "/honorable-patron" },
      { label: "Hon'ble Chancellor", link: "/honorable-chancellor" },
      { label: "Hon'ble Vice-Chancellor", link: "/honorable-vice-chancellor" },
      { label: "Registrar", link: "/official-registar" },
      { label: "Governing Body", link: "/governing-body" },
      { label: "Board of Management", link: "/board-management" },
      { label: "Academic Council", link: "/academic-council" },
      { label: "Board of Advisors", link: "/board-advisor" },
      { label: "Other Committees", link: "/other-communitie" },
      { label: "Messages of the Dignitaries", link: "/message" },
      { label: "Statutes and Ordinances", link: "/statues-and-ordinance" },
      { label: "Recognitions and Approvals", link: "/recognitions" },
      { label: "Awards", link: "/awards" },
      { label: "Media Coverage", link: "/media-coverage" },
      { label: "RTI", link: "/RTI" },
      { label: "Raj Bhavan", link: "https://rajbhavancg.gov.in/" },
      { label: "Code of Conduct (Faculty)", link: "/code-of-conduct-faculty" },
      {
        label: "Code of Conduct (Management)",
        link: "/code-of-conduct-management",
      },
      { label: "Code of Conduct (Student)", link: "/code-of-conduct-student" },
      {
        label: "Code of Conduct (Boardes of Hostel)",
        link: "/code-of-conduct-boardes-of-hostel",
      },
    ],
    Academics: [
      { label: "Academic Philosophy", link: "/academic-philosophy" },
      { label: "Academic Partners", link: "/academic-partner" },
      { label: "Online Resources", link: "/online-resources" },
      {
        label: "Teaching Methodology / Pedagogy",
        link: "/teaching-methodology-pedagogy",
      },
      { label: "MOOC with ISBM University", link: "/mooc-with-isbm" },
      { label: "MOUs' and Collaborations", link: "/mous-and-collaborations" },
      { label: "Student ERP", link: "https://isbmuniversity.online/" },
    ],
    Programmes: [
      ...schools.map((school) => ({
        label: school.title,
        link: `/${school.name.toLowerCase().replace(/\s+/g, "-")}`,
      })),
      // You can add additional items after the mapped schools if needed
      // { label: "All Programmes", link: "/programmes" },
    ],
    Admissions: [
      {
        label: "Programmes and Eligibilities",
        link: "/programmes-and-eligibilities",
      },
      {
        label: "Programmes By Qualification",
        link: "/programmes-by-qualification",
      },
      { label: "Skill Development", link: "/skill-development" },
      { label: "Research", link: "/Research" },
      { label: "Apply Online", link: "/apply-online" },
      { label: "Online Payment", link: "/pay-fees-online" },
      {
        label: "Payment Procedure Guidelines",
        link: "/payment-procedure-guidelines",
      },
      {
        label: "Admission Procedure Guidelines",
        link: "/admission-procedure-guidelines",
      },
      { label: "Admission Helpdesk", link: "/admission-help-desk" },
    ],
    "Student Services": [
      { label: "FAQ", link: "/faqs" },
      { label: "Scholarship", link: "/scholarship" },
      { label: "Anti-Ragging Policy", link: "/anti-ragging-policy" },
      { label: "Download", link: "/download-form" },
      { label: "Alumni Portal", link: "https://isbmalumni.com/" },
      { label: "Voter Portal", link: "https://voterportal.eci.gov.in/" },
      { label: "Anti Ragging Committee", link: "/anti-ragging-committee" },
      { label: "Anti-Ragging Squad", link: "/anti-ragging-squad" },
      {
        label: "Scheduled Caste and Scheduled Tribe Committee",
        link: "/sc-and-st-committee",
      },
      { label: "Other Backward Class Committee", link: "/obc-committee" },
      {
        label: "Students' Grievance Redressal Committee",
        link: "/student-grievance-committee",
      },
      { label: "Internal Complaints Committee", link: "/icc-committee" },
      { label: "Cultural Committee", link: "/cultural-committee" },
      { label: "Student Council", link: "/student-council" },
    ],
    Placements: [
      { label: "About Placements", link: "/about-placement" },
      { label: "Career Counselling", link: "/career-counselling" },
      { label: "Global Skills", link: "/global-skills" },
      { label: "Recruiters", link: "/recruiters" },
      {
        label: "Campus Recruitment & Interview Training",
        link: "/campus-recruitment-interview-training",
      },
      { label: "Work at ISBM University", link: "/work-at-isbmu" },
    ],
    Campus: [
      { label: "Overview", link: "/overview" },
      { label: "Library", link: "/library" },
      { label: "Laboratory", link: "/laboratory" },
      { label: "Campus Infrastructure", link: "/campus-infrastructure" },
      { label: "Extra Curricular", link: "/extra-curricular" },
      {
        label: "Digitized Learning System",
        link: "/digitized-learning-system",
      },
      { label: "Bus Routes And Schedules", link: "/bus-routes-and-schedules" },
      { label: "Bus Transportation Fees", link: "/bus-transportation-fees" },
      { label: "Hostel", link: "/hostel" },
    ],
    International: [
      {
        label: "International Partnerships",
        link: "/international-partnerships",
      },
      { label: "International Students", link: "/international-students" },
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

  return (
    <div>
      {/* <MenubarMob /> */}
    </div>
  );
};

export default BannerMob;
