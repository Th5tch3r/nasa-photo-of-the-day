import React from "react";
import "./App.css";

import Welcome from "./components/Welcome.js";
import PhotoCard from "./components/PhotoCard"



function App() {
  return (
    <div className="App">
      < Welcome />
      <p className="rocket"> 🚀</p>
      < PhotoCard />
    </div>
  );
}

export default App;
