import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../pages/SignIn";
import SignIn from "../pages/SignUp";
import UserList from "../pages/UserList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignUp} />
        <Route path="/users" component={UserList} />
      </Fragment>
    );
  }
}

export default App;
