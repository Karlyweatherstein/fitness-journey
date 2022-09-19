import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
