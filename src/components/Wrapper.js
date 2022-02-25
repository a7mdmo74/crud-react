import React from "react";
import UserDetailsProvider from "../context/UserContext";
import Crud from "./Crud";
import Lists from "./Lists";

const Wrapper = () => {
  return (
    <div className="container">
      <UserDetailsProvider>
        <Crud />
        <Lists />
      </UserDetailsProvider>
    </div>
  );
};

export default Wrapper;
