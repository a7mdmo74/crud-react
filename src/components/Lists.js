import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userDetailsContext } from "../context/UserContext";
import Modal from "./Modal";

const Lists = () => {
  const [showModal, setShowModal] = useState(false);
  const userDetails = useContext(userDetailsContext);
  const { setFname, setLname, setEmail } = userDetails;
  const [users, setUsers] = useState([]);
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  const editUser = (id) => {
    setShowModal(true);
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setFname(res.data.fname);
        setLname(res.data.lname);
        setEmail(res.data.email);
      })
      .catch((error) => console.log(error));
    axios.delete(`http://localhost:5000/users/${id}`);
  };
  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/users");
    // console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      {users.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const { id, fname, lname, email } = user;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{email}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => editUser(id)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => deleteUser(id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showModal && <Modal setShowModal={setShowModal} text="Edit User" />}
        </>
      ) : (
        <h1 className="text-primary text-center mt-5">No Users</h1>
      )}
    </>
  );
};

export default Lists;
