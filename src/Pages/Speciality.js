import { Box } from "@mui/material";
import React from "react";
import ImagePlaceHolder from "../assets/compress/naut-6NoBg_1.png";
import useWindowDimensions from "../Components/getWindowDimensions";
import ParaSpeciality from "../Components/ParaSpeciality";
import TitleSpeciality from "../Components/TitleSpeciality";
import TitleSpecialityPhone from "../Components/TitleSpecialityPhone";

const Speciality = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Box maxWidth={"lg"} className='mx-auto'>
        {width > 1200 ? (
          <div className='flex'>
            <Box style={{ width: "269%" }}>
              <img
                src={ImagePlaceHolder}
                alt='BigImage'
                className='w-full h-full'
              />
            </Box>
            <div className='pt-28'>
              <TitleSpeciality />
              <ParaSpeciality />
            </div>
          </div>
        ) : (
          <div className='flex flex-col px-5 items-center'>
            <TitleSpecialityPhone />
            <div className='w-96 mb-8'>
              <img
                src={ImagePlaceHolder}
                alt='BigImage'
                className='w-full h-full'
              />
            </div>

            <ParaSpeciality />
          </div>
        )}
      </Box>
    </>
  );
};

export default Speciality;
