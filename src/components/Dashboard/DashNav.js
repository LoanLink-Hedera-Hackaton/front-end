import React, { useState } from "react";
import LoanLink from "../../assets/LoanLink.svg";
import { AiOutlineSearch } from "react-icons/ai";
import "../../styles/dashboard.css";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import Connect from "../Connect";
import { pairHashpack } from "./../hashconnect/index";
import peopleIcon from "../../assets/poolIcon.svg";
import docs from "../../assets/docAccount.svg";
import circle from "../../assets/Ellipse.svg";

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
          <h1>
            <img src={LoanLink} alt="LoanLink Logo" />
          </h1>
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
              <div>
                <div className="poolBtn">
                  <Button
                    display={"flex"}
                    justifyContent={"space-between"}
                    background={"#2774e8"}
                    width={"200px"}
                    gap={15}
                    color={"#fff"}
                    _hover={{ bg: "#2774e8" }}
                  >
                    <div>Create Pool</div>
                    <span></span>
                    <div>
                      <img src={peopleIcon} alt="people icons" />
                    </div>
                  </Button>
                </div>
                <div className="accountDetails">
                  <p id="accountId"></p>
                  <img src={docs} alt="docs" />
                  <p>connected</p>
                  <img src={circle} alt="circle" />
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
