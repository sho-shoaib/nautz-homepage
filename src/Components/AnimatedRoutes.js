import React from "react";
import PagesCombined from "../PagesCombined";
import { Route, Routes, useLocation } from "react-router-dom";
import Noasis from "../noasis/Noasis";
import StoryLegacy from "../Pages/StoryLegacy";
import StoryStars from "../Pages/StoryStartsWars";
import { useEffect } from "react";
import { useState } from "react";

const AnimatedRoutes = ({ playSound, playing, pauseSound }) => {
  const location = useLocation();
  const [useStarts, setUseStarts] = useState(true);

  useEffect(() => {
    console.log(navigator.userAgent);
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      setUseStarts(false);
    } else {
      setUseStarts(true);
    }
  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<PagesCombined playSound={playSound} />}></Route>
      <Route
        path='/8f0f6134-de3d-4414-97f3-2f99beecc209'
        element={<Noasis playing={playing} pauseSound={pauseSound} />}
      ></Route>
      <Route
        path='/story'
        element={useStarts ? <StoryStars /> : <StoryLegacy />}
      ></Route>
    </Routes>
  );
};

export default AnimatedRoutes;
