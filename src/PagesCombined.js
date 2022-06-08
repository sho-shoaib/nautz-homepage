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
      <NavbarHome />
      <div
        className='h-screen w-screen fixed top-0 -z-50'
        style={{
          background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('${bgSpaceImgcom}')`,
          backgroundSize: "cover",
        }}
      />
      <About />
      <Roadmap />
      <Utility />
      <Faq />
    </>
  );
};

export default PagesCombined;
