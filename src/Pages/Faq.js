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

const data = [
  {
    ques: "When and where is the mint date?",
    ans: "-- august on nautz.mint.com",
  },
  {
    ques: "How can I buy NAUTZ NFT?",
    ans: "Get on the Nautz whitelist or try to mint one on public sale come drop day on opensea.com",
  },
  {
    ques: "How many NAUTZ will be there?",
    ans: "5000",
  },
  {
    ques: "How much will be the floor price?",
    ans: "0.1 to 0.15 eth",
  },
  {
    ques: "Will NAUTZ have utility?",
    ans: "Yes, they will. By being a holder you will be granted access to exclusive events, metaverse worlds, airdrops & more.",
  },
];

const Faq = () => {
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
        id='faq'
        maxWidth={"lg"}
        className='mx-auto flex flex-col items-center pb-32 gap-10 pt-16'
      >
        <p className='lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl font-semibold text-glow'>
          FAQs
        </p>
        <div className='lg:w-8/12 md:w-full lg:p-0 md:px-25 sm:px-15 xs:px-5'>
          {data.map(({ ques, ans }) => {
            return (
              <Accordion className='glass-faq text-white lg:p-4 md:p-4 sm:p-4 xs:p-2'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <p className='lg:text-xl md:text-xl sm:text-xl xs:text-lg'>
                    {ques}
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className='lg:text-lg md:text-lg sm:text-lg xs:text-base'>
                    {ans}
                  </p>
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
