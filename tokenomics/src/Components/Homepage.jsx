import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="logo-container">
          <img
            src="/images/flamingo-logo.jpg" 
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
        {/* New Course Curriculum Section */}
        <section className="course-curriculum">
          <h2>Course Curriculum</h2>
          <div className="course-list">
            <div className="course-item">
              <h3>Introduction to Tokenomics</h3>
              <p>Learn the basics of token economics and how digital currencies function in decentralized finance.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="course-item">
              <h3>Advanced Cryptocurrency Concepts</h3>
              <p>Dive deep into blockchain technology, consensus algorithms, and more advanced topics in crypto.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="course-item">
              <h3>Decentralized Finance (DeFi)</h3>
              <p>Explore DeFi platforms, liquidity pools, and yield farming in the world of decentralized finance.</p>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
  <p>&copy; 2024 Flamingo Coin. All rights reserved.</p>
  <p>
    <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
  </p>
</footer>
    </div>
  );
}

export default Homepage;