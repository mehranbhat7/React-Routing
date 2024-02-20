import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <h2>My React-Router-Dom</h2>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
