import React, { useState } from "react";

const GridCard = ({ img, label, bg }) => {
  const [hoverCard, setHoverCard] = useState(false);

  return (
    <div
      className={`bg-black rounded-lg bg-cover overflow-hidden relative`}
      onMouseOver={() => setHoverCard(true)}
      onMouseOut={() => setHoverCard(false)}
    >
      <img
        src={bg}
        alt='background-img'
        className={`w-full h-full transition duration-500 object-cover opacity-75 ${
          hoverCard ? "scale-105" : "scale-100"
        }`}
      />
      <div className='w-full h-full'>
        <img
          src={img}
          alt={label}
          className='object-cover h-full w-full hover:scale-110 transition ease-in-out duration-300 lg:hover:-translate-y-4  hover:shadow-2xl shadow-white absolute top-0'
        />
      </div>
    </div>
  );
};

export default GridCard;
