import Firstname from "./components/Firstname";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      person: {
        firstName: "Hanim",
        lastName: "Kapusuz",
        age: 25
      },
      visible: true
    };
  }
  firstNameHandler() {
    this.setState({
      ...this.state,
      person: { ...this.state.person, firstName: "David" }
    });
  }
  ageHandler() {
    this.setState({
      ...this.state,
      person: { ...this.state.person, age: 38 }
    });
  }
  toggle() {
    this.setState({
      ...this.state,
      visible: !this.state.visible
    });
  }
  render() {
    return (
      <div>
        {this.state.visible && <Firstname person={this.state.person} />}
        <button onClick={this.firstNameHandler}>set firstName to David</button>
        <button onClick={this.ageHandler}>set age to 38</button>
        <button onClick={this.toggle}>toggle component visibility</button>
      </div>
    );
  }
}
