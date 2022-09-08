import React, { useState } from "react";
import "./index.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ButtonStory = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(true);
    setTimeout(() => {
      navigate("/story");
    }, 200);
  };

  return (
    <div className='story-wrapper'>
      <motion.a
        data-title='Read Our Story!'
        className='story-btn cursor-pointer'
        onClick={() => handleNav()}
        whileTap={{
          scale: 0.75,
          transition: { type: "spring", stiffness: "300" },
        }}
        animate={
          open && {
            zIndex: 1000,
            scale: 30,
            opacity: 0,
            transition: {
              type: "Linear",
              delay: 0.1,
              duration: 0.5,
            },
          }
        }
      >
        Read Our Story!
      </motion.a>
    </div>
  );
};

export default ButtonStory;
