import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Roadmap from "./Pages/Roadmap";
import NavbarHome from "./Pages/NavbarHome";
import bgSpaceImgcom from "./assets/compress/bg-spaceImg_1.jpg";
import Utility from "./Pages/Utility";
import Faq from "./Pages/Faq";

const PagesCombined = () => {
  return (
    <>
      <Home />
      <div
        className='bg-fixed'
        style={{
          background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('${bgSpaceImgcom}')`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <NavbarHome />
        <About />
        <Roadmap />
        <Utility />
        <Faq />
      </div>
    </>
  );
};

export default PagesCombined;
