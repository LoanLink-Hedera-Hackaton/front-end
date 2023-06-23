import React, { useState } from "react";
import { Divider } from "@chakra-ui/react";
import poolPin from "../../assets/poolPin.svg";
import poolCoin from "../../assets/poolCoin.svg";
import poolHand from "../../assets/poolHand.svg";
import poolCylinder from "../../assets/poolCylinder.svg";

const DashProfilePools = () => {
  const [isActiveTag, setIsActiveTag] = useState(true);
  console.log(setIsActiveTag);
  return (
    <div className="profile-pool">
      <div className="pool-header">
        <h2>Pool 5</h2>
        <p>Contract ID</p>
      </div>
      <Divider />
      <div className="pool-body">
        <div className="inside-body">
          <p className="insideText">Contract ID</p>
          {isActiveTag ? (
            <p className="active-tag">Active</p>
          ) : (
            <p className="not-active-tag">Disabled</p>
          )}
        </div>
        <div className="inside-body">
          <p className="insideText">Requiring Payment</p>
          <p className="insideText">1 Month</p>
        </div>
        <div className="inside-body">
          <p className="date">Date</p>
          <p className="insideText">2 Feb 2023</p>
        </div>
      </div>
      <Divider />
      <div className="pool-footer">
        <div className="inside-footer">
          <img src={poolPin} alt="pool pin" />
          <p>Electricity</p>
        </div>
        <div className="inside-footer">
          <div>
            <img src={poolCoin} alt="pool pin" />
          </div>
          <div style={{ marginTop: "5px" }}>
            <p>$2000</p>
          </div>
        </div>
        <div className="inside-footer">
          <img src={poolHand} alt="pool pin" />
          <p>$5 Interest</p>
        </div>
        <div className="inside-footer">
          <img src={poolCylinder} alt="pool pin" />
          <p>Requiring Payment</p>
        </div>
      </div>
    </div>
  );
};

export default DashProfilePools;
