import { Box } from "@mui/material";
import React from "react";
import naut8NoBg from "../assets/compress/naut8NoBg.png";
import naut9NoBg from "../assets/compress/naut9NoBg.png";
import naut10NoBg from "../assets/compress/naut10NoBg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Utility = () => {
  const [ref1, inView1] = useInView();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView1) {
      animation1.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      });
    }
  }, [inView1]);
  return (
    <div ref={ref1}>
      <Box
        component={motion.div}
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={animation1}
        id='utilities'
        maxWidth={"lg"}
        className='flex flex-col justify-center items-center mx-auto pb-44'
      >
        <div className='flex justify-center items-end mb-7'>
          <div className='image-container lg:w-60 md:w-60 sm:w-52 xs:w-40 lg:h-60 md:h-60 sm:h-52 xs:h-40 lg:-mr-28 md:-mr-28 xs:-mr-24 border-b-4'>
            <img
              src={naut10NoBg}
              alt='nautNoBg1'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='image-container lg:w-96 md:w-96 sm:w-80 xs:w-60 lg:h-96 md:h-96 sm:h-80 xs:h-60 z-10 border-b-4'>
            <img
              src={naut8NoBg}
              alt='nautNoBg2'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='image-container lg:w-60 md:w-60 sm:w-52 xs:w-40 lg:h-60 md:h-60 sm:h-52 xs:h-40 lg:-ml-28 md:-ml-28 xs:-ml-24 border-b-4'>
            <img
              src={naut9NoBg}
              alt='nautNoBg3'
              className='object-cover w-full h-full'
            />
          </div>
        </div>
        <div className='mb-8'>
          <h4 className='lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-semibold text-center lg:leading-normal md:leading-relaxed sm:leading-relaxed xs:leading-relaxed'>
            Join the community with
            <br />
            <h4 className='lg:text-7xl md:text-6xl sm:text-4xl xs:text-3xl text-indigo-400'>
              Utility since the pre-sale!
            </h4>
          </h4>
        </div>
        <div className='lg:w-3/5 md:w-3/5 sm:w-3/5 xs:w-10/12'>
          <h3 className='text-center md:text-xl sm:text-lg xs:text-md'>
            NAUTZ will be launching with utility already in place before the
            presale even begins, and get set go one we begin the presale, with
            regular sneak peeks and explanations in our discord.
          </h3>
        </div>
      </Box>
    </div>
  );
};

export default Utility;
