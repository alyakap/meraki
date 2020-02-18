import React, { Component } from "react";

export default class Firstname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>{this.props.person.name}</h1>;
  }
}
