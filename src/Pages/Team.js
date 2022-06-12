import { Box } from "@mui/material";
import React from "react";
import TeamCard from "../Components/TeamCard";
import teamAbhay from "../assets/compress/team-abhay.jpeg";
import teamFarhan from "../assets/compress/team-farhan.jpeg";
import teamShoaib from "../assets/compress/team-shoaib.jpeg";
import teamNaman from "../assets/compress/team-naman.jpeg";

const data = [
  {
    name: "Farhan Khan",
    work: "Founder & CEO",
    image: teamFarhan,
    insta: "https://www.instagram.com/ripfarhan/",
    twitter: "https://twitter.com/ripfarhann",
  },
  {
    name: "Shoaib Shaikh",
    work: "Developer",
    image: teamShoaib,
    linkedIn: "https://www.linkedin.com/in/shoaib-shaikh-658a62232/",
  },
  {
    name: "Abhayrajsinh Gohil",
    work: "Developer",
    image: teamAbhay,
    insta: "https://www.instagram.com/mxxnwolf/",
    twitter: "https://twitter.com/mxxnwolf",
  },
  {
    name: "Namaan Bread",
    work: "Lead Marketer",
    image: teamNaman,
    insta: "https://www.instagram.com/namaanbread/",
    twitter: "https://twitter.com/Namaan1234",
  },
];

const Team = () => {
  return (
    <Box
      id='team'
      maxWidth={"lg"}
      className='mx-auto flex flex-col items-center gap-5 pb-32 pt-32'
    >
      <p className='lg:text-6xl sm:text-5xl xs:text-4xl font-bold mb-16 text-center text-glow'>
        MEET THE TEAM
      </p>
      <div className='w-full grid sm:grid-cols-2 xs:grid-cols-1 justify-center items-center gap-y-16'>
        {data.map(({ name, work, image, insta, twitter, linkedIn }) => {
          return (
            <TeamCard
              name={name}
              work={work}
              image={image}
              insta={insta}
              twitter={twitter}
              linkedIn={linkedIn}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default Team;
