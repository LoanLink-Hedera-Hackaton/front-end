import React, { useState } from "react";
import sidePool from "../../assets/sidePeople.svg";
import sidePoolFill from "../../assets/sidePeopleFill.svg";
import sideSetting from "../../assets/setting.svg";
import { Link } from "react-router-dom";
import HomeVector from "../svgVector/HomeVector";
import CardVector from "../svgVector/CardVector";
import SheetVector from "../svgVector/SheetVector";
import HeadphoneVector from "../svgVector/HeadphoneVector";

const DashSide = () => {
  const [activePage, setActivePage] = useState("");
  const handleActivePage = (page) => {
    setActivePage(page);
    console.log(page);
  };

  return (
    <section className="sidebar">
      <div className="first">
        <div className="icon">
          <Link
            to={"/dashboard"}
            className="icon1"
            onClick={() => handleActivePage("home")}
          >
            <HomeVector
              className="vector"
              fill={activePage === "home" ? "#2774E8" : "#B7BBC0"}
            />
          </Link>
        </div>
        <div className="icon">
          <Link to={"/dashboard/pool"} onClick={() => handleActivePage("pool")}>
            {activePage === "pool" ? (
              <>
                <img src={sidePoolFill} alt="Pool" />
              </>
            ) : (
              <>
                <img src={sidePool} alt="Pool" />
              </>
            )}
          </Link>
        </div>
        <div className="icon">
          <Link
            to={"/dashboard/payment"}
            onClick={() => handleActivePage("payment")}
          >
            <CardVector
              className="vector"
              fill={activePage === "payment" ? "#2774E8" : "#B7BBC0"}
            />
          </Link>
        </div>
        <div className="icon">
          <Link
            to={"/dashboard/profile"}
            onClick={() => handleActivePage("profile")}
          >
            <SheetVector
              className="vector"
              fill={activePage === "profile" ? "#2774E8" : "#B7BBC0"}
            />
          </Link>
        </div>
      </div>

      <div className="second">
        <div className="">
          <Link onClick={() => handleActivePage("customercare")}>
            <HeadphoneVector
              className="vector"
              fill={activePage === "customercare" ? "#2774E8" : "#B7BBC0"}
            />
          </Link>
        </div>
        <div className="second-icon">
          <Link>
            <img src={sideSetting} alt="setting" style={{ color: "#B7BBC0" }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashSide;
