import React, { useState, useEffect, useRef } from "react";
import MenubarMob from "../common/MenubarMob";

const BannerMob = () => {
  return (
    <>
      {<MenubarMob />}
      <div className="hero-banner home-banner">
        <div className="container banner-content">
          <h6>Knowledge Meets Innovation</h6>
          <h1>
            Begin your learning <br></br>journey with <br></br>
            <span>ISBM university</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default BannerMob;
