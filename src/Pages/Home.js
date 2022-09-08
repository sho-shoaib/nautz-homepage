import React from "react";
import bgAstroVidCom from "../assets/compress/Bg-AstrovidCom.mp4";
import bgAstroImgCom from "../assets/compress/bg-AstroImg_1.png";
import { motion } from "framer-motion";
import useWindowDimensions from "../Components/getWindowDimensions";
import { Box } from "@mui/material";
import logo from "../assets/compress/logo.png";

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const { height, width } = useWindowDimensions();

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <Box
      id='home'
      className='w-full overflow-hidden flex justify-center items-center relative '
      sx={{ height: { xs: "75vh", sm: "91vh", md: "91vh" } }}
    >
      {width > 600 ? (
        <div
          className={`-z-10 absolute top-0 h-screen w-screen overflow-hidden ${
            isVideoLoaded ? "bg-black" : "bg-black"
          }`}
        >
          <img
            src={bgAstroImgCom}
            className='w-full object-cover object-top'
            alt='thumb'
            style={{ opacity: isVideoLoaded ? 0 : 0.55 }}
          />
          <video
            autoPlay
            loop
            muted
            onLoadedData={onLoadedData}
            style={{ opacity: isVideoLoaded ? 0.55 : 0 }}
            className='w-full h-full'
          >
            <source src={bgAstroVidCom} type='video/mp4' />
          </video>
        </div>
      ) : (
        <div
          className={`-z-10 absolute top-0 h-screen w-screen overflow-hidden bg-black`}
        >
          <img
            src={bgAstroImgCom}
            className='w-full h-full object-cover'
            alt='thumb'
            style={{ opacity: 0.55 }}
          />
        </div>
      )}
      <div className='h-full w-full fixed top-0 left-0 -z-10'></div>
      <div
        className='flex flex-col items-center gap-3'
        initial='initial'
        animate='animate'
      >
        <p className='lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-extrabold'>
          Welcome to
        </p>
        <motion.div
          className='font-black title-home mb-4 lg:mb-4 sm:mb-1 xs:mb-1 md:mb-4 px-6'
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.75,
            type: "tween",
            stiffness: 100,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <img src={logo} alt='logo' />
        </motion.div>
        <motion.h1
          className='text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-lg font-base sm:max-w-lg text-center px-5 xs:max-w-xs'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          5000 Super Cool <h1 className='font-semibold inline'>AstroNAUTZ</h1>{" "}
          About To Take Off Soon
        </motion.h1>
      </div>
      {/* <div
        className='bg-black h-14 w-full absolute bottom-0 right-0 left-0'
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      ></div> */}
    </Box>
  );
};

export default Home;
