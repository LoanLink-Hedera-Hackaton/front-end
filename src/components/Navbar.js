import React, { useEffect, useRef, useState } from "react";
import LoanLink from "../assets/LoanLink.svg";

import "../styles/utils.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  console.log(isMenuOpen);
  useEffect(() => {
    // Add event listener to handle click outside of the menu but it's not working
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "How we work",
      path: "/work",
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

  const renderLinks = navLinks.map((value, index) => {
    return (
      <ul>
        <li style={{ listStyle: "none" }}>
          <Link key={index} to={value.path} className="link">
            {value.name}
          </Link>
        </li>
      </ul>
    );
  });

  return (
    <>
      <header>
        <div>
          <h1>
            {" "}
            <Link to={"/"}>
              <img className="logo" src={LoanLink} alt="LoanLink" />
            </Link>
          </h1>
        </div>

        <nav className={`VStack ${isMenuOpen ? "open" : ""}`}>
          {renderLinks}
          <input placeholder="Search" />
          <BiSearch className="searchIcon" />
        </nav>
      </header>

      {isMenuOpen ? (
        <>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" menu-close"
          >
            <FaTimes />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-open"
          >
            <FaBars />
          </button>
        </>
      )}
    </>
  );
};

export default Navbar;
