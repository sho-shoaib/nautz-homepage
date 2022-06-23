import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const ParaAbout = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.4,
        },
      });
    }
  }, [inView]);

  return (
    <div className='flex justify-between gap-16 items-center'>
      <motion.p
        className='lg:text-xl md:text-xl sm:text-lg xs:text-md w-full leading-normal  xs:mx-auto md:mx-0 text-justify'
        ref={ref}
        animate={animation}
        initial={{ opacity: 0, x: -50 }}
      >
        We created and curated 5000 Nautz that were selected and created from
        20,000,000 Possiblities, each NFT has it's own unique charateristics and
        traits. Even the common ones have such surreal traits that it goes
        beyond the expectations of the HODLers!
      </motion.p>
    </div>
  );
};

export default ParaAbout;
