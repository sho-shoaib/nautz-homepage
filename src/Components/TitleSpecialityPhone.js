import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const TitleSpecialityPhone = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.2,
        },
      });
    }
  }, [inView]);

  return (
    <motion.h4
      className='lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl font-bold  text-indigo-500 text-center'
      ref={ref}
      animate={animation}
      initial={{ opacity: 0, y: 50 }}
    >
      What makes your NFT soo special?
    </motion.h4>
  );
};

export default TitleSpecialityPhone;
