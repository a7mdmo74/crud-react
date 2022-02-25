import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          React CRUD App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
