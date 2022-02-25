import { createContext, useState } from "react";

export const userDetailsContext = createContext();

const UserDetailsProvider = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const value = { fname, setFname, lname, setLname, email, setEmail };

  return (
    <userDetailsContext.Provider value={value}>
      {props.children}
    </userDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
