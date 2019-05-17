import React, { Component } from "react";
//props: time{hours,minutes,seconds}
class Clock extends Component {
  render() {
    return (
      <div className="clock">
        {this.props.time.hours}:{this.props.time.minutes}:{this.props.time.seconds}
      </div>
    );
  }
}

export default Clock;
