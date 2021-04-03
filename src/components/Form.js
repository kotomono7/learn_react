import React, { Component } from 'react';

let hint = "Write your name here";

class Form extends Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(this.state.value);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input id="name" type="text" placeholder={hint} onChange={(event) => this.handleInputChange(event) } />
        <input type="Submit" />
      </form>
    );
  }
}

export default Form;
