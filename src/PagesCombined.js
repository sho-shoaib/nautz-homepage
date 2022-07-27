import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RoadmapNew from "./Pages/RoadmapNew";
import NavbarHome from "./Pages/NavbarHome";
import Utility from "./Pages/Utility";
import Faq from "./Pages/Faq";
import Team from "./Pages/Team";
import Speciality from "./Pages/Speciality";
import FooterBg from "./Components/FooterBg";
import bgSpaceImgcom from "./assets/compress/bg-spaceImg_1.jpg";
import useWindowDimensions from "./Components/getWindowDimensions";

const PagesCombined = ({ playSound }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Home />
      <NavbarHome />
      {width <= 500 && (
        <div
          className='h-screen w-screen fixed top-0 -z-20'
          style={{
            background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('${bgSpaceImgcom}')`,
            backgroundSize: "cover",
          }}
        />
      )}
      <About />
      <RoadmapNew />
      <Speciality />
      <Team />
      <Utility />
      <Faq playSound={playSound} />
      <FooterBg />
    </>
  );
};

export default PagesCombined;
