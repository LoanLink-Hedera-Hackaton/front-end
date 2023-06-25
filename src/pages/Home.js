import React from "react";
import people from "../assets/people-center.svg";
import hedera from "../assets/Hedera.svg";
import LoanLink from "../assets/LoanLink.inc.svg";
import Cards from "../components/Cards";
import moneyHand from "../assets/money-hand.svg";
import DirectDeposit from "../assets/direct-deposit.svg";
import PassiveIncome from "../assets/passive-income.svg";
import Secure from "../assets/secured-shield.svg";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-part1">
          <h1>Unlock Your Financial Potential with LoanLink.</h1>
          <p>Seamless lending solutions for diverse collateral types</p>
          <div className="get-started">
            <Button
              borderRadius={"7px"}
              background={"#2774e8"}
              color={"#ffffff"}
              _hover={{
                bg: "#4278c9",
              }}
            >
              <Link to={"/dashboard/profile"}>Get Started</Link>
            </Button>
          </div>
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
          cardTitle={"Pool of Funds"}
          // cardSubTitle={"pools"}
          cardImg={moneyHand}
          cardText={
            "Contribute to our community fund and empower others. Create a pool of funds where users can contribute and borrow from to meet their financial needs."
          }
        />
        <Cards
          cardTitle={"Transparent Valuation"}
          // cardSubTitle={"deposit"}
          cardImg={DirectDeposit}
          cardText={
            "Trustworthy valuation methods ensure accurate assessment of your collateral's worth. Our integration with oracles and third-party services ensures transparency and accuracy."
          }
        />
        <Cards
          cardTitle={"Secure Collateral Locking"}
          // cardSubTitle={"income"}
          cardImg={PassiveIncome}
          cardText={
            "Rest easy knowing your collateral is locked in a smart contract, providing assurance to lenders and ensuring the safety of your assets."
          }
        />
        <Cards
          cardTitle={"Safe Loan-to-Value Ratios"}
          // cardSubTitle={"investments"}
          cardImg={Secure}
          cardText={
            "Our responsible lending approach sets maximum loan amounts based on the valuation of your collateral, ensuring a safe borrowing experience."
          }
        />
      </section>
    </div>
  );
};

export default Home;
