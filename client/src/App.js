import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scenes/home";
import About from "./scenes/about";
import Project from "./scenes/project";
import Resume from "./scenes/resume";
import Navbar from "./components/Navbar";
import ProfileImage from "./images/ProfileImage.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-xl-start vh-80 mx-lg-5 my-lg-4 bg-cream">
          <div className="me-sm-5 d-flex">
            <img
              className="d-none d-xl-block"
              src={ProfileImage}
              alt="Profile"
            />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
