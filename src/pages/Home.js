import React, { useState } from "react";
import people from "../assets/people-center.svg";
import hedera from "../assets/Hedera.svg";
import LoanLink from "../assets/LoanLink.inc.svg";
import Cards from "../components/Cards";
import moneyHand from "../assets/money-hand.svg";
import DirectDeposit from "../assets/direct-deposit.svg";
import PassiveIncome from "../assets/passive-income.svg";
import Secure from "../assets/secured-shield.svg";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";
import Connect from "../components/Connect";
import { pairHashpack } from "../components/hashconnect";

const Home = () => {
  const [paringString, setParingString] = useState("");
  const [status, setStatus] = useState(false);

  const pair = async () => {
    const saveData = await pairHashpack();
    setParingString(saveData.pairingString);
    setStatus(true);
  };
  console.log(paringString);

  return (
    <div>
      <section className="home">
        <div className="home-part1">
          <h1>
            Generate passive income <br /> with the power of web3
          </h1>
          <p>
            Empowering GLobal Connections: Unleash the Power of Web3 <br />{" "}
            Loans to Fuel Startup Success
          </p>
          <Connect fcn={() => pair()} status={status} />
          <div className="powered">
            <span></span>

            <p className="powered-p">Powered by:</p>

            <div style={{ display: "flex", gap: "15px" }}>
              <img src={hedera} alt="Hedera Logo" />

              <img src={LoanLink} alt="loanlink" />
            </div>
          </div>
        </div>
        <div className="home-part2">
          <img src={people} alt="People" />
        </div>
      </section>
      <section className="card-section">
        <Cards
          cardTitle={"516k"}
          cardSubTitle={"pools"}
          cardImg={moneyHand}
          cardText={
            "New pools being constanting been created and funded means there’s a plan for everyone"
          }
        />
        <Cards
          cardTitle={"Direct"}
          cardSubTitle={"deposit"}
          cardImg={DirectDeposit}
          cardText={
            "Receive your loans directly into your USD bank account with the power of our partner APIs"
          }
        />
        <Cards
          cardTitle={"Passive"}
          cardSubTitle={"income"}
          cardImg={PassiveIncome}
          cardText={
            "Interest on the loan you provide to each / any pool is been paid into your wallet transparently."
          }
        />
        <Cards
          cardTitle={"Secure"}
          cardSubTitle={"investments"}
          cardImg={Secure}
          cardText={
            "Proper KYC, KYT and heavily processed colaterization means we have you covered"
          }
        />
      </section>
      <section className="subFooter-section">
        <SubFooter />
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
