import React from "react";
import naut11 from "../assets/compress/naut11.png";
import naut12 from "../assets/compress/naut12.png";
import naut1 from "../assets/compress/naut-1_1.png";
import naut2com from "../assets/compress/naut-2_1.png";
import naut3com from "../assets/compress/naut-3_1.png";
import naut15 from "../assets/compress/naut15.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const GridAbout = () => {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      });
    }
  }, [inView]);

  return (
    <motion.div
      className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:-mx-3 select-none lg:gap-10 md:gap-8 xs:gap-5 lg:p-20 md:p-10 xs:p-5 mt-8'
      ref={ref}
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={animation}
    >
      <div className='bg-slate-200 rounded-lg overflow-hidden'>
        <img
          src={naut12}
          alt='naut1'
          className='object-cover h-full w-full hover:scale-110 transition ease-in-out duration-300'
        />
      </div>

      <div className='bg-slate-200 rounded-lg overflow-hidden'>
        <img
          src={naut1}
          alt='naut1'
          className='object-cover h-full w-full hover:scale-110 transition ease-in-out duration-300'
        />
      </div>

      <div className='bg-slate-200 rounded-lg overflow-hidden'>
        <img
          src={naut15}
          alt='naut1'
          className='object-cover h-full w-full hover:scale-110 transition ease-in-out duration-300'
        />
      </div>

      <div className='bg-slate-200 rounded-lg overflow-hidden'>
        <img
          src={naut3com}
          alt='naut1'
          className='object-cover h-full w-full hover:scale-110 transition ease-in-out duration-300'
        />
      </div>

      <div className='bg-slate-200 rounded-lg overflow-hidden'>
        <img
          src={naut11}
          alt='naut1'
          className='object-cover h-full w-full hover:scale-110 transition ease-in-out duration-300'
        />
      </div>

      <div className='bg-slate-200 rounded-lg overflow-hidden'>
        <img
          src={naut2com}
          alt='naut1'
          className='object-cover h-full w-full hover:scale-110 transition ease-in-out duration-300'
        />
      </div>
    </motion.div>
  );
};

export default GridAbout;
