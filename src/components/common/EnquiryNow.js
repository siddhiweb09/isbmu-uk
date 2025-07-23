import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import $ from "jquery";
import laptopgirl from "../../Images/home/enquiry_banner.webp";

function EnquiryNow3({ show, onHide }) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  useLayoutEffect(() => {
    if (show) {
      const fetchCity = () => {
        const state = $("#state").val();
        $.ajax({
          type: "POST",
          url: "https://insityapp.com/dbFiles/fetch_cities.php",
          data: { state },
          dataType: "json",
          success: (response) => {
            const city = $(".city");
            city.empty();
            response.cities.forEach((name) => {
              city.append($("<option>", { value: name, text: name }));
            });
          },
          error: (error) => {
            console.error("Error fetching cities:", error);
          },
        });
      };

      const fetchCourse = () => {
        const level = $("#level").val();
        const entity = "ISBMU";
        $.ajax({
          type: "POST",
          url: "https://insityapp.com/dbFiles/fetch_courses.php",
          data: { level, entity },
          dataType: "json",
          success: (response) => {
            const course = $(".course");
            course.empty();
            response.courses.forEach((name) => {
              course.append($("<option>", { value: name, text: name }));
            });
          },
          error: (error) => {
            console.error("Error fetching courses:", error);
          },
        });
      };

      // Fetch states and levels
      $.ajax({
        type: "POST",
        url: "https://insityapp.com/dbFiles/fetch_states.php",
        dataType: "json",
        success: (response) => {
          const state = $(".state");
          state.empty();
          state.append($("<option>", { value: "", text: "Select State" }));
          response.states.forEach((name) => {
            state.append($("<option>", { value: name, text: name }));
          });
        },
        error: (error) => {
          console.error("Error fetching states:", error);
        },
      });

      const entity = "ISBMU";
      $.ajax({
        type: "POST",
        url: "https://insityapp.com/dbFiles/fetch_levels.php",
        data: { entity },
        dataType: "json",
        success: (response) => {
          const level = $(".level");
          level.empty();
          level.append($("<option>", { value: "", text: "Select Level" }));
          response.levels.forEach((name) => {
            level.append($("<option>", { value: name, text: name }));
          });
        },
        error: (error) => {
          console.error("Error fetching levels:", error);
        },
      });

      $(".state").on("change", fetchCity);
      $(".level").on("change", fetchCourse);

      return () => {
        $(".state").off("change", fetchCity);
        $(".level").off("change", fetchCourse);
      };
    }
  }, [show]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // Redirect to the thank you page after showing preloader
          window.location.href = "/thank-you"; // Update this path as needed
        } else {
          setIsSubmitting(false);
          alert("Form submission failed: " + data.message);
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("An error occurred: " + error.message);
      });
  };

  return (
    <>
      {isSubmitting && (
        <div className="full-page-preloader">
          <div className="spinner-border text-primary" role="status"></div>
          <p>Submitting your details, please wait...</p>
        </div>
      )}
      <Modal
        className="enquiry_formss"
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="custom-modal "
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="abcd_modal_abcd mb-4">
          <Row className="m-0">
            {/* <Col lg={5}>
              <img className="img_enqurymodal" src={laptopgirl} alt="Enquiry" />
            </Col> */}
            <Col lg={12}>
              {/* Preloader */}
              {/* Conditional Rendering */}
              {isSubmitting ? (
                <div style={{ textAlign: "center" }}>
                  <p>Your data is being submitted...</p>
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                </div>
              ) : isThankYouVisible ? (
                <div className="thank-you-modal text-center">
                  <h1>Thank You !!</h1>
                  <p>Your submission was successful. </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  action="https://isbmuniversity.edu.in/submitLead.php"
                  method="post"
                  onSubmit={handleFormSubmit}
                  className="enquiryform"
                >
                  <Row className="m-0">
                    <h2 className="enquirymodalheading">
                      Connect With Our Counsellor
                    </h2>
                    <p className="enquirymodalheading2">
                      Please provide the information below, and our counselor
                      will get in touch with you.
                    </p>
                    <div className="form-group col-lg-6">
                      <label className="text-blue">Enter Your Name</label>
                      <input
                        type="text"
                        className="form-control form-control2 mb-3"
                        id="name"
                        name="name"
                        placeholder="Enter your Name"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label className=" text-blue">Enter Your Email</label>
                      <input
                        type="email"
                        className="form-control form-control2 mb-3"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        required
                      />
                    </div>

                    <div className="form-group col-lg-6 mb-3">
                      <label className=" text-blue">Enter Your Number</label>
                      <input
                        type="number"
                        maxLength="10"
                        style={{ width: "100%" }}
                        id="mobile_code"
                        className="form-control form-control2"
                        placeholder="Phone Number"
                        name="phone"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-3">
                      <label className=" text-blue">Select Your State</label>
                      <select
                        className="form-select form-control2 state"
                        id="state"
                        name="state"
                        required
                      >
                        <option value="">Select State</option>
                      </select>
                    </div>

                    <div className="form-group col-lg-6 mb-3">
                      <label className="text-blue">Select Your City</label>
                      <select
                        className="form-select form-control2 city"
                        id="city"
                        name="city"
                        required
                      >
                        <option value="">Select City</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-6 mb-3">
                      <label className="text-blue">
                        Degree you are looking*
                      </label>
                      <select
                        className="form-select form-control2 level"
                        id="level"
                        name="level"
                        required
                      >
                        <option value="">Select Level</option>
                      </select>
                    </div>

                    <div className="form-group mb-3">
                      <label className=" text-blue">
                        Programs you are looking for *
                      </label>
                      <select
                        className="form-select form-control2 course"
                        id="course"
                        name="course"
                        required
                      >
                        <option value="">Select Course</option>
                      </select>
                    </div>
                    <input
                    type="text"
                    className="form-control form-control2"
                    id="current_url"
                    name="current_url"
                    value={`${window.location.href}`}
                    hidden
                  />
                  <input
                    type="text"
                    name="utm_source"
                    value={
                      new URLSearchParams(window.location.search).get(
                        "utm_source"
                      ) || ""
                    }
                    hidden
                  />
                  <input
                    type="text"
                    name="utm_medium"
                    value={
                      new URLSearchParams(window.location.search).get(
                        "utm_medium"
                      ) || ""
                    }
                    hidden
                  />
                  <input
                    type="text"
                    name="utm_campaign"
                    value={
                      new URLSearchParams(window.location.search).get(
                        "utm_campaign"
                      ) || ""
                    }
                    hidden
                  />
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-purple px-5"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                  </Row>

                  
                </form>
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EnquiryNow3;
