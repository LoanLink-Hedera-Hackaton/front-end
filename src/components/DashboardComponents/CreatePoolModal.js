import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import "../../styles/components.css";
import peopleIcon from "../../assets/poolIcon.svg";
import createhand from "../../assets/create-hand-coin.svg";
import { BiCloudUpload } from "react-icons/bi";
import {
  // checkContractBalance,
  // contractSigning,
  createPool,
} from "../hashconnect";

export let createGoalAmount;
export let createInterestRate;
const CreatePoolModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [goalAmount, setGoalAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const handleGoal = (event) => {
    setGoalAmount(event.target.value);
  };
  const handleInterest = (event) => {
    setInterestRate(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the input value
    console.log("Goal Amount:", goalAmount);
    createGoalAmount = goalAmount;
    console.log("Interest Rate:", interestRate);
    createInterestRate = interestRate;

    await createPool(createGoalAmount, createInterestRate);
  };
  return (
    <>
      <Button
        onClick={onOpen}
        display={"flex"}
        justifyContent={"space-between"}
        background={"#2774e8"}
        width={"200px"}
        gap={15}
        color={"#fff"}
        _hover={{ bg: "#2774e8" }}
      >
        <div>Create Pool</div>
        <span className="span-line"></span>
        <div>
          <img src={peopleIcon} alt="people icons" />
        </div>
      </Button>

      <Modal
        // isCentered
        onClose={onClose}
        isOpen={isOpen}
        // width={"8006px"}
        motionPreset="slideInBottom"
        size={"3xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <div className="modal-header">
            <p className="header">Create a pool</p>
            <p className="header-text">
              Creating a pool gives you creator control with 0.5% interest added
            </p>
          </div>
          {/* <ModalBody> */}
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="modal-inputs">
                <div className="input-details">
                  <label>Name of pool</label>
                  <input placeholder="$" required />
                </div>

                <div className="input-details">
                  <label>Interest</label>
                  <input
                    placeholder="$"
                    type="number"
                    value={interestRate}
                    onChange={handleInterest}
                    required
                  />
                </div>

                <div className="input-details">
                  <label>Loan Period</label>
                  <input
                    type="number"
                    value={goalAmount}
                    onChange={handleGoal}
                    required
                  />
                </div>

                <div className="input-details">
                  <BiCloudUpload className="cloud" />
                  <label>Add Image</label>
                  <input />
                </div>

                <div className="input-details">
                  <label>Commitment</label>
                  <input placeholder="$" />
                </div>

                <div className="radio-details">
                  <div>
                    <input type="radio" />
                    <label>Colletaral</label>
                  </div>
                  <div>
                    <input type="radio" />
                    <label>No Colletaral</label>
                  </div>
                </div>
              </div>
              <div className="hand-coin">
                <img
                  src={createhand}
                  alt="hand with coins"
                  className="hand-coin-img"
                />
              </div>
            </div>
            {/* </ModalBody> */}
            <div className="modal-btns">
              <button className="modal-cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="modal-create" type="submit">
                Create
              </button>
            </div>
          </form>

          <div className="modal-footer"></div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePoolModal;
