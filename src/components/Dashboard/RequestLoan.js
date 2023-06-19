import React from "react";
import "../../styles/components.css";
import reqpoolImg from "../../assets/reqPoolImg.png";
import Cent from "../../assets/LoanAmount.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Progress,
} from "@chakra-ui/react";
import members from "../../assets/members.svg";
import time from "../../assets/reqTime.svg";
import dropCoins from "../../assets/dropCoins.svg";
import flag from "../../assets/reportFlag.svg";
import { Link } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";

const RequestLoan = () => {
  return (
    <section className="request-loan">
      <div className="loan-details">
        <h1>Loan Details</h1>
        <p>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/pool">Pools</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">loan details</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          /
        </p>
      </div>
      <div className="container">
        <div className="con-1">
          <div className="requestImage">
            <img src={reqpoolImg} alt="request" />
            {/**1 */}
          </div>
          <div className="requestWords">
            <h1>Renewable Energy projects for Households</h1>
            {/**2 */}
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia,molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentiumoptio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatisobcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquamnihil, eveniet
              aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur
              error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdamrecusandae alias error harum maxime
              adipisci amet laborum.
            </p>

            <div className="create">
              <span>created: </span>
              <p style={{ color: "#000" }}>on May 12, 2024</p>
            </div>

            <div className="empty"></div>
          </div>
        </div>
        <div className="con-2">
          <div className="inside-con">
            <div className="money">
              <img src={Cent} alt="cent" />
              <h3>50,000</h3> <span>loan pool</span>
            </div>
            <div>
              <Progress
                className="reqBar"
                value={80}
                size="xs"
                height="4px"
                colorScheme="blue"
                borderRadius={"20px"}
                width={"280px"}
              />
            </div>
            {/**3 */}
            <div className="middle">
              <div className="middle-1">
                <img src={members} alt="members" />
                <p>50 members own this pool</p>
              </div>
              <div className="middle-1">
                <img src={time} alt="Time in months" />
                <p>You are required to repay in 3 months</p>
              </div>
              <div className="middle-1">
                <img src={dropCoins} alt="interest rate" />
                <p>20% interest rate</p>
              </div>
            </div>
            <div className="middle-2">
              <Link to={"/dashboard/pool/collateral"}>
                <Button>Request loan</Button>
              </Link>
            </div>
            <div className="report">
              <img src={flag} alt="flag" />
              <p>Report this pool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestLoan;
