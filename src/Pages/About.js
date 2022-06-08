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
import naut4com from "../assets/compress/naut-4_1.png";
import naut5com from "../assets/compress/naut-5_1.png";

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
          delay: 0.1,
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
              The term beard can be used to describe someone who places bets on
              behalf of a high roller or a public figure. Some people want or
              need to stay anonymous and the beards they hire act as a disguise
              - much like facial hair can help to hide someone's identity.
            </p>
            {width > 900 && (
              <Button
                component={motion.button}
                variant='outlined'
                startIcon={<KeyboardArrowDownIcon />}
                className='text-indigo-400 border-indigo-300 hover:border-indigo-300'
              >
                Read more
              </Button>
            )}
          </motion.div>
          <div
            className={`bg-slate-200 bg-center rounded-lg md:w-96 sm:w-9/12 xs:w-full xs:m-auto md:m-0`}
            style={{
              height: `400px`,
              backgroundImage: `url(${naut1com})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div>
          <div className='w-full'>
            <h1
              className='lg:w-11/12 xs:w-full xs:text-center md:text-left lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl font-bold mb-6 lg:leading-normal md:leading-normal
      sm:leading-normal xs:leading-relaxed'
            >
              5000 NAUTZ generated from
              <br />
              <span className='lg:text-8xl md:text-7xl sm:text-6xl xs:text-4xl text-glow'>
                100,000 posibilities
              </span>
            </h1>
            <p className='lg:text-2xl md:text-xl sm:text-lg xs:text-md font-semibold lg:w-7/12 leading-normal xs:text-center xs:w-9/12 xs:mx-auto md:text-left md:mx-0'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur ipsa dolor enim soluta illo quis, neque sunt in aliquam
              consequatur dolore quos quo commodi corporis! Doloremque rerum
              culpa laborum magni.
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:-mx-3 select-none lg:gap-10 md:gap-8 xs:gap-5 lg:p-20 md:p-10 xs:p-5 mt-8'>
              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut2com}
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
                  src={naut4com}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut5com}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut1com}
                  alt='naut1'
                  className='object-cover h-full w-full'
                />
              </div>

              <div className='bg-slate-200 rounded-lg overflow-hidden'>
                <img
                  src={naut1com}
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
