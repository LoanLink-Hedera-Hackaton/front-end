import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import "../styles/utils.css";
import { Link } from "react-router-dom";
import HashpackImg from "../assets/HashPack.svg";

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
                <img src={HashpackImg} alt="Hashpack" />
              </Button>
            </div>

            <div className="modal-text">
              <p>
                New to Hedera? click here to get{" "}
                <Link
                  to={
                    "https://chrome.google.com/webstore/detail/hashpack/gjagmgiddbbciopjhllkdnddhcglnemk"
                  }
                  target="_blank"
                  className="newLink"
                >
                  Hashpack extension
                </Link>{" "}
                on your browser
              </p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Connect;
