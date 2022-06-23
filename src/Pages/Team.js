import { Box } from "@mui/material";
import React from "react";
import TeamCard from "../Components/TeamCard";
import teamAbhay from "../assets/compress/team-abhay.jpeg";
import teamFarhan from "../assets/compress/team-farhan.jpeg";
import teamShoaib from "../assets/compress/team-shoaib.jpeg";
import teamNaman from "../assets/compress/team-naman.jpeg";
import teamPariksit from "../assets/compress/team-pariksit.jpeg";
import teamMehul from "../assets/compress/team-mehul.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const data = [
  {
    name: "Farhan Khan",
    work: "Founder",
    image: teamFarhan,
    insta: "https://www.instagram.com/ripfarhan/",
    twitter: "https://twitter.com/ripfarhann",
    object: "top",
  },
  {
    name: "Parikshit Pndya",
    work: "Co-Founder",
    image: teamPariksit,
    insta: "https://www.instagram.com/parikshitpndya/",
    object: "top",
  },
  {
    name: "Mehul Mstry",
    work: "BDM",
    image: teamMehul,
    insta: "https://www.instagram.com/mehulmstry/",
    twitter: "https://twitter.com/impingegrafix",
    object: "top",
  },
  {
    name: "Abhayrajsinh Gohil",
    work: "CTO",
    image: teamAbhay,
    insta: "https://www.instagram.com/mxxnwolf/",
    twitter: "https://twitter.com/mxxnwolf",
    object: "top",
  },
  {
    name: "Shoaib Shaikh",
    work: "Developer",
    image: teamShoaib,
    linkedIn: "https://www.linkedin.com/in/shoaib-shaikh-658a62232/",
    object: "center",
  },
  {
    name: "Namaan Waheed",
    work: "Lead Marketer",
    image: teamNaman,
    insta: "https://www.instagram.com/namaanbread/",
    twitter: "https://twitter.com/Namaan1234",
    object: "top",
  },
];

const Team = () => {
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
    <Box
      component={motion.div}
      id='team'
      maxWidth={"lg"}
      className='mx-auto flex flex-col items-center gap-5 pb-32 pt-32'
      ref={ref}
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={animation}
    >
      <p className='lg:text-6xl sm:text-5xl xs:text-4xl font-bold mb-16 text-center text-glow'>
        MEET THE NAUTZ
      </p>
      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 justify-center items-center gap-y-16'>
        {data.map(({ name, work, image, insta, twitter, linkedIn, object }) => {
          return (
            <TeamCard
              name={name}
              work={work}
              image={image}
              insta={insta}
              twitter={twitter}
              linkedIn={linkedIn}
              object={object}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default Team;
