import React, { Component } from "react";

class Clock extends Component {
  render() {
    return (
      <div>
        {this.props.hours}:{this.props.minutes}:{this.props.seconds}
      </div>
    );
  }
}

export default Clock;
