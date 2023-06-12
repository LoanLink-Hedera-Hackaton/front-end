import React from "react";
import LoanLink from "../assets/LoanLink.svg";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import "../components/utils.css";
import { Link } from "react-router-dom";
// import MetaMask from "../assets/metamask-logo.svg";
import Hedera from "../assets/Hedera2.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "How we work",
      path: "/",
    },
    {
      name: "FAQ",
      path: "/",
    },
    {
      name: "Help",
      path: "/",
    },
  ];

  const renderLinks = navLinks.map((value, index) => {
    return (
      <ul>
        <li style={{ listStyle: "none" }}>
          <Link key={index} to={value.path}>
            {value.name}
          </Link>
        </li>
      </ul>
    );
  });

  return (
    <>
      <header>
        <div>
          <img className="logo" src={LoanLink} alt="LoanLink" />
        </div>

        <Flex
          justify="center"
          width="100%"
          padding="8px"
          alignItems="flex-start"
          gap="48px"
        >
          {renderLinks}
        </Flex>

        <div>
          <button className="navBtn" onClick={onOpen}>
            Get started
          </button>
        </div>
      </header>
      {/* Modal section with chakraUI */}
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <div className="connect">
              <Button>Connect Wallet</Button>
            </div>
            <div className="part">
              <Button>
                Connect with metamask
                {/* <MetaMask /> It keeps showing an error when put the image  */}
              </Button>
            </div>
            <div className="modal-text">New to web3?</div>
            <div className="part hedera">
              <div>
                <img src={Hedera} alt="hedera" />
              </div>
              <p>
                We will create a hedera wallet for you and guide through
                metamask setup
              </p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
