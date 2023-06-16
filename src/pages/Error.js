import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  function navHandler() {
    navigate("/dashboard");
  }
  return (
    <>
      <Flex
        direction={"column"}
        alignItems="center"
        justify={"center"}
        marginBottom={"80px"}
      >
        <div>This page does not exits.</div>
        <Button onClick={navHandler}>Back Home</Button>
      </Flex>
    </>
  );
};

export default Error;
