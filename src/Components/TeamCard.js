import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamCard = ({
  name,
  image,
  work,
  insta,
  twitter,
  linkedIn,
  object,
  centerLg,
  centerMd,
}) => {
  return (
    <div
      className={` rounded-2xl border-8 w-72 border-black overflow-hidden ${
        centerLg ? "lg:col-span-3" : "lg:col-span-2"
      } ${
        centerMd ? "md:col-span-4 sm:col-span-4" : "md:col-span-2 sm:col-span-2"
      } xs:col-span-1`}
    >
      <div className='h-72 w-72 overflow-hidden'>
        <img
          src={image}
          alt={name}
          className={`object-cover h-full w-full object-${object} hover:scale-110 transition ease-in-out duration-300`}
        />
      </div>

      <div className='bg-indigo-700 flex items-center justify-between p-2 px-4'>
        <div>
          <p className='font-semibold mb-1'>{name}</p>
          <p className='text-sm'>{work}</p>
        </div>
        <div className='child:cursor-pointer'>
          {linkedIn && (
            <a href={linkedIn} target='_blank' rel='noreferrer'>
              <LinkedInIcon />
            </a>
          )}
          {twitter && (
            <a href={twitter} target='_blank' rel='noreferrer'>
              <TwitterIcon className='mr-2' />
            </a>
          )}
          {insta && (
            <a href={insta} target='_blank' rel='noreferrer'>
              <InstagramIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
