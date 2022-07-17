import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const TitleAbout = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.2,
        },
      });
    }
  }, [inView]);

  return (
    <motion.h2
      className='lg:w-full xs:w-full xs:text-center md:text-left lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl font-bold mb-6 lg:leading-relaxed md:leading-normal
      sm:leading-normal xs:leading-relaxed'
      ref={ref}
      animate={animation}
      initial={{ opacity: 0, x: -100 }}
    >
      <h2 className='text-indigo-500 inline'>5000</h2> NAUTZ Generated From
      <br />
      <h2 className='lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl'>
        <h2 className='text-indigo-500 inline'>20,000,000</h2> Possibilities
      </h2>
    </motion.h2>
  );
};

export default TitleAbout;
