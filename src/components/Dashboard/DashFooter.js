import React from "react";
import copyright from "../../assets/Copyright.svg";
import footerLogo from "../../assets/LoanLink-footer.svg";

const DashFooter = () => {
  return (
    <footer>
      <div className="dashfooter">
        <div className="inner">
          <img className="copy" src={copyright} alt="Copyright" />
          <p>CopyRight</p>
          <img src={footerLogo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default DashFooter;
