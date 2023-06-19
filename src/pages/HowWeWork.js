import React from "react";
import "../styles/utils.css";
import coinHand1 from "../assets/coin-hand1.svg";
import coinHand2 from "../assets/coin-hand2.svg";
import coinHand3 from "../assets/coin-hand3.svg";
import coinHand4 from "../assets/coin-hand4.svg";

const HowWeWork = () => {
  return (
    <div>
      <div className="how-header">
        <h1>How does LoanLink work?</h1>
      </div>
      <div className="procedures">
        <div className="step step1">
          <img src={coinHand1} alt="first hand coin" />
          <p className="step-text">
            Select the collateral type and add your assets to the LoanLink
            platform securely.
          </p>
          <p className="step-number">1</p>
        </div>

        <div className="step step2">
          <p className="step-number">2</p>
          <img src={coinHand2} alt="second hand coin" />
          <p className="step-text">
            Based on the valuation of your collateral, receive personalized loan
            offers tailored to your needs.
          </p>
        </div>

        <div className="step step3">
          <p className="step-text">
            Once you choose a loan offer, your collateral is locked in a smart
            contract, and funds are made available to you.
          </p>
          <img src={coinHand3} alt="three hand coin" />
          <p className="step-number">3</p>
        </div>

        <div className="step step4">
          <p className="step-number">4</p>
          <img src={coinHand4} alt="first hand coin" />
          <p className="step-text">
            Easily manage your loan through our intuitive interface, track
            repayments, and adjust collateral if needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
