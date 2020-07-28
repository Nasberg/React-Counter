import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        <div className="row my-3 mx-3">
          <div className="col-1">
            <h3>
              <span className="badge badge-primary">
                {this.props.counter.value}
              </span>
            </h3>
          </div>
          <div className="col-1">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              -
            </button>
          </div>
          <div className="col-4">
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              Radera
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
