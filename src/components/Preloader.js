import { CircularProgress } from "@chakra-ui/react";
import React from "react";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress isIndeterminate color="blue.300" />
    </div>
  );
};

export default Preloader;
