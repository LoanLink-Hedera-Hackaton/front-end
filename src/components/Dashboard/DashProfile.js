// import React from "react";
// import "../../styles/components.css";
// import { Input } from "@chakra-ui/react";
// import total from "../../assets/total.svg";
// import point1 from "../../assets/point1.svg";
// import point2 from "../../assets/point2.svg";
// import point3 from "../../assets/point3.svg";

// const DashCalc = () => {
//   return (
//     <section className="dashcalc">
//       <div className="calculator">
//         <div className="cal1">
//           <h1 className="calchead">Loan Calculator</h1>
//           <div className="calcWords">
//             <p className="calcText">
//               The calculated amount is approximate . The exact amount of loan is
//               determine by individual
//             </p>
//           </div>
//           <div className="calcInputs">
//             <div>
//               <label>How much loan do you need?</label>
//               <Input />
//             </div>
//             <div>
//               <label>In how many months?</label>
//               <Input />
//             </div>
//           </div>
//           <div className="repayment">
//             <div className="inside-repay">
//               <h1 className="repayText">Repayment</h1>
//               <h1 className="cash">$302.18</h1>
//               <p>Monthly</p>
//             </div>
//           </div>
//         </div>
//         <div className="cal2">
//           <div className="total">
//             <img src={total} alt="total" />
//             <div className="inside-total">
//               <p className="totalText">In Total</p>
//               <p className="totalCash">$3,624.216</p>
//             </div>
//           </div>
//           <div className="points">
//             {""}
//             <div className="inner-points">
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <img src={point1} alt="point1" />
//                 <p>Permanent</p>
//               </div>
//               <div>$25,000</div>
//             </div>
//             {""}
//             <div className="inner-points">
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <img src={point2} alt="point1" />
//                 <p>Permanent</p>
//               </div>
//               <div>$25,000</div>
//             </div>
//             {""}
//             <div className="inner-points">
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <img src={point3} alt="point1" />
//                 <p>Permanent</p>
//               </div>
//               <div>$25,000</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DashCalc;

import React, { useState } from "react";
import poolBox from "../../assets/poolBox.svg";
import loanBox from "../../assets/loanBox.svg";
import DashProfilePools from "../DashboardComponents/DashProfilePools";
import DashLoanProfile from "../DashboardComponents/DashLoanProfile";

const DashProfile = () => {
  const [isPool, setIsPool] = useState(true);
  const [isLoan, setIsLoan] = useState(true);
  return (
    <section className="dashprofile">
      <div className="your-pools-txt">
        <h1>Your Pools</h1>
      </div>

      <div className="allYourPools">
        {isPool ? (
          <div className="yourPools">
            <div>
              <DashProfilePools />
            </div>
            <div>
              <DashProfilePools />
            </div>
            <div>
              <DashProfilePools />
            </div>
            <div>
              <DashProfilePools />
            </div>
          </div>
        ) : (
          <div className="poolBox">
            <img src={poolBox} alt="poolBox" />
            <p className="box-txt">
              Pools you created or join will appear here
            </p>
          </div>
        )}
      </div>
      <span className="divider"></span>
      <div>
        {isLoan ? (
          <div>
            <DashLoanProfile />
          </div>
        ) : (
          <div className="loanBox">
            <img src={loanBox} alt="loan box" />
            <p className="box-txt">Your Loans will appear here</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashProfile;
