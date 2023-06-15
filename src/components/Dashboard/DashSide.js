import React from "react";
import sideHouse from "../../assets/sideHouse.svg";
import sidePool from "../../assets/sidePool.svg";
import sideCard from "../../assets/sideCard.svg";
import sideSheet from "../../assets/sideSheet.svg";
import sideHeadphone from "../../assets/sideHeadphone.svg";
import sideSetting from "../../assets/setting.svg";
import { Link } from "react-router-dom";

const DashSide = () => {
  return (
    <section className="sidebar">
      <div className="first">
        <div className="icon">
          <Link>
            <img style={{ marginTop: "9rem" }} src={sideHouse} alt="House" />
          </Link>
        </div>
        <div className="icon">
          <Link>
            <img src={sidePool} alt="Pool" />
          </Link>
        </div>
        <div className="icon">
          <Link>
            <img src={sideCard} alt="card" />
          </Link>
        </div>
        <div className="icon">
          <Link>
            <img src={sideSheet} alt="Sheet of paper" />
          </Link>
        </div>
      </div>

      <div className="second">
        <div className="icon">
          <Link>
            <img src={sideHeadphone} alt="Headphones" />
          </Link>
        </div>
        <div className="icon">
          <Link>
            <img src={sideSetting} alt="setting" style={{ color: "#B7BBC0" }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashSide;
