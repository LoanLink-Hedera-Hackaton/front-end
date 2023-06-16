import React, { useState } from "react";
import LoanLink from "../../assets/LoanLink.svg";
import { AiOutlineSearch } from "react-icons/ai";
import "../../styles/dashboard.css";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import Connect from "../Connect";
import { pairHashpack } from "../hashconnect/index";
import peopleIcon from "../../assets/poolIcon.svg";
import docs from "../../assets/docAccount.svg";
import circle from "../../assets/Ellipse.svg";
import Bell from "../../assets/Bell.svg";
import Setting from "../../assets/setting.svg";
import Profile from "../../assets/profile.svg";
import CreatePool from "./CreatePool";
import { Link } from "react-router-dom";

const DashNav = () => {
  const [paringString, setParingString] = useState("");
  const [status, setStatus] = useState(false);

  const pair = async () => {
    const saveData = await pairHashpack();
    setParingString(saveData.pairingString);
    setStatus(true);
  };

  console.log(paringString);

  return (
    <>
      <header className="dash-nav">
        <div className="dashlogo">
          <Link to={"/"}>
            <img src={LoanLink} alt="LoanLink Logo" />
          </Link>
        </div>
        <div className="">
          <InputGroup>
            <InputLeftElement pointerEvents="none" padding={"15px"}>
              <AiOutlineSearch color="gray.300" />
            </InputLeftElement>
            <Input
              width="345px"
              height="45px"
              borderRadius={"50px"}
              background={"rgba(36, 51, 74, 0.08)"}
              outline={"none"}
              border={"none"}
              placeholder="Search campaigns, pools, sectors"
            />
          </InputGroup>
        </div>

        <div className="side ">
          {status ? (
            <>
              <div className="isConnected">
                <div>
                  <div className="poolBtn">
                    <CreatePool />
                  </div>
                  <div className="accountDetails">
                    <p id="accountId"></p>
                    <img src={docs} alt="docs" />
                    <p>connected</p>
                    <img src={circle} alt="circle" />
                  </div>
                </div>

                <div>
                  <img src={Bell} alt="Bell" />
                </div>
                <div>
                  <img src={Setting} alt="Setting" />
                </div>
                <div>
                  <img src={Profile} alt="Profile" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <Connect fcn={() => pair()} status={status} />
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default DashNav;
