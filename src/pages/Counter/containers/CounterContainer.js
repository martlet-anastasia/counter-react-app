import React, { Component } from "react";
import PropTypes from "prop-types";

import { CounterView } from "../components/CounterView/index.js";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
      parityType: "even",
    };
  }

  calculateParityType = (countValue) => {
    return countValue % 2 === 0 ? "even" : "odd";
  };

  handleIncrement = () => {
    this.setState((state) => {
      return {
        countValue: state.countValue + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      return {
        countValue: state.countValue > 1 ? state.countValue - 1 : 0,
      };
    });
  };

  handleReset = () => {
    this.setState({ countValue: 0, parityType: "even" });
  };

  componentDidUpdate(_, prevState) {
    if (this.state.countValue !== prevState.countValue) {
      const parityType = this.calculateParityType(this.state.countValue);

      this.setState({ parityType });
    }
  }

  render() {
    return (
      <CounterView
        countValue={this.state.countValue}
        parityType={this.state.parityType}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
      />
    );
  }
}

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityType: PropTypes.string.isRequired,
};

export default CounterComponent;
