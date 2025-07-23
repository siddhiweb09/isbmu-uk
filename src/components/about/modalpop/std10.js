import React from "react";
import { Modal, Button } from "react-bootstrap";
import aacsb from "../../../Images/docimg/Membership Certificate- AACSB.jpg";
function Std8(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ISBM University Achieves AACSB Membership – A Mark of Global Business
          Education Excellence
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <p>
          In the rapidly changing world of higher education, ISBM University is
          proud to declare a major milestone — membership with the globally
          acknowledged Association to Advance Collegiate Schools of Business
          (AACSB). This achievement represents our School of Management's
          commitment to academic excellence and producing future-ready business
          professionals.
          <br />
          <br />
          <strong>What is AACSB and Why Does It Matter?</strong>
          <br />
          Founded in 1916, AACSB is the world's oldest and most prestigious
          accrediting body for business schools. Member institutions meet
          rigorous standards that focus on: Curriculum Innovation: Business
          programs that reflect global industry trends. Faculty Expertise:
          Professors with cutting-edge research and practical business insights.
          Student-Centered Learning: Graduates who are ready for the job market
          and possess critical thinking skills. Global Impact: Students and
          graduates connect with international career opportunities.
          <br />
          <br />
          <strong>
            Benefits of AACSB Membership for ISBM University Students
          </strong>
          <br />
          International Prestige: AACSB membership indicates credibility, and
          our business programs are recognized and respected worldwide by
          employers and educational institutions. Superior Learning Experience:
          Students are exposed to an industry-relevant, research-driven
          curriculum designed to meet today's business challenges. Career
          Advancement: AACSB-accredited business programs often lead to better
          job prospects and higher earning potential. Networking Opportunities:
          Students can explore various career paths through strong connections
          with global industries and recruiters.
          <br />
          <br />
          <strong>Empowering the Next Generation of Business Leaders </strong>
          <br />
          At ISBM University's School of Management, this prestigious membership
          strengthens our resolve to provide a transformative learning
          experience. With AACSB's globally respected standards guiding our
          programs, we empower students with the skills and insights needed for
          a successful and impactful career in business.
        </p>{" "}
        <img src={aacsb} style={{ width: "100%", marginBottom: "20px" }} />
      </Modal.Body>
    </Modal>
  );
}

export default Std8;
