import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="logo-container">
          {/* Updated logo placement */}
          <img
            src="/images/flamingo-logo.jpg" // Updated to use the relative path
            alt="Flamingo Logo"
            className="flamingo-logo"
          />
        </div>
        <h1>Welcome to Flamingo Coin</h1>
        <p>Your gateway to the world of decentralized finance.</p>
      </header>
      <main>
        <section className="introduction">
          <h2>Introduction</h2>
          <p>
            Flamingo Coin is your trusted companion in the journey toward financial freedom.
          </p>
        </section>
        <section className="lore">
          <h2>Lore</h2>
          <p>Discover the story behind Flamingo Coin and its exciting journey to success.</p>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
