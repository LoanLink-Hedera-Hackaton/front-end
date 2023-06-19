import {
  Button,
  ButtonGroup,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PoolCard from "../DashboardComponents/PoolCard";
import {
  BsFillGridFill,
  BsFillCalendarFill,
  BsChevronCompactDown,
} from "react-icons/bs";
import FarmTech from "../../assets/FarmTech.svg";
import AI from "../../assets/AI-Fashion.svg";
import Renewable from "../../assets/Renewable.svg";
import Solar from "../../assets/solar.svg";
import Sundry from "../../assets/Sundry.svg";
import realEstate from "../../assets/realEstate.svg";
import { BiListUl } from "react-icons/bi";
import "react-calendar/dist/Calendar.css";

const DashPool = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section>
        <div className="dashpool">
          <div className="poolTitle">
            <h1>Pools</h1>
          </div>
          <div className="pools">
            <div className="poolTabs">
              <Tabs variant="soft-rounded" size="sm">
                <TabList className="tabs">
                  <Tab className="tab">All Projects</Tab>
                  <Tab className="tab">Green Energy Projects</Tab>
                  <Tab className="tab" isDisabled>
                    SDG Projects
                  </Tab>
                  <Tab className="tab" isDisabled>
                    All Tabs
                  </Tab>
                </TabList>

                <TabPanels width={"1220px"} height={"100vh"}>
                  <TabPanel className="panels card-flex">
                    {" "}
                    {/**panels */}
                    <PoolCard
                      cardId={1}
                      poolImg={FarmTech}
                      companyName={"Farming Tech"}
                      progress={22}
                      loan={"25,000"}
                      time={12}
                      Interest={50}
                      status={"funding in-Progress"}
                      funders={5}
                    />
                    <PoolCard
                      cardId={2}
                      poolImg={AI}
                      companyName={"AI powered Fashion selector"}
                      progress={50}
                      loan={"30,000"}
                      time={12}
                      Interest={50}
                      status={"funding in-Progress"}
                      funders={70}
                    />
                    <PoolCard
                      cardId={3}
                      poolImg={Renewable}
                      companyName={"Renewable Energy projects for Households "}
                      progress={100}
                      loan={"35,000"}
                      time={12}
                      Interest={50}
                      status={"funding Completed"}
                      funders={400}
                    />
                    <PoolCard
                      cardId={4}
                      poolImg={Solar}
                      companyName={"Solar Energy Projects"}
                      progress={100}
                      loan={"40,000"}
                      time={12}
                      Interest={50}
                      status={"funding Completed"}
                      funders={300}
                    />
                    <PoolCard
                      cardId={5}
                      poolImg={Sundry}
                      companyName={"Sundry Foods Limited Series"}
                      progress={100}
                      loan={"45,000"}
                      time={12}
                      Interest={50}
                      status={"funding Completed"}
                      funders={366}
                    />
                    <PoolCard
                      cardId={6}
                      poolImg={realEstate}
                      companyName={"Verified real Estate"}
                      progress={100}
                      loan={"50,000"}
                      time={12}
                      Interest={50}
                      status={"funding Completed"}
                      funders={201}
                    />
                    <PoolCard
                      cardId={6}
                      poolImg={realEstate}
                      companyName={"Verified real Estate"}
                      progress={100}
                      loan={"50,000"}
                      time={12}
                      Interest={50}
                      status={"funding Completed"}
                      funders={201}
                    />
                    <PoolCard
                      cardId={6}
                      poolImg={realEstate}
                      companyName={"Verified real Estate"}
                      progress={100}
                      loan={"50,000"}
                      time={12}
                      Interest={50}
                      status={"funding Completed"}
                      funders={201}
                    />
                    <PoolCard
                      cardId={6}
                      poolImg={realEstate}
                      companyName={"Verified real Estate"}
                      progress={100}
                      loan={"50,000"}
                      time={12}
                      Interest={50}
                      status={"funding Completed"}
                      funders={201}
                    />
                  </TabPanel>

                  <TabPanel>
                    <p>Stay Tuned!!...</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Stay Tuned!!...</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>

            <div className="poolGLC">
              <div>
                <ButtonGroup size="sm" isAttached variant="outline">
                  <Button gap={4} className="GLbtn">
                    {" "}
                    <BsFillGridFill className="bb" /> Grid
                  </Button>
                  <Button gap={4} className="GLbtn">
                    <BiListUl className="bb" /> List{" "}
                  </Button>
                </ButtonGroup>
              </div>

              <div className={`accordion ${isOpen ? "open" : ""}`}>
                <button onClick={toggleCalendar} className="calendarBtn">
                  <BsFillCalendarFill className="bb" /> Date Posted{" "}
                  <BsChevronCompactDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashPool;
