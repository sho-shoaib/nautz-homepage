import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";

const Keyword = ({ children, desc }) => {
  const [hovering, setHovering] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Popover
        id='mouse-over-popover'
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div
          className='p-3 z-100 purple-grad text-white font-medium text-justify '
          style={{ maxWidth: "200px" }}
        >
          {desc}
        </div>
      </Popover>
      <span
        className={`text-sp ${
          hovering && "text-hover"
        } transition-all duration-300 cursor-pointer`}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup='true'
        onMouseOver={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {children}
      </span>
    </>
  );
};

export default Keyword;
