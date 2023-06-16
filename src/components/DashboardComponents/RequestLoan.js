import React from "react";
import "../../styles/components.css";
import reqpoolImg from "../../assets/reqPoolImg.png";
import Cent from "../../assets/LoanAmount.svg";
import { Button, Progress } from "@chakra-ui/react";
import members from "../../assets/members.svg";
import time from "../../assets/reqTime.svg";
import flag from "../../assets/reportFlag.svg";

const RequestLoan = () => {
  return (
    <section className="request-loan">
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
              <div className="money1">
                <img src={Cent} alt="cent" />
                <h3>50,000</h3>
              </div>
              <p>of $20,000,00 loan pool</p>
            </div>
            <Progress
              className="reqBar"
              value={40}
              size="xs"
              height="4px"
              colorScheme="blue"
              borderRadius={"20px"}
              width={"280px"}
            />
            {/**3 */}
            <div className="middle">
              <div className="middle-1">
                <div className="mid">
                  <img src={members} alt="members" />
                  <p>50 members</p>
                  {/**4 */}
                </div>

                <div className="mid">
                  <img src={time} alt="members" />
                  <p>5 months</p>
                  {/**5 */}
                </div>
              </div>
            </div>
            <div className="middle-2">
              <Button
                _hover={{
                  bg: "linear-gradient(221.79deg, #105dd2 50.88%, #2774e8 30.66%)",
                }}
              >
                Fund pool
              </Button>
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
