import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const RoadmapCardDesk1 = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: 0.2,
        },
      });
    }
  }, [inView]);

  return (
    <TimelineItem
      component={motion.div}
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={animation}
    >
      <TimelineOppositeContent className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow'>
        25%
      </TimelineOppositeContent>
      <TimelineSeparator className='mx-10'>
        <TimelineDot className='bg-white' />
        <TimelineConnector className='bg-white' />
      </TimelineSeparator>
      <TimelineContent className='mb-16'>
        <div className='glass p-5 rounded-lg'>
          <ul className='list-disc pl-3'>
            <li>Giveaway of 1 iPad Pro to one lucky NFT Holder.</li>
            <li>$5000 donation to animal welfare.</li>
            <li>
              First Nautz Event/Meetup in Mumbai, free access to everyone.
            </li>
          </ul>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default RoadmapCardDesk1;
