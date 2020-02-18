import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 555
    };
  }
  addHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  minHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addHandler}>+</button>
        <button onClick={this.minHandler}>-</button>
      </>
    );
  }
}

export default CounterClass;
