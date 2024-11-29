import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Tokenomics from "./Components/Tokenomics";
import SafetyMeasures from "./Components/SafetyMeasures";
import HowToBuy from "./Components/HowToBuy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/safety-measures" element={<SafetyMeasures />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
      </Routes>
    </Router>
  );
}

export default App;
