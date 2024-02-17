import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Blog from "./Components/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
