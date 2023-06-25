import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import Preloader from "./Preloader";

const GlobalLayout = () => {
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
          <Navbar />
          <Outlet />
          <SubFooter />
          <Footer />
        </>
      )}
    </>
  );
};

export default GlobalLayout;
