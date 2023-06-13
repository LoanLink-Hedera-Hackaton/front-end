import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Hedera from "../assets/Hedera2.svg";
import "../components/utils.css";
import { Link } from "react-router-dom";

const Connect = ({ connectMsg, fcn, status, linkPath }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(status);
  return (
    <>
      <div className="connectBtn">
        <button className="navBtn" onClick={onOpen}>
          {status ? "Connected" : "Connect Wallet"}
        </button>
      </div>

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
              <Button>
                <Link to={linkPath} target="_blank">
                  {status ? "Connected" : "Connect Wallet"}
                </Link>
              </Button>
            </div>
            <div className="part">
              <Button onClick={fcn}>
                <Link>
                  {connectMsg.slice(0, 7)}...
                  {connectMsg.slice(connectMsg.length - 5)}
                </Link>
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

export default Connect;
