import { Box } from "@mui/material";
import React from "react";
import nautNoBg1com from "../assets/compress/naut-6NoBg_1.png";
import nautNoBg2com from "../assets/compress/naut-7NoBg_1.png";
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
          delay: 0.1,
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
              src={nautNoBg2com}
              alt='nautNoBg'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='image-container lg:w-96 md:w-96 sm:w-80 xs:w-60 lg:h-96 md:h-96 sm:h-80 xs:h-60 z-10 border-b-4'>
            <img
              src={nautNoBg1com}
              alt='nautNoBg'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='image-container lg:w-60 md:w-60 sm:w-52 xs:w-40 lg:h-60 md:h-60 sm:h-52 xs:h-40 lg:-ml-28 md:-ml-28 xs:-ml-24 border-b-4'>
            <img
              src={nautNoBg2com}
              alt='nautNoBg'
              className='object-cover w-full h-full'
            />
          </div>
        </div>
        <div className='mb-8'>
          <p className='lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-semibold text-center lg:leading-normal md:leading-relaxed sm:leading-relaxed xs:leading-relaxed'>
            Join the community with
            <br />
            <span className='lg:text-8xl md:text-7xl sm:text-5xl xs:text-4xl text-indigo-400'>
              utility from day one.
            </span>
          </p>
        </div>
        <div className='lg:w-3/5 md:w-3/5 sm:w-3/5 xs:w-10/12'>
          <p className='text-center text-xl md:text-xl sm:text-lg xs:text-base font-semibold'>
            NAUTZ will be launching with utility already in place before the
            presale even begins, with regular sneak peeks and explanations in
            our discord.
          </p>
        </div>
      </Box>
    </div>
  );
};

export default Utility;
