import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SubFooter from "./SubFooter";
import Footer from "./Footer";

const GlobalLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SubFooter />
      <Footer />
    </>
  );
};

export default GlobalLayout;
