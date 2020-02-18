import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "David",
      lastName: "Verhulst"
    };
  }
  handleInput = str => e => {
    const newState = {
      ...this.state
    };
    newState[str] = e.target.value;
    this.setState(newState);
  };

  render() {
    const obj = {
      value: this.state.lastName,
      onChange: this.handleInput("lastName")
    };
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.handleInput("firstName")}
          placeholder="first name"
        />
        <input type="text" {...obj} placeholder="last name" />
      </form>
    );
  }
}

export default Form;
