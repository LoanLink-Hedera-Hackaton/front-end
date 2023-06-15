import React from "react";
import DashNav from "../components/Dashboard/DashNav";
import DashSide from "../components/Dashboard/DashSide";
import DashPool from "../components/Dashboard/DashPool";
import DashFooter from "../components/Dashboard/DashFooter";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <DashSide />
      <DashPool />
      <DashFooter />
    </>
  );
};

export default Dashboard;
