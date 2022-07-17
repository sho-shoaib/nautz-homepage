import { Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import React from "react";
import useWindowDimensions from "../Components/getWindowDimensions";
import CircleIcon from "@mui/icons-material/Circle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Roadmap = () => {
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
        id='roadmap'
        maxWidth={"lg"}
        className='m-auto px-5 pb-20 pt-20'
      >
        <div className='flex flex-col items-center xs:mb-14 md:mb-20'>
          <h3 className='lg:text-4xl sm:text-3xl xs:text-2xl font-bold mb-3'>
            TO THE MOON
          </h3>
          <h3 className='lg:text-8xl md:text-8xl sm:text-6xl xs:text-5xl font-black tracking-wide title-roadmap'>
            ROADMAP
          </h3>
        </div>
        {width > 780 ? (
          <div>
            <Timeline position={`${width > 1060 ? "alternate" : "right"}`}>
              <TimelineItem>
                {width > 780 && (
                  <TimelineOppositeContent className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow'>
                    25%
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator className='mx-10'>
                  <TimelineDot className='bg-white' />
                  <TimelineConnector className='bg-white' />
                </TimelineSeparator>
                <TimelineContent className='mb-16'>
                  <div className='glass p-5 rounded-lg border-8 border-black'>
                    {width < 780 && (
                      <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                        25%
                      </p>
                    )}
                    <ul className='list-disc pl-3'>
                      <li>Giveaway of 1 iPad Pro to one lucky NFT Holder.</li>
                      <li>
                        Donating $5000 worth Art Supplies and systems to needy
                        artists.
                      </li>
                      <li>
                        First Nautz Event/Meetup in Mumbai, free access to
                        everyone.
                      </li>
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                {width > 780 && (
                  <TimelineOppositeContent className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow'>
                    50%
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator className='mx-10'>
                  <TimelineDot className='bg-white' />
                  <TimelineConnector className='bg-white' />
                </TimelineSeparator>
                <TimelineContent className='flex justify-end mb-16'>
                  <div className='glass p-5 rounded-lg rounded-lg border-8 border-black'>
                    {width < 780 && (
                      <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                        50%
                      </p>
                    )}
                    <ul className='list-disc pl-3'>
                      <li>3 ETH Giveaway among 3 lucky winners.</li>
                      <li>
                        Start an exclusive club among the holders which will
                        have special benifits.
                      </li>
                      <li>500 users will get Video Display LED necklaces.</li>
                      <li>Start NAUTZ DAO.</li>
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                {width > 780 && (
                  <TimelineOppositeContent className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow'>
                    75%
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator className='mx-10'>
                  <TimelineDot className='bg-white' />
                  <TimelineConnector className='bg-white' />
                </TimelineSeparator>
                <TimelineContent className='mb-16'>
                  <div className='glass p-5 rounded-lg rounded-lg border-8 border-black'>
                    {width < 780 && (
                      <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                        75%
                      </p>
                    )}
                    <ul className='list-disc pl-3'>
                      <li>Start Nautz Production House.</li>
                      <li>
                        Sponsor high-end systems to artists who are in for Nautz
                        Production House.
                      </li>
                      <li>
                        Start building our own marketplace only for NAUTZ.
                      </li>
                      <li>Start working on NAUTZ play-to-earn game.</li>
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                {width > 780 && (
                  <TimelineOppositeContent className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow'>
                    100%
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator className='mx-10'>
                  <TimelineDot className='bg-white' />
                  <TimelineConnector className='bg-white' />
                </TimelineSeparator>
                <TimelineContent className='flex justify-end '>
                  <div className='glass p-5 rounded-lg border-8 border-black'>
                    {width < 780 && (
                      <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                        100%
                      </p>
                    )}
                    <ul className='list-disc pl-3'>
                      <li>Send all the 5000 minted NFTs to literal space.</li>
                      <li>Launch our own marketplace.</li>
                      <li>Launch Nautz P2E game.</li>
                      <li>
                        Setup base office for Nautz Production House and start
                        employing.
                      </li>
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-2'>
            <div className='glass p-5 rounded-lg border-8 border-black xs:w-full sm:w-96'>
              <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                25%
              </p>
              <ul className='list-disc pl-3'>
                <li>Giveaway of 1 iPad Pro to one lucky NFT Holder.</li>
                <li>
                  Donating $5000 worth Art Supplies and systems to needy
                  artists.
                </li>
                <li>
                  First Nautz Event/Meetup in Mumbai, free access to everyone.
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className='h-14 w-2 bg-white rounded-lg'></div>
              <CircleIcon sx={{ fontSize: 15 }} />
            </div>

            <div className='glass p-5 rounded- border-8 border-black xs:w-full sm:w-96'>
              <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                50%
              </p>
              <ul className='list-disc pl-3'>
                <li>3 ETH Giveaway among 3 lucky winners.</li>
                <li>
                  Start an exclusive club among the holders which will have
                  special benifits.
                </li>
                <li>500 users will get Video Display LED necklaces.</li>
                <li>Start NAUTZ DAO.</li>
              </ul>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className='h-14 w-2 bg-white rounded-lg'></div>
              <CircleIcon sx={{ fontSize: 15 }} />
            </div>

            <div className='glass p-5 rounded-lg border-8 border-black xs:w-full sm:w-96'>
              <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                75%
              </p>
              <ul className='list-disc pl-3'>
                <li>Start Nautz Production House.</li>
                <li>
                  Sponsor high-end systems to artists who are in for Nautz
                  Production House.
                </li>
                <li>Start building our own marketplace only for NAUTZ.</li>
                <li>Start working on NAUTZ play-to-earn game.</li>
              </ul>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className='h-14 w-2 bg-white rounded-lg'></div>
              <CircleIcon sx={{ fontSize: 15 }} />
            </div>

            <div className='glass p-5 rounded-lg border-8 border-black xs:w-full sm:w-96'>
              <p className='lg:text-6xl md:text-6xl xs:text-5xl font-semibold text-glow lg:mb-0 xs:mb-5'>
                100%
              </p>
              <ul className='list-disc pl-3'>
                <li>Send all the 5000 minted NFTs to literal space.</li>
                <li>Launch our own marketplace.</li>
                <li>Launch Nautz P2E game.</li>
                <li>
                  Setup base office for Nautz Production House and start
                  employing.
                </li>
              </ul>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Roadmap;
