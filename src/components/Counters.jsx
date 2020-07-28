import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;
