import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import naut1com from "../assets/compress/naut-1_1.png";
import useWindowDimensions from "../Components/getWindowDimensions";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import naut2com from "../assets/compress/naut-2_1.png";
import naut3com from "../assets/compress/naut-3_1.png";
import naut14 from "../assets/compress/naut14.png";
import naut11 from "../assets/compress/naut11.png";
import naut12 from "../assets/compress/naut12.png";
import naut13 from "../assets/compress/naut13.png";
import naut1 from "../assets/compress/naut-1_1.png";
import TitleAbout from "../Components/TitleAbout";
import ParaAbout from "../Components/ParaAbout";

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
      <Box
        id='about'
        maxWidth={"lg"}
        className='m-auto p-6 items-center pt-32 '
      >
        <div
          ref={ref1}
          className='w-full md:flex gap-10 md:justify-around xs:justify-center items-center mb-32'
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={animation1}
            className='lg:w-6/12 md:w-6/12 sm:w-full'
          >
            <h1 className='lg:text-6xl md:text-5xl sm:text-5xl xs:text-4xl font-black md:mb-10 xs:mb-7'>
              What is <span className='title-about'>NAUTZ</span> ?
            </h1>
            <p className='lg:text-xl md:text-xl sm:text-lg xs:text-md font-base md:mb-6 xs:mb-10'>
              Nautz is a collection of 5000 different NFTs each blended in a
              unique way. Also on the top of the 5000 NFTs, there will be 100
              additional NFTs that are made by different types of artists
              whether it can be 2D, 3D, Traditional, Painter, Photographer, or
              even music artists. We are using the latest and the most efficient
              smart contract that is ERC 721A Minting will be in two phases,
              presale (only for whitelisted wallets) and public sale which will
              be for everyone.
            </p>
            {width > 900 && (
              <Button
                component={motion.button}
                variant='outlined'
                startIcon={<KeyboardArrowDownIcon />}
                className='text-indigo-400 border-indigo-300 hover:border-indigo-300 hidden'
              >
                Read more
              </Button>
            )}
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
        <div>
          <div className='w-full'>
            <TitleAbout />
            <ParaAbout />
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:-mx-3 select-none lg:gap-10 md:gap-8 xs:gap-5 lg:p-20 md:p-10 xs:p-5 mt-8'>
              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut12}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut1}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut13}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut3com}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut11}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut2com}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default About;
