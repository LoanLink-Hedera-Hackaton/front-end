import React, { useState } from "react";
import sidePool from "../../assets/sidePeople.svg";
import sidePoolFill from "../../assets/sidePeopleFill.svg";
import sideSetting from "../../assets/dash-setting.svg";
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
    <section className="sidebar-section">
      <div className="sidebar">
        <div className="first">
          <div className="icon">
            <Link
              onClick={() => handleActivePage("home")}
              className={`link ${activePage === "home" ? "active-text" : ""}`}
            >
              <HomeVector
                className="vector"
                fill={activePage === "home" ? "#2774E8" : "#B7BBC0"}
              />{" "}
              Home
            </Link>
          </div>
          <div className="icon">
            <Link
              to={"/dashboard/pool"}
              className={`link ${activePage === "pool" ? "active-text" : ""}`}
              onClick={() => handleActivePage("pool")}
            >
              {activePage === "pool" ? (
                <>
                  <img src={sidePoolFill} alt="Pool" /> Pools
                </>
              ) : (
                <>
                  <img src={sidePool} alt="Pool" /> Pools
                </>
              )}
            </Link>
          </div>
          <div className="icon">
            <Link
              className={`link ${
                activePage === "payment" ? "active-text" : ""
              }`}
              onClick={() => handleActivePage("payment")}
            >
              <CardVector
                className="vector"
                fill={activePage === "payment" ? "#2774E8" : "#B7BBC0"}
              />{" "}
              Loans
            </Link>
          </div>
          <div className="icon">
            <Link
              to={"/dashboard/profile"}
              className={`link ${
                activePage === "profile" ? "active-text" : ""
              }`}
              onClick={() => handleActivePage("profile")}
            >
              <SheetVector
                className="vector"
                fill={activePage === "profile" ? "#2774E8" : "#B7BBC0"}
              />{" "}
              Data
            </Link>
          </div>
          <div className="icon">
            <Link
              className={`link ${
                activePage === "customercare" ? "active-text" : ""
              }`}
              onClick={() => handleActivePage("customercare")}
            >
              <HeadphoneVector
                className="vector"
                fill={activePage === "customercare" ? "#2774E8" : "#B7BBC0"}
              />
              Help
            </Link>{" "}
          </div>
        </div>

        <div className="second-icon">
          <Link>
            <img src={sideSetting} alt="setting" style={{ color: "#B7BBC0" }} />
          </Link>
        </div>

        {/* <div className="second">
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
              <img
                src={sideSetting}
                alt="setting"
                style={{ color: "#B7BBC0" }}
              />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DashSide;
