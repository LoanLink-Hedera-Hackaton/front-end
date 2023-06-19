import {
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
                <p className="small-text">Repayment successful </p>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default SuccessPaymentModal;
