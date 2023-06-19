import { Button } from "@chakra-ui/react";
import React from "react";

const LoanCard = () => {
  return (
    <div className="loan-card-body">
      <div className="body1">
        <div className="amount">
          <p>
            Amount due
            <span>(usd)</span>
          </p>
        </div>
        <div className="bill">
          <p>
            $4800.00
            <span>(Tax included)</span>
          </p>
        </div>
        <div className="outer-due-date">
          <div className="due-date">Due date 22 Jan 2024</div>
        </div>
      </div>
      <div className="body2">
        <Button
          background={"#2774E8"}
          borderRadius={"7px"}
          color={"#ffffff"}
          width={"190px"}
          fontSize={"16px"}
          fontWeight={"800"}
          _hover={{ bg: "4183e6" }}
        >
          View Pool
        </Button>
      </div>
    </div>
  );
};

export default LoanCard;
