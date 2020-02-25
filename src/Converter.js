import React from "react";
import { render } from "@testing-library/react";
import FormInput from './FormInput.js'

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      email: " ",
      password: " "
    };
  }
  handleChange = (event) => { //change event by destructuring it 
    console.log(this.state);
  };

  render() {
    // these are called controlled components.
    return (
      <div>
        <FormInput value={this.state.username} name="username"  />

        <FormInput value={this.state.email} name="km"  />

        <FormInput value={this.state.password} name="password"  />

        <FormInput type="submit" name="submit" handleChange={this.handleChange} />
      </div>
    );
  }
}
