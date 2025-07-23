import React, { useState, useEffect, useRef } from "react";
import Menubar from "./Menubar";
import MenubarMob from "./MenubarMob";

const Topnav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MenubarMob /> : <Menubar />}</>;
};

export default Topnav;
