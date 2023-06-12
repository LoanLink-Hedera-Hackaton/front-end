import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const GlobalLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default GlobalLayout;
