import React from "react";

const BgSpaceMain = () => {
  return (
    <>
      <div className='full-bg-space'>
        <canvas id='canvas'></canvas>
        <button
          id='mouse-control-control'
          data-on='UI: On'
          data-off='UI: Off'
        ></button>
      </div>
    </>
  );
};

export default BgSpaceMain;
