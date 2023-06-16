import React from "react";
import copyright from "../../assets/Copyright.svg";
import footerLogo from "../../assets/LoanLink-footer.svg";
import { BsArrowUp } from "react-icons/bs";

const DashFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className="dashfooter">
        <div className="inner">
          <img className="copy" src={copyright} alt="Copyright" />
          <p>CopyRight</p>
          <img src={footerLogo} alt="logo" />
        </div>
        <div>
          <button className="footer-up" onClick={scrollToTop}>
            <BsArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default DashFooter;
