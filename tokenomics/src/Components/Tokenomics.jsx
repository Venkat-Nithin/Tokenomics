import React from "react";
import "./Tokenomics.css";

function Tokenomics() {
  return (
    <div className="tokenomics-page">
      <header className="tokenomics-header">
        <h1>Tokenomics</h1>
        <p>Understanding the supply, allocation, and distribution of Flamingo Coin.</p>
      </header>
      <main>
        <section className="supply-breakdown">
          <h2>Supply Breakdown</h2>
          <p>Details about the total supply of Flamingo Coin.</p>
        </section>
        <section className="allocation">
          <h2>Allocation</h2>
          <p>Insights into how Flamingo Coin is allocated across various sectors.</p>
        </section>
        <section className="distribution">
          <h2>Distribution</h2>
          <p>Information about the distribution of Flamingo Coin to stakeholders.</p>
        </section>
      </main>
    </div>
  );
}

export default Tokenomics;
