import React from "react";
import { render } from "@testing-library/react";
import FormInput from "./FormInput.js";

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      email: " ",
      password: " "
    };
  }
  handleChange = event => {
    //change event by destructuring it
    if (event.target.name === "username") {
      this.setState({
        username: event.target.value
      });
    } else if (event.target.name === "email") {
      this.setState({
        email: event.target.value
      });
    } else if (event.target.name === "password") {
      this.setState({
        password: event.target.value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    // these are called controlled components.
    return (
        
      <form onSubmit={this.handleSubmit}>
        <h3>Username</h3>
        <FormInput
          value={this.state.username}
          name="username"
          handleChange={this.handleChange}
        />
        <br></br>

        <h3>Email</h3>
        <FormInput
          value={this.state.email}
          name="email"
          handleChange={this.handleChange}
        />
        <br></br>

        <h3>Password</h3>
        <FormInput
          type="password"
          value={this.state.password}
          name="password"
          handleChange={this.handleChange}
        />
        <br></br>
        <FormInput type="submit" name="submit" value="submit" />
      </form>
    );
  }
}
