import {
  Button,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "../../styles/components.css";
import addFundsImg from "../../assets/addFunds.svg";
import loansize from "../../assets/loansize.svg";

const AddFunds = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Fund Pool</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <div className="addfunds-header">
            <h1 className="add-header">Add funds to this pool</h1>
            <p className="add-header-text">
              Funds added to this pool will generate interest based on the total
              number of funders and the percentage of funds you provided
            </p>
          </div>
          <ModalBody>
            <div className="addfunds-img">
              <img src={addFundsImg} alt="add funds" className="addfunds-img" />
            </div>
            <Progress
              className="progressBar"
              value={30}
              size="xs"
              height="4px"
              colorScheme="blue"
              borderRadius={"20px"}
              width={"280px"}
            />
            <div className="add-body">
              <div className="add-inside1">
                <p>Date Range:</p>
                <InputGroup>
                  <input className="input1" placeholder="Current Month" />
                  <input className="input2" placeholder="DD/MM - DD/MM" />
                </InputGroup>
              </div>
              <div className="add-inside2">
                <p>Loan Size:</p>
                <InputGroup gap={5}>
                  <input placeholder="$" />
                  <img src={loansize} alt="dollars" className="loansize" />
                  <input placeholder="Total" />
                </InputGroup>
              </div>
              <div className="stand">
                <p className="stand-text1">You stand to make</p>
                <p>$50</p>
                <p className="stand-text2">Worth of HUSDC on interest</p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"40px"}
          >
            <Button
              borderRadius={"5px"}
              border={"0.5px solid rgba(68, 82, 102, 0.51)"}
              background={"rgba(217, 217, 217, 0.00)"}
              width={"155px"}
              height={"26px"}
              padding={"20px"}
            >
              Back
            </Button>
            <Button
              background={"#2774E8"}
              onClick={onClose}
              width={"155px"}
              height={"26px"}
              padding={"20px"}
              color={"#ffffff"}
              _hover={{ bg: "#2774E8" }}
            >
              Add funds
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddFunds;
