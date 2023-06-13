import React from "react";
import LoanLink from "../assets/LoanLink.svg";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../components/utils.css";

const Footer = () => {
  const footerLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "How we work",
      path: "/",
    },
    {
      name: "FAQ",
      path: "/",
    },
    {
      name: "Help",
      path: "/",
    },
  ];

  const renderLinks = footerLinks.map((value, index) => {
    return (
      <ul>
        <li style={{ listStyle: "none" }} className="Flex">
          <Link key={index} to={value.path}>
            {value.name}
          </Link>
        </li>
      </ul>
    );
  });
  return (
    <footer>
      <Flex justifyContent={"space-between"}>
        <div className="footer-logo">
          <img src={LoanLink} alt="LoanLink" />
        </div>
        <Flex gap={"28px"} padding="8px">
          {renderLinks}
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
