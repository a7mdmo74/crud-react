import axios from "axios";
import React, { useContext } from "react";
import { userDetailsContext } from "../context/UserContext";

const Modal = ({ setShowModal, text }) => {
  const userDetails = useContext(userDetailsContext);
  const { fname, setFname, lname, setLname, email, setEmail } = userDetails;
  const pushUser = async () => {
    axios
      .post("http://localhost:5000/users", {
        fname,
        lname,
        email,
      })
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{text}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control py-2"
                required
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control py-2"
                required
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control py-2"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => pushUser()}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
