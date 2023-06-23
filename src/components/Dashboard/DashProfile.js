import React, { useState } from "react";
import poolBox from "../../assets/poolBox.svg";
import loanBox from "../../assets/loanBox.svg";
import DashProfilePools from "../DashboardComponents/DashProfilePools";
import DashLoanProfile from "../DashboardComponents/DashLoanProfile";
import { Divider } from "@chakra-ui/react";
// import DashFooter from "../DashboardComponents/DashFooter";

const DashProfile = () => {
  const [isPool, setIsPool] = useState(true);
  const [isLoan, setIsLoan] = useState(true);
  console.log(setIsPool, setIsLoan);
  return (
    <>
      <section className="dashprofile">
        <div className="your-pools-txt">
          <h1>Your Pools</h1>
        </div>

        <div className="allYourPools">
          {isPool ? (
            <div className="yourPools">
              <div>
                <DashProfilePools />
              </div>
              <div>
                <DashProfilePools />
              </div>
              <div>
                <DashProfilePools />
              </div>
              <div>
                <DashProfilePools />
              </div>
            </div>
          ) : (
            <div className="poolBox">
              <img src={poolBox} alt="poolBox" />
              <p className="box-txt">
                Pools you created or join will appear here
              </p>
            </div>
          )}
        </div>
        {/* <span className="divider"></span> */}
        <Divider color={"rgba(221, 188, 17, 0.47)"} />
        <div className="all-loans">
          {isLoan ? (
            <div className="your-loans">
              <div className="loan-header">
                <h2>Loans</h2>
              </div>
              <div>
                <DashLoanProfile />
              </div>
            </div>
          ) : (
            <div className="loanBox">
              <img src={loanBox} alt="loan box" />
              <p className="box-txt">Your Loans will appear here</p>
            </div>
          )}
        </div>
      </section>
      {/* <DashFooter /> */}
    </>
  );
};

export default DashProfile;
