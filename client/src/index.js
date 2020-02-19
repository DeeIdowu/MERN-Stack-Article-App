import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
//components:
import Home from "../src/components/Home/Home";
import NavBar from "../src/components/NavBar/NavBar";
import SignIn from "../src/components/Auth/SignIn/SignIn";
import Register from "../src/components/Auth/Register/Register";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
