import {
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ValidatingLoan from "../../assets/validatingLoan.svg";
import successHands from "../../assets/success-hands.svg";

const ValidatingLoanModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isValidated, setIsValidated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  console.log(setIsValidated, setIsVerified);
  return (
    <>
      <button className="verify-btn" onClick={onOpen}>
        Verify
      </button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div>
              <img src={ValidatingLoan} alt="validating loan" />
            </div>
            <div>
              {isValidated ? (
                <div className="validating">
                  <Spinner size="md" color="#4396F7" />
                  <p>Validating Loan details</p>
                </div>
              ) : (
                <div>
                  <InputGroup
                    display={"flex"}
                    flexDir={"column"}
                    marginTop={"-10px"}
                  >
                    <label className="label">Enter your account number</label>
                    <Input placeholder="1122335544" width={"200px"} />
                  </InputGroup>
                  <div className="outer-getBtn">
                    <button className="get-loan" onClick={isOpen}>
                      Get Loan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {isVerified && (
        <>
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            onClose={onClose}
            size="xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                <div>
                  <img src={successHands} alt="validating loan" />
                </div>
                <div className="success">
                  <p className="large-text">Success</p>
                  <p className="small-text">Loan dispersed successfully </p>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default ValidatingLoanModal;
