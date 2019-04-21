import React, { Component } from "react";

class Clock extends Component {
  state = {
    hours: "",
    minutes: "",
    seconds: ""
  };
  componentWillMount() {
    this.clock();
    setInterval(this.clock, 1000);
  }
  clock = () => {
    var d = new Date(),
      hours = d.getHours();
    if (hours > 12) hours -= 12;
    this.setState({
      hours: hours.toString().length < 2 ? "0" + hours : hours,
      minutes:
        d.getMinutes().toString().length < 2
          ? "0" + d.getMinutes()
          : d.getMinutes(),
      seconds:
        d.getSeconds().toString().length < 2
          ? "0" + d.getSeconds()
          : d.getSeconds()
    });
  };
  render() {
    return (
      <div>
        {this.state.hours}:{this.state.minutes}:{this.state.seconds}
      </div>
    );
  }
}

export default Clock;
