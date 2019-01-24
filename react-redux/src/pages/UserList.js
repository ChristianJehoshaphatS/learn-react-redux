import React, { Component, Fragment } from "react";
import Axios from "axios";

class UserList extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const users = await Axios.get("http:localhost:8000/users");

    this.setState({ users });
  }

  SignOut = e => {
    console.log("Signed Out");
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
        <button onClick={this.SignOut}>Sign Out</button>
      </Fragment>
    );
  }
}

export default UserList;
