import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamCard = ({ name, image, work, insta, twitter, linkedIn }) => {
  return (
    <div className=' rounded-xl border-8 w-72 justify-self-center border-indigo-200'>
      <img src={image} alt={name} className='object-cover h-72 w-72' />
      <div className='bg-indigo-700 flex items-center justify-between p-2 px-4'>
        <div>
          <p className='font-semibold mb-1'>{name}</p>
          <p>{work}</p>
        </div>
        <div className='child:cursor-pointer'>
          {linkedIn ? (
            <a href={linkedIn} target='_blank' rel='noreferrer'>
              <LinkedInIcon />
            </a>
          ) : (
            <>
              <a href={twitter} target='_blank' rel='noreferrer'>
                <TwitterIcon className='mr-2' />
              </a>

              <a href={insta} target='_blank' rel='noreferrer'>
                <InstagramIcon />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
