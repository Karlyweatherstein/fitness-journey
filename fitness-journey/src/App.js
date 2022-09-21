import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Links from "./components/Links";
import WeightLoss from "./components/WeightLoss";
import WorkWithMe from "./components/WorkWithMe";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/links" element={<Links />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
