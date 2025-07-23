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

const App = () => {
  const [isRootEmpty, setIsRootEmpty] = useState(false);

  useEffect(() => {
    const rootDiv = document.getElementById("root");
    if (!rootDiv || rootDiv.innerHTML.trim() === "") {
      setIsRootEmpty(true);
    }
  }, []);

  if (isRootEmpty) {
    return <Navigate to="/dev-version/404" replace />;
  }

  return (
    <Router>
      {/* <ErrorBoundary> */}
      <Routes>
        {/* Default route */}
        <Route path="/dev-version/" element={<Home />} />
        {/* Aliases for home */}
        <Route path="/dev-version/home" element={<Navigate to="/dev-version/" replace />} />
        <Route path="/dev-version/about-us" element={<AboutUs />} />
        <Route path="/dev-version/history" element={<History />} />
        <Route path="/dev-version/mission-vision-values" element={<VisionMission />} />
        <Route path="/dev-version/governing-board" element={<GoverningBoard />} />
        <Route path="/dev-version/executive-board" element={<ExecutiveBoard />} />
        <Route
          path="/dev-version/accreditations-endorsements"
          element={<Recognisation />}
        />
        <Route path="/dev-version/policies" element={<Policies />} />
        <Route path="/dev-version/courses" element={<Courses />} />
        <Route path="/dev-version/online-education" element={<OnlineEducation />} />
        <Route path="/dev-version/looking-ahead" element={<LookingAhead />} />
        <Route
          path="/dev-version/industry-connections-and-employability"
          element={<IndustryConnections />}
        />
        <Route
          path="/dev-version/academic-support-&-development"
          element={<AcademicSupport />}
        />
        <Route path="/dev-version/academic-philosophy" element={<AcademicPhilosophy />} />
        <Route
          path="/dev-version/academics-at-our-london-campus"
          element={<AcademicsLondon />}
        />
        <Route path="/dev-version/the-campus-experience" element={<CampusExperience />} />
        <Route path="/dev-version/student-support" element={<StudentSupport />} />
        <Route path="/dev-version/student-activities" element={<StudentActivities />} />

        <Route path="/dev-version/how-to-find-us" element={<HowToFindUs />} />

        <Route path="/dev-version/research" element={<Research />} />
        <Route path="/dev-version/admission" element={<Admission />} />
        <Route path="/dev-version/how-to-apply" element={<HowToApply />} />
        <Route
          path="/dev-version/international-students-and-visa-support"
          element={<IntStuVisaSupport />}
        />
        <Route path="/dev-version/tuition-fees" element={<TutionFees />} />
        <Route path="/dev-version/access-and-participation" element={<AccessParticipation />} />
        <Route path="/dev-version/student-protection" element={<StudentProtection />} />
        <Route path="/dev-version/work-for-us" element={<WorkForUs />} />
        <Route
          path="/dev-version/partnership-opportunities"
          element={<PartnershipOpportunities />}
        />
        {/* 404 Handling */}
        {/* <Route path="/dev-version/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/dev-version/404" replace />} /> */}
      </Routes>
      {/* </ErrorBoundary> */}
    </Router>
  );
};

export default App;
