import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li className="list">
        <NavLink className="links" to="/">
          <a style={{ textDecoration: "none", color: "#fff" }}>Home</a>
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="links" to="/search">
          <a style={{ textDecoration: "none", color: "#fff" }}>Search</a>
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="links" to="/signin">
          <a style={{ textDecoration: "none", color: "#fff" }}>Sign In</a>
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="links" to="/register">
          <a style={{ textDecoration: "none", color: "#fff" }}> Register</a>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
