import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <h1>
            <span className="badge badge-primary">{this.props.counters}</span>
          </h1>
        </a>
      </nav>
    );
  }
}

export default Navbar;
