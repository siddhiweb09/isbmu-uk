import React from "react";
import Topnav from "../common/Topnav";
import Footer from "../common/Footer";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import bannerImage from "../../Images/Banner/support-hero.jpg";
import counselling from "../../Images/studentLife/counselling.jpg";
import careers from "../../Images/studentLife/careers.jpg";
import mentoring from "../../Images/studentLife/mentoring.jpg";
import learning from "../../Images/studentLife/learning.jpg";
import supportGroups from "../../Images/studentLife/supportGroups.jpg";
import disabilitySupport from "../../Images/studentLife/disabilitySupport.jpg";
import wellbeing from "../../Images/studentLife/wellbeing.jpg";

const StudentSupport = () => {
  const supportServices = [
    {
      title: "Personal Development Support & Counselling Services",
      image: counselling,
      content:
        "We understand that university life can come with challenges, both personal and academic. Our confidential counselling services are here to support your emotional wellbeing and personal development. From stress and anxiety to relationship issues or adjusting to university life, our qualified counsellors offer a safe space to talk things through. We also offer personal development workshops that focus on building resilience, self-confidence, and emotional intelligence.",
    },
    {
      title: "Careers Hub & Employability Support",
      image: careers,
      content:
        "Our Careers Hub is your go-to resource for everything related to your future career. We offer tailored information, advice, and guidance (IAG) to help you explore your options and prepare for life after university. This includes CV writing, interview preparation, job search strategies, and networking support. We also host employer-led workshops, recruitment events, and industry talks to connect you directly with professionals and potential employers in your field.",
    },
    {
      title: "Student Progression Mentors",
      image: mentoring,
      content:
        "You'll be supported by our dedicated Student Progression Mentors, friendly, trusted advisors who offer one-to-one guidance throughout your academic journey. They'll help you navigate university life, stay on track with your studies, and connect you with additional support where needed. Whether you're facing academic challenges or just need someone to talk to, they're here to help.",
    },
    {
      title: "Learning Development Support",
      image: learning,
      content:
        "Our Learning Development team offers academic support to help you excel in your studies. Services include study skills workshops, subject-specific booster sessions, and one-to-one guidance on topics such as time management, academic writing, referencing, and exam preparation. Whatever your academic background, we're here to help you build your confidence and succeed.",
    },
    {
      title: "Student Forums & Peer Support Groups",
      image: supportGroups,
      content:
        "We're proud of our inclusive and diverse community. Our student-led forums create safe spaces for you to connect with others, share experiences, and find peer support. Groups include LGBTQ+ students, disabled students, students of faith and different cultures, and more. These forums are a great way to build friendships, raise awareness, and foster a strong sense of belonging.",
    },
    {
      title: "Access & Disability Support",
      image: disabilitySupport,
      content:
        "If you're a disabled student or have a long-term health condition, we offer a comprehensive support package tailored to your needs. From access arrangements and assistive technology to one-to-one support and reasonable adjustments, our dedicated team will work with you to ensure that your university experience is inclusive, empowering, and accessible from start to finish.",
    },
    {
      title: "Wellbeing & Mental Health Services",
      image: wellbeing,
      content:
        "Your wellbeing matters to us. We provide a range of services to support your mental health, including wellbeing workshops, mindfulness sessions, drop-in clinics, and access to mental health practitioners. Whether you're looking for ongoing support or short-term help during a difficult time, we're here to help you take care of your mental and emotional health.",
    },
  ];

  const communityPartners = [
    "Substance Misuse Support",
    "Money Management",
    "Health & Wellbeing",
    "Housing Advice",
    "Benefits & Welfare Advice",
    "Single Parent & Family Support",
  ];

  return (
    <>
      <Topnav />

      {/* Hero Section */}
      <section
        class="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bannerImage})`,
        }}
      >
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h1 class="display-3 university-name">Student Support</h1>
              <p class="lead tagline">
                Comprehensive services to help you thrive in all aspects of
                university life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-5 bg-light">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <p className="lead">
                We're committed to helping you thrive, academically, personally,
                and professionally. Our broad range of support services is
                designed to ensure that every student has the tools, guidance,
                and encouragement needed to succeed at every stage of their
                journey.
              </p>
              <p>
                Whether you need academic help, personal advice, or professional
                development, we're here for you.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Main Support Services */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title modern-title mb-5 text-center">
            Our Support Services
          </h2>

          <Row className="g-4">
            {supportServices.map((service, index) => (
              <Col key={index} lg={4}>
                <Card className="h-100 border-0 shadow">
                  {service.image && (
                    <Card.Img
                      variant="top"
                      src={service.image}
                      className="img-fluid service-img"
                    />
                  )}
                  <Card.Body>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="">{service.content}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-5 bg-light">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="section-title modern-title mb-4 text-center">
                Working With the Wider Community
              </h2>
              <p className="text-center mb-5">
                To make sure you have access to even more holistic support, we
                work closely with a range of local partners and specialist
                organisations:
              </p>

              <Row className="g-3">
                {communityPartners.map((partner, index) => (
                  <Col key={index} sm={6} md={4}>
                    <div className="d-flex align-items-start p-3 bg-white rounded shadow">
                      <i className="fas fa-handshake text-primary mt-1 me-3"></i>
                      <span>{partner}</span>
                    </div>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-5">
                <Card className="bg-blue text-white border-2">
                  <Card.Body className="p-4">
                    <p className="lead mb-0">
                      Whatever your circumstances, our support network is here
                      to empower you throughout your university experience.
                      You're never alone and we're always ready to help you
                      reach your full potential.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default StudentSupport;
