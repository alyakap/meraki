import React, { Component } from "react";

export default class Firstname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1) constructor => COMPONENT IS INSTANTIATED");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      "2) getDerivedStateFromProps => WHERE WE UPDATE OUR LOCAL STATE BASED ON CHANGED PROPS"
    );
    return state;
  }
  componentDidMount() {
    console.log(
      "4) componentDidMount => WHERE WE CAN ACCESS ELEMENTS ADDED TO DOM, WHERE WE CAN START API-CALLS"
    );
  }
  componentWillUnmount() {
    console.log(
      "componentWillUnmount => JUST BEFORE REMOVING FROM DOM, TO CLEANUP LISTENERS, TIMERS"
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate => WHERE WE CAN DECIDE TO RE-RENDER OR NOT BASED ON NEXTPROPS/NEXTSTATE"
    );
    const shouldRerender =
      nextProps.person.firstName !== this.props.person.firstName;
    if (shouldRerender) {
      console.log(
        "   ---> component has to rerender because firstName changed"
      );
    } else {
      console.log(
        "   ---> component will NOT rerender because firstName still equal"
      );
    }
    return shouldRerender;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate => CALLED AFTER RENDER WITH ABILITY TO DO CALCULATION BASED ON PREVIOUS PROPS/STATE, WHAT IS RETURNED CAN BE CALLED IN COMPONENTDIDUPDATE"
    );
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate => CALLED AFTER GETSNAPSHOTBEFOREUPDATE WITH ACCESS TO RETURNED VALUE FROM GETSNAPSHOTBEFOREUPDATE"
    );
  }
  render() {
    console.log("3) render => WHERE ACTUAL ADDING ELEMENTS TO DOM HAPPENS");
    return <h1>{this.props.person.firstName}</h1>;
  }
}
