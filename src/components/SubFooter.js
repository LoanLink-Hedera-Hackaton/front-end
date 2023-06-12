import React from "react";
import "../components/utils.css";
import Discord from "../assets/discord.svg";
import Twitter from "../assets/twitter.svg";

const SubFooter = () => {
  return (
    <div className="subFooter">
      <div className="sub1">
        <h1>LoanLink</h1>
        <p>
          Loan link is a defi loan platform where anyone can create a loan pool
          with a fixed <br /> minimum amount and others can join in to provide
          liquidity to that pool, these <br /> funds can be targeted against a
          niche of tech stack or company profile. Once a <br />
          company request fir this loan proper due diligence is done after which
          is loan is <br />
          then disbursed to the receiver as the receiver payback the loan the
          interest is <br /> been divided to all the lenders in the pool.
        </p>
      </div>
      <div className="sub2">
        <div className="speak">Speak to our team</div>
        <div className="socials">
          <img src={Discord} alt="Discord" />
          <img src={Twitter} alt="Twitter" />
        </div>
        <div className="mail">support@loanlink.xyz</div>
      </div>
    </div>
  );
};

export default SubFooter;
