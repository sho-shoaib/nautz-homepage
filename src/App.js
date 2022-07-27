import PagesCombined from "./PagesCombined";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Noasis from "./noasis/Noasis";
import { useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);
  const playSound = () => {
    setPlaying(true);
  };

  const pauseSound = () => {
    setPlaying(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<PagesCombined playSound={playSound} />}
        ></Route>
        <Route
          path='/8f0f6134-de3d-4414-97f3-2f99beecc209'
          element={<Noasis playing={playing} pauseSound={pauseSound} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
