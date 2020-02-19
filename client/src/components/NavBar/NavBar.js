import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li className="list">
        <NavLink className="links" to="/">
          Home
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="links" to="/search">
          Search
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="links" to="/signin">
          Sign In
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="links" to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
