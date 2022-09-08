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
      <motion.h4
        className='lg:text-xl md:text-xl sm:text-lg xs:text-md w-full leading-normal  xs:mx-auto md:mx-0 text-justify'
        ref={ref}
        animate={animation}
        initial={{ opacity: 0, x: -50 }}
      >
        Especially picked and curated from over 20,000,000 possibilities, each
        of the 5000 Nautz NFTs has its own unique characteristics. Even the
        general ones in the collection are so distinct with such remarkable
        traits they go above and beyond what the HODLers would expect!
      </motion.h4>
    </div>
  );
};

export default ParaAbout;
