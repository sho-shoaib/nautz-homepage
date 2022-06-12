import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const TitleSpeciality = () => {
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
    <motion.p
      className='lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl font-bold md:mb-10 xs:mb-7 text-indigo-500'
      ref={ref}
      animate={animation}
      initial={{ opacity: 0, x: 80 }}
    >
      What makes your NFT soo special?
    </motion.p>
  );
};

export default TitleSpeciality;
