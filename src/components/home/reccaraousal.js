import React from "react";
import Slider from "react-slick";
import r1 from "../../Images/rec/11.webp";
import r2 from "../../Images/rec/14.png";
import r3 from "../../Images/rec/15.webp";
import r4 from "../../Images/rec/16.webp";
import r5 from "../../Images/rec/17.webp";
import r6 from "../../Images/rec/18.webp";
import r7 from "../../Images/rec/19.webp";
import r8 from "../../Images/rec/nsdc.webp";
import r9 from "../../Images/rec/aacsb.png";

const reccaraousal = () => {
  const happening_slider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...happening_slider} className="happening_slider">
      <div className="recognition-item">
        <div className="recognitionInfo shadow-lg m-auto">
          <img
            alt="Chhattisgarh Shasan Recognition"
            className="recognitionImg"
            src={r1}
          />
          <p>
            A Chhattisgarh Shasan recognized university ensures that your degree
            is officially validated, boosting your career prospects and
            credibility.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="UGC-Recognized University"
            className="recognitionImg"
            src={r2}
          />
          <p>
            A UGC-recognized university ensures your degree is nationally
            accredited, enhancing its value and your opportunities for higher
            education and employment.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="AICTE-recognized University"
            className="recognitionImg"
            src={r3}
          />
          <p>
            An AICTE-recognized university guarantees that your technical
            education meets national standards, increasing your employability in
            the engineering and technology sectors.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="CGPURC-recognized University"
            className="recognitionImg"
            src={r4}
          />
          <p>
            A CGPURC-recognized university ensures your degree is approved by
            the Chhattisgarh government, providing legitimacy and value to your
            educational qualifications within the state.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="Bar Council of India-recognized University"
            className="recognitionImg"
            src={r5}
          />
          <p>
            A Bar Council of India-recognized university ensures that your law
            degree is accredited, allowing you to practice law professionally
            across India.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="AIU-recognized University"
            className="recognitionImg"
            src={r6}
          />
          <p>
            An AIU-recognized university ensures your degree is equivalent to
            those from other accredited universities, facilitating seamless
            higher education and career opportunities both in India and abroad.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="Pharmacy Council-recognized University"
            className="recognitionImg"
            src={r7}
          />
          <p>
            A Pharmacy Council-recognized university ensures your pharmacy
            degree is accredited, qualifying you to practice as a licensed
            pharmacist in India.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="NSDC-recognized University"
            className="recognitionImg"
            src={r8}
          />
          <p>
            An NSDC-recognized university equips you with industry-aligned
            skills and certifications, enhancing your employability and
            readiness for the workforce.
          </p>
        </div>
      </div>
      <div className="recognition-item">
        <div className="recognitionInfo m-auto">
          <img
            alt="ISBM University Achieves AACSB Membership"
            className="recognitionImg"
            src={r9}
          />
          <p>
            International Prestige: AACSB membership indicates credibility, and
            our business programs are recognized and respected worldwide by
            employers and educational institutions.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default reccaraousal;
