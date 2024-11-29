import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Tokenomics</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tokenomics">Tokenomics</Link></li>
        <li><Link to="/safety-measures">Safety Measures</Link></li>
        <li><Link to="/how-to-buy">How to Buy</Link></li>
      </ul>
      <button className="buy-btn">Buy</button>
    </nav>
  );
}

export default Navbar;
