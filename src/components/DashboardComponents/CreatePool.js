import {
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import peopleIcon from "../../assets/poolIcon.svg";
import inputImg from "../../assets/inputImg.svg";
const CreatePool = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
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
        <span></span>
        <div>
          <img src={peopleIcon} alt="people icons" />
        </div>
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        // width={"36px"}
        // motionPreset="slideInBottom"
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a pool</ModalHeader>
          <ModalBody>
            <p className="step">Step 1/1 | pool details</p>
            <p className="upload">Upload profile picture of the pool</p>
            <InputGroup marginBottom={"30px"}>
              <input type="file" onChange={handleImageUpload} />
              {/* <img src={inputImg} type="file" alt="input" /> */}
            </InputGroup>

            <InputGroup
              display={"flex"}
              flexDirection={"column"}
              marginBottom={"20px"}
            >
              <label>Name of the pool</label>
              <Input />
            </InputGroup>

            <InputGroup
              display={"flex"}
              flexDirection={"column"}
              marginBottom={"20px"}
            >
              <label>Description of the pool</label>
              <Input />
            </InputGroup>

            <InputGroup
              display={"flex"}
              flexDirection={"column"}
              marginBottom={"20px"}
            >
              <label>Minimum amount to be funded</label>
              <Input type="number" value={`$${25000} `} />
            </InputGroup>
          </ModalBody>

          <ModalFooter gap={7}>
            <Button
              // variant="ghost"
              borderRadius={"20px"}
              color={"#445266"}
              onClick={onClose}
            >
              Cancel{" "}
            </Button>
            <Button
              colorScheme="#1751F0;"
              //   mr={3}
              borderRadius={"20px"}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePool;
