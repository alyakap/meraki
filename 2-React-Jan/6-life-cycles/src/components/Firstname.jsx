import React, { Component } from "react";

export default class Firstname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Firstname Constructor");
  }
  componentDidMount() {
    console.log("Firstname componentDidMount");
  }
  render() {
    console.log("Firstname Render");
    return <h1>{this.props.person.name}</h1>;
  }
}
