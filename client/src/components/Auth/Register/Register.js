import React, { Component } from "react";
import "./register.css";

class Register extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="content">
        <form className="form">
          <h2 style={{ textAlign: "center" }}>Registration Page</h2>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="E-mail" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <input
            type="text"
            placeholder="Enter Password Again"
            name="password2"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
