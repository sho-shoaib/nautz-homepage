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
import Keyword from "../Components/Keyword";

const RoadmapMob = () => {
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
          <h3 className='lg:text-8xl md:text-8xl sm:text-6xl xs:text-5xl font-black tracking-wide title-roadmap mb-5'>
            ROADMAP
          </h3>
          <h3 className='lg:text-3xl sm:text-3xl xs:text-2xl font-bold'>
            TO THE MOON 🌙
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
                      <li>Ipad pro giveaway</li>
                      <li>5 ETH Giveaway to our community</li>
                      <li>Limited edition merch giveaway to every HODLer</li>
                      <li>Tree plantation under the name of each NFT holder</li>
                      <li>
                        24 HODLers will get an invite to the{" "}
                        <Keyword
                          desc={
                            "Nautz Bunker is basically applied version of stack internship where we help you to convert your ideas into reality."
                          }
                        >
                          Nautz Bunker
                        </Keyword>
                      </li>
                      <li>Pre-sale access to accessories</li>
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
                      <li>
                        Entry to{" "}
                        <Keyword
                          desc={
                            "Exclusive holder's club is group of rare Naut hodlers where they get access to invite-only premium experience."
                          }
                        >
                          exclusive holder's club
                        </Keyword>
                      </li>
                      <li>5 ETH Giveaway to our community</li>
                      <li>
                        Sponsoring 3 college scholarships for aeronotical
                        engineering and space studies
                      </li>
                      <li>
                        Value exchange program initiation in the{" "}
                        <Keyword
                          desc={
                            "Nautz Bunker is basically applied version of stack internship where we help you to convert your ideas into reality."
                          }
                        >
                          Nautz Bunker
                        </Keyword>
                      </li>
                      <li>PS5 giveaway</li>
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
                      <li>5 ETH Giveaway to our community</li>
                      <li>
                        NAUTZ shorts with commercial rights,{" "}
                        <Keyword desc={"Nautz ecosystem"}>NOASIS</Keyword>{" "}
                        announcement
                      </li>
                      <li>
                        Invitations to{" "}
                        <Keyword desc={"Global Nautz popup events."}>
                          nautzpops
                        </Keyword>{" "}
                        all over the globe
                      </li>
                      <li>MacBook pro giveaway</li>
                      <li>NAUTZ sponsorship program</li>
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
                      <li>
                        Free trip to{" "}
                        <a
                          href='https://www.kennedyspacecenter-tickets.com/?gclid=Cj0KCQjwpeaYBhDXARIsAEzItbEKilZVpRvrS9CW7BtEUBurowFi5AKFOWfw3r5TMUU9tp3pMZztdp8aAv1sEALw_wcB'
                          target='_blank'
                          className='text-sp'
                        >
                          Nasa Dubai
                        </a>{" "}
                        to our top 5% HODLers
                      </li>
                      <li>Sending all 5000 NFTs to space</li>
                      <li>Launch our own marketplace</li>
                      <li>Launch NAUTZ P2E game</li>
                      <li>5 ETH Giveaway to our community</li>
                      <li>Custom build PC giveaway</li>
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
                <li>Ipad pro giveaway</li>
                <li>5 ETH Giveaway to our community</li>
                <li>Limited edition merch giveaway to every HODLer</li>
                <li>Tree plantation under the name of each NFT holder</li>
                <li>
                  24 HODLers will get an invite to the{" "}
                  <Keyword
                    desc={
                      "Nautz Bunker is basically applied version of stack internship where we help you to convert your ideas into reality."
                    }
                  >
                    Nautz Bunker
                  </Keyword>
                </li>
                <li>Pre-sale access to accessories</li>
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
                <li>
                  Entry to{" "}
                  <Keyword
                    desc={
                      "Exclusive holder's club is group of rare Naut hodlers where they get access to invite-only premium experience."
                    }
                  >
                    exclusive holder's club
                  </Keyword>
                </li>
                <li>5 ETH Giveaway to our community</li>
                <li>
                  Sponsoring 3 college scholarships for aeronotical engineering
                  and space studies
                </li>
                <li>
                  Value exchange program initiation in the{" "}
                  <Keyword
                    desc={
                      "Nautz Bunker is basically applied version of stack internship where we help you to convert your ideas into reality."
                    }
                  >
                    Nautz Bunker
                  </Keyword>
                </li>
                <li>PS5 giveaway</li>
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
                <li>5 ETH Giveaway to our community</li>
                <li>
                  NAUTZ shorts with commercial rights,{" "}
                  <Keyword desc={"Nautz ecosystem."}>NOASIS</Keyword>{" "}
                  announcement
                </li>
                <li>
                  Invitations to{" "}
                  <Keyword desc={"Global Nautz popup events."}>
                    nautzpops
                  </Keyword>{" "}
                  all over the globe
                </li>
                <li>MacBook pro giveaway</li>
                <li>NAUTZ sponsorship program</li>
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
                <li>
                  Free trip to{" "}
                  <a
                    href='https://www.kennedyspacecenter-tickets.com/?gclid=Cj0KCQjwpeaYBhDXARIsAEzItbEKilZVpRvrS9CW7BtEUBurowFi5AKFOWfw3r5TMUU9tp3pMZztdp8aAv1sEALw_wcB'
                    target='_blank'
                    className='text-sp'
                  >
                    Nasa Dubai
                  </a>{" "}
                  to our top 5% HODLers
                </li>
                <li>Sending all 5000 NFTs to space</li>
                <li>Launch our own marketplace</li>
                <li>Launch NAUTZ P2E game</li>
                <li>5 ETH Giveaway to our community</li>
                <li>Custom build PC giveaway</li>
              </ul>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default RoadmapMob;
