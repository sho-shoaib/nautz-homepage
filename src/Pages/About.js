import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useWindowDimensions from "../Components/getWindowDimensions";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import naut14 from "../assets/compress/naut14.png";
import TitleAbout from "../Components/TitleAbout";
import ParaAbout from "../Components/ParaAbout";
import GridAbout from "../Components/GridAbout";
import ButtonStory from "../Components/buttonStory/ButtonStory";

const About = () => {
  const { width } = useWindowDimensions();
  const [ref1, inView1] = useInView();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView1) {
      animation1.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      });
    }
  }, [inView1]);

  return (
    <div>
      <Box id='about' maxWidth={"lg"} className='m-auto p-6 items-center pt-32'>
        <div
          ref={ref1}
          className='w-full md:flex gap-10 md:justify-around xs:justify-center items-center'
          style={{ marginBottom: "80px" }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={animation1}
            className='lg:w-6/12 md:w-6/12 sm:w-full'
          >
            <h2 className='lg:text-6xl md:text-5xl sm:text-5xl xs:text-4xl font-black md:mb-10 xs:mb-7'>
              What is <h2 className='title-about inline'>NAUTZ</h2> ?
            </h2>
            <div>
              <h4 className='lg:text-lg md:text-lg sm:text-md xs:text-base font-base md:mb-6 xs:mb-10 w-full text-justify'>
                Nautz is a collection of 5000 different NFTs, each blended
                uniquely. The NFTs have been created using ERC 721A, the latest
                and most efficient smart contract. There will also be an
                additional 100 NFTs created by various traditional and digital
                artists, including 2D and 3D creators, painters, photographers,
                and musicians. Moreover, minting will be in two phases, presale
                (only for whitelisted wallets) and public sale, which will be
                for everyone.
              </h4>
            </div>
          </motion.div>
          <div
            className={`bg-slate-200 bg-center rounded-lg md:w-96 sm:w-9/12 xs:w-full xs:m-auto md:m-0`}
            style={{
              height: `400px`,
              backgroundImage: `url(${naut14})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <ButtonStory />
        <div>
          <div className='w-full'>
            <TitleAbout />
            <ParaAbout />
            <GridAbout />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default About;
