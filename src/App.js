import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";

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
      <AnimatedRoutes
        playSound={playSound}
        pauseSound={pauseSound}
        playing={playing}
      />
    </BrowserRouter>
  );
}

export default App;
