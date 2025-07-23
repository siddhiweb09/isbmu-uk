import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BannerMob from "./BannerMob";
import AboutSec from "./AboutSec";
import Programs from "./Programs";
import InternationalPartnerships from "./InternationalPartnerships";
import Placement from "./Placement";
import Recruiters from "./Recruiters";
import Accred from "./Accred";
import Footer from "../common/Footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <link rel="canonical" href="https://isbmuniversity.org.in" />
      <title>ISBM University Chhattisgarh | Top University in India</title>
      {isMobile ? <BannerMob /> : <Banner />}
      <AboutSec />
      <Programs />
      <InternationalPartnerships />
      <Placement />
      <Recruiters />
      <Accred />
      <Footer />
      {/* 

      <Sports />
      <Events />
      <News />
      <Footer /> */}
    </>
  );
};

export default Home;
