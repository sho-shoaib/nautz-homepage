import React, { useState } from "react";
import astro1 from "../assets/compress/astro-1.png";
import astro2 from "../assets/compress/astro-2.png";
import astro3 from "../assets/compress/astro-3.png";
import astro4 from "../assets/compress/astro-4.png";
import astro5 from "../assets/compress/astro-5.png";
import astro6 from "../assets/compress/astro-6.png";
import astroBg1 from "../assets/compress/astro-bg-1.jpg";
import astroBg2 from "../assets/compress/astro-bg-2.jpg";
import astroBg3 from "../assets/compress/astro-bg-3.jpg";
import astroBg4 from "../assets/compress/astro-bg-4.jpg";
import astroBg5 from "../assets/compress/astro-bg-5.jpg";
import astroBg6 from "../assets/compress/astro-bg-6.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import GridCard from "./GridCard";

const images = [
  {
    img: astro1,
    label: "astro-1",
    bg: astroBg1,
  },
  {
    img: astro2,
    label: "astro-2",
    bg: astroBg2,
  },
  {
    img: astro3,
    label: "astro-3",
    bg: astroBg3,
  },
  {
    img: astro4,
    label: "astro-4",
    bg: astroBg4,
  },
  {
    img: astro5,
    label: "astro-5",
    bg: astroBg5,
  },
  {
    img: astro6,
    label: "astro-6",
    bg: astroBg6,
  },
];

const GridAbout = () => {
  const [ref, inView] = useInView();
  const animation = useAnimation();
  const [hoverCard, setHoverCard] = useState(false);

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
    <motion.div
      className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:-mx-3 select-none lg:gap-10 md:gap-8 xs:gap-5 lg:p-20 md:p-10 xs:p-5 mt-8'
      ref={ref}
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={animation}
    >
      {images.map((item, i) => {
        const { img, label, bg } = item;
        return <GridCard key={i} img={img} label={label} bg={bg} />;
      })}
    </motion.div>
  );
};

export default GridAbout;
