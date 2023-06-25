import React, { useEffect, useState } from "react";
import "../../styles/components.css";

const DashPayment = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <section className="dashpayment">
        <div> Dashboard payments</div>
      </section>
    </>
  );
};

export default DashPayment;
