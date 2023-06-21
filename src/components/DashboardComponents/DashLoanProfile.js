import React from "react";
import LoanCard from "./LoanCard";

import PaymentOptionsModal from "./PaymentOptionsModal";

const DashLoanProfile = () => {
  return (
    <div className="loan-profile">
      <div className="loan-body">
        <div className="loan-card">
          <LoanCard />
        </div>
        <div>
          <PaymentOptionsModal />
        </div>
      </div>
    </div>
  );
};

export default DashLoanProfile;
