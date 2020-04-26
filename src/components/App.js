import React from "react";
import "../styles/App.css";
import Start from "./Start";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Abilities from "./Abilities"
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Start />
      <Navbar />
      <Profile />
      <Experiences />
      <Abilities />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
