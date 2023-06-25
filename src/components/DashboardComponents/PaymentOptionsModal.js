import React, { useRef } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Bank from "../../assets/Bank.svg";
import Hedera from "../../assets/HederaRepay.svg";
import RepaymentHand from "../../assets/repayment-hand.svg";
import { openHashpack } from "../hashconnect";
// import SuccessPaymentModal from "./SuccessPaymentModal";

const PaymentOptionsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const inputRef = useRef();
  const inputRef2 = useRef();
  const copyText = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };
  const copyText2 = () => {
    if (inputRef2.current) {
      inputRef2.current.select();
      document.execCommand("copy");
    }
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://loanlink-backend.onrender.com/api/charge"
      );

      const response = await data.json();
      // console.log(response);
      const redirectLink = response.meta.authorization.redirect;
      console.log(redirectLink);
      window.open(redirectLink, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="payment-options">
        <div className="repay">
          <Button onClick={onOpen}>
            <img src={Bank} alt="Bank" />
            <p>Repay with Bank</p>
          </Button>
        </div>
        <div className="repay">
          <Button onClick={openHashpack}>
            <img src={Hedera} alt="Hedera" />
            <p>Repay with Hedera</p>
          </Button>
        </div>
      </div>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            Bank Card Repayments
          </ModalHeader>
          <ModalBody>
            <div className="repaymentHand">
              <img
                className="repaymentHandImg"
                src={RepaymentHand}
                alt="repayment hand"
              />
            </div>
            <div className="outer-transfer">
              <div className="transfer" style={{ marginTop: "-40px" }}>
                <div className="options">
                  <label>Card Number</label>
                  <input placeholder="Enter Card Number" ref={inputRef} />
                </div>
              </div>
              <div className="transfer">
                <div className="options">
                  <label>Year</label>
                  <input placeholder="Enter Card month" ref={inputRef2} />
                </div>
              </div>

              <div className="transfer">
                <div className="options">
                  <label>CVV</label>
                  <input placeholder="Enter card CVV" ref={inputRef2} />
                </div>
              </div>
              <div className="verify">
                {/* <SuccessPaymentModal /> */}
                <button className="verify-button" onClick={fetchData}>
                  Pay
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentOptionsModal;
