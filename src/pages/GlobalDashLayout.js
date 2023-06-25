import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashNav from "../components/DashboardComponents/DashNav";
import Preloader from "../components/Preloader";
import DashSide from "../components/DashboardComponents/DashSide";
// import DashFooter from "../components/DashboardComponents/DashFooter";

const GlobalDashboardLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <DashNav />
          <DashSide />
          <div style={{ height: "80vh" }}>
            <div style={{ height: "100%", overflowY: "scroll" }}>
              <Outlet />
            </div>
          </div>
          {/* <DashFooter /> */}
        </>
      )}
    </>
  );
};

export default GlobalDashboardLayout;
