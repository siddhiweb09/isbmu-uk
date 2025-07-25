import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./mediaCss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import History from "./components/about/History";
import VisionMission from "./components/about/VissionMission";
import GoverningBoard from "./components/about/GoverningBoard";
import ExecutiveBoard from "./components/about/ExecutiveBoard";
import Recognisation from "./components/about/Recognisation";
import Policies from "./components/about/Policies";

import Courses from "./components/academics/Courses";
import OnlineEducation from "./components/academics/OnlineEducation";
import LookingAhead from "./components/academics/LookingAhead";
import IndustryConnections from "./components/academics/IndustryConnections";
import AcademicPhilosophy from "./components/academics/AcademicPhilosophy";
import AcademicsLondon from "./components/academics/AcademicsLondon";
import AcademicSupport from "./components/academics/AcademicSupport";

import CampusExperience from "./components/studentLife/CampusExperience";
import StudentSupport from "./components/studentLife/StudentSupport";
import StudentActivities from "./components/studentLife/StudentActivities";

import Research from "./components/research/Research";

import Admission from "./components/admission/Admission";
import HowToApply from "./components/admission/HowToApply";
import IntStuVisaSupport from "./components/admission/IntStuVisaSupport";
import TutionFees from "./components/admission/TutionFees";
import AccessParticipation from "./components/admission/AccessParticipation";
import StudentProtection from "./components/admission/StudentProtection";

import HowToFindUs from "./components/contact/HowToFindUs";
import WorkForUs from "./components/contact/WorkForUs";
import PartnershipOpportunities from "./components/contact/PartnershipOpportunities";

import NotFoundPage from "./NotFoundPage"
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const [isRootEmpty, setIsRootEmpty] = useState(false);

  useEffect(() => {
    const rootDiv = document.getElementById("root");
    if (!rootDiv || rootDiv.innerHTML.trim() === "") {
      setIsRootEmpty(true);
    }
  }, []);

  if (isRootEmpty) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Home />} />
          {/* Aliases for home */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission-vision-values" element={<VisionMission />} />
          <Route path="/governing-board" element={<GoverningBoard />} />
          <Route path="/executive-board" element={<ExecutiveBoard />} />
          <Route
            path="/accreditations-endorsements"
            element={<Recognisation />}
          />
          <Route path="/policies" element={<Policies />} />
          <Route path="/our-programmes" element={<Courses />} />
          <Route path="/online-education" element={<OnlineEducation />} />
          <Route path="/looking-ahead" element={<LookingAhead />} />
          <Route
            path="/industry-connections-and-employability"
            element={<IndustryConnections />}
          />
          <Route
            path="/academic-support-&-development"
            element={<AcademicSupport />}
          />
          <Route path="/academic-philosophy" element={<AcademicPhilosophy />} />
          <Route
            path="/academics-at-our-london-campus"
            element={<AcademicsLondon />}
          />
          <Route path="/the-campus-experience" element={<CampusExperience />} />
          <Route path="/student-support" element={<StudentSupport />} />
          <Route path="/student-activities" element={<StudentActivities />} />

          <Route path="/how-to-find-us" element={<HowToFindUs />} />

          <Route path="/research" element={<Research />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route
            path="/international-students-and-visa-support"
            element={<IntStuVisaSupport />}
          />
          <Route path="/tuition-fees" element={<TutionFees />} />
          <Route
            path="/access-and-participation"
            element={<AccessParticipation />}
          />
          <Route path="/student-protection" element={<StudentProtection />} />
          <Route path="/work-for-us" element={<WorkForUs />} />
          <Route
            path="/partnership-opportunities"
            element={<PartnershipOpportunities />}
          />
          {/* 404 Handling */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
