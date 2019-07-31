import React from "react";
import "./App.css";

import Welcome from "./components/Welcome.js";
import PhotoCard from "./components/PhotoCard.js"



function App() {
  return (
    <div className="App">
      < Welcome />
      <p className="rocket"> <span role="img">🚀</span></p>
      < PhotoCard />
    </div>
  );
}

export default App;
