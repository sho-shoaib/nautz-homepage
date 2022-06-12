import { Box } from "@mui/material";
import React from "react";
import ImagePlaceHolder from "../assets/compress/naut-6NoBg_1.png";
import useWindowDimensions from "../Components/getWindowDimensions";
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
              <p className='text-lg'>
                Your NFT is special because no one else owns them. Owning Nautz
                means it's fully yours no one in the space has rights on it!
                Each Nautz NFT is specially hand-made and programmatically
                generated so each one is 100% different. 5000 Nautz have been
                made from 200,000 possibilities. All Nautz are stored as
                ERC-721A tokens on the Ethereum Blockchain. Owning one Nautz
                will primarily give you access to 20-40% discount at NAUTZ
                PRODUCTION HOUSE, special clubs, free entries to all NAUTZ
                sponsored events that will take place worldwide. Secondarily you
                will be eligible for giveaways only for our NAUTZ holders.
              </p>
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

            <p className='text-lg sm:w-10/12'>
              Your NFT is special because no one else owns them. Owning Nautz
              means it's fully yours no one in the space has rights on it! Each
              Nautz NFT is specially hand-made and programmatically generated so
              each one is 100% different. 5000 Nautz have been made from 200,000
              possibilities. All Nautz are stored as ERC-721A tokens on the
              Ethereum Blockchain. Owning one Nautz will primarily give you
              access to 20-40% discount at NAUTZ PRODUCTION HOUSE, special
              clubs, free entries to all NAUTZ sponsored events that will take
              place worldwide. Secondarily you will be eligible for giveaways
              only for our NAUTZ holders.
            </p>
          </div>
        )}
      </Box>
    </>
  );
};

export default Speciality;
