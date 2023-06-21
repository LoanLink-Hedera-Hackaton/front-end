import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import successHands from "../../assets/success-hands.svg";

const SuccessPaymentModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button className="verify-button" onClick={onOpen}>
        Verify
      </button>
      <>
        <Modal
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
          size="full"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <div>
                <img
                  src={successHands}
                  alt="validating loan"
                  className="success-img"
                />
              </div>
              <div className="success">
                <p className="large-text">Success</p>
                <p className="small-text">Repayment successful </p>
                <Button onClick={onClose}>Done</Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default SuccessPaymentModal;
