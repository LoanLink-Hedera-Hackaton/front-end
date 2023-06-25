import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillClipboardFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import companyStatement from "../../assets/company-statement.svg";
import founderStatement from "../../assets/founder-statement.svg";
import bankStatement from "../../assets/bank-statement.svg";
import ValidatingLoanModal from "../DashboardComponents/ValidatingLoanModal";
import Preloader from "../Preloader";

const CollateralsDetails = () => {
  const [isTick1, setIsTick1] = useState(true);
  const [isTick2, setIsTick2] = useState(false);
  const [isTick3, setIsTick3] = useState(false);
  const [isTick4, setIsTick4] = useState(false);

  console.log(setIsTick1, setIsTick2, setIsTick3, setIsTick4);
  const [isPoolDone, setIsPoolDone] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="colletaral-details">
            <div className="colletaral-top">
              <h3>Collaterals Details</h3>
              <p>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/pool">
                      Pools
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/pool/request">
                      loan details
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">colletaral</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </p>
            </div>

            <div className="colletaral-content">
              <div className="content-body">
                <div className="contents">
                  <input
                    placeholder="Enter Hedera account ID"
                    className="content-inputs"
                  />
                  <BsFillClipboardFill />
                  <p className="content-text">
                    <span className={isTick1 ? "tick1" : "tick"}>
                      <IoIosCheckmarkCircleOutline />
                    </span>
                    You are required to provide a wallet that has processed at
                    least $500 worth recurrent payment in last 6 months.
                  </p>
                </div>

                <div className="contents">
                  <input placeholder="0112244344" className="content-inputs1" />
                  <BsFillClipboardFill />
                  <p className="content-text">
                    <span className={isTick2 ? "tick1" : "tick"}>
                      <IoIosCheckmarkCircleOutline />
                    </span>
                    As part of your verification you have to send a verification
                    fee of $1 to this address from the address you pasted above
                    within 120 seconds
                  </p>
                </div>

                <div className="contents">
                  <input placeholder="CAC Number" className="content-inputs" />
                  <BsFillClipboardFill />
                  <p className="content-text">
                    <span className={isTick3 ? "tick1" : "tick"}>
                      <IoIosCheckmarkCircleOutline />
                    </span>
                    You are required to provide a wallet that has processed at
                    least $500 worth recurrent payment in last 6 months.
                  </p>
                </div>

                <div className="contents">
                  <input
                    placeholder="Founder’s BVN"
                    className="content-inputs"
                  />
                  <BsFillClipboardFill />
                  <p className="content-text">
                    <span className={isTick4 ? "tick1" : "tick"}>
                      <IoIosCheckmarkCircleOutline />
                    </span>
                    You are required to provide a wallet that has processed at
                    least $500 worth recurrent payment in last 6 months.
                  </p>
                </div>
              </div>
            </div>
            <div className="statements">
              <div className="inner-statements">
                <span className="tick-statement">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <img src={companyStatement} alt="companyStatement" />
                <p>Company Bank Statement</p>
              </div>

              <div className="inner-statements">
                <span className="tick-statement">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <img src={founderStatement} alt="companyStatement" />
                <p>Founders Bank Statement</p>
              </div>

              <div className="inner-statements">
                <span className="tick-statement">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <img src={bankStatement} alt="companyStatement" />
                <p>Founders Bank Statement</p>
              </div>
            </div>
            <div className="verify-btns">
              <button className="cancel">Cancel</button>
              <ValidatingLoanModal />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CollateralsDetails;
