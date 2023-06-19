import React from "react";
import { Progress } from "@chakra-ui/react";
import LoanAmt from "../../assets/LoanAmount.svg";
import Timeline from "../../assets/Timeline.svg";
import interestImg from "../../assets/Interest.svg";
import peopleIcon from "../../assets/people-icon.svg";
import { Link } from "react-router-dom";

const PoolCard = ({
  poolImg,
  companyName,
  progress,
  loan,
  time,
  Interest,
  status,
  funders,
}) => {
  return (
    <section>
      <div className="pool-card">
        <div className="pool-card-img">
          <img src={poolImg} alt="pool" /> {/*1 */}
          <div className="status">
            <div className="status1">
              <p>{status}</p>
            </div>
            <div className="status2">
              {" "}
              <img src={peopleIcon} alt="people icon" />
              <p className="funders">{funders}</p>
            </div>
          </div>
        </div>
        <div className="pool-card-body">
          <div className="pool-card-head">
            <div className="inside-head">
              <div>
                <h2>{companyName}</h2>
                {/*2 */}
              </div>
              <div>
                <Link to={"/dashboard/pool/request"}>
                  <button>
                    <p>Request Loan</p>
                  </button>
                </Link>
              </div>
            </div>
            <div className="out-progress">
              <Progress
                className="progressBar"
                value={progress}
                size="xs"
                height="4px"
                colorScheme="blue"
                borderRadius={"20px"}
                width={"280px"}
              />
              {/*progress */}
            </div>
          </div>

          <div className="pool-card-footer">
            <div className="foot">
              <div className="foot1">
                <img src={LoanAmt} alt="loan" />
                <p>Loan Amount</p>
              </div>
              <p className="foot2">${loan}</p>
              {/*4 */}
            </div>
            <div className="foot">
              <div className="foot1">
                <img src={Timeline} alt="time clock" />
                <p>Timeline</p>
              </div>
              <p className="foot2">{time} months</p>
              {/*5 */}
            </div>
            <div className="foot">
              <div className="foot1">
                <img src={interestImg} alt="interest" />
                <p>Interest</p>
              </div>
              <p className="foot2">${Interest}</p>
              {/*6 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolCard;
