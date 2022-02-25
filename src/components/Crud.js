import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { userDetailsContext } from "../context/UserContext";
import Modal from "./Modal";

const Crud = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="my-4 d-flex justify-content-between">
      <button
        className="btn btn-primary rounded add-user"
        onClick={() => setShowModal(true)}
      >
        Create New User
      </button>
      {showModal && (
        <Modal setShowModal={setShowModal} text="Create New User" />
      )}
    </div>
  );
};

export default Crud;
