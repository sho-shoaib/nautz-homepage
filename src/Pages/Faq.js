import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import noasisAudio from "../assets/compress/noasis.mp3";
import { Link } from "react-scroll";

const data = [
  {
    ques: "When will the NAUTZ launch?",
    ans: "When NAUTZ rockets are fueled.",
  },
  {
    ques: "How much will be the floor price?",
    ans: "Its NAUTZ my friend sky is the new floor.",
  },
  {
    ques: "Will NAUTZ have utility?",
    ans: "",
    custom: true,
  },
  {
    ques: "What does NAUZT have planned next?",
    ans: "",
    noasis: true,
  },
];

const Faq = ({ playSound }) => {
  const [ref1, inView1] = useInView();
  const animation1 = useAnimation();
  const navigate = useNavigate();

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
        id='faq'
        maxWidth={"lg"}
        className='mx-auto flex flex-col items-center pb-32 gap-10 pt-16'
      >
        <h4 className='lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl font-semibold text-glow'>
          FAQs
        </h4>
        <div className='lg:w-8/12 md:w-full lg:p-0 md:px-25 sm:px-15 xs:px-5'>
          <Accordion className='glass-faq text-white lg:p-4 md:p-4 sm:p-4 xs:p-2'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='text-white' />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <h2 className='lg:text-xl md:text-xl sm:text-xl xs:text-lg'>
                How can I buy NAUTZ NFT?
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              <h5 className='lg:text-lg md:text-lg sm:text-lg xs:text-base'>
                You can mint it right here on this website and listing will be
                on{" "}
                <a
                  href='https://opensea.io/collection/nautz'
                  className='text-indigo-300 underline-offset-1 underline'
                  target='_blank'
                >
                  Opensea.io
                </a>
              </h5>
            </AccordionDetails>
          </Accordion>
          {data.map(({ ques, ans, noasis, custom }) => {
            return (
              <Accordion className='glass-faq text-white lg:p-4 md:p-4 sm:p-4 xs:p-2'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <h4 className='lg:text-xl md:text-xl sm:text-xl xs:text-lg'>
                    {ques}
                  </h4>
                </AccordionSummary>
                <AccordionDetails>
                  {noasis ? (
                    <button
                      className='bg-violet-800 py-3 px-6 rounded-full text-lg font-semibold hover:scale-110 active:scale-95 transition-all'
                      onClick={() => {
                        navigate("/8f0f6134-de3d-4414-97f3-2f99beecc209");
                        playSound();
                      }}
                    >
                      Enter Noasis
                    </button>
                  ) : custom ? (
                    <h5 className='lg:text-lg md:text-lg sm:text-lg xs:text-base'>
                      What? didn't you see the
                      <Link
                        activeClass='active'
                        to='roadmap'
                        spy={true}
                        smooth={true}
                        className='text-indigo-300 underline-offset-1 underline inline-block ml-2 cursor-pointer'
                      >
                        <p>Roadmap</p>
                      </Link>
                    </h5>
                  ) : (
                    <h5 className='lg:text-lg md:text-lg sm:text-lg xs:text-base'>
                      {ans}
                    </h5>
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default Faq;
