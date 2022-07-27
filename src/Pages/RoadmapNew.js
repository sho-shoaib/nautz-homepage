import React from "react";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import useWindowDimensions from "../Components/getWindowDimensions";
import { motion } from "framer-motion";
import App from "../Components/roadmap/App";

const Roadmap = () => {
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
          duration: 1,
          delay: 0.2,
        },
      });
    }
  }, [inView1]);

  return (
    <>
      <div ref={ref1}>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={animation1}
          id='roadmap'
          maxWidth={"lg"}
          className='m-auto px-5 pb-24 pt-20'
        >
          <div className='flex flex-col items-center xs:mb-14 md:mb-20'>
            <h3 className='lg:text-8xl md:text-8xl sm:text-6xl xs:text-5xl font-black tracking-wide title-roadmap mb-5'>
              ROADMAP
            </h3>
            <h3 className='lg:text-3xl sm:text-3xl xs:text-2xl font-bold'>
              TO THE MOON 🌙
            </h3>
          </div>
          <App />
        </Box>
      </div>
    </>
  );
};

export default Roadmap;
