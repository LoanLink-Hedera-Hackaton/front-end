import React from "react";
import { Outlet } from "react-router-dom";
import DashNav from "../components/DashboardComponents/DashNav";
import DashSide from "../components/DashboardComponents/DashSide";
import DashFooter from "../components/DashboardComponents/DashFooter";

const GlobalDashboardLayout = () => {
  return (
    <>
      <DashNav />
      <DashSide />
      <Outlet />
      <DashFooter />
    </>
  );
};

export default GlobalDashboardLayout;
