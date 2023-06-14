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

const Connect = ({ fcn, status }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              {status ? (
                ""
              ) : (
                <>
                  {" "}
                  <Button>Connect wallet</Button>
                </>
              )}
            </div>
            <div
              className="part"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Button onClick={() => fcn()} className="connect-btn">
                {status ? "Connected" : "Connect to Hashconnect"}
              </Button>
            </div>
            <div className="modal-text">
              <Link>New to web3?</Link>
            </div>
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
