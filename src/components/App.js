import React from "react";
import "../styles/App.css";
import Start from "./Start";
import Profile from "./Profile";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Start />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
