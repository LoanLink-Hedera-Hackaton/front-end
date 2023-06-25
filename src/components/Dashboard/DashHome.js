import React from "react";
import "../../styles/components.css";
import sideProfile from "../../assets/sideUserProfile.svg";
// import { pairHashpack } from "../hashconnect/index";
import up from "../../assets/payable-up.svg";
import down from "../../assets/receivable-down.svg";
import { Link } from "react-router-dom";

const DashHome = () => {
  return (
    <>
      <section className="dashhome-section">
        <div className="dashhome">
          <div className="dashhome-sidebar">
            <div className="inside-sidebar">
              <div className="user-profile">
                <img src={sideProfile} alt="side user profile" />
                <div>
                  <p className="profile-name">Julius</p>
                  <p id="accountId" className="accountId"></p>
                </div>
              </div>
            </div>
            <div className="side-home-links">
              <Link to={"/dashboard/pool"}>Profile</Link>
              <Link>Loans</Link>
              <Link to={"/dashboard/profile"}>Data</Link>
              <Link>Help</Link>
            </div>
          </div>
          {/*2*/}
          <div className="home-body">
            <div className="body-head">
              <div className="head1">
                <div className="head-balance">
                  <p className="balance-text">Wallet Balance</p>
                  <p className="wallet-balance">$30,000</p>
                </div>
                <div className="head-buttons">
                  <button className="add-funds">Add Funds</button>
                  <button className="withdraw-funds">Withdraw funds</button>
                </div>
              </div>
              <div className="head2">
                <div className="recieved">
                  <div className="recieved1">
                    <img src={down} alt="down arrow" />
                    <div>
                      <p className="recieved1-money">$30,000</p>
                      <p className="recieved1-text">Receivable</p>
                    </div>
                  </div>
                  <div className="recieved2">
                    <p className="recieved1-money">$30,000</p>
                    <p className="recieved1-text">aging</p>
                  </div>
                </div>
                <div className="payable">
                  <div className="payable1">
                    <img src={up} alt="down arrow" />
                    <div>
                      <p className="payable2-money">$30,000</p>
                      <p className="payable2-text">Payable</p>
                    </div>
                  </div>
                  <div className="payable2">
                    <p className="payable2-money">$30,000</p>
                    <p className="payable2-text">aging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashHome;
