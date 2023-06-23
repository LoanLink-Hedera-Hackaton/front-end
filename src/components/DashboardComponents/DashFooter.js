import React, { useEffect, useState } from "react";
import copyright from "../../assets/Copyright.svg";
import footerLogo from "../../assets/LoanLink-footer.svg";
import { BsArrowUp } from "react-icons/bs";

const DashFooter = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="dashfooter">
      <div className="inner">
        <img className="copy" src={copyright} alt="Copyright" />
        <p>CopyRight</p>
        <img src={footerLogo} alt="logo" />
      </div>
      <div>
        <button
          className={`footer-up ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <BsArrowUp />
        </button>
      </div>
    </div>
  );
};

export default DashFooter;
