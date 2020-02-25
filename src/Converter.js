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
    if(event.target.name === 'username'){
        this.setState({
            username: event.target.value
        });
    }
    else if(event.target.name === 'email'){
        this.setState({
            email: event.target.value
        });
    }
    else if(event.target.name === 'password'){
        this.setState({
            password: event.target.value
        });
    }
}

  render() {
    // these are called controlled components.
    return (
      <div>
        <FormInput value={this.state.username} name="username" handleChange={this.handleChange} />

        <FormInput value={this.state.email} name="email" handleChange={this.handleChange} />

        <FormInput value={this.state.password} name="password" handleChange={this.handleChange} />

        <FormInput type="submit" name="submit" onsubmit={console.log(this.state)} />
      </div>
    );
  }
}
